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

### X-T9 · Sección de trabajo con casos [M] [done]

- Skill: ui-ux-pro-max §landing + brand §messaging + code-quality §frontend
- Archivos: src/pages/index.astro, src/styles/global.css
- Hecho cuando: la sección Trabajo contiene contexto, proyecto destacado, casos visuales y CTA para el siguiente proyecto.
- Verificar: npm run check; npm run lint; npm run build; revisión visual local.
- Depende de: X-T8
- Devlog: devlog/2026-09-14/010-seccion-trabajo.md

### X-T10 · Trabajo a ancho completo y publicación [M] [done]

- Skill: ui-ux-pro-max §layout + code-quality §delivery
- Archivos: src/styles/global.css
- Hecho cuando: la sección Trabajo ocupa todo el contenedor y los commits locales están publicados en el remoto configurado.
- Verificar: npm run check; npm run lint; npm run build; git push origin main.
- Depende de: X-T9
- Devlog: devlog/2026-09-14/011-trabajo-publicado.md

### X-T11 · Visuales de portfolio y footer [M] [done]

- Skill: imagegen §portfolio assets + ui-ux-pro-max §content hierarchy + brand §asset organization
- Archivos: src/pages/index.astro, src/pages/trabajos.astro, src/styles/global.css, public/images/*-case.png
- Hecho cuando: footer muestra el logo completo y cada caso de portfolio tiene un visual propio sin repetir imágenes de servicios.
- Verificar: npm run check; npm run lint; npm run build; revisión visual en `/` y `/trabajos`.
- Depende de: X-T10
- Devlog: devlog/2026-09-14/012-visuales-portfolio.md

### X-T12 · Header legible y entrada del scroll [S] [done]

- Skill: ui-ux-pro-max §tipografía + gsap-scrolltrigger §scroll-story
- Archivos: src/styles/global.css, src/scripts/scroll-scene.ts
- Hecho cuando: la navegación tiene peso visual suficiente y el primer capítulo del scroll permanece legible al inicio.
- Verificar: npm run check; npm run lint; npm run build; revisión visual en `/`.
- Depende de: X-T11
- Devlog: devlog/2026-09-14/013-header-scroll.md

### X-T13 · SEO técnico y versión bilingüe [M] [done]

- Skill: ui-ux-pro-max §SEO/a11y + code-quality §Astro
- Archivos: src/layouts/BaseLayout.astro, src/pages/en/*, public/llms.txt, public/sitemap.xml
- Hecho cuando: existe contenido indexable en castellano e inglés, alternates hreflang, metadatos sociales, robots, sitemap y selector de idioma.
- Verificar: npm run check; npm run lint; npm run build; revisión visual en `/en/`.
- Depende de: X-T12
- Devlog: devlog/2026-09-14/014-seo-bilingue.md

### X-T14 · Navegación responsive y hero de trabajo [M] [done]

- Skills: front-activation + ui-ux-pro-max + modern-web-design
- Archivos: src/layouts/BaseLayout.astro, src/pages/**/*.astro, src/styles/global.css
- Hecho cuando: el nav tiene estados hover/focus, el CTA inglés tiene jerarquía correcta, existe menú móvil accesible y el portfolio se adapta sin recortes rígidos.
- Verificar: npm run check; npm run lint; npm run build; revisión visual y apertura del menú en `/en/` y `/en/trabajos/`.
- Depende de: X-T13
- Devlog: devlog/2026-09-14/015-nav-responsive.md
