import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Immagine sorgente (già ottimizzata)
const sourceImage = join(publicDir, 'alberto-portrait.webp');

// Configurazione favicon
const favicons = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicon(size, name) {
  const outputPath = join(publicDir, name);

  console.log(`Generating ${name} (${size}x${size})...`);

  try {
    await sharp(sourceImage)
      .resize(size, size, {
        fit: 'cover',
        position: 'top' // Prende la parte alta del portrait
      })
      .png()
      .toFile(outputPath);

    console.log(`  ✓ Created ${name}`);
  } catch (error) {
    console.error(`  ✗ Error generating ${name}:`, error.message);
  }
}

async function generateAll() {
  console.log('Starting favicon generation...\n');
  console.log(`Source: alberto-portrait.webp\n`);

  for (const favicon of favicons) {
    await generateFavicon(favicon.size, favicon.name);
  }

  console.log('\n✓ All favicons generated!');
  console.log('\nDon\'t forget to update index.html with the new favicon links!');
}

generateAll();
