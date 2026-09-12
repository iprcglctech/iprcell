const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const originalStats = fs.statSync(filePath);
  const originalSize = originalStats.size;
  if (originalSize < 25 * 1024) return; // skip tiny files

  try {
    const buffer = fs.readFileSync(filePath);
    const image = sharp(buffer);
    const metadata = await image.metadata();

    let pipeline = sharp(buffer);

    // Limit extreme dimensions to 2200px max (more than enough for 4k retina)
    if (metadata.width && metadata.width > 2200) {
      pipeline = pipeline.resize({ width: 2200, withoutEnlargement: true });
    }

    let outputBuffer;
    if (ext === '.png') {
      outputBuffer = await pipeline
        .png({ compressionLevel: 9, adaptiveFiltering: true, quality: 90 })
        .toBuffer();
    } else {
      outputBuffer = await pipeline
        .jpeg({ quality: 86, mozjpeg: true, progressive: true })
        .toBuffer();
    }

    if (outputBuffer && outputBuffer.length < originalSize) {
      fs.writeFileSync(filePath, outputBuffer);
      const saved = (((originalSize - outputBuffer.length) / originalSize) * 100).toFixed(1);
      console.log(
        'Optimized ' +
          path.basename(filePath) +
          ': ' +
          (originalSize / 1024).toFixed(0) +
          'KB -> ' +
          (outputBuffer.length / 1024).toFixed(0) +
          'KB (-' +
          saved +
          '%)'
      );
    }
  } catch (err) {
    console.error('Error optimizing ' + filePath + ':', err.message);
  }
}

async function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await walk(full);
    } else {
      await processFile(full);
    }
  }
}

(async () => {
  console.log('Starting visually lossless image optimization...');
  let totalBefore = 0;
  let totalAfter = 0;

  function calcTotal(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) calcTotal(full);
      else totalBefore += stat.size;
    });
  }
  calcTotal('public/images');

  await walk('public/images');

  function calcAfter(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) calcAfter(full);
      else totalAfter += stat.size;
    });
  }
  calcAfter('public/images');

  console.log('\n=== Image Optimization Complete ===');
  console.log('Total Before: ' + (totalBefore / 1024 / 1024).toFixed(2) + ' MB');
  console.log('Total After:  ' + (totalAfter / 1024 / 1024).toFixed(2) + ' MB');
  console.log(
    'Total Saved:  ' +
      ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2) +
      ' MB (-' +
      (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1) +
      '%)'
  );
})();
