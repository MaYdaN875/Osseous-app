import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "src", "data");

const categoriesDef = [
  {
    slug: "reemplazo-de-rodilla",
    title: "Reemplazo de Rodilla",
    description: "Sistemas avanzados de reemplazo y reconstrucción de rodilla que aseguran una excelente estabilidad, movilidad y durabilidad."
  },
  {
    slug: "protesis-de-cadera",
    title: "Prótesis de Cadera",
    description: "Prótesis y componentes de cadera de alto desempeño para revisiones primarias y complejas, diseñados para la máxima adaptación ósea."
  },
  {
    slug: "protesis-de-hombro",
    title: "Prótesis de Hombro",
    description: "Soluciones innovadoras para la articulación del hombro, implantes de alta precisión que facilitan la curación y la estabilidad articular."
  },
  {
    slug: "instrumental-quirurgico",
    title: "Instrumental Quirúrgico",
    description: "Herramientas quirúrgicas de alta gama y charolas de precisión que asisten y respaldan al equipo médico en cada etapa del procedimiento."
  }
];

// Mapeo explícito y médicamente correcto de los productos de Osseous a sus categorías
const PRODUCT_CATEGORY_MAP = {
  "Prótesis de rodilla con bisagra giratoria": "reemplazo-de-rodilla",
  "Prótesis de rodilla XA": "reemplazo-de-rodilla",
  "Prótesis de rodilla tipo XQ": "reemplazo-de-rodilla",
  "Aumentos CCK": "reemplazo-de-rodilla",
  "Bandeja Tibial": "reemplazo-de-rodilla",
  "Inserción Tibial": "reemplazo-de-rodilla",
  "XN-PS": "reemplazo-de-rodilla",
  "XN-CR": "reemplazo-de-rodilla",
  "Sistema de reparación del menisco": "reemplazo-de-rodilla",

  "Copa estructura trabecular G20": "protesis-de-cadera",
  "Copa Acetabular": "protesis-de-cadera",
  "Cabeza Bipolar": "protesis-de-cadera",
  "Copa de movilidad Dual": "protesis-de-cadera",
  "Copa con múltiples orificios JS": "protesis-de-cadera",
  "Copa JS": "protesis-de-cadera",
  "Revestimientos de PE": "protesis-de-cadera",
  "160 de alto": "protesis-de-cadera",
  "150 Tallos": "protesis-de-cadera",
  "Tallo BC2": "protesis-de-cadera",
  "Tallo BE2": "protesis-de-cadera",
  "Tallo BC": "protesis-de-cadera",
  "Cabeza Femoral Cerámica": "protesis-de-cadera",
  "Copa Doble movilidad cementada armada": "protesis-de-cadera",
  "Copa doble movilidad armada": "protesis-de-cadera",
  "Copa doble movilidad inserto metálico": "protesis-de-cadera",
  "Copa no cementada": "protesis-de-cadera",
  "Liner metálico doble movilidad": "protesis-de-cadera",
  "Liner polietileno no cementado": "protesis-de-cadera",
  "Cabeza Femoral": "protesis-de-cadera",
  "Copa acetabular 58": "protesis-de-cadera",
  "Aumentos": "protesis-de-cadera",

  "Artroplastia inversa de hombro": "protesis-de-hombro",
  "Anclaje de Sutura PEEK": "protesis-de-hombro",
  "Anclaje de titanio impreso 3D": "protesis-de-hombro",
  "Cables": "protesis-de-hombro",
  "Hilo de Polietileno": "protesis-de-hombro"
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/\s+/g, "-")           // replace spaces with -
    .replace(/[^\w\-]+/g, "")       // remove all non-word chars
    .replace(/\-\-+/g, "-")         // replace multiple - with single -
    .replace(/^-+/, "")             // trim leading -
    .replace(/-+$/, "");            // trim trailing -
}

