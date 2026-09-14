# 002 — Hero 3D, trabajo y SEO

- Fecha/hora: 2026-09-14 17:26
- Tipo: feature
- Mejora a: —
- Tarea: X-T1
- Stack: Astro + Three.js + GSAP ScrollTrigger

## Qué se hizo

- Se sustituyó el visual principal por una escena abstracta 3D en Three.js.
- Se añadió fallback estático y limpieza de renderer, geometría y material.
- Se añadió la sección Trabajo en home y la página `/trabajos`.
- Se añadió Diseño web como servicio enlazado a Trabajo.
- Se añadieron canonical, Open Graph básico, Twitter cards, robots.txt y sitemap.xml.
- Se retiró el microtexto de cabecera del CTA del hero.

## Verificación

- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Próximos pasos

- Sustituir marcas de ejemplo por clientes y proyectos reales.
- Añadir imágenes y resultados reales a los casos de trabajo.
- Revisar dominio final antes de publicar sitemap y canonical.
