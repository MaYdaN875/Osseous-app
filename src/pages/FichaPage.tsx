// Detalle de producto desde la sección Productos (/ficha/:slug/:productSlug).
// Ahora comparte el mismo diseño visual que el detalle del catálogo (/producto/:id):
// galería con stage + thumbs, badges, secciones estilizadas y productos relacionados.
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import categoriesDataEs from "@/data/osseous-products.json";
import categoriesDataEn from "@/data/osseous-products-en.json";
import { useLanguage } from "@/context/LanguageContext";
import { getCategorySpecs, asset } from "@/lib/catalog";

// Avisito flotante (reutilizo la misma lógica del catálogo)
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

export function FichaPage() {
  const { slug = "", productSlug = "" } = useParams();
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);

  // Los estilos de Elementor siguen siendo necesarios para el HTML de las secciones
  useElementorStyles(null);

  const categoriesData = lang === "en" ? categoriesDataEn : categoriesDataEs;

  const category = useMemo(() => {
    return categoriesData.find((c: any) => c.id === slug);
  }, [slug, categoriesData]);

  const ficha = useMemo(() => {
    if (!category) return null;
    return category.products.find((p: any) => p.slug === productSlug);
  }, [category, productSlug]);

  // Si cambias de producto, la galería vuelve a empezar en la primera foto
  useEffect(() => {
    setActive(0);
  }, [productSlug]);

  // Productos relacionados: otros de la misma categoría (hasta 3)
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

  // Título de categoría como SKU (ej: PRÓTESIS DE RODILLA)
  const parentTitle = t(`categories.${category.id}`) || category.title;
  
  // Extraer la sección de Información
  const infoSection = ficha.sections.find((s: any) => s.label === "Información" || s.label === "Information");
  
  // Generar especificaciones dinámicas a partir del texto de Información
  const dynamicSpecs = useMemo(() => {
    if (!infoSection) return [];
    
    // Extraer items de lista <li>
    const html = infoSection.html;
    const regex = /<li[^>]*>(.*?)<\/li>/gi;
    let match;
    const extracted: [string, string][] = [];
    
    let counter = 1;
    while ((match = regex.exec(html)) !== null) {
      let text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      let lower = text.toLowerCase();
      let key = "Característica " + counter;
      
      if (lower.includes('aleación') || lower.includes('acero') || lower.includes('titanio') || lower.includes('material')) {
        key = "Material";
      } else if (lower.includes('tamaño') || lower.includes('diámetro') || lower.includes('talla') || lower.includes('conicidad')) {
        key = "Dimensiones";
      } else if (lower.includes('tecnología') || lower.includes('precisión') || lower.includes('superficie')) {
        key = "Fabricación";
      } else if (lower.includes('uso') || lower.includes('aplicación') || lower.includes('indicación')) {
        key = "Aplicación";
      }
      
      extracted.push([key, text]);
      counter++;
    }
    
    return extracted;
  }, [infoSection]);

  const specs = dynamicSpecs;

  return (
    <main className="ficha section">
      <div className="wrap">
        {/* Breadcrumb idéntico al catálogo */}
        <nav className="detail-crumbs">
          <Link to="/">{t("detail.home")}</Link>
          <span className="sep">›</span>
          <Link to="/productos">{t("nav.products")}</Link>
          <span className="sep">›</span>
          <Link to={`/productos/${slug}`}>{parentTitle}</Link>
          <span className="sep">›</span>
          <span className="current">{ficha.title}</span>
        </nav>

        <div className="detail">
          {/* Columna Izquierda: Galería */}
          <div className="detail__gallery">
            <div className="detail__stage">
              <img src={asset(ficha.images[active])} alt={ficha.title} />
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
          <div className="detail__info">
            <div>
              <span className="detail__sku">{parentTitle.toUpperCase()}</span>
              <h1 className="detail__title">{ficha.title}</h1>
              {infoSection && (
                <div 
                  className="detail__desc ficha-desc-override"
                  dangerouslySetInnerHTML={{ __html: infoSection.html }} 
                />
              )}
            </div>

            <div className="detail__chips">
              <span className="chip">ISO 13485</span>
              <span className="chip">FDA Approved</span>
              <span className="chip">CE Mark</span>
            </div>

            <hr />

            {/* Especificaciones Técnicas dinámicas extraídas del texto del producto */}
            {specs && specs.length > 0 && (
              <div>
                <h3 className="detail__spec-title">{t("catalog.specs")}</h3>
                <div className="spec-table">
                  {specs.map(([k, v], idx) => (
                    <div className="spec-table__row" key={idx}>
                      <div>{k}</div>
                      <div>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Secciones del producto (Medidas, etc.) */}
            {ficha.sections.filter((s: any) => s.label !== "Información" && s.label !== "Information").length > 0 && (
              <div className="ficha-detail-sections site-page__content elementor-kit-6" style={{marginTop: specs?.length ? '30px' : '0'}}>
                {ficha.sections.filter((s: any) => s.label !== "Información" && s.label !== "Information").map((section: any) => (
                  <div key={section.label} className="ficha-detail-section">
                    <h3 className="detail__spec-title">{section.label}</h3>
                    <div
                      className="ficha-detail-section__body"
                      dangerouslySetInnerHTML={{ __html: section.html }}
                    />
                  </div>
                ))}
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
                  className="related-card"
                  key={r.slug}
                  to={`/ficha/${slug}/${r.slug}`}
                >
                  <div className="related-card__media">
                    <img
                      src={r.images[0]}
                      alt={r.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="related-card__body">
                    <span className="related-card__cat">{parentTitle}</span>
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
