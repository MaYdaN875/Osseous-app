// El sitio original está hecho con Elementor (el constructor de páginas de WordPress),
// y su contenido depende de sus hojas de estilo para verse bien. Aquí tengo la lista
// de CSS que necesita y un hook que los inyecta solo cuando estás en una página espejada
// (así no ensucian los estilos del catálogo, que es diseño mío).
import { useEffect } from "react";

// Estos son los CSS base de Elementor: uno por cada tipo de widget que usan las
// páginas (imágenes, carruseles, acordeones, video, etc.) más el kit global (post-6)
// que trae los colores y tipografías del sitio.
export const ELEMENTOR_BASE = [
  "/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css",
  "/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css",
  "/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css",
  "/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css",
  "/wp-content/plugins/elementor/assets/css/frontend.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-image.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-image-gallery.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-nested-accordion.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-nested-tabs.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-spacer.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css",
  "/wp-content/plugins/elementor/assets/css/widget-video.min.css",
  "/wp-content/uploads/elementor/css/post-6.css",
];

// Este hook mete los <link> de CSS al <head> cuando entras a una página espejada
// y los quita cuando te sales. Además del CSS base, cada página tiene el suyo propio
// (post-XX.css, donde XX es su id de Elementor).
export function useElementorStyles(elementorId: string | null) {
  useEffect(() => {
    const hrefs = [...ELEMENTOR_BASE];
    if (elementorId) {
      hrefs.push(`/wp-content/uploads/elementor/css/post-${elementorId}.css`);
    }
    const links = hrefs.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.osseousElementor = "1";
      document.head.appendChild(link);
      return link;
    });
    // Al desmontar el componente limpio todo para no dejar estilos regados
    return () => {
      links.forEach((l) => l.remove());
    };
  }, [elementorId]);
}
