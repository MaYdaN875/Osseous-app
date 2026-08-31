import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import categoriesDataEs from "@/data/osseous-products.json";
import categoriesDataEn from "@/data/osseous-products-en.json";
import { useLanguage } from "@/context/LanguageContext";

// Mapeo de imágenes representativas premium para cada categoría (del sitio original)
const CATEGORY_IMAGES: Record<string, string> = {
  "reemplazo-de-rodilla": "/wp-content/uploads/2025/02/img-21-2.png",
  "protesis-de-cadera": "/wp-content/uploads/2025/02/img-22-2.png",
  "protesis-de-hombro": "/wp-content/uploads/2025/02/img-20-3.png",
  "instrumental-quirurgico": "/wp-content/uploads/2025/02/img-23-2.png",
  "medicina-deportiva": "/wp-content/uploads/2025/01/p2.jpg",
  "cirugia-de-columna": "/assets/categories/columna-placeholder.svg",
};

export function ProductsCategoriesPage() {
  const { lang, t } = useLanguage();
  const categoriesData = lang === "en" ? categoriesDataEn : categoriesDataEs;

  return (
    <>
      <PageHero
        title={t("categories.title")}
        subtitle={t("categories.subtitle")}
      />
      <main className="categories-container section">
        <div className="wrap">
          <Link className="back-link" to="/">
            <span className="circle">←</span> {t("categories.back_home")}
          </Link>

          <div className="categories-grid">
            {categoriesData.map((category: any) => {
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
                          ? t("categories.view_products", { count: productCount })
                          : t("categories.view_details")}
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
