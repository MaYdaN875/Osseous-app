import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import { PRODUCT_PAGE_TITLES } from "@/config/product-pages";
import categoriesData from "@/data/osseous-products.json";

export function FichaPage() {
  // slug = la categoría de donde viene (ej. "reemplazo-de-rodilla"), productSlug = slug del producto
  const { slug = "", productSlug = "" } = useParams();
  // Cuál foto de la galería está en grande
  const [active, setActive] = useState(0);

  // Cargo los estilos de Elementor porque las secciones (tablas de medidas, etc.)
  // vienen del contenido original y los necesitan para verse bien
  useElementorStyles(null);

  // Buscamos el producto directamente en nuestro JSON de productos estructurado
  const ficha = useMemo(() => {
    const category = categoriesData.find((c) => c.id === slug);
    if (!category) return null;
    return category.products.find((p) => p.slug === productSlug);
  }, [slug, productSlug]);

  // Si cambias de producto, la galería vuelve a empezar en la primera foto
  useEffect(() => {
    setActive(0);
  }, [productSlug]);

  const parentTitle = PRODUCT_PAGE_TITLES[slug] ?? "Productos";

  if (!ficha) {
    return (
      <main className="section">
        <div className="wrap">
          <h1>Producto no encontrado</h1>
          <Link className="home-btn" to={`/productos/${slug}`}>
            Volver a {parentTitle}
          </Link>
        </div>
      </main>
    );
  }

  const mainImage = ficha.images[active] ?? ficha.images[0];

  return (
    <main className="ficha section">
      <div className="wrap">
        <Link className="back-link" to={`/productos/${slug}`}>
          <span className="circle">←</span> Volver a {parentTitle}
        </Link>
        <nav className="ficha__breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to={`/productos/${slug}`}>{parentTitle}</Link>
          <span>/</span>
          <span className="ficha__crumb-current">{ficha.title}</span>
        </nav>

        <div className="ficha__grid">
          <div className="ficha__gallery">
            <div className="ficha__main-image">
              {mainImage ? <img src={mainImage} alt={ficha.title} /> : null}
            </div>
            {ficha.images.length > 1 && (
              <div className="ficha__thumbs">
                {ficha.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={`ficha__thumb${i === active ? " is-active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <img src={src} alt={`${ficha.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="ficha__info">
            <p className="ficha__eyebrow">{parentTitle}</p>
            <h1 className="ficha__title">{ficha.title}</h1>

            {ficha.sections.length > 0 ? (
              <div className="ficha__sections site-page__content elementor-kit-6">
                {ficha.sections.map((section) => (
                  <section key={section.label} className="ficha__section">
                    <h2 className="ficha__section-title">{section.label}</h2>
                    <div
                      className="ficha__section-body"
                      dangerouslySetInnerHTML={{ __html: section.html }}
                    />
                  </section>
                ))}
              </div>
            ) : (
              <p className="ficha__empty">
                Solicita información detallada de este producto con nuestro equipo.
              </p>
            )}

            <div className="ficha__actions">
              <Link className="home-btn" to="/contacto">
                Consultar disponibilidad
              </Link>
              <Link className="home-btn home-btn--outline" to={`/productos/${slug}`}>
                Ver más productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
