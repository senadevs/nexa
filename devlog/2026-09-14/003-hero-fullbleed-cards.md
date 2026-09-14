# 003 — Hero full-bleed y cards colapsables

- Fecha/hora: 2026-09-14 17:35
- Tipo: feature
- Mejora a: —
- Tarea: X-T2
- Stack: Astro + Three.js + GSAP ScrollTrigger + ImageGen

## Qué se hizo

- Se rehízo el hero como video a pantalla completa, con texto HTML accesible encima.
- Se añadió una secuencia automática de tres mensajes de posicionamiento.
- Three.js queda como capa 3D visual de apoyo, con fallback y reduced-motion.
- Las seis áreas de trabajo son cards colapsables con copy e imagen editorial.
- Se generaron visuales de prueba para estrategia, branding y diseño web.

## Verificación

- Preview local revisada: hero visible, secuencia 02/03 visible y cards desplegables operativas.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas.
