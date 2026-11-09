# Osseous Web

Sitio de [Osseous](https://sitio.osseous.com.mx/) hecho en **React + Vite + TypeScript**, con un **catálogo de productos** agregado (basado en el catálogo de Osseous).

La idea del proyecto: replicar el sitio original tal cual (mismo diseño, animaciones, video, popup, todo) y sumarle el catálogo nuevo con un diseño propio que combina con la página.

## Qué es qué

| Parte | Rutas | De dónde sale |
|-------|-------|---------------|
| Sitio Osseous original | `/`, `/empresa`, `/servicios`, `/blog`, `/reemplazo-de-rodilla`, … | Contenido importado del sitio real (idéntico) |
| Detalle de producto Osseous | `/ficha/:pagina/:num` | Se arma solo a partir del contenido de cada página de productos |
| Catálogo nuevo | `/catalogo`, `/catalogo/:id`, `/producto/:id` | Catálogo Osseous, diseño propio |

## Cómo correrlo

```bash
npm install
npm run dev       # abre http://localhost:5173
npm run build     # para ver que no haya fallas y todo fine
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
                    # el catálogo de Osseous, optimizar imágenes y fuentes
```

## Cómo funciona lo del sitio original

El sitio real está hecho con WordPress + Elementor. En vez de rehacer cada página a mano (y que quedara diferente), importé su contenido y lo guardé en `src/content/pages/` como módulos de TypeScript. `MirroredPage.tsx` los renderiza y les agrega con JavaScript lo que Elementor hacía: carruseles, videos, navegación sin recargas, etc. Todos los archivos que necesita (imágenes, video, CSS, fuentes) están descargados en `public/`, así que el sitio no depende del servidor original para nada.

## Despliegue

### Cache busting (rama de pruebas)

`npm run build` versiona los recursos de `public/assets/` y `public/wp-content/`
en `dist/static/<hash>/`. El hash depende de los nombres y bytes de todos esos
archivos; no cambia por compilar de nuevo sin modificaciones. Vite sigue generando
sus propios hashes para JS, CSS e imports nuevos, ahora en `dist/build-assets/`.

El plugin `scripts/version-public-assets.mjs` adapta las referencias en TS/TSX,
JSON, HTML y los archivos de texto públicos. Mantiene las rutas relativas de CSS
y las rutas dinámicas de Elementor. Los archivos originales permanecen en su sitio
en el repositorio, por lo que los scripts de importación y `npm run dev` siguen funcionando.
Para imágenes nuevas de componentes React se pueden usar imports desde `src/assets/`.

Se usa un hash para el conjunto de assets heredados: cambiar una imagen invalida
todo ese conjunto. Es un compromiso deliberado para conservar el contenido de
Elementor sin migrar manualmente cientos de rutas. No se modifica la caché del
navegador ni se fuerza una recarga de pestañas que ya estaban abiertas.

Validación local:

```bash
npm run build
npm run test:cache
npm run preview
```

Las pruebas compilan dos versiones de un sitio de prueba cambiando solo los bytes
de una imagen, comprueban los hashes y referencias de ambas versiones y verifican
que el build real conserva todos los assets públicos. `vite preview` permite revisar
la página, pero no interpreta `.htaccess` ni las cabeceras de Netlify.

El servidor público de producción responde `Server: Apache`. Se incluye
`public/.htaccess`, copiado a `dist/.htaccess`, con revalidación del HTML y caché
larga solo para URLs versionadas. Requiere Apache 2.4 con `mod_headers`,
`mod_rewrite` y permisos de `.htaccess`. `public/_headers` aplica una política
conservadora de revalidación para las pruebas en Netlify.

Antes de publicar, probar en un subdominio de staging apuntando a una carpeta propia:

1. Respaldar el sitio y su `.htaccess` actual. Integrar estas reglas con las reglas
   existentes del hosting; no reemplazar a ciegas configuraciones de PHP o seguridad.
2. Subir el contenido completo de `dist/`, incluido el archivo oculto `.htaccess`.
   Subir primero `static/` y `build-assets/`, y `index.html` al final. Conservar
   versiones anteriores de assets y bundles para pestañas que sigan abiertas.
3. Comprobar en Network que `/` y `/catalogo` devuelven `Cache-Control: no-cache`,
   y que un asset versionado devuelve `public, max-age=31536000, immutable`.
   Una URL inexistente bajo `/static/` debe devolver 404.
4. Visitar inicio, catálogo, productos y páginas importadas en ambos idiomas;
   comprobar imágenes, fondos, tipografías, videos y enlaces directos.
5. Cambiar una imagen en staging, compilar y subir otra versión. Con la caché
   habilitada, una recarga normal debe mostrarla con una URL distinta.

Una copia de HTML almacenada anteriormente con una política larga no recibe
retroactivamente las nuevas cabeceras: durante la primera migración puede ser
necesario esperar su expiración o invalidar la caché del CDN si existe. Los despliegues
siguientes usan las nuevas URLs y la revalidación del HTML.

No se ha publicado ni fusionado esta implementación en producción.

`npm run build` y subes el contenido de **`dist/`** a Netlify (por si se necesita un link para mostrar de prueba de la pagina). El archivo `public/_redirects` ya está configurado para que las rutas de React funcionen bien allá.
