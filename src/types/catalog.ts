// Los tipos del catálogo: describen la forma exacta que tiene
// el JSON de src/data/catalog-data.json.

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  image: string;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  products: Product[];
}

export interface CatalogData {
  categories: Category[];
}
