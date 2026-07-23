// Aquí está toda la lógica para sacar las "fichas" de producto.
// Contexto: en el sitio original, las páginas de Rodilla/Cadera/Hombro traen los
// productos como tarjetas con carrusel de fotos y acordeones de información.
// Yo necesito esos datos por separado (fotos, título, secciones) para armar la
// vista de detalle (/ficha/...), así que en vez de tener los datos duplicados en
// otro lado, los leo directo del contenido de la página. Una sola fuente de verdad.

export type FichaSection = { label: string; html: string };

export type Ficha = {
  id: string;
  title: string;
  images: string[];
  sections: FichaSection[];
};

// Mismo glob que usa MirroredPage: el contenido de cada página espejada
const pages = import.meta.glob<string>("../content/pages/*.ts", {
  import: "default",
});

// Encuentro las tarjetas de producto: cada una es el contenedor (.e-con) que
// envuelve un carrusel de imágenes. Uso un Set para no repetir ninguna.
export function findProductCards(root: ParentNode): HTMLElement[] {
  const cards: HTMLElement[] = [];
  const seen = new Set<Element>();
  root.querySelectorAll(".elementor-widget-image-carousel").forEach((carousel) => {
    const card = carousel.closest<HTMLElement>(".e-con");
    if (card && !seen.has(card)) {
      seen.add(card);
      cards.push(card);
    }
  });
  return cards;
}

// El título del producto es el texto que está junto al carrusel dentro de la tarjeta
function getTitle(card: HTMLElement): string {
  const direct = card.querySelector<HTMLElement>(":scope > .elementor-widget-text-editor");
  const text = (direct ?? card.querySelector<HTMLElement>(".elementor-widget-text-editor"))?.textContent ?? "";
  return text.replace(/\s+/g, " ").trim();
}

// Junto todas las fotos del carrusel de la tarjeta (sin repetidas)
function getImages(card: HTMLElement): string[] {
  const srcs = Array.from(card.querySelectorAll<HTMLImageElement>(".swiper-slide-image"))
    .map((img) => img.getAttribute("src") ?? "")
    .filter(Boolean);
  return Array.from(new Set(srcs));
}

// Saco las secciones del acordeón ("Información", "Medidas"...) con su contenido.
// Clono cada sección y le quito el <summary> para quedarme solo con el contenido de adentro.
function getSections(card: HTMLElement): FichaSection[] {
  const accordion = card.querySelector<HTMLElement>(
    ":scope > .elementor-widget-n-accordion .e-n-accordion"
  );
  if (!accordion) return [];
  const items = accordion.querySelectorAll<HTMLDetailsElement>(":scope > details.e-n-accordion-item");
  const sections: FichaSection[] = [];
  items.forEach((item) => {
    const label =
      item.querySelector<HTMLElement>(".e-n-accordion-item-title-text")?.textContent?.trim() ??
      item.querySelector("summary")?.textContent?.trim() ??
      "";
    const clone = item.cloneNode(true) as HTMLElement;
    clone.querySelector("summary")?.remove();
    sections.push({ label, html: clone.innerHTML });
  });
  return sections;
}

// Arma la lista de fichas a partir de un contenido ya renderizado en pantalla
export function parseFichasFromRoot(root: ParentNode): Ficha[] {
  return findProductCards(root).map((card, i) => ({
    id: String(i),
    title: getTitle(card) || `Producto ${i + 1}`,
    images: getImages(card),
    sections: getSections(card),
  }));
}

// Esta es para cuando entras directo a una /ficha/... por URL (o recargas ahí):
// como la página de productos no está renderizada, cargo su contenido, lo parseo
// en memoria con DOMParser y saco las fichas de ahí.
export async function loadFichas(slug: string): Promise<Ficha[]> {
  const loader = pages[`../content/pages/${slug}.ts`];
  if (!loader) return [];
  const html = await loader();
  const doc = new DOMParser().parseFromString(html, "text/html");
  const fichas = parseFichasFromRoot(doc.body);
  return fichas;
}
