// Estas son las páginas del sitio original que funcionan como listado de productos
// (las que tienen tarjetas con carrusel). Las tengo identificadas aquí para saber
// cuáles llevan botón de "volver" y qué título mostrar en las migas de la ficha.
export const PRODUCT_PAGE_TITLES: Record<string, string> = {
  "reemplazo-de-rodilla": "Reemplazo de Rodilla",
  "protesis-de-cadera": "Prótesis de Cadera",
  "protesis-de-hombro": "Prótesis de Hombro",
  "instrumental-quirurgico": "Instrumental Quirúrgico",
};

// ¿Esta página es un listado de productos?
export function isProductPage(slug: string): boolean {
  return slug in PRODUCT_PAGE_TITLES;
}
