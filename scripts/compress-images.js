import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');

// Images to compress with target max width
const imagesToCompress = [
  { filename: 'lighting-design.webp', maxWidth: 1400, quality: 80 },
  { filename: 'murano-glass.webp', maxWidth: 1400, quality: 80 },
  { filename: 'kitchen.webp', maxWidth: 1200, quality: 82 },
  { filename: 'lucez-creative.webp', maxWidth: 1200, quality: 82 },
  { filename: 'atelier-alessandra.webp', maxWidth: 1000, quality: 85 }
];

async function getFileSize(filepath) {
  const stats = await fs.stat(filepath);
  return (stats.size / 1024).toFixed(1); // KB
}

async function compressImage(filename, maxWidth, quality) {
  const inputPath = join(publicDir, filename);
  const outputPath = join(publicDir, filename);

  try {
    // Get original size
    const originalSize = await getFileSize(inputPath);

    console.log(`\n📸 Processing: ${filename}`);
    console.log(`   Original size: ${originalSize}KB`);

    // Get original metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original dimensions: ${metadata.width}x${metadata.height}`);

    // Create backup
    const backupPath = join(publicDir, `${filename}.backup`);
    await fs.copyFile(inputPath, backupPath);

    // Compress
    await sharp(inputPath)
      .resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality, effort: 6 })
      .toFile(outputPath + '.tmp');

    // Replace original
    await fs.rename(outputPath + '.tmp', outputPath);

    // Get new size
    const newSize = await getFileSize(outputPath);
    const newMetadata = await sharp(outputPath).metadata();
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`   ✅ Compressed to: ${newSize}KB`);
    console.log(`   New dimensions: ${newMetadata.width}x${newMetadata.height}`);
    console.log(`   Reduction: ${reduction}%`);

  } catch (error) {
    console.error(`   ❌ Error compressing ${filename}:`, error.message);
  }
}

async function compressAll() {
  console.log('🗜️  Starting image compression...\n');
  console.log('='.repeat(50));

  for (const { filename, maxWidth, quality } of imagesToCompress) {
    await compressImage(filename, maxWidth, quality);
  }

  console.log('\n' + '='.repeat(50));
  console.log('\n✨ Compression complete!');
  console.log('\n💡 Backup files created with .backup extension');
  console.log('   If images look good, you can delete the .backup files');
}

compressAll();
