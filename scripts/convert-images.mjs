import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const images = [
  {
    input: 'kitchen.jpg',
    output: 'kitchen.webp',
    width: 1200,
    crop: false
  },
  {
    input: 'murano-glass.jpg',
    output: 'murano-glass.webp',
    width: 1200,
    crop: false
  },
  {
    input: 'lighting-design.jpg',
    output: 'lighting-design.webp',
    width: 1200,
    crop: false
  },
  {
    input: 'atelier-alessandra.png',
    output: 'atelier-alessandra.webp',
    width: 1200,
    crop: true, // Crop to 4:3 aspect ratio
    aspectRatio: 4/3
  }
];

async function convertImage(imageConfig) {
  const inputPath = join(publicDir, imageConfig.input);
  const outputPath = join(publicDir, imageConfig.output);

  console.log(`Converting ${imageConfig.input} to WebP...`);

  try {
    let pipeline = sharp(inputPath);

    if (imageConfig.crop && imageConfig.aspectRatio) {
      // Get image metadata to calculate crop
      const metadata = await pipeline.metadata();
      const { width, height } = metadata;

      // Calculate crop dimensions for 4:3 aspect ratio
      const targetRatio = imageConfig.aspectRatio;
      const currentRatio = width / height;

      let cropWidth, cropHeight, left, top;

      if (currentRatio > targetRatio) {
        // Image is too wide, crop width
        cropHeight = height;
        cropWidth = Math.round(height * targetRatio);
        left = Math.round((width - cropWidth) / 2);
        top = 0;
      } else {
        // Image is too tall, crop height
        cropWidth = width;
        cropHeight = Math.round(width / targetRatio);
        left = 0;
        top = Math.round((height - cropHeight) / 2);
      }

      pipeline = pipeline.extract({
        left,
        top,
        width: cropWidth,
        height: cropHeight
      });

      console.log(`  Cropping from ${width}x${height} to ${cropWidth}x${cropHeight} (centered)`);
    }

    // Resize and convert to WebP
    await pipeline
      .resize(imageConfig.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    const inputStats = await sharp(inputPath).stats();

    console.log(`  ✓ Created ${imageConfig.output} (${stats.width}x${stats.height})`);
  } catch (error) {
    console.error(`  ✗ Error converting ${imageConfig.input}:`, error.message);
  }
}

async function convertAll() {
  console.log('Starting image conversion to WebP...\n');

  for (const imageConfig of images) {
    await convertImage(imageConfig);
  }

  console.log('\n✓ All images converted!');
}

convertAll();
