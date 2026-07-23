// Aquí armo todas las rutas de la página. Básicamente hay dos mundos:
// 1) Las páginas "espejadas": el contenido real del sitio original de Osseous
//    (inicio, empresa, servicios, productos, etc.) que renderizo tal cual.
// 2) El catálogo Chunli, que es lo nuevo que le agregué al sitio.
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CatalogPage } from "@/pages/CatalogPage";
import { MirroredPage, MIRRORED_SLUGS } from "@/pages/MirroredPage";
import { FichaPage } from "@/pages/FichaPage";
import { CategoryRoute, ProductRoute } from "./routes";

// Esto lo hice porque al navegar entre páginas te quedabas a media pantalla:
// cada que cambias de ruta (o usas atrás/adelante del navegador) te sube hasta arriba.
// Si la URL trae ancla (por ejemplo /#productos), en vez de subir te lleva a esa sección.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Le digo al navegador que no restaure el scroll viejo al volver atrás, eso lo manejo yo
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Todo va dentro del Layout para que el header, footer y popup salgan en todas las páginas */}
        <Route element={<Layout />}>
          {/* La portada es el HTML original del sitio, idéntico, con todo y su video */}
          <Route index element={<MirroredPage slug="home" />} />

          {/* El catálogo Chunli: esto es lo nuevo que agregué, no existe en el sitio original */}
          <Route path="catalogo" element={<CatalogPage />} />
          <Route path="catalogo/:categoryId" element={<CategoryRoute />} />
          <Route path="producto/:productId" element={<ProductRoute />} />

          {/* Detalle de un producto de las páginas de Rodilla/Cadera/Hombro/Instrumental */}
          <Route path="ficha/:slug/:pid" element={<FichaPage />} />

          {/* Todas las páginas originales de Osseous (empresa, servicios, blog, etc.)
              se generan solas a partir de los archivos que hay en src/content/pages */}
          {MIRRORED_SLUGS.map((slug) => (
            <Route key={slug} path={slug} element={<MirroredPage />} />
          ))}

          {/* Cualquier ruta que no exista te regresa al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
