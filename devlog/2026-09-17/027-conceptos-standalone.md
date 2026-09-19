# 027 — Conceptos independientes para otro sitio

- **Fecha/hora:** 2026-09-17 23:10
- **Tipo:** feature
- **Mejora a:** —
- **Tarea:** X-T16
- **Stack:** astro

## Qué se hizo

- Se generaron dos ideas nuevas, no variantes de los casos anteriores: `Signal Garden` y `Open Circuit`.
- Se guardaron como originales independientes en `assets/source/standalone/`.
- Se añadieron WebP optimizados a 1600 × 1067 en `public/images/standalone/`.
- No se conectaron a las páginas actuales de Nexa.

## Verificación

- `node scripts/optimize-images.mjs` → `Images optimized.`
- `npm run check` → 0 errores.
- `npm run lint` → formato correcto.
- `npm run build` → 5 páginas generadas correctamente.
