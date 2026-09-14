# 014 — SEO técnico y versión bilingüe

- Fecha/hora: 2026-09-14 18:49
- Tipo: feature
- Mejora a: 013
- Tarea: X-T13
- Stack: Astro static + TypeScript

## Qué se hizo

- Se ampliaron los metadatos SEO base: canonical, robots, author, Open Graph, Twitter Card, imagen social y datos estructurados de Organization.
- Se añadieron enlaces `hreflang` para castellano, inglés y `x-default`.
- Se crearon `/en/` y `/en/trabajos/` con contenido inglés real, navegación y selector ES.
- Se añadió detección inicial del idioma del navegador: inglés solo en primera visita y con selector manual persistente.
- Se publicó `public/llms.txt` y se actualizó el sitemap con las cuatro rutas indexables.
- Se amplió el relato de “El trabajo habla” con contexto sobre el proceso estratégico y creativo.

## Verificación

- Preview local revisada en `/en/`.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 4 páginas estáticas generadas; aviso no bloqueante por chunk de Three.js.

## Decisión

- Se usa `navigator.language` como señal automática, no geolocalización silenciosa. La ubicación exacta requiere consentimiento y no es necesaria para elegir idioma.

## Commit

- `a267411` — `feat: add bilingual SEO foundation`
