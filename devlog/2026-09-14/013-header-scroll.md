# 013 — Header legible y entrada del scroll

- Fecha/hora: 2026-09-14 18:39
- Tipo: fix
- Mejora a: 012
- Tarea: X-T12
- Stack: Astro + GSAP + Three.js

## Qué se hizo

- Se aumentó el peso, tamaño y espaciado de los enlaces principales del header para mejorar su lectura y presencia.
- Se mantuvo el CTA del header con peso fuerte para que conserve la misma jerarquía.
- Se prolongó el primer tramo de la sección inmersiva: “Una idea aparece” permanece visible durante el arranque antes de pasar al segundo estado 3D.
- Se conservó la salida accesible para `prefers-reduced-motion` y la experiencia móvil sin pinning.

## Verificación

- Preview local revisada en home.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas; aviso no bloqueante por el chunk de Three.js.

## Commit

- `4a734dd` — `fix: strengthen header and scroll intro`
