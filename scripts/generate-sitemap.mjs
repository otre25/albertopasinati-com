/**
 * Script per generare sitemap.xml dinamica
 * Usage: node scripts/generate-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurazione
const SITE_URL = 'https://albertopasinati.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Definisci le tue route statiche
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/',                                    changefreq: 'weekly',  priority: '1.0', lastmod: today },
  { path: '/portfolio/store-cucine',              changefreq: 'monthly', priority: '0.8', lastmod: today },
  { path: '/portfolio/wave-murano-glass',         changefreq: 'monthly', priority: '0.8', lastmod: today },
  { path: '/portfolio/il-fanale-group',           changefreq: 'monthly', priority: '0.8', lastmod: today },
  { path: '/portfolio/atelier-alessandra',        changefreq: 'monthly', priority: '0.8', lastmod: today },
  { path: '/privacy-policy',                      changefreq: 'monthly', priority: '0.3', lastmod: today },
];

// Funzione per generare XML sitemap
function generateSitemap(routes) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

// Funzione per salvare sitemap
function saveSitemap(xml, outputPath) {
  try {
    fs.writeFileSync(outputPath, xml, 'utf-8');
    console.log('✅ Sitemap generata con successo:', outputPath);
    console.log(`📄 ${routes.length} pagine incluse nella sitemap`);
  } catch (error) {
    console.error('❌ Errore durante il salvataggio della sitemap:', error);
    process.exit(1);
  }
}

// Esegui generazione
const sitemapXml = generateSitemap(routes);
saveSitemap(sitemapXml, OUTPUT_PATH);
