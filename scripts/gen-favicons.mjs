import sharp from 'sharp';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public');

const BG = '#1a1a1a';
const FG = '#FDBA3C';

const svg512 = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${BG}" rx="64"/>
  <text x="256" y="256"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-weight="900"
    font-size="248"
    fill="${FG}"
    text-anchor="middle"
    dominant-baseline="central"
    letter-spacing="-8">AP</text>
</svg>`;

const sizes = [
  { name: 'favicon-16x16.png',          size: 16  },
  { name: 'favicon-32x32.png',          size: 32  },
  { name: 'favicon-48x48.png',          size: 48  },
  { name: 'apple-touch-icon.png',       size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(Buffer.from(svg512))
    .resize(size, size)
    .png()
    .toFile(path.join(OUT, name));
  console.log(`✓ ${name} (${size}x${size})`);
}

// Build favicon.ico (multi-size: 16 + 32)
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  const dataOffset = headerSize + entrySize * count;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // reserved
  header.writeUInt16LE(1, 2);     // type: icon
  header.writeUInt16LE(count, 4); // count

  let offset = dataOffset;
  const entries = [];
  for (const buf of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(0, 0);                    // width (0 = 256, fine for <=255)
    entry.writeUInt8(0, 1);                    // height
    entry.writeUInt8(0, 2);                    // color count
    entry.writeUInt8(0, 3);                    // reserved
    entry.writeUInt16LE(1, 4);                 // planes
    entry.writeUInt16LE(32, 6);                // bit count
    entry.writeUInt32LE(buf.length, 8);        // bytes in resource
    entry.writeUInt32LE(offset, 12);           // offset
    entries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

const png16 = await sharp(Buffer.from(svg512)).resize(16, 16).png().toBuffer();
const png32 = await sharp(Buffer.from(svg512)).resize(32, 32).png().toBuffer();
const png48 = await sharp(Buffer.from(svg512)).resize(48, 48).png().toBuffer();

const ico = buildIco([png16, png32, png48]);
writeFileSync(path.join(OUT, 'favicon.ico'), ico);
console.log('✓ favicon.ico (16+32+48)');
