# 008 — Logo SVG y paleta oficial

- Fecha/hora: 2026-09-14 18:17
- Tipo: fix
- Mejora a: 006
- Tarea: X-T7
- Stack: Astro + CSS + SVG

## Qué se hizo

- Se incorporó el logo SVG original de Nexa en header y footer de ambas páginas.
- Se ajustó el `viewBox` del archivo copiado para eliminar espacio vacío y mejorar la presencia visual.
- Se alinearon los tokens y tonos secundarios con la paleta oficial entregada.
- Se actualizó la escena Three.js y los fondos de trabajo para usar naranja, grafito, beige y marfil.

## Verificación

- Preview local revisada: logo visible y proporcionado en el header.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Commit

- `324aae9` — `fix: apply official Nexa logo palette`
