import categoriesDataEs from "@/data/osseous-products.json";
import categoriesDataEn from "@/data/osseous-products-en.json";

export function getOsseousCategories(lang: "es" | "en") {
  if (lang === "es") return categoriesDataEs;

  return categoriesDataEs.map((category) => {
    const translatedCategory = categoriesDataEn.find((item) => item.id === category.id);
    const translatedProducts = new Map(
      (translatedCategory?.products ?? []).map((product) => [product.id, product]),
    );

    return {
      ...category,
      title: translatedCategory?.title ?? category.title,
      description: translatedCategory?.description ?? category.description,
      products: category.products.map((product) => {
        const translatedProduct = translatedProducts.get(product.id);
        return translatedProduct
          ? { ...product, ...translatedProduct, images: product.images }
          : product;
      }),
    };
  });
}
