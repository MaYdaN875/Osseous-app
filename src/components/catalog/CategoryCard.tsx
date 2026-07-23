// La tarjeta de cada categoría en la página del catálogo. Toda la tarjeta es un
// enlace que te lleva a los productos de esa categoría.
import { Link } from "react-router-dom";
import { CATEGORY_DESC, asset, getCategories } from "@/lib/catalog";

export function CategoryCard({ id, index }: { id: number; index: number }) {
  const cat = getCategories().find((c) => c.id === id)!;
  // Para la parte visual agarro hasta 5 productos con foto: la primera va grande
  // y las otras cuatro como miniaturas al lado
  const imgs = cat.products.filter((p) => p.image).slice(0, 5);
  const main = imgs[0];
  const side = imgs.slice(1, 5);
  // El numerito "01", "02"... según la posición de la tarjeta
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link className="cat-card" to={`/catalogo/${cat.id}`}>
      <div className="cat-card__media">
        <span className="cat-card__num">{num}</span>
        <span className="cat-card__count">{cat.products.length} productos</span>
        <div className="cat-card__main">
          <img src={asset(main?.image || cat.image)} alt={cat.title} loading="lazy" />
        </div>
        {side.length > 0 && (
          <div className="cat-card__side">
            {side.map((p) => (
              <div className="cat-card__thumb" key={p.id}>
                <img src={asset(p.image)} alt={p.title} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cat-card__body">
        <div>
          <div className="cat-card__title">{cat.title}</div>
          <div className="cat-card__desc">{CATEGORY_DESC[cat.id] || ""}</div>
        </div>
        <span className="cat-card__cta">
          Ver productos <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
