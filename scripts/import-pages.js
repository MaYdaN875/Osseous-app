/**
 * Este script convierte las páginas del sitio original de Osseous en los módulos
 * de src/content/pages que usa la app. Agarra las copias descargadas con
 * fetch-ref-pages.mjs, les extrae solo el contenido (sin header/footer de WordPress),
 * limpia las URLs para que apunten a nuestros archivos locales y guarda cada página
 * como un módulo .ts que exporta su contenido.
 *
 * Solo se corre si el sitio original cambia y quiero re-importar algo:
 *   node scripts/fetch-ref-pages.mjs   (descarga las páginas)
 *   node scripts/import-pages.js       (las convierte)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const refDir = root;
const outDir = path.join(root, "src", "content", "pages");

const SLUGS = [
  "home",
  "empresa",
  "servicios",
  "contacto",
  "blog",
  "fichas-tecnicas",
  "productos",
  "reemplazo-de-rodilla",
  "protesis-de-cadera",
  "protesis-de-hombro",
  "instrumental-quirurgico",
  "cabeza-de-ceramica",
  "cabeza-femoral-metalica",
  "copa-doble-movilidad-cementada",
  "copa-doble-movilidad-no-cementada",
  "copa-no-cementada-primaria",
  "metaliner",
  "pe-liner",
  "rodilla-primaria-cr",
  "inserto-acetabular-primario",
  "vastago-cementado-primario-con-copas",
  "vastago-primario-no-cementado-con-copas",
  "vastago-revision-cementado-con-copa",
  "vastago-revision-no-cementado-200-con-copas",
  "vastago-revision-no-cementado-250-con-copas",
  "charola-cadera-primaria",
];

function localizeHtml(html) {
  let out = html
    .replace(/https?:\/\/sitio\.osseous\.com\.mx/gi, "")
    .replace(/srcset="[^"]*"/gi, "")
    .replace(/sizes="[^"]*"/gi, "")
    .replace(/fetchpriority="[^"]*"/gi, "")
    .replace(/decoding="[^"]*"/gi, "")
    .replace(/loading="lazy"/gi, "");

  // Carrusel Elementor: usar imagen full-size del enlace lightbox, no el thumb
  out = out.replace(
    /<a([^>]*?)href="(\/wp-content\/uploads\/[^"]+)"([^>]*?)><figure class="swiper-slide-inner"><img([^>]*?)src="[^"]*"([^>]*?)><\/figure><\/a>/gi,
    (_m, a1, fullSrc, a3, img1, img2) =>
      `<a${a1}href="${fullSrc}"${a3}><figure class="swiper-slide-inner"><img${img1}src="${fullSrc}"${img2}></figure></a>`
  );

  // Cualquier thumb de Elementor restante → quitar (se descargan las full-size)
  out = out.replace(/\/wp-content\/uploads\/elementor\/thumbs\/[^"']+/g, (thumb) => {
    const base = thumb.replace(/-r[a-z0-9]+\.(png|jpe?g|webp)$/i, ".$1");
    const guess = base.replace(/\/elementor\/thumbs\//, "/").replace(/-[a-z0-9]{20,}\./, ".");
    return guess;
  });

  return out.replace(/\s+/g, " ").trim();
}

function extractPageContent(html) {
  const start = html.indexOf('<div class="page-content">');
  if (start === -1) return null;
  const innerStart = html.indexOf(">", start) + 1;
  const end = html.indexOf("</main>", innerStart);
  if (end === -1) return null;
  let chunk = html.slice(innerStart, end);
  const lastDiv = chunk.lastIndexOf("</div>");
  chunk = chunk.slice(0, lastDiv).trim();
  return localizeHtml(chunk);
}

fs.mkdirSync(outDir, { recursive: true });

const manifest = {};

for (const slug of SLUGS) {
  const refFile = path.join(refDir, `_ref-${slug}.html`);
  if (!fs.existsSync(refFile)) {
    console.warn(`SKIP (no ref): ${slug}`);
    continue;
  }
  const html = fs.readFileSync(refFile, "utf8");
  const content = extractPageContent(html);
  if (!content) {
    console.warn(`SKIP (no content): ${slug}`);
    continue;
  }
  // Módulo TS que exporta el contenido (así el proyecto no lleva archivos .html)
  const escaped = content.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
  const ts = `/** Página "${slug}" espejada del sitio original de Osseous.\n * Contenido generado por scripts/import-pages.js — no editar a mano. */\nexport default \`${escaped}\`;\n`;
  fs.writeFileSync(path.join(outDir, `${slug}.ts`), ts, "utf8");
  manifest[slug] = `${slug}.ts`;
  console.log(`OK ${slug}`);
}

fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(`\n${Object.keys(manifest).length} páginas importadas.`);
