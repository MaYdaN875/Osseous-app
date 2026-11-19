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
  window.scrollTo({ top: targetY, left: 0, behavior: "instant" as ScrollBehavior });
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

  // Escuchamos el scroll de la página actual y guardamos la posición
  useEffect(() => {
    let debounceTimer: number;

    const onScroll = () => {
      // Si estamos en proceso de restauración activa, no sobreescribir con valores intermedios
      if (isRestoringRef.current) return;

      const y = window.scrollY;
      scrollPositions.set(location.pathname, y);

      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => {
        try {
          sessionStorage.setItem(`osseous_scroll_${location.pathname}`, String(y));
        } catch {
          // Ignorar si sessionStorage no está disponible
        }
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (!isRestoringRef.current) {
        const y = window.scrollY;
        scrollPositions.set(location.pathname, y);
        try {
          sessionStorage.setItem(`osseous_scroll_${location.pathname}`, String(y));
        } catch {
          // Ignorar
        }
      }
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(debounceTimer);
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
    //    - Navegación hacia atrás/adelante en historial (POP: botón atrás, gesto de deslizar, navigate(-1))
    //    - O si estamos regresando de un detalle de producto hacia un listado de catálogo/productos
    const isReturningFromDetail = isDetailRoute(prevPath) && !isDetailRoute(currentPath);
    const shouldRestore = navType === "POP" || isReturningFromDetail;

    if (shouldRestore) {
      let savedY = scrollPositions.get(currentPath);
      if (savedY === undefined) {
        try {
          const stored = sessionStorage.getItem(`osseous_scroll_${currentPath}`);
          if (stored) savedY = parseInt(stored, 10);
        } catch {
          // Ignorar
        }
      }

      if (savedY !== undefined && savedY > 0) {
        isRestoringRef.current = true;
        instantScrollTo(savedY);

        // Realizamos reintentos con requestAnimationFrame para sincronizar exactamente con el renderizado del DOM
        let rafId: number;
        let attempts = 0;
        const maxAttempts = 30; // ~500ms cubriendo múltiples frames

        const checkAndRestore = () => {
          attempts++;
          const target = savedY as number;
          instantScrollTo(target);

          // Si ya estamos a menos de 5px del destino deseado o se superaron los intentos
          if (Math.abs(window.scrollY - target) < 5 || attempts >= maxAttempts) {
            window.setTimeout(() => {
              isRestoringRef.current = false;
            }, 100);
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
