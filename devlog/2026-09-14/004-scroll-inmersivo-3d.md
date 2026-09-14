# 004 — Scroll inmersivo 3D y limpieza visual

- Fecha/hora: 2026-09-14 17:48
- Tipo: feature
- Mejora a: —
- Tarea: X-T3
- Stack: Astro + Three.js + GSAP ScrollTrigger

## Qué se hizo

- Se eliminó la figura redonda del hero para no competir con los visuales y el vídeo.
- Se trasladó la interacción 3D a una sección inmersiva de scroll en escritorio.
- La escena cambia entre tres formas abstractas según el progreso del scroll.
- Se añadió fallback visual, transparencia del canvas y comportamiento reducido para móvil y `prefers-reduced-motion`.
- Se retiró el microcopy técnico de la sección para mantener una dirección visual más limpia.

## Verificación

- Preview local revisada: hero limpio y figura 3D visible en la sección inmersiva.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Commit

- `6990bbe` — `feat: establish Nexa Astro experience`
