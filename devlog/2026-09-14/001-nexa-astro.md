# 001 — Base profesional de Nexa en Astro

- Fecha/hora: 2026-09-14 17:20
- Tipo: feature
- Mejora a: —
- Tarea: F1-T1, F1-T2
- Stack: Astro + TypeScript estricto + GSAP ScrollTrigger

## Qué se hizo

- Se creó la base de un proyecto Astro estático con layout y página principal.
- Se aplicó el sistema visual de Nexa: composición editorial/brutalista, negro, lima, tipografía display y mono.
- Se integró el showreel aportado en el hero.
- Se implementaron secciones de enfoque, servicios, clientes y contacto.
- Se añadió motion de entrada y ticker con GSAP, desactivado con `prefers-reduced-motion`.

## Verificación

- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run build`: correcto, 1 página estática generada.
- `npm run lint`: pendiente de una última pasada tras ignorar artefactos generados.

## Próximos pasos

- Abrir preview visual en 375 y 1440 px.
- Ajustar copy, logos reales, correo y enlaces sociales de la agencia.
- Publicar cuando se confirme el contenido final.
