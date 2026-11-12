// Funciones para leer el catálogo Osseous. Los datos viven en un JSON
// (src/data/catalog-data.json) que se generó con el script scripts/scrape.js,
// y aquí tengo las funciones para consultarlo desde cualquier parte de la app.
import type { CatalogData, Category, Product } from "@/types/catalog";
import raw from "@/data/catalog-data.json";
import titlesEs from "@/data/catalog-titles-es.json";
import titlesEn from "@/data/catalog-titles-en.json";

import {
  CATEGORY_DESC_ES,
  CATEGORY_SPECS_ES,
  CATEGORY_DESC_EN,
  CATEGORY_SPECS_EN,
  PRODUCT_DESC_ES,
  PRODUCT_DESC_EN,
  PRODUCT_SPECS_ES,
  PRODUCT_SPECS_EN,
  PRODUCT_FEATURES_ES,
  PRODUCT_FEATURES_EN,
} from "@/config/catalog-meta";

export function getCategoryTitle(id: number, originalTitle: string, lang: "es" | "en"): string {
  const dict = lang === "en" ? titlesEn.categories : titlesEs.categories;
  return (dict as Record<string, string>)[String(id)] ?? originalTitle;
}

export function getProductTitle(id: number, originalTitle: string, lang: "es" | "en"): string {
  const dict = lang === "en" ? titlesEn.products : titlesEs.products;
  return (dict as Record<string, string>)[String(id)] ?? originalTitle;
}

export function getCategoryDesc(id: number, lang: "es" | "en"): string {
  const dict = lang === "en" ? CATEGORY_DESC_EN : CATEGORY_DESC_ES;
  return dict[id] ?? "";
}

export function getCategorySpecs(id: number, lang: "es" | "en"): [string, string][] {
  const dict = lang === "en" ? CATEGORY_SPECS_EN : CATEGORY_SPECS_ES;
  return dict[id] ?? [];
}

export function getProductDesc(id: number | undefined, lang: "es" | "en"): string | undefined {
  if (!id) return undefined;
  const dict = lang === "en" ? PRODUCT_DESC_EN : PRODUCT_DESC_ES;
  return dict[id];
}

export function getProductSpecs(productId: number | undefined, categoryId: number, lang: "es" | "en"): [string, string][] {
  if (productId) {
    const dict = lang === "en" ? PRODUCT_SPECS_EN : PRODUCT_SPECS_ES;
    if (dict[productId] && dict[productId].length > 0) {
      return dict[productId];
    }
  }
  return getCategorySpecs(categoryId, lang);
}

export function getProductFeatures(productId: number | undefined, lang: "es" | "en"): string[] | undefined {
  if (!productId) return undefined;
  const dict = lang === "en" ? PRODUCT_FEATURES_EN : PRODUCT_FEATURES_ES;
  return dict[productId];
}

const data = raw as CatalogData;

// Normaliza las rutas de imágenes del JSON: algunas venían relativas ("./algo.jpg")
// y aquí me aseguro de que todas empiecen con "/" para que carguen desde public/
export function asset(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/")) return path;
  return `/${path.replace(/^\.?\//, "")}`;
}

export function getCategories(): Category[] {
  return data.categories;
}

export function getTotalProducts(): number {
  return data.categories.reduce((n, c) => n + c.products.length, 0);
}

export function getCategoryById(id: number): Category | undefined {
  return data.categories.find((c) => c.id === id);
}

// Busca un producto por id en todas las categorías y me regresa también
// su categoría, porque casi siempre necesito las dos cosas juntas
export function getProductById(id: number): { product: Product; category: Category } | undefined {
  for (const category of data.categories) {
    const product = category.products.find((p) => p.id === id);
    if (product) return { product, category };
  }
  return undefined;
}

// Invento un SKU presentable para la vista de detalle, tipo OSS-06-012
export function makeSku(categoryId: number, productId: number): string {
  return `OSS-${String(categoryId).padStart(2, "0")}-${String(productId).padStart(3, "0")}`;
}
