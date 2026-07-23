/**
 * Descarga las páginas del sitio original de Osseous como archivos de referencia
 * (_ref-*.html en la raíz) para que import-pages.js las convierta después.
 * Los _ref son temporales: una vez importado el contenido se pueden borrar.
 * Uso: node scripts/fetch-ref-pages.mjs
 */
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://sitio.osseous.com.mx";

const SLUGS = [
  "empresa", "servicios", "contacto", "blog", "fichas-tecnicas", "productos",
  "reemplazo-de-rodilla", "protesis-de-cadera", "protesis-de-hombro", "instrumental-quirurgico",
  "cabeza-de-ceramica", "cabeza-femoral-metalica", "copa-doble-movilidad-cementada",
  "copa-doble-movilidad-no-cementada", "copa-no-cementada-primaria", "metaliner", "pe-liner",
  "rodilla-primaria-cr", "inserto-acetabular-primario", "vastago-cementado-primario-con-copas",
  "vastago-primario-no-cementado-con-copas", "vastago-revision-cementado-con-copa",
  "vastago-revision-no-cementado-200-con-copas", "vastago-revision-no-cementado-250-con-copas",
  "charola-cadera-primaria",
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(new URL(res.headers.location, url).href));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    }).on("error", reject);
  });
}

for (const slug of SLUGS) {
  const dest = path.join(root, `_ref-${slug}.html`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
    console.log(`skip ${slug}`);
    continue;
  }
  process.stdout.write(`${slug}... `);
  try {
    const html = await get(`${BASE}/${slug}/`);
    fs.writeFileSync(dest, html, "utf8");
    console.log("OK");
  } catch (e) {
    console.log(`FAIL ${e.message}`);
  }
}
