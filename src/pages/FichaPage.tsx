// Detalle de producto desde la sección Productos (/ficha/:slug/:productSlug).
// Ahora comparte el mismo diseño visual que el detalle del catálogo (/producto/:id):
// galería con stage + thumbs, badges, secciones estilizadas y productos relacionados.
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import categoriesDataEs from "@/data/osseous-products.json";
import categoriesDataEn from "@/data/osseous-products-en.json";
import { useLanguage } from "@/context/LanguageContext";

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

  // Forzar que todos los acordeones (<details>) estén abiertos para que
  // se rendericen como filas de la tabla de especificaciones (CSS grid).
  useEffect(() => {
    const details = document.querySelectorAll(".ficha-detail-section__body details");
    details.forEach((d) => {
      d.setAttribute("open", "true");
    });
  }, [ficha]);

  // Productos relacionados: otros de la misma categoría (hasta 3)
  const related = useMemo(() => {
    if (!category || !ficha) return [];
    return category.products
      .filter((p: any) => p.slug !== productSlug && p.images?.length > 0)
      .slice(0, 3);
  }, [category, ficha, productSlug]);

  const parentTitle = category?.title ?? t("nav.products");

  if (!ficha) {
    return (
      <main className="section">
        <div className="wrap">
          <p>{t("search.no_results")}</p>
          <Link className="back-link" to={`/productos/${slug}`}>
            <span className="circle">←</span> {t("detail.back_to", { category: parentTitle })}
          </Link>
        </div>
      </main>
    );
  }

  const mainImage = ficha.images[active] ?? ficha.images[0];

  return (
    <main className="ficha section">
      <div className="wrap">
        {/* Back link — mismo estilo que catálogo */}
        <Link className="back-link" to={`/productos/${slug}`}>
          <span className="circle">←</span> {t("detail.back_to", { category: parentTitle })}
        </Link>

        {/* Breadcrumb — estilo catálogo con › */}
        <nav className="detail-crumbs">
          <Link to="/">{t("detail.home")}</Link>
          <span className="sep">›</span>
          <Link to={`/productos/${slug}`}>{parentTitle}</Link>
          <span className="sep">›</span>
          <span className="current">{ficha.title}</span>
        </nav>

        {/* Grid principal: galería + info — misma estructura que ProductPage */}
        <div className="detail">
          <div className="detail__gallery">
            {/* Imagen principal grande */}
            <div className="detail__stage">
              {mainImage ? (
                <img id="gallery-main" src={mainImage} alt={ficha.title} />
              ) : null}
            </div>
            {/* Miniaturas en grid de 4 columnas */}
            {ficha.images.length > 1 && (
              <div className="detail__thumbs">
                {ficha.images.map((src: string, i: number) => (
                  <button
                    key={src}
                    type="button"
                    className={`detail__thumb${i === active ? " is-active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <img src={src} alt={`${ficha.title} ${i + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="detail__info">
            {/* Badge de categoría (como el SKU del catálogo) */}
            <div>
              <span className="detail__sku">{parentTitle.toUpperCase()}</span>
              <h1 className="detail__title">{ficha.title}</h1>
              {ficha.sections.find((s: any) => s.label === "Información" || s.label === "Information") && (
                <div 
                  className="detail__desc ficha-desc-override"
                  dangerouslySetInnerHTML={{ __html: ficha.sections.find((s: any) => s.label === "Información" || s.label === "Information").html }} 
                />
              )}
            </div>

            {/* Chips de certificación — mismo que catálogo */}
            <div className="detail__chips">
              <span className="chip">ISO 13485</span>
              <span className="chip">FDA Approved</span>
              <span className="chip">CE Mark</span>
            </div>

            <hr />

            {/* Secciones del producto (Medidas, etc.) */}
            {ficha.sections.filter((s: any) => s.label !== "Información" && s.label !== "Information").length > 0 ? (
              <div className="ficha-detail-sections site-page__content elementor-kit-6">
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
            ) : (
              !ficha.sections.find((s: any) => s.label === "Información" || s.label === "Information") && (
                <p className="detail__desc">
                  {t("detail.empty_info")}
                </p>
              )
            )}

            {/* Botones de acción — misma estructura que catálogo */}
            <div className="detail__actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => showToast(t("catalog.quote_toast"))}
              >
                {t("detail.availability")}
              </button>
              <div className="detail__actions-row">
                <Link className="btn-secondary" to={`/productos/${slug}`}>
                  {t("detail.more_products")}
                </Link>
                <Link className="btn-secondary" to="/contacto">
                  {t("nav.contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Productos relacionados — misma sección que catálogo */}
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
