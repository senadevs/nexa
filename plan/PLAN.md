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
