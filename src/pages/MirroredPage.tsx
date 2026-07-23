// Esta es la página más importante del proyecto: renderiza las páginas "espejadas".
// La idea es que el sitio original de Osseous está hecho con WordPress + Elementor,
// y en vez de rehacer cada página a mano (y que quedara diferente), me traje el
// contenido tal cual y aquí lo pinto idéntico. Después de pintarlo le agrego con
// JavaScript lo que Elementor hacía solo: carruseles, videos, enlaces, etc.
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate, type NavigateFunction } from "react-router-dom";
import { useElementorStyles } from "@/lib/elementor";
import { findProductCards } from "@/lib/osseous-fichas";
import { isProductPage } from "@/config/product-pages";

// Aquí junto todas las páginas de src/content/pages. Cada archivo exporta el
// contenido de una página, y Vite las separa en chunks que se cargan solo al visitarlas.
const pages = import.meta.glob<string>("../content/pages/*.ts", {
  import: "default",
});

// Los carruseles de imágenes del sitio original funcionaban con Swiper (una librería
// de WordPress que aquí no tengo), así que hice mi propio mini-carrusel:
// flechas para pasar de imagen, puntitos abajo y listo. Se ve y se siente igual.
function setupCarousel(wrapper: HTMLElement) {
  const track = wrapper.querySelector<HTMLElement>(".swiper-wrapper");
  const slides = Array.from(wrapper.querySelectorAll<HTMLElement>(".swiper-slide"));
  if (!track || slides.length === 0) return;

  wrapper.classList.add("osseous-carousel");

  // Las imágenes traían enlaces al "lightbox" de Elementor que aquí no existe;
  // los desactivo para que al picarles no te saque de la página
  wrapper.querySelectorAll<HTMLAnchorElement>("a[data-elementor-open-lightbox]").forEach((a) => {
    a.addEventListener("click", (e) => e.preventDefault());
    a.removeAttribute("href");
  });

  let index = 0;
  const prev = wrapper.querySelector<HTMLElement>(".elementor-swiper-button-prev");
  const next = wrapper.querySelector<HTMLElement>(".elementor-swiper-button-next");

  // Si hay más de una imagen le pongo los puntitos de abajo para navegar
  let dots: HTMLElement[] = [];
  if (slides.length > 1) {
    const pagination = document.createElement("div");
    pagination.className = "osseous-carousel__dots";
    dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "osseous-carousel__dot";
      dot.setAttribute("aria-label", `Ir a imagen ${i + 1}`);
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        show(i);
      });
      pagination.appendChild(dot);
      return dot;
    });
    wrapper.appendChild(pagination);
  }

  // Muestra la imagen i y esconde las demás (el % hace que dé la vuelta al llegar al final)
  function show(i: number) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, si) => {
      s.style.display = si === index ? "block" : "none";
    });
    dots.forEach((d, di) => d.classList.toggle("is-active", di === index));
  }

  if (slides.length <= 1) {
    prev?.style.setProperty("display", "none");
    next?.style.setProperty("display", "none");
  } else {
    prev?.addEventListener("click", (e) => {
      e.stopPropagation();
      show(index - 1);
    });
    next?.addEventListener("click", (e) => {
      e.stopPropagation();
      show(index + 1);
    });
  }

  show(0);
}

// En el sitio original, cada producto traía unos acordeones de "Información" y "Medidas"
// abajo de la foto. Eso se decidió cambiar: quito los acordeones y hago que toda la
// tarjeta sea clickeable, y al picarle te lleva a una vista de detalle (/ficha/...)
// donde sale todo bien acomodado: galería de fotos, información y medidas.
function transformProductCards(root: HTMLElement, slug: string, navigate: NavigateFunction): boolean {
  const cards = findProductCards(root);
  if (cards.length === 0) return false;

  cards.forEach((card, i) => {
    card.querySelector(":scope > .elementor-widget-n-accordion")?.remove();
    card.classList.add("osseous-ficha-card");
    card.setAttribute("role", "button");
    card.tabIndex = 0;

    const go = () => navigate(`/ficha/${slug}/${i}`);
    card.addEventListener("click", (e) => {
      // Si le picaste a una flecha o puntito del carrusel, eso no cuenta como
      // "abrir el producto"; solo cambia de imagen
      const target = e.target as HTMLElement;
      if (target.closest(".elementor-swiper-button") || target.closest(".osseous-carousel__dot")) {
        return;
      }
      go();
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });
  });
  return true;
}

// El sitio original tenía algunos enlaces con rutas viejas (por ejemplo /cadera);
// aquí los traduzco a las rutas reales para que no caigan en página muerta
const LINK_ALIASES: Record<string, string> = {
  "/cadera": "/protesis-de-cadera",
  "/hombro": "/protesis-de-hombro",
  "/rodilla": "/reemplazo-de-rodilla",
};

// Los enlaces del contenido importado son <a href> normales, y si los dejaba así
// cada clic recargaba toda la página. Aquí los intercepto para que naveguen
// con React Router (instantáneo, sin recarga), como debe ser en una SPA.
function wireInternalLinks(root: HTMLElement, navigate: NavigateFunction) {
  root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    // Los que apuntan a archivos (imágenes, PDFs) sí los dejo normales
    if (href.startsWith("/wp-content/")) return;
    const clean = href.length > 1 && href.endsWith("/") ? href.slice(0, -1) : href;
    const target = LINK_ALIASES[clean] ?? clean;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(target);
    });
  });
}

