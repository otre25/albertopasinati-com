/**
 * Post-build pre-render script
 * Genera file HTML statici per ogni pagina progetto con meta tag corretti.
 * Vercel serve questi file direttamente per i bot (Facebook, LinkedIn, WhatsApp,
 * GPTBot, PerplexityBot) che non eseguono JavaScript.
 *
 * Usage: node scripts/prerender-pages.mjs (auto-eseguito da npm run build)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '../dist');
const SITE_URL = 'https://albertopasinati.com';

// Dati progetti — speculari a data/projects.ts
const projects = [
  {
    slug: 'store-cucine',
    title: 'Store Cucine — Caso Studio Marketing | Alberto Pasinati',
    description: 'Caso studio: Marketing Manager per Store Cucine — 20 negozi, €500K+/anno di budget, lead generation B2C omnicanale su Google Ads e Meta. 5 anni di gestione strategica.',
    image: '/kitchen.webp',
    category: 'Marketing Management B2C',
  },
  {
    slug: 'wave-murano-glass',
    title: 'Wave Murano Glass — Caso Studio Marketing | Alberto Pasinati',
    description: 'Caso studio: Marketing Manager per Wave Murano Glass — brand luxury veneziano. Strategia EMEA, Maison&Objet Parigi, campagne multi-lingua e SEO internazionale.',
    image: '/murano-glass.webp',
    category: 'Marketing Management B2B2C',
  },
  {
    slug: 'il-fanale-group',
    title: 'Il Fanale Group — Caso Studio Marketing | Alberto Pasinati',
    description: 'Caso studio: Marketing Manager per Il Fanale Group — illuminazione di design. Salone del Mobile Milano, CRM da zero, network dealer B2B nazionale e internazionale.',
    image: '/lighting-design.webp',
    category: 'Marketing Management B2B',
  },
  {
    slug: 'atelier-alessandra',
    title: 'Atelier Alessandra — Caso Studio Marketing | Alberto Pasinati',
    description: 'Caso studio: Rebranding e e-commerce Shopify per Atelier Alessandra — gioielli vetro di Murano. Brand identity, SEO, Meta Ads e Google Shopping. Sito live.',
    image: '/Alessandra-Atelier-original-Murano-glass-jewels.webp',
    category: 'Brand Identity & E-Commerce',
  },
];

function stripExistingMeta(html) {
  // Rimuove i meta statici dell'homepage per evitare duplicati
  return html
    .replace(/<meta name="description"[^>]*>/g, '')
    .replace(/<meta name="robots"[^>]*>/g, '')
    .replace(/<meta name="author"[^>]*>/g, '')
    .replace(/<meta property="og:[^"]*"[^>]*>/g, '')
    .replace(/<meta property="twitter:[^"]*"[^>]*>/g, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*>/g, '')
    .replace(/<link rel="canonical"[^>]*>/g, '')
    .replace(/<!-- Open Graph[^>]*-->/g, '')
    .replace(/<!-- Twitter Card[^>]*-->/g, '')
    .replace(/<!-- Canonical[^>]*-->/g, '');
}

function injectMeta(html, { slug, title, description, image, category }) {
  const url = `${SITE_URL}/portfolio/${slug}`;
  const imageUrl = `${SITE_URL}${image}`;

  // Prima rimuove i meta esistenti per evitare duplicati
  const cleanHtml = stripExistingMeta(html);

  const metaBlock = `<title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Alberto Pasinati" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Alberto Pasinati" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${title}" />
    <meta property="og:locale" content="it_IT" />
    <meta property="article:author" content="Alberto Pasinati" />
    <meta property="article:section" content="${category}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <link rel="alternate" hreflang="it-IT" href="${url}" />
    <link rel="alternate" hreflang="it" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${url}" />
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://albertopasinati.com"},{"@type":"ListItem","position":2,"name":"Portfolio","item":"https://albertopasinati.com/#portfolio"},{"@type":"ListItem","position":3,"name":"${title.split(' —')[0]}","item":"${url}"}]}</script>
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","@id":"${url}#article","headline":"${title}","description":"${description}","image":"${imageUrl}","url":"${url}","author":{"@type":"Person","@id":"https://albertopasinati.com/#person","name":"Alberto Pasinati"},"publisher":{"@type":"Person","@id":"https://albertopasinati.com/#person","name":"Alberto Pasinati"},"mainEntityOfPage":{"@type":"WebPage","@id":"${url}"},"articleSection":"${category}","inLanguage":"it-IT"}</script>`;

  return cleanHtml.replace(/<title>.*?<\/title>/, metaBlock);
}

function prerender() {
  const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  let count = 0;
  for (const project of projects) {
    const dir = path.join(DIST, 'portfolio', project.slug);
    fs.mkdirSync(dir, { recursive: true });

    const html = injectMeta(indexHtml, project);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    count++;
    console.log(`✅ Pre-rendered: /portfolio/${project.slug}`);
  }

  // Genera anche privacy-policy con meta corretti
  const privacyDir = path.join(DIST, 'privacy-policy');
  fs.mkdirSync(privacyDir, { recursive: true });
  const privacyHtml = indexHtml.replace(
    /<title>.*?<\/title>/,
    `<title>Privacy Policy | Alberto Pasinati</title>
    <meta name="description" content="Informativa sulla privacy del sito albertopasinati.com — Marketing Manager Alberto Pasinati." />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${SITE_URL}/privacy-policy" />`
  );
  fs.writeFileSync(path.join(privacyDir, 'index.html'), privacyHtml, 'utf-8');
  console.log(`✅ Pre-rendered: /privacy-policy`);

  console.log(`\n🚀 Pre-render completato: ${count + 1} pagine generate`);
}

prerender();
