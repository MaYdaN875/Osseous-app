// Este es el punto de entrada de toda la app.
// Aquí monto React sobre el div#root del index.html y cargo los estilos globales.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "@/app/App";
import "@/styles/index.css";

// Le pongo la clase "js" al <html> para que el CSS sepa que JavaScript sí cargó
// (las animaciones de aparición dependen de esto; sin JS todo se ve normal).
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
