// Hook para las animaciones de "aparición": todo lo que tenga la clase .reveal
// empieza invisible y se muestra con una transición suave cuando entra a la pantalla
// mientras haces scroll. Lo uso en el catálogo para que se sienta más vivo.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function revealAll(els: NodeListOf<Element>) {
  els.forEach((el) => el.classList.add("in"));
}

export function useReveal() {
  const { pathname } = useLocation();

  // Cada que cambias de página vuelvo a buscar elementos .reveal nuevos
  useEffect(() => {
    document.documentElement.classList.add("js");

    let cleanup: (() => void) | undefined;
    const timers: number[] = [];

    const observe = () => {
      cleanup?.();

      const els = document.querySelectorAll(".reveal:not(.in)");
      if (!els.length) return;

      // Si el navegador es muy viejo y no tiene IntersectionObserver,
      // muestro todo de una vez y ya (mejor sin animación que invisible)
      if (!("IntersectionObserver" in window)) {
        revealAll(els);
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px 0px 0px" }
      );

      els.forEach((el, i) => {
        // Un retraso escaloncito entre elementos para que aparezcan en cascada
        (el as HTMLElement).style.transitionDelay = `${Math.min(i, 8) * 35}ms`;
        io.observe(el);
      });

      // Red de seguridad: si en 800ms algo no se reveló (pasa con contenido
      // que carga tarde), lo muestro de todos modos para que nada quede oculto
      const fallback = window.setTimeout(() => revealAll(els), 800);
      cleanup = () => {
        window.clearTimeout(fallback);
        io.disconnect();
      };
    };

    // Reintento varias veces porque el contenido de las páginas carga async
    // y los elementos .reveal pueden aparecer un poquito después
    observe();
    timers.push(window.setTimeout(observe, 50));
    timers.push(window.setTimeout(observe, 200));
    timers.push(window.setTimeout(observe, 500));

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      cleanup?.();
    };
  }, [pathname]);
}
