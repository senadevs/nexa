# 009 — Ticker infinito de servicios

- Fecha/hora: 2026-09-14 18:19
- Tipo: feature
- Mejora a: —
- Tarea: X-T8
- Stack: Astro + GSAP + CSS

## Qué se hizo

- Se convirtió la franja de disciplinas en un marquee horizontal continuo.
- Se duplicó el contenido para que el ciclo sea visualmente infinito y no tenga saltos.
- Se eliminó la dependencia del progreso de scroll.
- Se mantiene una versión estática cuando el usuario tiene `prefers-reduced-motion`.

## Verificación

- Preview local revisada: cinta de servicios en movimiento constante.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.

## Commit

- `f3839bc` — `feat: make services ticker loop continuously`
