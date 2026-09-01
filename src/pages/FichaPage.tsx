// Detalle de producto desde la sección Productos (/ficha/:slug/:productSlug).
// Mantiene exactamente el mismo diseño visual, datos, chips y especificaciones del catálogo (/producto/:id).
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import categoriesDataEs from "@/data/osseous-products.json";
import categoriesDataEn from "@/data/osseous-products-en.json";
import rawCatalog from "@/data/catalog-data.json";
import { useLanguage } from "@/context/LanguageContext";
import {
  getCategoryDesc,
  getCategorySpecs,
  getCategoryTitle,
  makeSku,
  asset,
} from "@/lib/catalog";

// Avisito flotante
function showToast(message: string) {
  const existing = document.getElementById("osseous-toast");
  existing?.remove();
  const toast = document.createElement("div");
  toast.id = "osseous-toast";
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    window.setTimeout(() => toast.remove(), 300);
  }, 3200);
}

const CATEGORY_MAP: Record<string, number> = {
  "cirugia-de-columna": 4,
  "reemplazo-de-rodilla": 6,
  "protesis-de-cadera": 6,
  "protesis-de-hombro": 6,
  "medicina-deportiva": 2,
  "instrumental-quirurgico": 5,
};

export function FichaPage() {
  const { slug = "", productSlug = "" } = useParams();
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);

  useElementorStyles(null);

  const categoriesData = lang === "en" ? categoriesDataEn : categoriesDataEs;

  const category = useMemo(() => {
    return categoriesData.find((c: any) => c.id === slug);
  }, [slug, categoriesData]);

  const ficha = useMemo(() => {
    if (!category) return null;
    return category.products.find((p: any) => p.slug === productSlug);
  }, [category, productSlug]);

  useEffect(() => {
    setActive(0);
  }, [productSlug]);

  const related = useMemo(() => {
    if (!category || !ficha) return [];
    return category.products.filter((p: any) => p.slug !== productSlug && p.images?.length > 0).slice(0, 3);
  }, [category, ficha, productSlug]);

  if (!category || !ficha) {
    return (
      <main className="section">
        <div className="wrap">
          <p>{t("search.no_results")}</p>
          <Link className="back-link" to={`/productos/${slug}`}>
            {t("detail.back_to", { category: category?.title ?? "" })}
          </Link>
        </div>
      </main>
    );
  }

  const catId = CATEGORY_MAP[slug] ?? 6;
  const categoryTitle = t(`categories.${category.id}`) || category.title;
  const categoryCatalogTitle = getCategoryTitle(catId, categoryTitle, lang);
  const categoryDesc = getCategoryDesc(catId, lang) || category.description;

  // Encontrar el producto correspondiente en el catálogo si existe
  const catalogCategory = rawCatalog.categories.find((c: any) => c.id === catId);
  const matchedCatalogProduct = catalogCategory?.products.find((cp: any) => {
    if (!ficha.images?.[0]) return false;
    const cleanImg = ficha.images[0].replace(/^\//, '');
    const cleanCpImg = cp.image.replace(/^\//, '');
    return cleanImg === cleanCpImg || ficha.title.toLowerCase().includes(cp.title.toLowerCase()) || cp.title.toLowerCase().includes(ficha.title.toLowerCase());
  });

  const productIndex = category.products.findIndex((p: any) => p.slug === productSlug);
  const sku = matchedCatalogProduct 
    ? makeSku(catId, matchedCatalogProduct.id) 
    : makeSku(catId, productIndex + 1);

  const translatedDesc = lang === "en"
    ? `${categoryDesc}. Product from Osseous's ${categoryCatalogTitle} line.`
    : `${categoryDesc}. Producto de la línea ${categoryCatalogTitle} de Osseous.`;

  // Especificaciones técnicas estructuradas del catálogo
  const catalogSpecs = getCategorySpecs(catId, lang);

  // Extraer secciones adicionales de Elementor si existen (ej. Medidas con acordes)
  const additionalSections = ficha.sections?.filter(
    (s: any) => s.label !== "Información" && s.label !== "Information"
  ) || [];

  return (
    <main className="section">
      <div className="wrap">
        <Link className="back-link" to={`/productos/${slug}`}>
          <span className="circle">←</span> {t("detail.back_to", { category: categoryTitle })}
        </Link>
        <nav className="detail-crumbs">
          <Link to="/">{t("detail.home")}</Link>
          <span className="sep">›</span>
          <Link to="/productos">{t("nav.products")}</Link>
          <span className="sep">›</span>
          <Link to={`/productos/${slug}`}>{categoryTitle}</Link>
          <span className="sep">›</span>
          <span className="current">{ficha.title}</span>
        </nav>

        <div className="detail">
          {/* Columna Izquierda: Galería */}
          <div id="product-gallery" className="detail__gallery reveal reveal--left">
            <div className="detail__stage">
              <img id="gallery-main" src={asset(ficha.images[active])} alt={ficha.title} />
            </div>
            {ficha.images.length > 1 && (
              <div className="detail__thumbs">
                {ficha.images.map((img: string, i: number) => (
                  <button
                    key={i}
                    type="button"
                    className={`detail__thumb ${i === active ? "is-active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <img src={asset(img)} alt={`Thumb ${i}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna Derecha: Info */}
          <div className="detail__info reveal reveal--right">
            <div>
              <span className="detail__sku">SKU: {sku}</span>
              <h1 className="detail__title">{ficha.title}</h1>
              <p className="detail__desc">{translatedDesc}</p>
            </div>

            <div className="detail__chips">
              <span className="chip">ISO 13485</span>
              <span className="chip">FDA Approved</span>
              <span className="chip">CE Mark</span>
            </div>

            <hr />

            {/* Especificaciones Técnicas */}
            {catalogSpecs && catalogSpecs.length > 0 && (
              <div>
                <h3 className="detail__spec-title">{t("catalog.specs")}</h3>
                <div className="spec-table">
                  {catalogSpecs.map(([k, v], idx) => (
                    <div className="spec-table__row" key={idx}>
                      <div>{k}</div>
                      <div>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Secciones adicionales (Medidas, etc.) si las tiene */}
            {additionalSections.length > 0 && (
              <div style={{ marginTop: '24px' }}>
                {additionalSections.map((section: any) => {
                  const hasAccordion = section.html.includes('e-n-accordion-item');
                  
                  if (hasAccordion) {
                    const detailsBlocks = section.html.split(/<details[^>]*>/i).filter((b: string) => b.includes('accordion-item-title-text'));
                    const parsedItems: { title: string; values: string[] }[] = [];
                    
                    for (const block of detailsBlocks) {
                      const titleMatch = /<div class="e-n-accordion-item-title-text">\s*(.*?)\s*<\/div>/i.exec(block);
                      const title = titleMatch ? titleMatch[1].trim() : '';
                      const values: string[] = [];
                      let m;
                      const lrx = /<li>(.*?)<\/li>/gi;
                      while ((m = lrx.exec(block)) !== null) {
                        values.push(m[1].replace(/<[^>]+>/g, '').trim());
                      }
                      if (title) parsedItems.push({ title, values });
                    }
                    
                    if (parsedItems.length > 0) {
                      return (
                        <div key={section.label} style={{ marginTop: '20px' }}>
                          <h3 className="detail__spec-title">{section.label}</h3>
                          <div className="spec-table" style={{ overflow: 'hidden' }}>
                            {parsedItems.map((item, idx) => (
                              <div className="spec-table__row" key={idx}>
                                <div style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{item.title}</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '10px 14px' }}>
                                  {item.values.map((v, vi) => (
                                    <span key={vi} style={{
                                      background: '#f5f5f5',
                                      border: '1px solid #e0e0e0',
                                      borderRadius: '999px',
                                      padding: '4px 14px',
                                      fontSize: '13px',
                                      fontWeight: 500,
                                      color: '#222'
                                    }}>{v}</span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                  }
                  
                  return (
                    <div key={section.label} className="ficha-detail-section" style={{ marginTop: '20px' }}>
                      <h3 className="detail__spec-title">{section.label}</h3>
                      <div
                        className="ficha-detail-section__body site-page__content elementor-kit-6"
                        dangerouslySetInnerHTML={{ __html: section.html }}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* Botones de acción */}
            <div className="detail__actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => showToast(t("catalog.quote_toast"))}
              >
                {t("detail.availability")}
              </button>
              <div className="detail__actions-row">
                <button type="button" className="btn-secondary" onClick={() => showToast(t("catalog.pdf_toast"))}>
                  {t("catalog.pdf_btn")}
                </button>
                <button type="button" className="btn-secondary" onClick={() => showToast(t("catalog.3d_toast"))}>
                  {t("catalog.3d_btn")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {related.length > 0 && (
          <section className="related">
            <h2 className="related__title">{t("catalog.compatible")}</h2>
            <div className="related__grid">
              {related.map((r: any) => (
                <Link
                  className="related-card reveal"
                  key={r.slug}
                  to={`/ficha/${slug}/${r.slug}`}
                >
                  <div className="related-card__media">
                    <img src={asset(r.images[0])} alt={r.title} loading="lazy" />
                  </div>
                  <div className="related-card__body">
                    <span className="related-card__cat">{categoryTitle}</span>
                    <h3 className="related-card__name">{r.title}</h3>
                    <div className="related-card__foot">
                      <span>{t("categories.view_details")}</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
