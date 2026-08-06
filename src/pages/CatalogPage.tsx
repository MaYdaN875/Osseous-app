// La página principal del catálogo (/catalogo): un hero con el conteo total
// y abajo la cuadrícula con la tarjeta de cada categoría.
import { Link } from "react-router-dom";
import { CategoryCard } from "@/components/catalog/CategoryCard";
import { PageHero } from "@/components/ui/PageHero";
import { getCategories, getTotalProducts } from "@/lib/catalog";
import { useLanguage } from "@/context/LanguageContext";

export function CatalogPage() {
  const categories = getCategories();
  const total = getTotalProducts();
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t("catalog.title")}
        subtitle={
          <>
            {t("catalog.subtitle")}
            <br />
            {t("catalog.stats", { cats: categories.length, prods: total })}
          </>
        }
      />
      <main className="section">
        <div className="wrap">
          <Link className="back-link" to="/">
            <span className="circle">←</span> {t("categories.back_home")}
          </Link>
          <div className="cat-grid">
            {categories.map((c, i) => (
              <CategoryCard key={c.id} id={c.id} index={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
