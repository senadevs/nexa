# 026 — Serie visual de proyectos Nexa

- **Fecha/hora:** 2026-09-17 23:00
- **Tipo:** feature
- **Mejora a:** 012
- **Tarea:** X-T15
- **Stack:** astro

## Qué se hizo

- Se generó una primera tanda de tres visuales editoriales para portfolio: Marea, Norte y Orbita.
- Se conservaron los originales y se añadieron variantes versionadas `v2` en `assets/source/`.
- Se conectaron los nuevos slugs a home, `/trabajos/` y al slideshow del hero.
- Se añadieron recortes WebP 800/1400 para trabajo y 720/1280/portrait-820 para hero.
- Se guardaron los prompts y las restricciones de serie en `design-system/nexa/prompts.md`.

## Decisiones

- Se usó la paleta oficial de Nexa: ink, graphite, sand, paper y orange.
- Las imágenes no contienen logo, texto ni marcas; el logo sigue siendo SVG de interfaz.
- La tanda de servicios queda fuera hasta validar esta dirección visual.

## Verificación

- `node scripts/optimize-images.mjs` → `Images optimized.`
- `npm run check` → 0 errores, 0 warnings, 1 hint preexistente en `Button.astro`.
- `npm run lint` → `All matched files use Prettier code style!`
- `npm run build` → 5 páginas generadas correctamente; aviso no bloqueante de chunk >500 kB.

## Próximos pasos

- Revisar las tres piezas en navegador y decidir si se extiende la misma receta a servicios.
