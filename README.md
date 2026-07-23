# Osseous Web

Sitio de [Osseous](https://sitio.osseous.com.mx/) hecho en **React + Vite + TypeScript**, con un **catálogo de productos** agregado (basado en el catálogo de Chunli).

La idea del proyecto: replicar el sitio original tal cual (mismo diseño, animaciones, video, popup, todo) y sumarle el catálogo nuevo con un diseño propio que combina con la página.

## Qué es qué

| Parte | Rutas | De dónde sale |
|-------|-------|---------------|
| Sitio Osseous original | `/`, `/empresa`, `/servicios`, `/blog`, `/reemplazo-de-rodilla`, … | Contenido importado del sitio real (idéntico) |
| Detalle de producto Osseous | `/ficha/:pagina/:num` | Se arma solo a partir del contenido de cada página de productos |
| Catálogo nuevo | `/catalogo`, `/catalogo/:id`, `/producto/:id` | Catálogo Chunli, diseño propio |

## Cómo correrlo

```bash
npm install
npm run dev       # abre http://localhost:5173
npm run build     # genera dist/ listo para subir a Netlify
```

## Estructura del proyecto

```
src/
├── app/            # El router: aquí están todas las rutas
├── components/     # Componentes por área: layout (header/footer/buscador),
│                   # home (popup), catalog (tarjetas) y ui (hero)
├── config/         # El menú de navegación, textos del catálogo y cosas configurables
├── content/pages/  # El contenido de cada página del sitio original, como módulos .ts
├── data/           # catalog-data.json (categorías y productos del catálogo)
├── hooks/          # useReveal: las animaciones de aparición al hacer scroll
├── lib/            # Lógica: catálogo, estilos de Elementor y parseo de fichas
├── pages/          # Las páginas: MirroredPage (las del sitio original),
│                   # CatalogPage, CategoryPage, ProductPage y FichaPage
├── styles/         # catalog.css (base + catálogo), home.css (popup y botones),
│                   # site-content.css (ajustes del contenido importado)
└── types/          # Tipos de TypeScript del catálogo

scripts/            # Scripts de una sola vez que usé para armar el proyecto:
                    # descargar el sitio original, importar sus páginas, bajar
                    # el catálogo de Chunli, optimizar imágenes y fuentes
```

## Cómo funciona lo del sitio original

El sitio real está hecho con WordPress + Elementor. En vez de rehacer cada página a mano (y que quedara diferente), importé su contenido y lo guardé en `src/content/pages/` como módulos de TypeScript. `MirroredPage.tsx` los renderiza y les agrega con JavaScript lo que Elementor hacía: carruseles, videos, navegación sin recargas, etc. Todos los archivos que necesita (imágenes, video, CSS, fuentes) están descargados en `public/`, así que el sitio no depende del servidor original para nada.

## Despliegue

`npm run build` y subes el contenido de **`dist/`** a Netlify. El archivo `public/_redirects` ya está configurado para que las rutas de React funcionen bien allá.
