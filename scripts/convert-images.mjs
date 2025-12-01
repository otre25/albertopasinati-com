import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';

async function convertToWebP(filePath) {
  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✅ Converted: ${filePath} → ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

async function scanDirectory(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await scanDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry)) {
      await convertToWebP(fullPath);
    }
  }
}

console.log('🚀 Starting image conversion to WebP...\n');
await scanDirectory(publicDir);
console.log('\n✨ Conversion completed!');
