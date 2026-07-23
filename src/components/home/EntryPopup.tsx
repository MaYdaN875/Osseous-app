// El popup promocional que aparece al entrar al inicio, igualito al del sitio
// original: entra con efecto de zoom desde arriba, se queda un momento y se va solo.
// No tiene botón de cerrar a propósito, porque así funciona en el sitio real.
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HOME_POPUP_IMAGE } from "@/config/home-content";

// Los tiempos los calculé para que todo dure exactamente 3 segundos:
// 1.1s de entrada + 1.4s visible + 0.5s de salida
const ENTER_MS = 1100;
const VISIBLE_MS = 1400;
const EXIT_MS = 500;

export function EntryPopup() {
  const { pathname } = useLocation();
  // Solo sale en la página principal; en las demás nunca aparece
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // Cuando llegas al inicio, espero 400ms (para que la página alcance a pintarse)
  // y lo muestro. Si te vas a otra página, lo apago de inmediato.
  useEffect(() => {
    if (!isHome) {
      setOpen(false);
      setClosing(false);
      return;
    }

    setClosing(false);
    const showTimer = window.setTimeout(() => setOpen(true), 400);
    return () => window.clearTimeout(showTimer);
  }, [isHome]);

  // Ya abierto, programo su ciclo de vida: bloqueo el scroll de fondo,
  // a los 2.5s empieza la animación de salida y a los 3s desaparece del todo
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const closeStartTimer = window.setTimeout(() => setClosing(true), ENTER_MS + VISIBLE_MS);
    const removeTimer = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, ENTER_MS + VISIBLE_MS + EXIT_MS);

    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(closeStartTimer);
      window.clearTimeout(removeTimer);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="entry-popup" role="dialog" aria-modal="true" aria-label="Promoción Osseous">
      <div className={`entry-popup__backdrop${closing ? " is-closing" : ""}`} aria-hidden="true" />
      <div className={`entry-popup__panel${closing ? " is-closing" : ""}`}>
        <img src={HOME_POPUP_IMAGE} alt="Promoción Osseous" />
      </div>
    </div>
  );
}