// Estos son los banners que traen el texto "pintado" del lado derecho de la imagen
// (los demás lo traen a la izquierda); lo necesito saber para recortarlos bien en celular
const RIGHT_TEXT_BANNERS = ["img-30-2"];

// Problema que tuve en celular: los banners anchos (tipo 1920x590 con texto encima)
// se encogían a una tirita ilegible. Aquí los detecto por su proporción y les pongo
// una clase para que el CSS móvil los muestre más altos, recortados hacia donde está el texto.
function markWideBanners(root: HTMLElement) {
  root.querySelectorAll<HTMLImageElement>(".elementor-widget-image img").forEach((img) => {
    const w = Number(img.getAttribute("width"));
    const h = Number(img.getAttribute("height"));
    if (w >= 1200 && h > 0 && w / h > 2.4) {
      img.classList.add("osseous-wide-banner");
      if (RIGHT_TEXT_BANNERS.some((name) => img.src.includes(name))) {
        img.classList.add("osseous-wide-banner--right");
      }
    }
  });
}

// Arranco los videos de fondo (como el de la portada): silenciados, en loop y
// con playsInline para que en iPhone no se abran en pantalla completa
function setupVideos(root: HTMLElement) {
  root.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    void video.play().catch(() => {});
  });
}

// Una vez que el contenido ya está pintado en pantalla, le paso todas las
// mejoras de arriba en un solo lugar
function enhanceImportedContent(root: HTMLElement, slug: string, navigate: NavigateFunction) {
  root.querySelectorAll<HTMLElement>(".elementor-image-carousel-wrapper").forEach(setupCarousel);
  wireInternalLinks(root, navigate);
  setupVideos(root);
  markWideBanners(root);

  const isProduct = transformProductCards(root, slug, navigate);
  if (!isProduct) {
    // En páginas normales con acordeones (como fichas técnicas) dejo el primero abierto
    root.querySelectorAll<HTMLDetailsElement>("details.e-n-accordion-item").forEach((el, i) => {
      if (i === 0) el.open = true;
    });
  }
}

// Saco el nombre de cada página a partir de su archivo ("empresa.ts" -> "empresa").
// Con esto App.tsx genera las rutas solito: si mañana agrego una página nueva
// a content/pages, su ruta aparece sin tocar nada más.
const SLUG_RE = /\/([^/]+)\.ts$/;

export const MIRRORED_SLUGS = Object.keys(pages)
  .map((p) => SLUG_RE.exec(p)?.[1])
  .filter(Boolean) as string[];

export function MirroredPage({ slug: slugProp }: Readonly<{ slug?: string }>) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // El slug me puede llegar como prop (la portada) o lo saco de la URL (/empresa -> "empresa")
  const slug = slugProp ?? pathname.replace(/^\//, "").split("/")[0];
  const [html, setHtml] = useState("");
  const [missing, setMissing] = useState(false);
  const [elementorId, setElementorId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Le inyecto los estilos de Elementor mientras esta página esté abierta
  useElementorStyles(elementorId);

  // Cargo el contenido de la página que toque según el slug
  useEffect(() => {
    const key = `../content/pages/${slug}.ts`;
    const loader = pages[key];
    if (!loader) {
      setMissing(true);
      setHtml("");
      return;
    }
    setMissing(false);
    loader()
      .then((raw) => {
        setHtml(raw);
        // Cada página de Elementor tiene su id (data-elementor-id) y con él
        // sé qué hoja de estilos específica cargarle (post-XX.css)
        const match = /data-elementor-id="(\d+)"/.exec(raw);
        setElementorId(match?.[1] ?? null);
      })
      .catch(() => setMissing(true));
  }, [slug]);

  // Cuando el contenido ya se pintó, le agrego los carruseles, enlaces SPA, videos, etc.
  useEffect(() => {
    const el = contentRef.current;
    if (el && html) {
      enhanceImportedContent(el, slug, navigate);
    }
  }, [html, slug, navigate]);

  if (!slug) return <Navigate to="/" replace />;

  if (missing) {
    return (
      <main className="section">
        <div className="wrap">
          <h1>Página en preparación</h1>
          <p>Contenido de esta sección del sitio original de Osseous.</p>
        </div>
      </main>
    );
  }

  if (!html) {
    return (
      <main className="section">
        <div className="wrap">
          <p>Cargando…</p>
        </div>
      </main>
    );
  }

  return (
    // La clase elementor-kit-6 es clave: ahí viven las variables de color y
    // tipografía del sitio original; sin ella los estilos no agarran
    <main className="site-page elementor-kit-6">
      {/* En las páginas de productos pongo un botón de regresar arriba */}
      {isProductPage(slug) && (
        <div className="wrap site-page__back">
          <Link className="back-link" to="/">
            <span className="circle">←</span> Volver al inicio
          </Link>
        </div>
      )}
      {/* Aquí pinto el contenido importado tal cual. Es contenido mío (viene del
          sitio de Osseous, no de usuarios), así que no hay riesgo en renderizarlo directo */}
      <div
        ref={contentRef}
        className={`site-page__content elementor-page elementor-page-${elementorId ?? ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
