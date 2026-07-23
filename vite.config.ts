// Configuración de Vite: React + el alias "@" para importar desde src
// sin rutas relativas feas (import { x } from "@/lib/catalog" en vez de "../../lib/catalog").
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true, // abre el navegador solo al correr npm run dev
  },
});
