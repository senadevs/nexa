# 015 — Navegación y portfolio responsive

- Fecha/hora: 2026-09-14 18:59
- Tipo: fix
- Mejora a: 014
- Tarea: X-T14
- Stack: Astro + CSS + TypeScript

## Qué se hizo

- Se añadieron estados hover, focus y activo con subrayado coral a la navegación principal.
- El CTA inglés pasa a “Start a project”, aumenta su área y queda separado del selector de idioma.
- Se añadió un menú móvil circular de 46 px con transición a cierre, estado `aria-expanded` y navegación localizada.
- Se corrigió la colisión de selectores que mostraba el menú móvil como un segundo nav en escritorio.
- El panel móvil ocupa el ancho completo del viewport, bloquea el scroll de fondo y puede cerrarse con `Escape`.
- El header queda persistente en escritorio y fijo en móvil para mantener siempre accesibles los destinos principales.
- En escritorio el header se superpone al hero con transparencia total en el inicio y recupera superficie marfil, borde y desenfoque después de 16 px de scroll.
- El header se oculta mientras existe movimiento de scroll y reaparece al detenerse; el tiempo de retorno se calcula a partir de la velocidad del desplazamiento.
- En móvil también comienza transparente sobre el hero y solo muestra la superficie marfil al reaparecer después del scroll o al abrir el menú.
- Se rehízo el hero de la página de trabajos con propuesta de valor y acceso directo a los proyectos.
- Las imágenes de proyectos, casos y servicios usan proporciones responsive en móvil para evitar recortes y desbordamientos.

## Verificación

- Menú móvil abierto y cerrado en `/en/` mediante navegador.
- Hero responsive revisado en `/en/trabajos/`.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run build`: correcto, 4 páginas estáticas generadas.
- `npm run lint`: pendiente de repetir tras formatear el índice del devlog.

## Commit

- Pendiente de crear en este cierre.
