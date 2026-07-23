// La vista de detalle de un producto del catálogo Chunli (/producto/123):
// galería con miniaturas, SKU, especificaciones técnicas, botones de acción
// y una sección de productos compatibles al final.
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CATEGORY_DESC,
  CATEGORY_SPECS,
  asset,
  getProductById,
  makeSku,
} from "@/lib/catalog";

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

  if (!found) {
    return (
      <main className="section">
        <div className="wrap">
          <p>Producto no encontrado.</p>
          <Link className="back-link" to="/catalogo">
            <span className="circle">←</span> Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  const { product, category } = found;
  const sku = makeSku(category.id, product.id);
  // Del resto de productos de la categoría saco 2 como "vistas" extra para la
  // galería y otros 3 como compatibles. Uso el índice del producto con módulo
  // para que a cada producto le toquen distintos y no se repitan entre sí.
  const others = category.products.filter((p) => p.id !== product.id && p.image);
  const idx = category.products.findIndex((p) => p.id === product.id);
  const views = [0, 1].map((k) => others[(idx + k) % others.length]).filter(Boolean);
  const related = [0, 1, 2].map((k) => others[(idx + 2 + k) % others.length]).filter(Boolean);
  const image = mainSrc || asset(product.image);
  // Las especificaciones son por categoría (vienen de config/catalog-meta.ts)
  const specs = CATEGORY_SPECS[category.id] || [["Línea", category.title]];

  const thumbs = [
    { src: asset(product.image), alt: product.title, active: true },
    ...views.map((v) => ({ src: asset(v.image), alt: v.title, active: false })),
    { src: asset(product.image), alt: "Video técnico", video: true },
  ];

  return (
    <main className="section">
      <div className="wrap">
        <Link className="back-link" to={`/catalogo/${category.id}`}>
          <span className="circle">←</span> Volver a {category.title}
        </Link>
        <nav className="detail-crumbs">
          <Link to="/catalogo">Productos</Link>
          <span className="sep">›</span>
          <Link to={`/catalogo/${category.id}`}>{category.title}</Link>
          <span className="sep">›</span>
          <span className="current">{product.title}</span>
        </nav>

        <div className="detail">
          <div id="product-gallery" className="detail__gallery reveal reveal--left">
            <div className="detail__stage">
              <img id="gallery-main" src={image} alt={product.title} />
            </div>
            <div className="detail__thumbs">
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  className={`detail__thumb ${t.active ? "is-active" : ""} ${t.video ? "detail__thumb--video" : ""}`}
                  onClick={() => {
                    if (t.video) {
                      showToast("Reproducción del video técnico del producto (demo).");
                      return;
                    }
                    setMainSrc(t.src);
                  }}
                >
                  {t.video && (
                    <span className="play">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                      </svg>
                    </span>
                  )}
                  <img src={t.src} alt={t.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="detail__info reveal reveal--right">
            <div>
              <span className="detail__sku">SKU: {sku}</span>
              <h1 className="detail__title">{product.title}</h1>
              <p className="detail__desc">
                {CATEGORY_DESC[category.id] || ""}. Producto de la línea {category.title} de Osseous.
              </p>
            </div>
            <div className="detail__chips">
              <span className="chip">ISO 13485</span>
              <span className="chip">FDA Approved</span>
              <span className="chip">CE Mark</span>
            </div>
            <hr />
            <div>
              <h3 className="detail__spec-title">Especificaciones Técnicas</h3>
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
              <button type="button" className="btn-primary" onClick={() => showToast("Solicitud enviada. Un especialista Osseous se pondrá en contacto pronto.")}>
                Consultar Disponibilidad
              </button>
              <div className="detail__actions-row">
                <button type="button" className="btn-secondary" onClick={() => showToast("Descarga del catálogo PDF iniciada (demo).")}>
                  Catálogo (PDF)
                </button>
                <button type="button" className="btn-secondary" onClick={() => showToast("Visor 3D disponible próximamente en la versión final.")}>
                  Modelo 3D
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="related">
          <h2 className="related__title">Componentes Compatibles</h2>
          <div className="related__grid">
            {related.map((r) => (
              <Link className="related-card reveal" key={r.id} to={`/producto/${r.id}`}>
                <div className="related-card__media">
                  <img src={asset(r.image)} alt={r.title} loading="lazy" />
                </div>
                <div className="related-card__body">
                  <span className="related-card__cat">{category.title}</span>
                  <h3 className="related-card__name">{r.title}</h3>
                  <div className="related-card__foot">
                    <span>Ver detalles</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
