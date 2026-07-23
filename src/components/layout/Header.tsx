// El header del sitio: logo, buscador, redes sociales y el menú de navegación.
// El menú sale de config/navigation.ts, así que para agregar o quitar opciones
// no hay que tocar este archivo. En celular el CSS lo reacomoda (logo centrado
// arriba y las opciones en renglones abajo).
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MAIN_NAV, SITE_LOGO } from "@/config/navigation";
import type { NavLinkItem } from "@/config/navigation";
import { SearchOverlay } from "./SearchOverlay";

// ¿Este enlace corresponde a la página donde estoy? (para subrayarlo)
function isActivePath(pathname: string, to: string) {
  // Los enlaces de ancla (como /#productos) no cuentan, porque si no,
  // "Productos" salía subrayado siempre que estabas en el inicio
  if (to.includes("#")) return false;
  return pathname === to || pathname.startsWith(`${to}/`);
}

// Reviso si alguna página hija de un menú desplegable es la actual, para subrayar
// también al padre (ej: estás en /metaliner y se subraya "Productos").
// El catálogo lo excluyo a propósito: ese subrayado le toca al enlace "Catálogo".
function hasActiveChild(item: NavLinkItem, pathname: string): boolean {
  return (item.children ?? []).some(
    (child) =>
      !child.to.startsWith("/catalogo") &&
      (isActivePath(pathname, child.to) || hasActiveChild(child, pathname))
  );
}

// Un elemento del menú con submenú desplegable. Se abre al pasar el mouse
// y soporta submenús dentro de submenús (Productos > Cadera > cada prótesis).
function NavDropdown({ item, depth = 0 }: Readonly<{ item: NavLinkItem; depth?: number }>) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  // "Productos" también se subraya cuando estás viendo la ficha de un producto
  const isActive =
    isActivePath(pathname, item.to) ||
    hasActiveChild(item, pathname) ||
    (item.label === "Productos" && pathname.startsWith("/ficha"));

  if (!hasChildren) {
    return (
      <Link className={isActive ? "is-active" : undefined} to={item.to}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className={`nav-drop nav-drop--d${depth}${open ? " is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link className={isActive ? "is-active" : undefined} to={item.to} onClick={() => setOpen(false)}>
        {item.label}
        <span className="nav-drop__arrow">▾</span>
      </Link>
      <div className="nav-drop__panel">
        {item.children!.map((child) =>
          child.children?.length ? (
            <NavDropdown key={child.to} item={child} depth={depth + 1} />
          ) : (
            <Link key={child.to} to={child.to} onClick={() => setOpen(false)}>
              {child.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export function Header() {
  const { pathname } = useLocation();
  // El enlace "Catálogo" se subraya tanto en el catálogo como viendo un producto suyo
  const isCatalog = pathname.startsWith("/catalogo") || pathname.startsWith("/producto");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="site-head">
      <div className="site-head__top">
        <div className="wrap">
          <Link className="site-head__logo" to="/" aria-label="Osseous inicio">
            <img src={SITE_LOGO} alt="Osseous" />
          </Link>
          <button
            type="button"
            className="site-head__search"
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar"
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
          <div className="site-head__social">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <nav className="site-head__nav">
        <div className="wrap site-head__nav-inner">
          {MAIN_NAV.map((item) => {
            if (item.children?.length) {
              return <NavDropdown key={item.label} item={item} />;
            }
            // Cada enlace decide su subrayado: el catálogo tiene su propia regla,
            // "Inicio" solo se marca estando exactamente en "/", y el resto por su ruta
            const active =
              item.highlight === "catalog"
                ? isCatalog
                : item.to === "/"
                  ? pathname === "/"
                  : isActivePath(pathname, item.to);
            return (
              <Link key={item.label} className={active ? "is-active" : undefined} to={item.to}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
