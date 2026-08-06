// La página de una categoría del catálogo (/catalogo/6, por ejemplo):
// muestra sus productos en cuadrícula, con unas "píldoras" arriba para
// brincar rápido entre categorías sin regresar al catálogo.
import { Link } from "react-router-dom";
import { PageHero } from "@/components/ui/PageHero";
import { getCategories, getCategoryDesc, asset } from "@/lib/catalog";
import { useLanguage } from "@/context/LanguageContext";

export function CategoryPage({ categoryId }: { categoryId: number }) {
  const categories = getCategories();
  const cat = categories.find((c) => c.id === categoryId);
  const { lang, t } = useLanguage();

  // Si la URL trae un id que no existe, aviso amable y botón de regreso
  if (!cat) {
    return (
      <main className="section">
        <div className="wrap">
          <p>{t("catalog.cat_not_found")}</p>
          <Link className="back-link" to="/catalogo">
            <span className="circle">←</span> {t("catalog.back")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <PageHero title={cat.title} subtitle={getCategoryDesc(cat.id, lang)}>
        <nav className="crumbs">
          <Link to="/">{t("detail.home")}</Link>
          <span className="sep">/</span>
          <Link to="/catalogo">{t("nav.catalog")}</Link>
          <span className="sep">/</span>
          <span>{cat.title}</span>
        </nav>
      </PageHero>
      <main className="section">
        <div className="wrap">
          <Link className="back-link" to="/catalogo">
            <span className="circle">←</span> {t("catalog.back")}
          </Link>
          <div className="pills">
            {categories.map((c) => (
              <Link key={c.id} className={`pill ${c.id === cat.id ? "is-active" : ""}`} to={`/catalogo/${c.id}`}>
                {c.title}
              </Link>
            ))}
          </div>
          <p 
            className="count-line"
            dangerouslySetInnerHTML={{
              __html: t("catalog.cat_stats", {
                count: `<b>${cat.products.length}</b>`,
                category: cat.title
              })
            }}
          />
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
