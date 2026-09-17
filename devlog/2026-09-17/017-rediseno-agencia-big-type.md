# 017 — Rediseño de agencia: tipografía gigante, láminas y cards grandes

- Fecha/hora: 2026-09-17 13:20
- Tipo: feature
- Mejora a: 015
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP + Three.js

## Qué se hizo

- Nuevo design system en `design-system/nexa/MASTER.md` con la paleta oficial intacta, patrón `agency` y tipografía Bricolage Grotesque (display) + Manrope + DM Mono.
- `global.css` reescrito desde cero (antes ~1700 líneas de overrides): tokens, botones en píldora, header, footer y página de trabajos. Nuevo `home.css` para la home.
- Contenido ES/EN centralizado en `src/i18n/site.ts`; la home es un solo componente (`components/home/HomePage.astro`) usado por `/` y `/en/`. EN pasa de 4 a 6 servicios, igual que ES.
- Header y footer como componentes compartidos (`SiteHeader`, `SiteFooter`) en las cuatro páginas; logo SVG inline (`NexaLogo`) para que se adapte a fondos oscuros, claros y naranja.
- Home reorganizada en secciones numeradas tipo lámina: hero con H1 gigante y palabra rotatoria, doble marquee cruzado, manifiesto con palabras que se encienden y cifras, muro de clientes, servicios en cards apiladas sticky, trabajo en scroll horizontal con cursor "Ver caso", proceso 3D, contacto a pantalla naranja y footer con wordmark gigante.
- Nuevo `src/scripts/home-motion.ts` (GSAP ScrollTrigger + SplitText, `matchMedia`, reduced motion). `scroll-scene.ts` sin cambios.
- Skip link, foco visible naranja y tap targets ≥ 44px.
- `playwright` como devDependency para `ui-verify`; `.ui-verify/` ignorado en git.

## Verificación

- `astro check`: 0 errores, 0 warnings, 0 hints.
- `astro build`: 4 páginas generadas.
- `ui-verify` (375 / 768 / 1440) en `/`, `/en/`, `/trabajos/`, `/en/trabajos/`: 0 problemas, sin scroll horizontal, sin errores de consola.
- Capturas revisadas a 1440 y 375 recorriendo la home completa y el hero de trabajos; se corrigieron el tracking de los titulares, el solape del marquee, el hueco tras el scroll horizontal y el logo/CTA invisibles sobre naranja.
- No verificado: Safari/iOS real y rendimiento en móvil de gama baja.

### Salida literal (tras los últimos cambios)

```text
## /
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /en/
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /trabajos/
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
## /en/trabajos/
== 375px (MÓVIL — lo primero que hay que mirar) ==
  ✓ sin problemas detectados
== 768px  ==
  ✓ sin problemas detectados
== 1440px  ==
  ✓ sin problemas detectados
[ui-verify] Problemas: 0
```

```text
$ npx astro check
- 0 errors
- 0 warnings
- 0 hints

$ npm run lint
Checking formatting...
All matched files use Prettier code style!
```

- Lint: se añadieron a `.prettierignore` los archivos generados por dev-standards (`.claude/`, `CLAUDE.md`, `.mcp.json`, `.dev-standards.json`) y `.ui-verify/`, porque no se editan a mano.

## Pendiente

- Validar con Nexa las cifras del manifiesto (6 disciplinas, 360°, 1 interlocutor), los clientes del muro y el número real de WhatsApp.
- Aplicar referencias visuales del cliente cuando las comparta.
