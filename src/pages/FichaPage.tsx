import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import categoriesDataEs from "@/data/osseous-products.json";
import categoriesDataEn from "@/data/osseous-products-en.json";
import { useLanguage } from "@/context/LanguageContext";

export function FichaPage() {
  // slug = la categoría de donde viene (ej. "reemplazo-de-rodilla"), productSlug = slug del producto
  const { slug = "", productSlug = "" } = useParams();
  const { lang, t } = useLanguage();
  // Cuál foto de la galería está en grande
  const [active, setActive] = useState(0);

  // Cargo los estilos de Elementor porque las secciones (tablas de medidas, etc.)
  // vienen del contenido original y los necesitan para verse bien
  useElementorStyles(null);

  const categoriesData = lang === "en" ? categoriesDataEn : categoriesDataEs;

  const category = useMemo(() => {
    return categoriesData.find((c: any) => c.id === slug);
  }, [slug, categoriesData]);

  // Buscamos el producto directamente en nuestro JSON de productos estructurado
  const ficha = useMemo(() => {
    if (!category) return null;
    return category.products.find((p: any) => p.slug === productSlug);
  }, [category, productSlug]);

  // Si cambias de producto, la galería vuelve a empezar en la primera foto
  useEffect(() => {
    setActive(0);
  }, [productSlug]);

  const parentTitle = category?.title ?? t("nav.products");

  if (!ficha) {
    return (
      <main className="section">
        <div className="wrap">
          <h1>{t("search.no_results")}</h1>
          <Link className="home-btn" to={`/productos/${slug}`}>
            {t("detail.back_to", { category: parentTitle })}
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
          <span className="circle">←</span> {t("detail.back_to", { category: parentTitle })}
        </Link>
        <nav className="ficha__breadcrumb">
          <Link to="/">{t("detail.home")}</Link>
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
                {ficha.images.map((src: string, i: number) => (
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
                {ficha.sections.map((section: any) => (
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
                {t("detail.empty_info")}
              </p>
            )}

            <div className="ficha__actions">
              <Link className="home-btn" to="/contacto">
                {t("detail.availability")}
              </Link>
              <Link className="home-btn home-btn--outline" to={`/productos/${slug}`}>
                {t("detail.more_products")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