function extractHtmlContent(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const startIdx = code.indexOf("`");
  const endIdx = code.lastIndexOf("`");
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Could not find backticks in ${filePath}`);
  }
  return code.slice(startIdx + 1, endIdx);
}

function parseAllProducts() {
  const allParsedProducts = [];
  const seenTitles = new Set();

  const sourceSlugs = ["reemplazo-de-rodilla", "protesis-de-cadera", "protesis-de-hombro"];

  sourceSlugs.forEach((slug) => {
    const filePath = path.join(root, "src", "content", "pages", `${slug}.ts`);
    if (!fs.existsSync(filePath)) return;

    const html = extractHtmlContent(filePath);
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const cards = [];
    const seenCards = new Set();

    doc.querySelectorAll(".elementor-widget-image-carousel").forEach((carousel) => {
      const card = carousel.closest(".e-con");
      if (card && !seenCards.has(card)) {
        seenCards.add(card);
        cards.push(card);
      }
    });

    cards.forEach((card, idx) => {
      const direct = card.querySelector(":scope > .elementor-widget-text-editor");
      const titleText = (direct ?? card.querySelector(".elementor-widget-text-editor"))?.textContent ?? "";
      const title = titleText.replace(/\s+/g, " ").trim();

      if (!title || seenTitles.has(title)) return;
      seenTitles.add(title);

      const srcs = Array.from(card.querySelectorAll(".swiper-slide-image"))
        .map((img) => img.getAttribute("src") ?? "")
        .filter(Boolean);
      const images = Array.from(new Set(srcs));

      const accordion = card.querySelector(":scope > .elementor-widget-n-accordion .e-n-accordion");
      const sections = [];
      if (accordion) {
        const items = accordion.querySelectorAll(":scope > details.e-n-accordion-item");
        items.forEach((item) => {
          const label =
            item.querySelector(".e-n-accordion-item-title-text")?.textContent?.trim() ??
            item.querySelector("summary")?.textContent?.trim() ??
            "";
          const clone = item.cloneNode(true);
          clone.querySelector("summary")?.remove();
          sections.push({ label, html: clone.innerHTML.trim() });
        });
      }

      allParsedProducts.push({
        title,
        images,
        sections
      });
    });
  });

  return allParsedProducts;
}

const allProducts = parseAllProducts();
console.log(`Parsed a total of ${allProducts.length} unique products from the HTML files.`);

const categoriesData = categoriesDef.map((catDef) => {
  return {
    id: catDef.slug,
    title: catDef.title,
    description: catDef.description,
    image: "",
    products: []
  };
});

const slugCounts = {};

allProducts.forEach((prod) => {
  const catSlug = PRODUCT_CATEGORY_MAP[prod.title];
  if (!catSlug) {
    console.warn(`Warning: Product "${prod.title}" doesn't have an assigned category. Skipping.`);
    return;
  }

  const category = categoriesData.find((c) => c.id === catSlug);
  if (!category) return;

  let productSlug = slugify(prod.title);
  if (!productSlug) productSlug = "producto";
  if (slugCounts[productSlug] !== undefined) {
    slugCounts[productSlug]++;
    productSlug = `${productSlug}-${slugCounts[productSlug]}`;
  } else {
    slugCounts[productSlug] = 0;
  }

  category.products.push({
    id: `${catSlug}-${productSlug}`,
    slug: productSlug,
    title: prod.title,
    images: prod.images,
    sections: prod.sections
  });
});

// Set category representational images
categoriesData.forEach((cat) => {
  const imagesMap = {
    "reemplazo-de-rodilla": "/wp-content/uploads/2025/02/img-21-2.png",
    "protesis-de-cadera": "/wp-content/uploads/2025/02/img-22-2.png",
    "protesis-de-hombro": "/wp-content/uploads/2025/02/img-20-3.png",
    "instrumental-quirurgico": "/wp-content/uploads/2025/02/img-23-2.png"
  };
  cat.image = imagesMap[cat.id] || (cat.products[0]?.images[0] ?? "");
  console.log(`Category "${cat.title}" has ${cat.products.length} products.`);
});

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "osseous-products.json"),
  JSON.stringify(categoriesData, null, 2),
  "utf8"
);
console.log(`\nWritten structured data to src/data/osseous-products.json successfully!`);
