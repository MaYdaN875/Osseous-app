// El header del sitio: logo, buscador, redes sociales y el menú de navegación.
// El menú sale de config/navigation.ts, así que para agregar o quitar opciones
// no hay que tocar este archivo. En celular el CSS lo reacomoda (logo centrado
// arriba y las opciones en renglones abajo).
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FOOTER_LOGO, MAIN_NAV, SITE_LOGO } from "@/config/navigation";
import type { NavLinkItem } from "@/config/navigation";
import { SearchOverlay } from "./SearchOverlay";
import { useLanguage } from "@/context/LanguageContext";

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
function isMobileNav() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function NavDropdown({
  item,
  depth = 0,
  onNavigate,
}: Readonly<{ item: NavLinkItem; depth?: number; onNavigate?: () => void }>) {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  // "Productos" también se subraya cuando estás viendo la ficha de un producto
  const isActive =
    isActivePath(pathname, item.to) ||
    hasActiveChild(item, pathname) ||
    (item.labelKey === "nav.products" && pathname.startsWith("/ficha"));

  if (!hasChildren) {
    return (
      <Link className={isActive ? "is-active" : undefined} to={item.to} onClick={onNavigate}>
        {t(item.labelKey)}
      </Link>
    );
  }

  return (
    <div
      className={`nav-drop nav-drop--d${depth}${open ? " is-open" : ""}`}
      onMouseEnter={() => { if (!isMobileNav()) setOpen(true); }}
      onMouseLeave={() => { if (!isMobileNav()) setOpen(false); }}
    >
      <Link
        className={isActive ? "is-active" : undefined}
        to={item.to}
        onClick={(e) => {
          if (isMobileNav()) {
            e.preventDefault();
            setOpen((value) => !value);
            return;
          }
          setOpen(false);
          onNavigate?.();
        }}
      >
        {t(item.labelKey)}
        <span className="nav-drop__arrow">▼</span>
      </Link>
      <div className="nav-drop__panel">
        {item.children!.map((child) =>
          child.children?.length ? (
            <NavDropdown key={child.labelKey} item={child} depth={depth + 1} onNavigate={onNavigate} />
          ) : (
            <Link key={child.labelKey} to={child.to} onClick={() => { setOpen(false); onNavigate?.(); }}>
              {t(child.labelKey)}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={dropdownRef}
      className={`lang-dropdown ${open ? "is-open" : ""}`}
    >
      <button
        type="button"
        className="lang-dropdown__trigger"
        aria-label="Seleccionar idioma / Select language"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" /></svg>
      </button>
      <div className="lang-dropdown__menu">
        <button
          type="button"
          className={`lang-dropdown__item ${lang === "es" ? "is-active" : ""}`}
          onClick={() => {
            setLang("es");
            setOpen(false);
          }}
        >
          Español
        </button>
        <button
          type="button"
          className={`lang-dropdown__item ${lang === "en" ? "is-active" : ""}`}
          onClick={() => {
            setLang("en");
            setOpen(false);
          }}
        >
          English
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const isCatalog = pathname.startsWith("/catalogo") || pathname.startsWith("/producto/");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileMenuOpen]);

  return (
    <header className="site-head">
      <div className="site-head__top">
        <div className="wrap">
          <Link className="site-head__logo" to="/" aria-label="Osseous inicio">
            <img src={SITE_LOGO} alt="Osseous" />
          </Link>

          <div className="site-head__actions">
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
            <a href="https://www.instagram.com/osseous_mx?igsi=eXFoZW5xa3Rrbnpq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@osseous_mx?_r=1&_t=ZS-99LTgsWXENI" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
            <LanguageSwitcher />
            </div>

            <button
              type="button"
              className={`site-head__hamburger ${mobileMenuOpen ? "is-open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className={`site-head__nav-overlay ${mobileMenuOpen ? "is-active" : ""}`} onClick={() => setMobileMenuOpen(false)}></div>
      <nav className={`site-head__nav ${mobileMenuOpen ? "is-mobile-open" : ""}`}>
        {/* Encabezado del menú móvil (oculto en escritorio) */}
        <div className="site-head__nav-mobile-header">
          <Link className="site-head__logo" to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={FOOTER_LOGO} alt="Osseous" />
            <span className="site-head__logo-tagline">Innovación, confianza y resultados.</span>
          </Link>
        </div>

        <div className="wrap site-head__nav-inner">
          {MAIN_NAV.map((item) => {
            if (item.children?.length) {
              return (
                <NavDropdown
                  key={item.labelKey}
                  item={item}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              );
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
              <Link key={item.labelKey} className={active ? "is-active" : undefined} to={item.to} onClick={() => setMobileMenuOpen(false)}>
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>

        {/* Footer del menú móvil (oculto en escritorio) */}
        <div className="site-head__nav-mobile-footer">
          <Link to="/contacto" className="btn-contact-mobile" onClick={() => setMobileMenuOpen(false)}>
            Contáctanos
          </Link>
          <div className="mobile-social">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
            </a>
            <a href="https://www.instagram.com/osseous_mx?igsi=eXFoZW5xa3Rrbnpq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /></svg>
            </a>
            <a href="https://www.tiktok.com/@osseous_mx?_r=1&_t=ZS-99LTgsWXENI" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
            </a>
          </div>
        </div>
      </nav>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
