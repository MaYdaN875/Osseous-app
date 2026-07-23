// La vista de detalle de un producto de las páginas de Osseous (/ficha/:slug/:pid).
// Esto lo hice para reemplazar los acordeones que traía el sitio original:
// en vez de "Información" y "Medidas" apretados dentro de la tarjeta, le picas
// al producto y llegas aquí, con su galería de fotos y todo bien acomodado.
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import { loadFichas, type Ficha } from "@/lib/osseous-fichas";
import { PRODUCT_PAGE_TITLES } from "@/config/product-pages";

export function FichaPage() {
  // slug = la página de donde viene (ej. "reemplazo-de-rodilla"), pid = número de producto
  const { slug = "", pid = "" } = useParams();
  const [fichas, setFichas] = useState<Ficha[] | null>(null);
  // Cuál foto de la galería está en grande
  const [active, setActive] = useState(0);

  // Cargo los estilos de Elementor porque las secciones (tablas de medidas, etc.)
  // vienen del contenido original y los necesitan para verse bien
  useElementorStyles(null);

  // Saco las fichas del contenido de la página correspondiente.
  // La bandera "alive" evita actualizar estado si te saliste antes de que terminara.
  useEffect(() => {
    let alive = true;
    loadFichas(slug).then((data) => {
      if (alive) setFichas(data);
    });
    return () => {
      alive = false;
    };
  }, [slug]);

  const ficha = useMemo(() => fichas?.[Number(pid)], [fichas, pid]);

  // Si cambias de producto, la galería vuelve a empezar en la primera foto
  useEffect(() => {
    setActive(0);
  }, [pid]);

  const parentTitle = PRODUCT_PAGE_TITLES[slug] ?? "Productos";

  // fichas === null significa que todavía está cargando
  if (fichas === null) {
    return (
      <main className="section">
        <div className="wrap">
          <p>Cargando…</p>
        </div>
      </main>
    );
  }

  if (!ficha) {
    return (
      <main className="section">
        <div className="wrap">
          <h1>Producto no encontrado</h1>
          <Link className="home-btn" to={`/${slug}`}>
            Volver
          </Link>
        </div>
      </main>
    );
  }

  const mainImage = ficha.images[active] ?? ficha.images[0];

  return (
    <main className="ficha section">
      <div className="wrap">
        <Link className="back-link" to={`/${slug}`}>
          <span className="circle">←</span> Volver a {parentTitle}
        </Link>
        <nav className="ficha__breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to={`/${slug}`}>{parentTitle}</Link>
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
              <Link className="home-btn home-btn--outline" to={`/${slug}`}>
                Ver más productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
