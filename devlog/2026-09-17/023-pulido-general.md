# 023 — Pulido general: sin botones magnéticos, /trabajos al nivel de la home y auditoría

- Fecha/hora: 2026-09-17 14:45
- Tipo: fix
- Mejora a: 022
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP + Three.js

## Petición

Quitar el efecto magnético de los botones del hero ("puede generar confusión") y revisar todo para pulir.

## Método

- Recorrido con capturas de las 5 páginas a 1440 y 375 px, por tramos de scroll.
- Auditoría de código en paralelo (subagente de solo lectura): código muerto, recursos, accesibilidad, SEO, JS y textos ES/EN.

## Qué se hizo

**Interacción**

- Eliminado el efecto magnético (prop de `Button`, JS y CSS).
- El contador del hero cambia con la palabra, no antes.

**/trabajos**

- Rehecho como `components/work/WorkPage.astro`, con los mismos datos que la home (`homeCopy.work`) y los textos propios en `workPageCopy`.
- Rejilla equilibrada: Marea a lo ancho, Norte + Orbita, y Studio (antes sin nombre y con un hueco al lado) junto a la card "Tu marca aquí".
- Píldoras de categoría, `Button`, reveals y sin etiquetas mono.

**Navegación y accesibilidad**

- Hueco sin navegación entre 801 y 1080 px: el botón de menú aparece ya por debajo de 1080 px.
- Menú: `aria-controls`, etiqueta "Abrir/Cerrar menú" y Escape devuelve el foco al botón.
- Marquee decorativo y canvas 3D con `aria-hidden`.
- Contraste: los acentos en blanco sobre naranja llevan contorno ink; los hover en blanco sobre naranja pasan a subrayado; el hover del selector de idioma sobre el hero oscuro ahora es ink.
- Etiquetas funcionales (formulario, canales de contacto, columnas y pie del footer, índice del menú) pasan de mono en mayúsculas a `.label` sans.
- Cifras del manifiesto en móvil: una fila por cifra en lugar de tres columnas apretadas.

**Rendimiento**

- Servicios, casos y el fondo del proceso pasan de PNG (1,5–3 MB cada uno) a WebP con `srcset`. `public/` baja de ~40 MB a 1,7 MB.
- Originales movidos a `assets/source/`, que no se publica, y script `scripts/optimize-images.mjs` para regenerar.
- Corregido `img { height: auto }`: en /trabajos los atributos de altura anulaban el `aspect-ratio` y las imágenes salían altísimas.
- Marquee: una sola animación reemplazada por evento, en vez de dos líneas de tiempo nuevas en cada scroll.

**Robustez JS**

- `scroll-scene.ts`: solo destruye su propio ScrollTrigger (antes mataba todos al salir de la página) y se conserva al volver con atrás/adelante (bfcache).
- Sin WebGL, los pasos del proceso quedan visibles (`.no-webgl`), en vez de quedarse al 28 % de opacidad.
- Evita dos bucles de render a la vez y usa la paleta oficial (`#ff5e1e`, `#fffdf1`).
- Listener `focus` del cursor limpiado. `scroll-behavior: smooth` retirado (la cortina gestiona los saltos).

**SEO y metadatos**

- Imagen para redes 1200×630 JPG con alt y dimensiones.
- JSON-LD: nombre "Nexa Digital Agency", logo, `knowsAbout` traducido y fuera `inLanguage`. Viewport con `initial-scale=1`.
- Barra final coherente en `/trabajos/` (datos, sitemap, selector de idioma).
- La redirección automática a inglés se ejecuta antes de pintar, no afecta a bots ni automatización, está protegida con try/catch y va separada del script del menú.
- Favicon con los chevrones de la marca + `apple-touch-icon`.
- Nueva página 404 bilingüe.

**Textos**

- CTA del header en EN: "Let’s talk".
- "Film production" unificado en EN.
- WhatsApp EN con mensaje prellenado.
- "estudio 44" sin traducir (es nombre de marca).
- Cursor de casos: "Ver proyectos" (no existen páginas de caso).
- Sin "Madrid / España" duplicado en el footer.

**Limpieza**

- Borrados `hero-scene.ts` y `.sheet-sand`, y la etiqueta `canvas` sin uso en `site.ts`.

## Pendiente (requiere al cliente)

- Datos provisionales: WhatsApp `34600000000`, Instagram apuntando a la raíz, nombres de clientes de muestra.
- No hay páginas de caso: los casos enlazan a /trabajos.
- Archivos originales en la raíz del repo (`WhatsApp Video…mp4`, idéntico al showreel, y `NEXA LOGO.svg`): se dejan, son del cliente.
- Colores con transparencia escritos a mano (rgba) en CSS: pendiente de pasarlos a tokens de opacidad (baja prioridad).

## Verificación

- Recorrido de /trabajos y /en/trabajos/ a 1440 y 375 tras corregir las imágenes.
- Home: medidas de todas las imágenes coherentes (hero 462×633, servicios 648×467, casos 1000×726; en móvil 343×214, 303×227 y 353×441).
- Regresión:
  - Loader en la primera visita y no en la segunda página de la sesión.
  - Cortina a `#servicios` y a `#proyectos`, las dos a 108 px del borde.
  - Selector de idioma desde /trabajos lleva a `/en/trabajos/`.
  - Menú en tablet (1024 px) lleva a `#contacto` y se cierra; Escape devuelve el foco.

```text
## /
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /en/
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /trabajos/
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /en/trabajos/
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /404.html
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
```

```text
$ npx astro check
- 0 errors
- 0 warnings
- 0 hints

$ npm run lint
All matched files use Prettier code style!
```
