# Plan Nexa

## Brief

Nexa es una agencia de marketing digital para marcas que necesitan estrategia, identidad y ejecución creativa. La web debe vender criterio y proceso, no parecer una plantilla.

## Alcance

IN: home narrativa, servicios, clientes, CTA de contacto, vídeo de showreel, responsive, motion accesible, SEO básico.
OUT: CMS, autenticación, formulario con backend, blog, casos con métricas inventadas.

## Fases

### F1-T1 · Sistema de diseño y base Astro [M] [done]

- Skill: front-activation §3 + ui-ux-pro-max §2 + design-system
- Hecho cuando: Astro estricto, tokens persistidos y layout semántico inicial.
- Verificar: npm run check
- Devlog: devlog/2026-09-14/001-nexa-astro.md

### F1-T2 · Página agencia y motion [M] [done]

- Skill: ui-ux-pro-max §2 + gsap-scrolltrigger §1
- Hecho cuando: hero, servicios, clientes y contacto se perciben como una pieza editorial responsive.
- Verificar: npm run check; npm run build
- Depende de: F1-T1
- Devlog: devlog/2026-09-14/001-nexa-astro.md

### F1-T3 · Validación y publicación [S] [todo]

- Skill: code-quality + sites-hosting
- Hecho cuando: check, lint, build y publicación completados.
- Verificar: npm run check; npm run lint; npm run build
- Depende de: F1-T2
- Devlog: —

### X-T4 · Spatial scroll multidireccional [M] [done]

- Skill: threejs-webgl §scroll-driven 3D + gsap-scrolltrigger §ScrollTrigger + web3d-integration-patterns §Pattern 1
- Archivos: src/pages/index.astro, src/styles/global.css, src/scripts/scroll-scene.ts
- Hecho cuando: las secciones de contenido tienen desplazamientos laterales, diagonales y de profundidad en escritorio; el scroll es estable y los modos móvil/reduced-motion no fuerzan transformaciones.
- Verificar: npm run check; npm run lint; npm run build; revisión visual en preview local.
- Depende de: 3cc1fc2
- Devlog: devlog/2026-09-14/005-spatial-scroll.md

### X-T5 · Corrección de dirección visual Nexa [M] [done]

- Skill: brand §visual identity + ui-ux-pro-max §landing + imagegen §website assets
- Archivos: src/styles/global.css, src/pages/index.astro, src/scripts/scroll-scene.ts, public/images/*-v2.png
- Hecho cuando: se retira el spatial scroll rechazado, la interfaz usa la paleta del logo y los visuales principales se alinean con ella.
- Verificar: npm run check; npm run lint; npm run build; revisión visual en preview local.
- Depende de: X-T4
- Devlog: devlog/2026-09-14/006-correccion-direccion-visual.md

### X-T6 · Contacto, formulario y footer [M] [done]

- Skill: ui-ux-pro-max §formularios y accesibilidad + code-quality §frontend
- Archivos: src/pages/index.astro, src/pages/trabajos.astro, src/styles/global.css
- Hecho cuando: el contacto incluye email, WhatsApp, ubicación, formulario accesible y footer con navegación consistente.
- Verificar: npm run check; npm run lint; npm run build; revisión visual y envío de prueba.
- Depende de: X-T5
- Devlog: devlog/2026-09-14/007-contacto-footer.md

### X-T7 · Logo SVG y paleta oficial [S] [done]

- Skill: brand §logo y paleta + ui-ux-pro-max §tokens
- Archivos: public/nexa-logo.svg, src/pages/index.astro, src/pages/trabajos.astro, src/styles/global.css, src/scripts/scroll-scene.ts
- Hecho cuando: el logo original aparece en header/footer y los tokens visuales coinciden con la paleta entregada.
- Verificar: npm run check; npm run lint; npm run build; revisión visual local.
- Depende de: X-T6
- Devlog: devlog/2026-09-14/008-logo-paleta-oficial.md

### X-T8 · Ticker infinito de servicios [S] [done]

- Skill: gsap-scrolltrigger §timelines + code-quality §frontend
- Archivos: src/pages/index.astro, src/styles/global.css
- Hecho cuando: la franja de servicios se desplaza continuamente en loop, sin depender del scroll y con pausa en `prefers-reduced-motion`.
- Verificar: npm run check; npm run lint; revisión visual local.
- Depende de: X-T7
- Devlog: devlog/2026-09-14/009-ticker-infinito.md
