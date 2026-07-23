// Funciones para leer el catálogo Chunli. Los datos viven en un JSON
// (src/data/catalog-data.json) que se generó con el script scripts/scrape.js,
// y aquí tengo las funciones para consultarlo desde cualquier parte de la app.
import type { CatalogData, Category, Product } from "@/types/catalog";
import raw from "@/data/catalog-data.json";

// Re-exporto las descripciones y especificaciones para importar todo de un solo lugar
export { CATEGORY_DESC, CATEGORY_SPECS } from "@/config/catalog-meta";

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
