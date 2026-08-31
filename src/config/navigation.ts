// Aquí vive todo el menú de navegación del sitio. Lo separé en su propio archivo
// para que agregar, quitar o renombrar opciones sea editar esta lista y ya:
// el Header y el buscador lo leen de aquí solitos.

export type NavLinkItem = {
  label: string; // el texto en español por defecto
  labelKey: string; // la llave de traducción para i18n
  to: string; // a dónde te lleva
  highlight?: "catalog"; // regla especial de subrayado (solo la usa Catálogo)
  children?: NavLinkItem[]; // submenús (pueden tener sub-submenús)
};

// El menú es igual al del sitio original de Osseous; lo único que le agregué
// fue el enlace "Catálogo" en la barra
export const MAIN_NAV: NavLinkItem[] = [
  { label: "Inicio", labelKey: "nav.home", to: "/" },
  {
    label: "Productos",
    labelKey: "nav.products",
    to: "/productos",
    children: [
      { label: "Catálogo completo (Osseous)", labelKey: "nav.catalog_full", to: "/catalogo" },
      { label: "Instrumental Quirúrgico", labelKey: "cat.surgical", to: "/productos/instrumental-quirurgico" },
      { label: "Medicina Deportiva", labelKey: "cat.sports", to: "/productos/medicina-deportiva" },
      { label: "Prótesis de Cadera", labelKey: "cat.hip", to: "/productos/protesis-de-cadera" },
      { label: "Prótesis de Hombro", labelKey: "cat.shoulder", to: "/productos/protesis-de-hombro" },
      { label: "Prótesis de Rodilla", labelKey: "cat.knee", to: "/productos/reemplazo-de-rodilla" },
      { label: "Cirugía de Columna", labelKey: "cat.spine", to: "/productos/cirugia-de-columna" },
    ],
  },
  { label: "Catálogo", labelKey: "nav.catalog", to: "/catalogo", highlight: "catalog" },
  { label: "Empresa", labelKey: "nav.about", to: "/empresa" },
  { label: "Servicios", labelKey: "nav.services", to: "/servicios" },
  { label: "Blog", labelKey: "nav.blog", to: "/blog" },
  { label: "Fichas técnicas", labelKey: "nav.specs", to: "/fichas-tecnicas" },
  { label: "Contacto", labelKey: "nav.contact", to: "/contacto" },
];

// Los dos logos de Osseous: el gris para el header (fondo claro)
// y el blanco para el footer (fondo oscuro)
export const SITE_LOGO = "/wp-content/uploads/2025/01/logo-Osseous-img-3.png";
export const FOOTER_LOGO = "/wp-content/uploads/2024/12/logo-Osseous-img-2.png";
