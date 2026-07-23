// El esqueleto de todas las páginas: header arriba, footer abajo, y en medio
// el <Outlet /> donde React Router pinta la página que toque según la URL.
// El popup también va aquí porque él solito decide si mostrarse (solo en inicio).
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EntryPopup } from "@/components/home/EntryPopup";
import { useReveal } from "@/hooks/useReveal";

export function Layout() {
  // Activo las animaciones de aparición al hacer scroll en toda la app
  useReveal();

  return (
    <>
      <EntryPopup />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
