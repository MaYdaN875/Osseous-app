// Aquí vive todo el menú de navegación del sitio. Lo separé en su propio archivo
// para que agregar, quitar o renombrar opciones sea editar esta lista y ya:
// el Header y el buscador lo leen de aquí solitos.

export type NavLinkItem = {
  label: string; // el texto que se ve en el menú
  to: string; // a dónde te lleva
  highlight?: "catalog"; // regla especial de subrayado (solo la usa Catálogo)
  children?: NavLinkItem[]; // submenús (pueden tener sub-submenús)
};

// El menú es igual al del sitio original de Osseous; lo único que le agregué
// fue el enlace "Catálogo" en la barra
export const MAIN_NAV: NavLinkItem[] = [
  { label: "Inicio", to: "/" },
  {
    label: "Productos",
    to: "/productos",
    children: [
      { label: "Prótesis de Hombro", to: "/productos/protesis-de-hombro" },
      { label: "Reemplazo de Rodilla", to: "/productos/reemplazo-de-rodilla" },
      { label: "Prótesis de Cadera", to: "/productos/protesis-de-cadera" },
      { label: "Instrumental Quirúrgico", to: "/productos/instrumental-quirurgico" },
      { label: "Catálogo completo (Chunli)", to: "/catalogo" },
    ],
  },
  { label: "Catálogo", to: "/catalogo", highlight: "catalog" },
  { label: "Empresa", to: "/empresa" },
  { label: "Servicios", to: "/servicios" },
  { label: "Blog", to: "/blog" },
  { label: "Fichas técnicas", to: "/fichas-tecnicas" },
  { label: "Contacto", to: "/contacto" },
];

// Los dos logos de Osseous: el gris para el header (fondo claro)
// y el blanco para el footer (fondo oscuro)
export const SITE_LOGO = "/wp-content/uploads/2025/01/logo-Osseous-img-3.png";
export const FOOTER_LOGO = "/wp-content/uploads/2024/12/logo-Osseous-img-2.png";
