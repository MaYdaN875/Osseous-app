// La tipografía del sitio (Roboto) se cargaba desde Google Fonts; con esto
// descargué los archivos woff2 y reescribí el CSS para servirlos locales.
// Así la página no depende de Google y carga más rápido.
// Uso (una sola vez): node scripts/localize-fonts.js
const fs = require("fs");
const path = require("path");
const https = require("https");

const FONT_DIR = path.join(__dirname, "..", "public", "assets", "fonts");
const CSS = path.join(FONT_DIR, "roboto.css");

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
          return resolve(get(new URL(res.headers.location, url).href));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

(async () => {
  let css = fs.readFileSync(CSS, "utf8");
  const urls = [...css.matchAll(/https:\/\/fonts\.gstatic\.com[^)'"]+\.woff2/g)].map((m) => m[0]);
  const unique = [...new Set(urls)];
  console.log("woff2 a descargar:", unique.length);
  let i = 0;
  for (const u of unique) {
    const name = "roboto-" + u.split("/").slice(-2).join("-").replace(/[^a-zA-Z0-9.\-]/g, "_");
    const dest = path.join(FONT_DIR, name);
    if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
      const buf = await get(u);
      fs.writeFileSync(dest, buf);
    }
    css = css.split(u).join(name);
    if (++i % 15 === 0) console.log("  ...", i);
  }
  fs.writeFileSync(CSS, css);
  console.log("Fuentes locales listas:", i, "archivos. CSS reescrita.");
})();
