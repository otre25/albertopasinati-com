import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');

async function createOGImage() {
  try {
    console.log('Creating OG image from alberto-hero-v2.webp...');

    const inputPath = join(publicDir, 'alberto-hero-v2.webp');
    const outputPath = join(publicDir, 'alberto-portrait-og.webp');

    // Create 1200x630 OG image with brand background
    await sharp(inputPath)
      .resize(630, 630, {
        fit: 'cover',
        position: 'center'
      })
      .extend({
        top: 0,
        bottom: 0,
        left: 285,
        right: 285,
        background: { r: 248, g: 248, b: 248, alpha: 1 } // off-white background
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log('✅ OG image created successfully at:', outputPath);

    // Get file size
    const stats = await sharp(outputPath).metadata();
    console.log(`Image dimensions: ${stats.width}x${stats.height}`);

  } catch (error) {
    console.error('❌ Error creating OG image:', error);
    process.exit(1);
  }
}

createOGImage();
