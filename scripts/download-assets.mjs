/**
 * Descarga a public/ todos los archivos que el contenido importado necesita
 * (imágenes, el video de la portada, CSS de Elementor, fuentes de iconos...).
 * Lo hice para que el sitio no dependa para nada del servidor original:
 * todo se sirve local. Se corre una vez con: node scripts/download-assets.mjs
 */
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const BASE = "https://sitio.osseous.com.mx";

const EXTRA = [
  "/wp-content/uploads/2025/03/23-vid.mp4",
  "/wp-content/uploads/2025/02/popup-2.jpg",
  "/wp-content/uploads/2025/02/img-21-2.png",
  "/wp-content/uploads/2025/02/img-22-2.png",
  "/wp-content/uploads/2025/02/img-20-3.png",
  "/wp-content/uploads/2025/02/img-23-2.png",
  // Font Awesome (iconos usados por icon-list / social-icons)
  "/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-solid-900.woff2",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-solid-900.ttf",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-brands-400.woff2",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-brands-400.ttf",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-regular-400.woff2",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-regular-400.ttf",
];

function collectUrls() {
  const urls = new Set(EXTRA);
  const scanDirs = [
    path.join(root, "src", "content", "pages"),
    path.join(root, "src", "config"),
    root,
  ];
  for (const dir of scanDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!/\.(html|ts|tsx|json)$/.test(file)) continue;
      const content = fs.readFileSync(path.join(dir, file), "utf8");
      for (const m of content.matchAll(/(?:src|href)=["'](\/wp-content\/[^"']+)["']/gi)) {
        urls.add(m[1].split("?")[0].split("#")[0]);
      }
      for (const m of content.matchAll(/https?:\/\/sitio\.osseous\.com\.mx(\/wp-content\/[^"'\s)]+)/gi)) {
        urls.add(m[1].split("?")[0].split("#")[0]);
      }
    }
  }
  // Preferir imágenes full-size sobre thumbs de Elementor
  const filtered = [...urls].filter((u) => !u.includes("/elementor/thumbs/"));
  return filtered.sort();
}

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0", Accept: "*/*" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(get(new URL(res.headers.location, url).href));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

async function downloadAsset(relPath) {
  const dest = path.join(publicDir, relPath.replace(/^\//, ""));
  if (fs.existsSync(dest) && fs.statSync(dest).size > 100) {
    return "skip";
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const url = BASE + encodeURI(relPath);
  try {
    const buf = await get(url);
    fs.writeFileSync(dest, buf);
    return "ok";
  } catch (e) {
    console.error(`  FAIL ${relPath}: ${e.message}`);
    return "fail";
  }
}

const urls = collectUrls();
console.log(`Descargando ${urls.length} assets...\n`);

let ok = 0;
let skip = 0;
let fail = 0;
for (const u of urls) {
  process.stdout.write(`${u} ... `);
  const r = await downloadAsset(u);
  if (r === "ok") {
    ok++;
    console.log("OK");
  } else if (r === "skip") {
    skip++;
    console.log("skip");
  } else {
    fail++;
  }
}

console.log(`\nListo: ${ok} descargados, ${skip} ya existían, ${fail} fallidos.`);
