// El buscador que se abre con la lupita del header. Es una capa a pantalla
// completa donde escribes y te salen resultados al instante, sin backend:
// como el sitio es chico, armo el índice de búsqueda aquí mismo en el navegador.
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_NAV } from "@/config/navigation";
import type { NavLinkItem } from "@/config/navigation";
import { asset, getCategories, getCategoryTitle, getProductTitle, makeSku } from "@/lib/catalog";
import { getOsseousCategories } from "@/lib/osseous-products";
import { useLanguage } from "@/context/LanguageContext";

// Un resultado de búsqueda: texto, enlace, grupo, SKU, foto e índice normalizado
type Hit = {
  label: string;
  to: string;
  group: string;
  sku?: string;
  image?: string;
  searchText: string;
};

// Quito acentos y mayúsculas para que la búsqueda no sea quisquillosa
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// Resalta en amarillo suave los términos que coincidan en el texto
function highlightMatch(text: string, terms: string[]): ReactNode {
  if (!terms.length) return text;
  const accentMap: Record<string, string> = {
    a: "[aáàäâ]",
    e: "[eéèëê]",
    i: "[iíìïî]",
    o: "[oóòöô]",
    u: "[uúùüû]",
    n: "[nñ]",
  };

  const patternParts = terms.map((term) =>
    term
      .split("")
      .map((char) => accentMap[char] || char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("")
  );

  try {
    const regex = new RegExp(`(${patternParts.join("|")})`, "gi");
    const parts = text.split(regex);
    if (parts.length <= 1) return text;
    return parts.map((part, i) => {
      const isMatch = terms.some((t) => normalize(part) === t);
      return isMatch ? (
        <mark key={i} className="search-highlight">
          {part}
        </mark>
      ) : (
        part
      );
    });
  } catch {
    return text;
  }
}

// Armo el índice con todo lo buscable: páginas, categorías y productos con SKU
function buildIndex(lang: "es" | "en", t: (key: string) => string): Hit[] {
  const hits: Hit[] = [];
  const osseousData = getOsseousCategories(lang);
  const seenKeys = new Set<string>();

  const walk = (items: NavLinkItem[]) => {
    for (const item of items) {
      if (!item.to.includes("#") && item.to !== "/productos") {
        const label = t(item.labelKey);
        const key = `page-${item.to}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          hits.push({
            label,
            to: item.to,
            group: t("search.pages_group"),
            searchText: normalize(`${label} ${t("search.pages_group")}`),
          });
        }
      }
      if (item.children) walk(item.children);
    }
  };
  walk(MAIN_NAV);

  // Indexar Catálogo Osseous (todos los 96 productos actualizados)
  for (const cat of getCategories()) {
    const catTitle = getCategoryTitle(cat.id, cat.title, lang);
    hits.push({
      label: catTitle,
      to: `/catalogo/${cat.id}`,
      group: t("search.catalog_group"),
      searchText: normalize(`${catTitle} ${t("search.catalog_group")}`),
    });

    for (const p of cat.products) {
      const prodTitle = getProductTitle(p.id, p.title, lang);
      const sku = makeSku(cat.id, p.id);
      const normTitle = normalize(prodTitle);
      seenKeys.add(normTitle);

      hits.push({
        label: prodTitle,
        to: `/producto/${p.id}`,
        group: catTitle,
        sku,
        image: p.image ? asset(p.image) : undefined,
        searchText: normalize(`${prodTitle} ${catTitle} ${sku}`),
      });
    }
  }

  // Indexar Productos de Osseous (fichas históricas, evitando duplicar títulos ya indexados)
  for (const cat of osseousData) {
    for (const p of cat.products) {
      const normTitle = normalize(p.title);
      if (!seenKeys.has(normTitle)) {
        seenKeys.add(normTitle);
        const sku = (p as any).sku || "";
        hits.push({
          label: p.title,
          to: `/ficha/${cat.id}/${p.slug}`,
          group: cat.title,
          sku: sku || undefined,
          image: p.images && p.images[0] ? p.images[0] : undefined,
          searchText: normalize(`${p.title} ${cat.title} ${sku}`),
        });
      }
    }
  }

  return hits;
}

export function SearchOverlay({ open, onClose }: Readonly<{ open: boolean; onClose: () => void }>) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang, t } = useLanguage();

  // El índice se re-calcula si el idioma cambia
  const index = useMemo(() => buildIndex(lang, t), [lang, t]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";

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

  // Búsqueda inteligente por palabras sueltas
  const q = normalize(query.trim());
  const terms = q.split(/\s+/).filter(Boolean);

  const results =
    terms.length > 0 && terms[0].length >= 2
      ? index
          .filter((h) => terms.every((term) => h.searchText.includes(term)))
          .slice(0, 16)
      : [];

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
        {terms.length > 0 && terms[0].length >= 2 && results.length === 0 && (
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
              <b>{highlightMatch(hit.label, terms)}</b>
              <small>
                {hit.sku && <span className="search-overlay__sku-pill">{hit.sku}</span>}
                <span>{hit.group}</span>
              </small>
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
