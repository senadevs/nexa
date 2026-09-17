# Design System — Nexa

> Fuente de verdad del diseño. Si existe `design-system/nexa/pages/<página>.md`, prevalece para esa página.
> Tokens implementados en `src/styles/global.css` (`:root`). Nada de hex sueltos fuera de ahí.

**Proyecto:** Nexa Digital Agency · **Categoría:** agencia de marketing digital
**Perfil:** Astro estático + CSS propio + GSAP (ScrollTrigger, SplitText) + Three.js (sin React ni Tailwind)
**Patrón:** `agency` (ui-ux-pro-max) · **Estilo:** editorial bold / big type con secciones en láminas
**Dials:** Variance 8 · Motion 7 · Density 4
**Actualizado:** 2026-09-17 (devlog 017)

## Paleta (oficial del logo — no cambiar)

| Token | Hex | Uso |
| --- | --- | --- |
| `--ink` | `#201F1C` | Texto principal, láminas oscuras, footer |
| `--graphite` | `#3F3B35` | Cards de servicio oscuras |
| `--sand` | `#D0C7BB` | Cards de servicio claras |
| `--paper` | `#FFFDF1` | Fondo base, texto sobre oscuro |
| `--orange` | `#FF5E1E` | Acento, CTA primario, lámina de contacto |

Semánticos: `--text-muted #5F5A52` (5.9:1 sobre paper), `--line`, `--line-strong`, `--line-inverse`, `--text-inverse-muted`.

**Contraste:** texto ink sobre orange 5.6:1 ✓ · paper sobre orange 2.9:1 ✗ para texto normal → en naranja el texto va en ink; paper solo en titulares gigantes (con trazo ink cuando es acento).

## Tipografía

| Rol | Familia | Pesos | Uso |
| --- | --- | --- | --- |
| Display | Bricolage Grotesque (variable, `wdth` 90-92) | 700–800 | Titulares, marquee, cifras, nombres de caso |
| Texto | Manrope | 400–700 | Párrafos, botones, navegación |
| Mono | DM Mono | 400–500 | Labels de formulario y canales de contacto |

Escala (`clamp`): `--fs-mega` 3.9→17rem (hero, contacto) · `--fs-display` 3→9.5rem (títulos de sección) · `--fs-lead` 1.1→1.4rem. Titulares con `letter-spacing` −0.025/−0.035em y `line-height` 0.84–0.92. Un tamaño "wow" por sección. El acento de un titular es `<em>` en naranja (sin cursiva).

## Layout y secciones

- **Láminas (`.sheet`)**: cada sección de color monta sobre la anterior con esquinas superiores `--radius-sheet` y margen negativo. Orden home: hero (ink sólido con halo naranja, sin vídeo) → marquee → manifiesto (paper) → clientes (paper) → servicios (ink) → trabajo (paper) → proceso (ink) → contacto (orange) → footer (ink).
- **Sin etiquetas descriptivas**: nada de eyebrows tipo "01 / La idea" ni píldoras "Agencia de marketing digital"; cada sección arranca directamente con su título display (el usuario las percibió como “muy IA”).
- Contenedor `--max` 1680px, gutter `clamp(1rem, 4vw, 4rem)`, ritmo vertical `--section-y`.
- **Cards**: radio `--radius-card`; servicios apiladas en sticky (desktop) con tonos orange/sand/graphite/paper; casos a 62vw en scroll horizontal (≥1025px) y carrusel con scroll-snap en móvil/tablet.
- **Botones**: píldora; `btn-primary` (orange → paper en hover), `btn-dark`, `btn-ghost` (sobre ink), `btn-outline`; icono circular que rota 45° en hover. Altura mínima 48px (44px en header).

## Movimiento

- Hero: líneas del H1 suben desde máscara; palabra rotatoria (CSS + clases); el halo naranja se desplaza al salir. Sin vídeo de fondo: restaba legibilidad al titular.
- Marquee doble cruzado (orange + outline sobre ink) que acelera con la velocidad del scroll.
- Títulos `[data-reveal-title]`: SplitText por líneas con máscara, una vez.
- Manifiesto: palabras que se encienden con scrub. Cifras con count-up.
- Servicios: la card anterior se hunde (scale 0.92 + brillo) cuando entra la siguiente.
- Trabajo: pin + scroll horizontal con barra de progreso y parallax interno; cursor "Ver caso" solo en punteros finos.
- Proceso: escena Three.js existente (`scroll-scene.ts`), ahora sobre lámina ink con pasos a pantalla completa.
- `prefers-reduced-motion`: sin GSAP, rotador fijo, pasos visibles, transiciones a 0.

## Anti-patrones

- Cambiar la paleta o introducir un segundo acento.
- Texto normal en paper sobre naranja.
- Scroll-jacking en servicios (se usan sticky nativos, no pin).
- Emojis como iconos (la estrella del marquee es SVG).
- Vídeo o imagen detrás del titular del hero.
- Eyebrows/labels mono encima de los títulos de sección.
- Métricas o testimonios inventados presentados como reales.

## Checklist de entrega

- [x] 375 / 768 / 1440 sin scroll horizontal (`ui-verify`)
- [x] Tap targets ≥ 44px en móvil
- [x] Un H1 por página, skip link, foco visible naranja
- [x] `prefers-reduced-motion` respetado
- [ ] Dark mode: no aplica (la marca alterna láminas claras y oscuras de forma fija)
