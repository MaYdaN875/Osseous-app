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
    to: "/#productos",
    children: [
      {
        label: "Prótesis de Hombro",
        to: "/protesis-de-hombro",
        children: [
          { label: "Cabeza de cerámica", to: "/cabeza-de-ceramica" },
          { label: "Cabeza femoral metálica", to: "/cabeza-femoral-metalica" },
          { label: "Copa doble movilidad cementada", to: "/copa-doble-movilidad-cementada" },
          { label: "Copa doble movilidad no cementada", to: "/copa-doble-movilidad-no-cementada" },
          { label: "Copa no cementada primaria", to: "/copa-no-cementada-primaria" },
          { label: "Metaliner", to: "/metaliner" },
          { label: "PE-Liner", to: "/pe-liner" },
        ],
      },
      {
        label: "Reemplazo de Rodilla",
        to: "/reemplazo-de-rodilla",
        children: [{ label: "Rodilla primaria CR", to: "/rodilla-primaria-cr" }],
      },
      {
        label: "Prótesis de Cadera",
        to: "/protesis-de-cadera",
        children: [
          { label: "Inserto acetabular primario", to: "/inserto-acetabular-primario" },
          { label: "Vastago Cementado primario con copas", to: "/vastago-cementado-primario-con-copas" },
          { label: "Vástago Primario no cementado con copas", to: "/vastago-primario-no-cementado-con-copas" },
          { label: "Vástago revisión cementado con copa", to: "/vastago-revision-cementado-con-copa" },
          {
            label: "Vástago revisión no cementado 200 con copas",
            to: "/vastago-revision-no-cementado-200-con-copas",
          },
          {
            label: "Vástago revisión No cementado 250 con copas",
            to: "/vastago-revision-no-cementado-250-con-copas",
          },
        ],
      },
      {
        label: "Instrumental Quirúrgico",
        to: "/instrumental-quirurgico",
        children: [{ label: "Charola cadera primaria", to: "/charola-cadera-primaria" }],
      },
      { label: "Catálogo completo", to: "/catalogo" },
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
