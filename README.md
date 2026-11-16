# DIEGO'S Pollería y Parrilla

Landing page hecha con **Vite + React + Tailwind CSS v4** (íconos con `lucide-react`, fuentes locales con `@fontsource`).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # compila a /dist
npm run preview  # previsualiza el build
```

## Estructura

```
public/            favicon.svg, og-image.jpg (imagen al compartir el link)
src/
  App.jsx          solo importa y ordena las secciones
  data/            TODOS los textos, precios, links y listas (site, hero, menu, reviews, visit, ...)
  components/      piezas reutilizables (Logo, NavBar, Button, ComboCard, ReviewCard, ReservationModal, ...)
  sections/        Hero, Menu, Reviews, Visit
  hooks/           useReservationModal, useActiveSection
  utils/           whatsapp.js (arma enlaces wa.me y formatea precios)
  assets/          imágenes locales (placeholders)
```

Enlaces del menú superior: INICIO → Hero · MENÚ y COMBOS → sección de menú · NOSOTROS → reseñas · CONTACTO → ubicación y horarios.

## Imágenes a reemplazar (mismo nombre de archivo)

| Archivo | Dónde se usa |
|---|---|
| `src/assets/hero.jpg` | Pollo a la brasa del hero (cuadrada, ~1200×1200, fondo oscuro; con PNG transparente cambia la extensión en `src/data/hero.js`) |
| `src/assets/combo-familiar.jpg` | Tarjeta Combo Familiar 1 (proporción 16:10) |
| `src/assets/parrilla-mixta.jpg` | Tarjeta Parrilla Mixta |
| `src/assets/combo-para-2.jpg` | Tarjeta Combo para 2 |
| `src/assets/salad.jpg` | Imagen lateral de reseñas (vertical) |
| `src/assets/avatar-1.jpg` … `avatar-3.jpg` | Fotos de las reseñas |
| `src/assets/map-ate.jpg` | Captura del mapa (el pin y las etiquetas se dibujan en código) |
| `public/og-image.jpg` | Vista previa al compartir (1200×630) |
| `public/favicon.svg` | Favicon |

## Pendientes antes de publicar

- [ ] Reemplazar todas las fotos placeholder por las reales.
- [ ] Contenido de las pestañas **POLLOS** y **PARRILLAS** (el diseño solo muestra COMBOS; hoy muestran un mensaje "muy pronto"). Se edita en `src/data/menu.js`.
- [ ] Enlace de **VER MENÚ COMPLETO** (`fullMenuUrl` en `src/data/menu.js`).
- [ ] Enlaces reales de Google Maps (`mapsUrl` y `reviewsUrl` en `src/data/site.js`).
- [ ] Confirmar cifras y reseñas (4.8 ★, +1,250 reseñas, nombres y textos) en `src/data/reviews.js`. Usar reseñas reales con permiso.
- [ ] Confirmar textos que se veían poco claros en las capturas: `¡HAZ TU PEDIDO AHORA!` y `¡Pide ahora por WhatsApp!` (se escribieron con signos de apertura en español).
- [ ] Confirmar horarios y dirección (`src/data/site.js`, `src/data/visit.js`).
- [ ] **Formulario de reservas**: hoy valida y muestra confirmación, pero no envía nada. En `src/components/ReservationModal.jsx` hay un `TODO` con dos opciones (mensaje a WhatsApp o backend/servicio de formularios).
- [ ] Botones **Pedir por WhatsApp**: ya abren `wa.me` con un mensaje prellenado. Ajusta los mensajes en `src/data/*.js` si quieres.
- [ ] `og:image` en `index.html`: usar URL absoluta cuando tengas dominio.
- [ ] El diseño no incluye footer; agregarlo si se desea (redes sociales, derechos, etc.).
