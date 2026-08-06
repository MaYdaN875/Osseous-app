// El buscador que se abre con la lupita del header. Es una capa a pantalla
// completa donde escribes y te salen resultados al instante, sin backend:
// como el sitio es chico, armo el índice de búsqueda aquí mismo en el navegador.
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_NAV } from "@/config/navigation";
import type { NavLinkItem } from "@/config/navigation";
import { asset, getCategories } from "@/lib/catalog";
import osseousDataEs from "@/data/osseous-products.json";
import osseousDataEn from "@/data/osseous-products-en.json";
import { useLanguage } from "@/context/LanguageContext";

// Un resultado de búsqueda: qué texto muestro, a dónde te lleva,
// en qué grupo lo acomodo y su foto (si es un producto)
type Hit = {
  label: string;
  to: string;
  group: string;
  image?: string;
};

// Armo el índice con todo lo buscable: las páginas del menú (recorriendo también
// los submenús) más todas las categorías y productos del catálogo
function buildIndex(lang: "es" | "en", t: (key: string) => string): Hit[] {
  const hits: Hit[] = [];
  const osseousData = lang === "en" ? osseousDataEn : osseousDataEs;

  const walk = (items: NavLinkItem[]) => {
    for (const item of items) {
      // Excluir enlaces viejos o vacíos y el ancla del menú principal
      if (!item.to.includes("#") && item.to !== "/productos") {
        hits.push({ label: t(item.labelKey), to: item.to, group: t("search.pages_group") });
      }
      if (item.children) walk(item.children);
    }
  };
  walk(MAIN_NAV);

  // Indexar Catálogo Chunli
  for (const cat of getCategories()) {
    hits.push({ label: cat.title, to: `/catalogo/${cat.id}`, group: t("search.catalog_group") });
    for (const p of cat.products) {
      hits.push({
        label: p.title,
        to: `/producto/${p.id}`,
        group: cat.title,
        image: p.image ? asset(p.image) : undefined,
      });
    }
  }

  // Indexar Productos de Osseous
  for (const cat of osseousData) {
    hits.push({ label: cat.title, to: `/productos/${cat.id}`, group: t("search.products_group") });
    for (const p of cat.products) {
      hits.push({
        label: p.title,
        to: `/ficha/${cat.id}/${p.slug}`,
        group: cat.title,
        image: p.images && p.images[0] ? p.images[0] : undefined,
      });
    }
  }

  return hits;
}

// Quito acentos y mayúsculas para que la búsqueda no sea quisquillosa:
// así "protesis" encuentra "Prótesis" sin problema
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function SearchOverlay({ open, onClose }: Readonly<{ open: boolean; onClose: () => void }>) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang, t } = useLanguage();

  // El índice se re-calcula si el idioma cambia
  const index = useMemo(() => buildIndex(lang, t), [lang, t]);

  // Cada que se abre el buscador: limpio lo que hubiera escrito antes,
  // pongo el cursor en el input y bloqueo el scroll de la página de atrás
  useEffect(() => {
    if (!open) return;
    setQuery("");
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";

    // Con Escape también se cierra, como uno esperaría
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  // Empiezo a buscar desde 2 letras y muestro máximo 12 resultados para no saturar
  const q = normalize(query.trim());
  const results = q.length >= 2 ? index.filter((h) => normalize(h.label).includes(q)).slice(0, 12) : [];

  const go = (to: string) => {
    onClose();
    navigate(to);
  };

  return (
    <div className="search-overlay">
      <div className="search-overlay__bar">
        <svg className="search-overlay__icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          placeholder={t("search.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t("search.placeholder")}
        />
        <button type="button" className="search-overlay__close" onClick={onClose} aria-label="Cerrar buscador">
          ✕
        </button>
      </div>

      <div className="search-overlay__results">
        {q.length >= 2 && results.length === 0 && (
          <p className="search-overlay__empty">{t("search.no_results")}</p>
        )}
        {results.map((hit) => (
          <button
            key={`${hit.group}-${hit.to}-${hit.label}`}
            type="button"
            className="search-overlay__item"
            onClick={() => go(hit.to)}
          >
            {hit.image ? (
              <img src={hit.image} alt="" loading="lazy" />
            ) : (
              <span className="search-overlay__item-dot" aria-hidden="true" />
            )}
            <span className="search-overlay__item-text">
              <b>{hit.label}</b>
              <small>{hit.group}</small>
            </span>
            <span className="search-overlay__item-arrow" aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
