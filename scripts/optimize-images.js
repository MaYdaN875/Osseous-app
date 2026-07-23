// Las fotos de producto del catálogo venían enormes, así que con esto las
// redimensioné (máximo 1200px) y las comprimí para que la página cargue rápido.
// Solo reemplaza una imagen si de verdad quedó más ligera.
// Uso (una sola vez): node scripts/optimize-images.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = path.join(__dirname, "..", "public", "assets", "products");
const MAX = 1200; // lado mayor
const files = fs.readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));

(async () => {
  let before = 0, after = 0, i = 0;
  for (const f of files) {
    const p = path.join(DIR, f);
    const sizeBefore = fs.statSync(p).size;
    before += sizeBefore;
    try {
      const img = sharp(p, { limitInputPixels: false });
      const meta = await img.metadata();
      let pipe = img;
      if (Math.max(meta.width || 0, meta.height || 0) > MAX) {
        pipe = pipe.resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
      }
      const isPng = /\.png$/i.test(f);
      const buf = isPng
        ? await pipe.png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer()
        : await pipe.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      // sólo reemplazar si reducimos
      if (buf.length < sizeBefore) fs.writeFileSync(p, buf);
      after += Math.min(buf.length, sizeBefore);
    } catch (e) {
      after += sizeBefore;
      console.error("  ! error", f, e.message);
    }
    if (++i % 25 === 0) console.log("  ...", i, "/", files.length);
  }
  const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
  console.log(`Optimizadas ${files.length} imagenes. Antes: ${mb(before)} -> Despues: ${mb(after)}`);
})();
