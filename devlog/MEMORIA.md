# Memoria — The Nexa Agency (web)

Resumen de lo vigente. El detalle vive en `devlog/INDEX.md` y en cada entrada.

## Qué es

Web estática bilingüe (ES/EN) de una agencia de marketing en Santo Domingo. Astro + CSS propio + GSAP,
sin React ni Tailwind pese a lo que diga el perfil generado. Dominio: `https://thenexaagency.com`.

## Decisiones vigentes

- D-001 · Astro estático con CSS propio y GSAP; React y Tailwind no entran · ver 016
- D-002 · Numeración de devlog correlativa global del proyecto, no la del instalador · ver 016
- D-003 · Tipografía: Bricolage Grotesque (display) + Manrope (texto) + DM Mono (cifras) · ver 017
- D-004 · Paleta oficial del logo, sin segundo acento y sin dark mode automático · ver 017
- D-005 · Secciones separadas por láminas de color superpuestas, no por líneas · ver 017
- D-006 · Servicios con `position: sticky`, nunca pin (evita scroll-jacking) · ver 017
- D-007 · Todo el contenido ES/EN en `src/i18n/site.ts`; las páginas no llevan texto suelto · ver 017
- D-008 · Sin etiquetas mono en mayúsculas sobre los títulos ("muy IA" según el cliente) · ver 018
- D-009 · Nada de vídeo ni imagen detrás del titular del hero: mata la legibilidad · ver 018
- D-010 · `.claude/`, `CLAUDE.md`, `.mcp.json` y `.dev-standards.json` fuera de git (generados) · ver 019
- D-011 · Un solo `Button.astro`; los textos de CTA viven en `site.ts` y no se repiten · ver 020
- D-012 · Bento de clientes con posiciones explícitas por breakpoint (12/6/2 columnas) · ver 020
- D-013 · Imágenes del hero en card propia, nunca de fondo; el titular se limita por fórmula · ver 021
- D-014 · Todo lo que se mueve solo más de 5 s lleva botón de pausa (WCAG 2.2.2) · ver 021
- D-015 · Navegación por anclas con cortina, no smooth scroll: el scroll no se ve · ver 022
- D-016 · Loader una vez por sesión (`sessionStorage`), saltable y con tope de espera · ver 022
- D-017 · Sin botones magnéticos: el cliente los percibe como confusos · ver 023
- D-018 · Los PNG originales viven en `assets/source/`; se publican WebP generados por script · ver 023
- D-019 · Redirección automática a inglés solo para personas, nunca para bots · ver 023
- D-020 · Sin cursor personalizado; la pista de card clicable es el círculo con flecha · ver 024
- D-021 · Las entradas de página parten de un estado preparado por CSS (`intro-pending`) · ver 025
- D-022 · Los temporizadores de emergencia inline los cancela el propio script al arrancar · ver 025
- D-023 · Contenido del PDF del cliente aplicado íntegro y traducido al inglés · ver 028
- D-024 · Sin sección 3D: fuera `scroll-scene.ts` y las dependencias de Three.js · ver 028
- D-025 · Las opciones del formulario coinciden exactamente con las 7 categorías de servicios · ver 028
- D-026 · El tamaño del titular del hero se mide en el navegador (`--hero-fit`), no se calcula por fórmula · ver 029

## Reglas del cliente

- Marca: "The Nexa Agency". Correo `info@thenexaagency.com`. Base: Santo Domingo, República Dominicana.
- Nada de métricas inventadas ni testimonios: las cifras describen la oferta (6 disciplinas, 360°, 1 equipo).
- Verificación obligatoria antes de dar una vista por hecha: `ui-verify` en 375/768/1440, móvil primero.

## Lo que no funcionó (no repetir)

- Vídeo de fondo en el hero: ilegible, retirado · ver 018
- Cursor redondo "Ver caso": el cliente lo vio feo · ver 024
- `transform` en CSS sobre elementos cuya posición anima GSAP: se suman y rompen la animación · ver 022, 025
- Temporizador de seguridad fijo compitiendo con la animación real del loader · ver 025

## Pendientes abiertos

- [desde 2026-10-07] Imagen propia de "Social Media & Contenido" (prompt en `assets/source/prompts-pendientes.md`)
- [desde 2026-10-07] Número real de WhatsApp (hoy `18090000000`) y enlace real de Instagram
- [desde 2026-09-17] Validar con el cliente los nombres de clientes del muro (son de muestra)
- [desde 2026-10-07] `www.thenexaagency.com` lo sirve Squarespace con una redirección; el apex ya está en Vercel
