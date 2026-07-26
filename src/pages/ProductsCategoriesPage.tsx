import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import categoriesData from "@/data/osseous-products.json";

// Mapeo de imágenes representativas premium para cada categoría (del sitio original)
const CATEGORY_IMAGES: Record<string, string> = {
  "reemplazo-de-rodilla": "/wp-content/uploads/2025/02/img-21-2.png",
  "protesis-de-cadera": "/wp-content/uploads/2025/02/img-22-2.png",
  "protesis-de-hombro": "/wp-content/uploads/2025/02/img-20-3.png",
  "instrumental-quirurgico": "/wp-content/uploads/2025/02/img-23-2.png"
};

export function ProductsCategoriesPage() {
  return (
    <>
      <PageHero
        title="Líneas de Productos"
        subtitle={
          <>
            Explora nuestras soluciones avanzadas para cirugía ortopédica,
            <br />
            diseñadas con tecnología médica de alta precisión.
          </>
        }
      />
      <main className="categories-container section">
        <div className="wrap">
          <Link className="back-link" to="/">
            <span className="circle">←</span> Volver al inicio
          </Link>

          <div className="categories-grid">
            {categoriesData.map((category) => {
              const imageUrl = CATEGORY_IMAGES[category.id] || category.image;
              const productCount = category.products?.length || 0;

              return (
                <Link
                  key={category.id}
                  className="category-card-premium reveal"
                  to={`/productos/${category.id}`}
                >
                  <div className="category-card-premium__media">
                    <img
                      src={imageUrl}
                      alt={category.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="category-card-premium__body">
                    <h3 className="category-card-premium__title">
                      {category.title}
                    </h3>
                    <p className="category-card-premium__desc">
                      {category.description}
                    </p>
                    <div className="category-card-premium__foot">
                      <span>
                        {productCount > 0
                          ? `Ver ${productCount} productos`
                          : "Ver detalles"}
                      </span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
