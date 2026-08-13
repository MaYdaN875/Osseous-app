// La vista de detalle de un producto del catálogo Chunli (/producto/123):
// galería con miniaturas, SKU, especificaciones técnicas, botones de acción
// y una sección de productos compatibles al final.
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  getCategoryDesc,
  getCategorySpecs,
  getCategoryTitle,
  getProductTitle,
  asset,
  getProductById,
  makeSku,
} from "@/lib/catalog";
import { useLanguage } from "@/context/LanguageContext";

// Un avisito flotante que aparece abajo y se va solo; lo uso para los botones
// que son demo (consultar disponibilidad, PDF, modelo 3D)
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

export function ProductPage({ productId }: { productId: number }) {
  const found = getProductById(productId);
  const [mainSrc, setMainSrc] = useState<string | null>(null);
  const { lang, t } = useLanguage();

  if (!found) {
    return (
      <main className="section">
        <div className="wrap">
          <p>{t("catalog.prod_not_found")}</p>
          <Link className="back-link" to="/catalogo">
            <span className="circle">←</span> {t("catalog.back")}
          </Link>
        </div>
      </main>
    );
  }

  const { product, category } = found;
  const sku = makeSku(category.id, product.id);
  const categoryTitle = getCategoryTitle(category.id, category.title, lang);
  const productTitle = getProductTitle(product.id, product.title, lang);

  // Del resto de productos de la categoría saco 2 como "vistas" extra para la
  // galería y otros 3 como compatibles. Uso el índice del producto con módulo
  // para que a cada producto le toquen distintos y no se repitan entre sí.
  const others = category.products.filter((p) => p.id !== product.id && p.image);
  const idx = category.products.findIndex((p) => p.id === product.id);
  const views = [0, 1].map((k) => others[(idx + k) % others.length]).filter(Boolean);
  const related = [0, 1, 2].map((k) => others[(idx + 2 + k) % others.length]).filter(Boolean);
  const image = mainSrc || asset(product.image);
  // Las especificaciones son por categoría (vienen de config/catalog-meta.ts)
  const specs = getCategorySpecs(category.id, lang);
  const categoryDesc = getCategoryDesc(category.id, lang);

  const translatedDesc = lang === "en"
    ? `${categoryDesc}. Product from Osseous's ${categoryTitle} line.`
    : `${categoryDesc}. Producto de la línea ${categoryTitle} de Osseous.`;

  const thumbs = [
    { src: asset(product.image), alt: productTitle, active: true },
    ...views.map((v) => ({ src: asset(v.image), alt: getProductTitle(v.id, v.title, lang), active: false })),
    { src: asset(product.image), alt: lang === "en" ? "Technical video" : "Video técnico", video: true },
  ];

  return (
    <main className="section">
      <div className="wrap">
        <Link className="back-link" to={`/catalogo/${category.id}`}>
          <span className="circle">←</span> {t("detail.back_to", { category: categoryTitle })}
        </Link>
        <nav className="detail-crumbs">
          <Link to="/catalogo">{t("nav.products")}</Link>
          <span className="sep">›</span>
          <Link to={`/catalogo/${category.id}`}>{categoryTitle}</Link>
          <span className="sep">›</span>
          <span className="current">{productTitle}</span>
        </nav>

        <div className="detail">
          <div id="product-gallery" className="detail__gallery reveal reveal--left">
            <div className="detail__stage">
              <img id="gallery-main" src={image} alt={productTitle} />
            </div>
            <div className="detail__thumbs">
              {thumbs.map((tItem, i) => (
                <button
                  key={i}
                  type="button"
                  className={`detail__thumb ${tItem.active ? "is-active" : ""} ${tItem.video ? "detail__thumb--video" : ""}`}
                  onClick={() => {
                    if (tItem.video) {
                      showToast(t("catalog.video_toast"));
                      return;
                    }
                    setMainSrc(tItem.src);
                  }}
                >
                  {tItem.video && (
                    <span className="play">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                      </svg>
                    </span>
                  )}
                  <img src={tItem.src} alt={tItem.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="detail__info reveal reveal--right">
            <div>
              <span className="detail__sku">SKU: {sku}</span>
              <h1 className="detail__title">{productTitle}</h1>
              <p className="detail__desc">
                {translatedDesc}
              </p>
            </div>
            <div className="detail__chips">
              <span className="chip">ISO 13485</span>
              <span className="chip">FDA Approved</span>
              <span className="chip">CE Mark</span>
            </div>
            <hr />
            <div>
              <h3 className="detail__spec-title">{t("catalog.specs")}</h3>
              <div className="spec-table">
                {specs.map(([k, v]) => (
                  <div className="spec-table__row" key={k}>
                    <div>{k}</div>
                    <div>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="detail__actions">
              <button type="button" className="btn-primary" onClick={() => showToast(t("catalog.quote_toast"))}>
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

        <section className="related">
          <h2 className="related__title">{t("catalog.compatible")}</h2>
          <div className="related__grid">
            {related.map((r) => {
              const relProdTitle = getProductTitle(r.id, r.title, lang);
              return (
                <Link className="related-card reveal" key={r.id} to={`/producto/${r.id}`}>
                  <div className="related-card__media">
                    <img src={asset(r.image)} alt={relProdTitle} loading="lazy" />
                  </div>
                  <div className="related-card__body">
                    <span className="related-card__cat">{categoryTitle}</span>
                    <h3 className="related-card__name">{relProdTitle}</h3>
                    <div className="related-card__foot">
                      <span>{t("categories.view_details")}</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
