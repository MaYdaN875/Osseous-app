// Aquí armo todas las rutas de la página. Básicamente hay dos mundos:
// 1) Las páginas "espejadas": el contenido real del sitio original de Osseous
//    (inicio, empresa, servicios, productos, etc.) que renderizo tal cual.
// 2) El catálogo Osseous, que es lo nuevo que le agregué al sitio.
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CatalogPage } from "@/pages/CatalogPage";
import { MirroredPage, MIRRORED_SLUGS } from "@/pages/MirroredPage";
import { FichaPage } from "@/pages/FichaPage";
import { ProductsCategoriesPage } from "@/pages/ProductsCategoriesPage";
import { ProductsListPage } from "@/pages/ProductsListPage";
import { CategoryRoute, ProductRoute } from "./routes";

import { ScrollRestoration } from "@/components/layout/ScrollRestoration";
import { LanguageProvider } from "@/context/LanguageContext";

export function AppRouter() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
        {/* Todo va dentro del Layout para que el header, footer y popup salgan en todas las páginas */}
        <Route element={<Layout />}>
          {/* La portada es el HTML original del sitio, idéntico, con todo y su video */}
          <Route index element={<MirroredPage slug="home" />} />

          {/* El catálogo Osseous: esto es lo nuevo que agregué, no existe en el sitio original */}
          <Route path="catalogo" element={<CatalogPage />} />
          <Route path="catalogo/:categoryId" element={<CategoryRoute />} />
          <Route path="producto/:productId" element={<ProductRoute />} />

          {/* Módulo de productos nativo en React (reemplaza la página de Elementor) */}
          <Route path="productos" element={<ProductsCategoriesPage />} />
          <Route path="productos/:categorySlug" element={<ProductsListPage />} />

          {/* Detalle de un producto de las páginas de Rodilla/Cadera/Hombro/Instrumental */}
          <Route path="ficha/:slug/:productSlug" element={<FichaPage />} />

          {/* Todas las páginas originales de Osseous (empresa, servicios, blog, etc.)
              se generan solas a partir de los archivos que hay en src/content/pages */}
          {MIRRORED_SLUGS.filter((s) => s !== "productos").map((slug) => (
            <Route key={slug} path={slug} element={<MirroredPage />} />
          ))}

          {/* Cualquier ruta que no exista te regresa al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
  );
}
