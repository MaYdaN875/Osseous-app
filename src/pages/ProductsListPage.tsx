import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import categoriesData from "@/data/osseous-products.json";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    title: string;
    images: string[];
  };
  categoryId: string;
}

function ProductCard({ product, categoryId }: ProductCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = product.images && product.images.length > 0 ? product.images : ["/placeholder.png"];
  const hasMultipleImages = images.length > 1;

  // Autoplay: las imágenes se mueven solas cada 3 segundos, excepto si el usuario pasa el mouse
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx(idx);
  };

  return (
    <Link
      className="product-card-osseous reveal"
      to={`/ficha/${categoryId}/${product.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-osseous__media">
        {hasMultipleImages && (
          <button
            type="button"
            className="product-card-osseous__arrow product-card-osseous__arrow--left"
            onClick={handlePrev}
            aria-label="Ver imagen anterior"
          >
            ‹
          </button>
        )}

        <img
          src={images[currentIdx]}
          alt={product.title}
          loading="lazy"
        />

        {hasMultipleImages && (
          <button
            type="button"
            className="product-card-osseous__arrow product-card-osseous__arrow--right"
            onClick={handleNext}
            aria-label="Ver siguiente imagen"
          >
            ›
          </button>
        )}
      </div>

      {hasMultipleImages && (
        <div className="product-card-osseous__dots-container">
          <div className="product-card-osseous__dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`product-card-osseous__dot${i === currentIdx ? " is-active" : ""}`}
                onClick={(e) => handleDotClick(e, i)}
                aria-label={`Ver imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="product-card-osseous__body">
        <h3 className="product-card-osseous__title">
          {product.title}
        </h3>
      </div>
    </Link>
  );
}

export function ProductsListPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState("");

  const category = useMemo(() => {
    return categoriesData.find((c) => c.id === categorySlug);
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    const query = searchQuery.toLowerCase().trim();
    if (!query) return category.products;
    return category.products.filter((p) =>
      p.title.toLowerCase().includes(query)
    );
  }, [category, searchQuery]);

  if (!category) {
    return (
      <main className="section">
        <div className="wrap">
          <p>Línea de productos no encontrada.</p>
          <Link className="back-link" to="/productos">
            <span className="circle">←</span> Volver a Líneas de Productos
          </Link>
        </div>
      </main>
    );
  }

  const hasProducts = category.products.length > 0;

  return (
    <>
      <PageHero title={category.title} subtitle={category.description}>
        <nav className="crumbs">
          <Link to="/">Inicio</Link>
          <span className="sep">/</span>
          <Link to="/productos">Productos</Link>
          <span className="sep">/</span>
          <span>{category.title}</span>
        </nav>
      </PageHero>

      <main className="list-container section">
        <div className="wrap">
          <Link className="back-link" to="/productos">
            <span className="circle">←</span> Volver a Líneas de Productos
          </Link>

          {hasProducts ? (
            <>
              <div className="list-filters">
                <div className="list-search">
                  <svg className="list-search__icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                  <input
                    type="search"
                    placeholder={`Buscar en ${category.title}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label={`Buscar en ${category.title}`}
                  />
                </div>
                <div className="list-stats">
                  Mostrando <b>{filteredProducts.length}</b> de <b>{category.products.length}</b> productos
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="list-empty">
                  <h3>Sin resultados</h3>
                  <p>No encontramos ningún producto que coincida con tu búsqueda: “{searchQuery}”.</p>
                  <button className="btn-secondary" onClick={() => setSearchQuery("")}>
                    Limpiar búsqueda
                  </button>
                </div>
              ) : (
                <div className="products-list-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      categoryId={category.id}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="list-empty">
              <h3>Catálogo de {category.title}</h3>
              <p>
                Actualmente no tenemos cargada la lista individual de productos en esta sección.
                Puedes descargar las fichas técnicas en PDF o ponerte en contacto con nosotros para recibir asesoría personalizada.
              </p>
              <div className="list-empty-buttons">
                <Link className="btn-primary" to="/contacto" style={{ textDecoration: "none", textAlign: "center" }}>
                  Contactar Asesor
                </Link>
                <Link className="btn-secondary" to="/fichas-tecnicas" style={{ textDecoration: "none", textAlign: "center" }}>
                  Ver Fichas PDF
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
