# 005 — Spatial scroll multidireccional

- Fecha/hora: 2026-09-14 17:52
- Tipo: feature
- Mejora a: —
- Tarea: X-T4
- Stack: Astro + GSAP ScrollTrigger + Three.js

## Qué se hizo

- Se añadió una capa de navegación espacial a las secciones intro, servicios, trabajo, clientes y contacto.
- Cada bloque tiene una dirección propia: izquierda, derecha, profundidad, diagonal y ascendente.
- Las transformaciones se sincronizan con el scroll mediante `scrub`, con perspectiva y giros muy contenidos para no sacrificar legibilidad.
- Se mantiene la separación de responsabilidades: GSAP anima la interfaz y Three.js transforma las formas de la escena central.
- El efecto se limita a escritorio; móvil y `prefers-reduced-motion` conservan un flujo estable y accesible.

## Verificación

- Preview local revisada durante el scroll de la escena central y la navegación entre secciones.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Commit

- `73acea0` — `feat: add multidirectional spatial scroll`
