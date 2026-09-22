/**
 * Post-build pre-render — snapshot Puppeteer.
 *
 * Avvia `vite preview` sulla dist appena buildata, apre ogni route con un
 * browser reale, lascia girare React (che via SEO.tsx / StructuredData.tsx
 * inietta meta tag + JSON-LD corretti per pagina), poi serializza il DOM e
 * scrive HTML statico per ogni route.
 *
 * I crawler senza JS (Bing, anteprima LinkedIn, GPTBot, PerplexityBot, ecc.)
 * ricevono così contenuto reale invece di <div id="root"></div> vuoto.
 * Al primo load in browser React fa createRoot su #root non vuoto e ri-renderizza
 * client-side: nessun mismatch di hydration perché non usiamo hydrateRoot.
 *
 * Usage: node scripts/prerender-pages.mjs  (auto-eseguito da `npm run build`)
 */

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '../dist');
const PORT = 4179;
const ORIGIN = `http://localhost:${PORT}`;

// Route da prerenderare. '/' sovrascrive dist/index.html; le altre creano
// dist/<route>/index.html (Vercel le serve via i rewrite in vercel.json).
const ROUTES = [
  '/',
  '/portfolio/store-cucine',
  '/portfolio/wave-murano-glass',
  '/portfolio/il-fanale-group',
  '/portfolio/atelier-alessandra',
  '/privacy-policy',
];

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* server non ancora su */
    }
    await wait(300);
  }
  throw new Error(`vite preview non raggiungibile su ${url} entro ${timeoutMs}ms`);
}

async function main() {
  // 1. Static server sulla dist
  const server = spawn(
    'npx',
    ['vite', 'preview', '--port', String(PORT), '--strictPort'],
    { cwd: path.join(__dirname, '..'), stdio: 'ignore' },
  );

  const cleanup = () => {
    if (!server.killed) server.kill();
  };
  process.on('exit', cleanup);
  process.on('SIGINT', () => { cleanup(); process.exit(1); });

  try {
    await waitForServer(ORIGIN);

    // 2. Browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // 3. Cattura tutte le route in memoria (non scrivere mentre il server serve
    //    la stessa cartella, o le richieste successive prenderebbero il file
    //    parziale invece del fallback SPA).
    const snapshots = [];
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`${ORIGIN}${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
      // Aspetta che React abbia montato e gli effect (meta/schema) siano girati.
      await page.waitForFunction(
        () => document.querySelector('#root')?.childElementCount > 0,
        { timeout: 15000 },
      );
      await wait(1200); // settle: animazioni hero + iniezione tag in <head>
      const html = '<!DOCTYPE html>\n' + (await page.content()).replace(/^<!DOCTYPE html>\s*/i, '');
      snapshots.push({ route, html });
      await page.close();
      console.log(`✅ Snapshot: ${route}`);
    }

    await browser.close();

    // 4. Scrivi i file
    for (const { route, html } of snapshots) {
      const outPath =
        route === '/'
          ? path.join(DIST, 'index.html')
          : path.join(DIST, route, 'index.html');
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, 'utf-8');
    }

    console.log(`\n🚀 Pre-render completato: ${snapshots.length} pagine`);
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  // Non bloccare il deploy: se Puppeteer non riesce a girare in questo
  // ambiente (es. lib di sistema mancanti su Vercel), la dist da `vite
  // build` è già valida e funzionante client-side — meglio spedirla senza
  // prerender che non spedire nulla.
  console.error('⚠️  Pre-render saltato (build prosegue senza):', err.message || err);
});
