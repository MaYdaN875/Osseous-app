// Con esto armé el catálogo: recorre el sitio de Chunli (clzd.com), saca las
// categorías con sus productos, descarga las fotos a public/assets/products
// y genera src/data/catalog-data.json, que es lo que lee la app.
// Uso (una sola vez): node scripts/scrape.js
const fs = require("fs");
const path = require("path");
const https = require("https");

const BASE = "https://www.clzd.com";
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "src", "data");
const IMG_DIR = path.join(OUT_DIR, "assets", "products");
const CATEGORY_IDS = [9, 6, 4, 2, 3, 1, 5, 7, 8];

fs.mkdirSync(IMG_DIR, { recursive: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

function get(url, asBuffer = false) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        { headers: { "User-Agent": "Mozilla/5.0", Accept: "*/*" } },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return resolve(get(new URL(res.headers.location, url).href, asBuffer));
          }
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => {
            const buf = Buffer.concat(chunks);
            resolve(asBuffer ? buf : buf.toString("utf8"));
          });
        }
      )
      .on("error", reject);
  });
}

async function fetchCategory(cid) {
  let page = 1;
  let pageTotal = 1;
  let title = "";
  const items = [];
  do {
    const url = `${BASE}/en/api/product/cid/${cid}/page/${page}`;
    const json = JSON.parse(await get(url));
    const d = json.data;
    pageTotal = d.page_total || 1;
    if (!title) {
      const cat = (d.category || []).find((c) => c.id === cid);
      title = cat ? cat.title : `Category ${cid}`;
    }
    for (const it of d.list || []) {
      items.push({ id: it.id, title: it.title, thumbnail: it.thumbnail });
    }
    page++;
  } while (page <= pageTotal);
  return { id: cid, title, products: items };
}

async function download(remotePath) {
  const filename = remotePath.split("/").pop();
  const dest = path.join(IMG_DIR, filename);
  const rel = `assets/products/${filename}`;
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return rel;
  try {
    const buf = await get(BASE + remotePath, true);
    fs.writeFileSync(dest, buf);
    return rel;
  } catch (e) {
    console.error("  ! error img", remotePath, e.message);
    return remotePath; // fallback: URL relativa (se corregirá luego)
  }
}

(async () => {
  const categories = [];
  for (const cid of CATEGORY_IDS) {
    process.stdout.write(`Categoria ${cid}... `);
    const cat = await fetchCategory(cid);
    console.log(`${cat.title} (${cat.products.length} productos)`);
    categories.push(cat);
  }

  // Descargar imágenes
  let count = 0;
  for (const cat of categories) {
    for (const p of cat.products) {
      if (p.thumbnail) {
        p.image = await download(p.thumbnail);
        count++;
      }
    }
    // imagen representativa de la categoría = primer producto con imagen
    const first = cat.products.find((p) => p.image);
    cat.image = first ? first.image : "";
  }
  console.log(`Imagenes descargadas/verificadas: ${count}`);

  fs.writeFileSync(
    path.join(DATA_DIR, "catalog-data.json"),
    JSON.stringify({ categories }, null, 2)
  );
  console.log("src/data/catalog-data.json escrito.");
})();
