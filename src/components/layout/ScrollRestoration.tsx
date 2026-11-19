import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Memoria en JavaScript para acceso ultra-rápido a las posiciones de scroll
const scrollPositions = new Map<string, number>();

// Identifica si una ruta es la vista de detalle de un producto
function isDetailRoute(path: string): boolean {
  return path.startsWith("/producto/") || path.startsWith("/ficha/");
}

// Salto de scroll instantáneo y exacto (sin animaciones que retrasen o desfasen la posición)
function instantScrollTo(targetY: number) {
  if (typeof window === "undefined") return;
  const html = document.documentElement;
  const prevBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo({ top: Math.max(0, targetY), left: 0, behavior: "instant" as ScrollBehavior });
  html.style.scrollBehavior = prevBehavior;
}

export function ScrollRestoration() {
  const location = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const prevPathRef = useRef<string>(location.pathname);
  const isRestoringRef = useRef<boolean>(false);

  // Configuramos el scrollRestoration del navegador en manual para controlar nosotros la restauración
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Escuchar el scroll del usuario para guardar la posición general
  useEffect(() => {
    const onScroll = () => {
      if (isRestoringRef.current) return;
      const y = window.scrollY;
      scrollPositions.set(location.pathname, y);
      try {
        sessionStorage.setItem(`osseous_scroll_${location.pathname}`, String(y));
      } catch {
        // Ignorar
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  // Manejamos la posición del scroll cada vez que cambia la ruta
  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = prevPathRef.current;
    prevPathRef.current = currentPath;

    // 1. Si la URL incluye ancla (#id), nos desplazamos al ancla suavemente
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // 2. Determinar si debemos restaurar la posición anterior:
    const isReturningFromDetail = isDetailRoute(prevPath) && !isDetailRoute(currentPath);
    const shouldRestore = navType === "POP" || isReturningFromDetail;

    if (shouldRestore) {
      // Evitar que el navegador auto-enfoque elementos previos y desplace la vista
      if (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement !== document.body) {
        document.activeElement.blur();
      }

      const restoreId = (() => {
        try {
          return sessionStorage.getItem("osseous_restore_id");
        } catch {
          return null;
        }
      })();

      const restoreTopStr = (() => {
        try {
          return sessionStorage.getItem("osseous_restore_top");
        } catch {
          return null;
        }
      })();

      let savedY = scrollPositions.get(currentPath);
      if (savedY === undefined) {
        try {
          const stored = sessionStorage.getItem(`osseous_scroll_${currentPath}`);
          if (stored) savedY = parseInt(stored, 10);
        } catch {
          // Ignorar
        }
      }

      isRestoringRef.current = true;

      // Prioridad 1: Si tenemos la tarjeta exacta clickeada, restaurar su posición visual idéntica
      if (restoreId && restoreTopStr !== null) {
        const expectedTop = parseFloat(restoreTopStr);
        let attempts = 0;
        const maxAttempts = 35; // ~550ms
        let rafId: number;

        const alignCard = () => {
          attempts++;
          const card = document.getElementById(restoreId);
          if (card) {
            const currentTop = card.getBoundingClientRect().top;
            const diff = currentTop - expectedTop;
            if (Math.abs(diff) > 2) {
              instantScrollTo(window.scrollY + diff);
            }
          } else if (savedY !== undefined && savedY > 0) {
            instantScrollTo(savedY);
          }

          if (attempts < maxAttempts) {
            rafId = window.requestAnimationFrame(alignCard);
          } else {
            window.setTimeout(() => {
              isRestoringRef.current = false;
              try {
                sessionStorage.removeItem("osseous_restore_id");
                sessionStorage.removeItem("osseous_restore_top");
              } catch {
                // Ignorar
              }
            }, 100);
          }
        };

        rafId = window.requestAnimationFrame(alignCard);

        return () => {
          window.cancelAnimationFrame(rafId);
          isRestoringRef.current = false;
        };
      }

      // Prioridad 2: Si no hay tarjeta guardada, restaurar por coordenada exacta en Y
      if (savedY !== undefined && savedY > 0) {
        instantScrollTo(savedY);

        let rafId: number;
        let attempts = 0;
        const maxAttempts = 30;

        const checkAndRestore = () => {
          attempts++;
          const target = savedY as number;
          instantScrollTo(target);

          if (Math.abs(window.scrollY - target) < 5 || attempts >= maxAttempts) {
            window.setTimeout(() => {
              isRestoringRef.current = false;
            }, 80);
          } else {
            rafId = window.requestAnimationFrame(checkAndRestore);
          }
        };

        rafId = window.requestAnimationFrame(checkAndRestore);

        return () => {
          window.cancelAnimationFrame(rafId);
          isRestoringRef.current = false;
        };
      }
    }

    // 3. Si es una navegación nueva hacia adelante (PUSH), empezamos desde arriba
    isRestoringRef.current = true;
    instantScrollTo(0);
    const topTimeout = window.setTimeout(() => {
      isRestoringRef.current = false;
    }, 50);

    return () => {
      window.clearTimeout(topTimeout);
      isRestoringRef.current = false;
    };
  }, [location.pathname, location.hash, navType]);

  return null;
}
