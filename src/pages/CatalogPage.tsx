// La página principal del catálogo (/catalogo): un hero con el conteo total
// y abajo la cuadrícula con la tarjeta de cada categoría.
import { Link } from "react-router-dom";
import { CategoryCard } from "@/components/catalog/CategoryCard";
import { PageHero } from "@/components/ui/PageHero";
import { getCategories, getTotalProducts } from "@/lib/catalog";

export function CatalogPage() {
  const categories = getCategories();
  const total = getTotalProducts();

  return (
    <>
      <PageHero
        title="Catálogo de productos"
        subtitle={
          <>
            {categories.length} categorías y {total} productos
            <br />
            para cirugía ortopédica y traumatología.
          </>
        }
      />
      <main className="section">
        <div className="wrap">
          <Link className="back-link" to="/">
            <span className="circle">←</span> Volver al inicio
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
