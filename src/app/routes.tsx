// Estos dos son solo "puentes": agarran el id que viene en la URL,
// lo convierten a número y se lo pasan a la página que corresponde.
// Los hice para no meter useParams dentro de las páginas y tenerlas más limpias.
import { useParams } from "react-router-dom";
import { CategoryPage } from "@/pages/CategoryPage";
import { ProductPage } from "@/pages/ProductPage";

export function CategoryRoute() {
  const { categoryId } = useParams();
  return <CategoryPage categoryId={Number(categoryId)} />;
}

export function ProductRoute() {
  const { productId } = useParams();
  return <ProductPage productId={Number(productId)} />;
}
