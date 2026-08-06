import fs from "fs";
import path from "url";
import fspath from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __dirname = fspath.dirname(fileURLToPath(import.meta.url));
const root = fspath.join(__dirname, "..");
const outDir = fspath.join(root, "src", "data");

const categoriesDef = [
  {
    slug: "reemplazo-de-rodilla",
    title_es: "Reemplazo de Rodilla",
    title_en: "Knee Replacement",
    description_es: "Sistemas avanzados de reemplazo y reconstrucción de rodilla que aseguran una excelente estabilidad, movilidad y durabilidad.",
    description_en: "Advanced knee replacement and reconstruction systems ensuring excellent stability, mobility, and durability."
  },
  {
    slug: "protesis-de-cadera",
    title_es: "Prótesis de Cadera",
    title_en: "Hip Prosthesis",
    description_es: "Prótesis y componentes de cadera de alto desempeño para revisiones primarias y complejas, diseñados para la máxima adaptación ósea.",
    description_en: "High-performance hip prostheses and components for primary and complex revisions, designed for maximum bone adaptation."
  },
  {
    slug: "protesis-de-hombro",
    title_es: "Prótesis de Hombro",
    title_en: "Shoulder Prosthesis",
    description_es: "Soluciones innovadoras para la articulación del hombro, implantes de alta precisión que facilitan la curación y la estabilidad articular.",
    description_en: "Innovative solutions for the shoulder joint, high-precision implants facilitating healing and joint stability."
  },
  {
    slug: "instrumental-quirurgico",
    title_es: "Instrumental Quirúrgico",
    title_en: "Surgical Instruments",
    description_es: "Herramientas quirúrgicas de alta gama y charolas de precisión que asisten y respaldan al equipo médico en cada etapa del procedimiento.",
    description_en: "High-end surgical tools and precision trays that assist and support the medical team in every stage of the procedure."
  }
];

// Mapeo explícito de los productos en español
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

// ----------------------------------------------------
// FASE 1: Procesar versión en Español (ES)
// ----------------------------------------------------
console.log("Parsing Spanish products...");
const esProductsRaw = [];
const sourceSlugs = ["reemplazo-de-rodilla", "protesis-de-cadera", "protesis-de-hombro"];
const indexToCategoryMap = {}; // Guardará `${sourceSlug}-${idx}` -> { catSlug, productSlug }

sourceSlugs.forEach((slug) => {
  const filePath = fspath.join(root, "src", "content", "pages", `${slug}.ts`);
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

    if (!title) return;

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

    esProductsRaw.push({
      sourceSlug: slug,
      idx,
      title,
      images,
      sections
    });
  });
});

// Organizar en categorías ES y construir mapa de índices
const esCategoriesData = categoriesDef.map((catDef) => ({
  id: catDef.slug,
  title: catDef.title_es,
  description: catDef.description_es,
  image: "",
  products: []
}));

const esSlugCounts = {};

esProductsRaw.forEach((prod) => {
  const catSlug = PRODUCT_CATEGORY_MAP[prod.title];
  if (!catSlug) return;

  let productSlug = slugify(prod.title);
  if (!productSlug) productSlug = "producto";
  if (esSlugCounts[productSlug] !== undefined) {
    esSlugCounts[productSlug]++;
    productSlug = `${productSlug}-${esSlugCounts[productSlug]}`;
  } else {
    esSlugCounts[productSlug] = 0;
  }

  // Guardar mapeo de índice
  indexToCategoryMap[`${prod.sourceSlug}-${prod.idx}`] = { catSlug, productSlug };

  const category = esCategoriesData.find((c) => c.id === catSlug);
  if (category) {
    category.products.push({
      id: `${catSlug}-${productSlug}`,
      slug: productSlug,
      title: prod.title,
      images: prod.images,
      sections: prod.sections
    });
  }
});

// Set category representational images ES
esCategoriesData.forEach((cat) => {
  const imagesMap = {
    "reemplazo-de-rodilla": "/wp-content/uploads/2025/02/img-21-2.png",
    "protesis-de-cadera": "/wp-content/uploads/2025/02/img-22-2.png",
    "protesis-de-hombro": "/wp-content/uploads/2025/02/img-20-3.png",
    "instrumental-quirurgico": "/wp-content/uploads/2025/02/img-23-2.png"
  };
  cat.image = imagesMap[cat.id] || (cat.products[0]?.images[0] ?? "");
});

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  fspath.join(outDir, "osseous-products.json"),
  JSON.stringify(esCategoriesData, null, 2),
  "utf8"
);
console.log(`Saved Spanish products to src/data/osseous-products.json (${esProductsRaw.length} products parsed).`);

// ----------------------------------------------------
// FASE 2: Procesar versión en Inglés (EN) si existe
// ----------------------------------------------------
const enDir = fspath.join(root, "src", "content", "pages", "en");
if (fs.existsSync(enDir)) {
  console.log("\nParsing English products...");
  const enProductsRaw = [];

  sourceSlugs.forEach((slug) => {
    const filePath = fspath.join(enDir, `${slug}.ts`);
    if (!fs.existsSync(filePath)) {
      console.warn(`Warning: English file ${filePath} does not exist yet.`);
      return;
    }

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

      if (!title) return;

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

      enProductsRaw.push({
        sourceSlug: slug,
        idx,
        title,
        images,
        sections
      });
    });
  });

  const enCategoriesData = categoriesDef.map((catDef) => ({
    id: catDef.slug,
    title: catDef.title_en,
    description: catDef.description_en,
    image: "",
    products: []
  }));

  enProductsRaw.forEach((prod) => {
    const mapping = indexToCategoryMap[`${prod.sourceSlug}-${prod.idx}`];
    if (!mapping) {
      console.warn(`Warning: No ES mapping found for ${prod.sourceSlug} card at index ${prod.idx}. Skipping.`);
      return;
    }

    const { catSlug, productSlug } = mapping;
    const category = enCategoriesData.find((c) => c.id === catSlug);
    if (category) {
      category.products.push({
        id: `${catSlug}-${productSlug}`,
        slug: productSlug,
        title: prod.title,
        images: prod.images,
        sections: prod.sections
      });
    }
  });

  // Set category representational images EN
  enCategoriesData.forEach((cat) => {
    const imagesMap = {
      "reemplazo-de-rodilla": "/wp-content/uploads/2025/02/img-21-2.png",
      "protesis-de-cadera": "/wp-content/uploads/2025/02/img-22-2.png",
      "protesis-de-hombro": "/wp-content/uploads/2025/02/img-20-3.png",
      "instrumental-quirurgico": "/wp-content/uploads/2025/02/img-23-2.png"
    };
    cat.image = imagesMap[cat.id] || (cat.products[0]?.images[0] ?? "");
  });

  fs.writeFileSync(
    fspath.join(outDir, "osseous-products-en.json"),
    JSON.stringify(enCategoriesData, null, 2),
    "utf8"
  );
  console.log(`Saved English products to src/data/osseous-products-en.json (${enProductsRaw.length} products parsed).`);
} else {
  console.log("\nSkipping English build: English content pages directory not found.");
}
