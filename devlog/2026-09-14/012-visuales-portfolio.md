# 012 — Visuales de portfolio y footer

- Fecha/hora: 2026-09-14 18:36
- Tipo: feature
- Mejora a: 008
- Tarea: X-T11
- Stack: Astro + CSS + ImageGen

## Qué se hizo

- Se corrigió el ancho del contenedor del logo en el footer para evitar que el SVG apareciera cortado.
- Se generaron cuatro imágenes específicas para portfolio: Marea, Norte, Orbita y producción audiovisual.
- Se sustituyeron los bloques repetidos de `/trabajos` por imágenes editoriales distintas.
- Se actualizó “El trabajo habla” para usar el caso Marea, Norte y Orbita sin repetir los visuales de servicios.

## Verificación

- Preview local revisada en home y `/trabajos`.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Commit

- `65c2bff` — `feat: add unique portfolio case visuals`
