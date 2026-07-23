// La página de una categoría del catálogo (/catalogo/6, por ejemplo):
// muestra sus productos en cuadrícula, con unas "píldoras" arriba para
// brincar rápido entre categorías sin regresar al catálogo.
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { CATEGORY_DESC, asset, getCategories } from "@/lib/catalog";

export function CategoryPage({ categoryId }: { categoryId: number }) {
  const categories = getCategories();
  const cat = categories.find((c) => c.id === categoryId);

  // Si la URL trae un id que no existe, aviso amable y botón de regreso
  if (!cat) {
    return (
      <main className="section">
        <div className="wrap">
          <p>Categoría no encontrada.</p>
          <Link className="back-link" to="/catalogo">
            <span className="circle">←</span> Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <PageHero title={cat.title} subtitle={CATEGORY_DESC[cat.id] || ""}>
        <nav className="crumbs">
          <Link to="/">Inicio</Link>
          <span className="sep">/</span>
          <Link to="/catalogo">Catálogo</Link>
          <span className="sep">/</span>
          <span>{cat.title}</span>
        </nav>
      </PageHero>
      <main className="section">
        <div className="wrap">
          <Link className="back-link" to="/catalogo">
            <span className="circle">←</span> Volver al catálogo
          </Link>
          <div className="pills">
            {categories.map((c) => (
              <Link key={c.id} className={`pill ${c.id === cat.id ? "is-active" : ""}`} to={`/catalogo/${c.id}`}>
                {c.title}
              </Link>
            ))}
          </div>
          <p className="count-line">
            <b>{cat.products.length}</b> productos en {cat.title}
          </p>
          <div className="prod-grid">
            {cat.products.map((p) => (
              <Link className="prod-card" key={p.id} to={`/producto/${p.id}`}>
                <div className="prod-card__media">
                  <img src={asset(p.image)} alt={p.title} loading="lazy" />
                </div>
                <div className="prod-card__body">
                  <span className="prod-card__tag">
                    <span className="dot" />
                    {cat.title}
                  </span>
                  <h3 className="prod-card__title">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
