import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Memoria en JavaScript para acceso ultra-rápido a las posiciones de scroll
const scrollPositions = new Map<string, number>();

// Identifica si una ruta es la vista de detalle de un producto
function isDetailRoute(path: string): boolean {
  return path.startsWith("/producto/") || path.startsWith("/ficha/");
}

export function ScrollRestoration() {
  const location = useLocation();
  const navType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"
  const prevPathRef = useRef<string>(location.pathname);

  // Configuramos el scrollRestoration del navegador en manual para evitar saltos no deseados
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Escuchamos el scroll de la página actual y guardamos la posición
  useEffect(() => {
    let debounceTimer: number;

    const onScroll = () => {
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
      // Guardar la última posición antes de desmontar o cambiar de ruta
      const y = window.scrollY;
      scrollPositions.set(location.pathname, y);
      try {
        sessionStorage.setItem(`osseous_scroll_${location.pathname}`, String(y));
      } catch {
        // Ignorar
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

    // 1. Si la URL incluye ancla (#id), nos desplazamos al ancla
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView();
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
        // Intento inmediato
        window.scrollTo(0, savedY);

        // Reintentos automáticos para esperar el renderizado de la cuadrícula de productos
        let attempts = 0;
        const intervalId = window.setInterval(() => {
          attempts++;
          const target = savedY as number;
          if (Math.abs(window.scrollY - target) < 15 || attempts > 15) {
            window.clearInterval(intervalId);
          } else {
            window.scrollTo(0, target);
          }
        }, 35);

        return () => window.clearInterval(intervalId);
      }
    }

    // 3. Si es una navegación nueva hacia adelante (PUSH), empezamos desde arriba
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, navType]);

  return null;
}
