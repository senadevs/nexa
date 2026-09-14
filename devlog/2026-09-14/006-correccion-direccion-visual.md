# 006 — Corrección de dirección visual Nexa

- Fecha/hora: 2026-09-14 18:00
- Tipo: fix
- Mejora a: 005
- Tarea: X-T5
- Stack: Astro + Three.js + GSAP + ImageGen

## Qué se hizo

- Se retiró el efecto de desplazamiento multidireccional de las secciones.
- Se mantuvo únicamente la escena 3D narrativa central, sin alterar el scroll normal del resto de la web.
- Se actualizó la paleta global según el logotipo entregado por Nexa Digital Agency.
- Se generaron cinco visuales nuevos para servicios y se integraron en el hero y en la sección inmersiva.
- Se aplicó un tratamiento cromático compatible al visual audiovisual existente.

## Verificación

- Preview local revisada: scroll estable y paleta coral/grafito aplicada.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Commit

- `2b2bbf4` — `fix: align Nexa visual direction`
