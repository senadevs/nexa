# 025 — Salida del loader limpia y continua

- Fecha/hora: 2026-09-17 16:35
- Tipo: fix
- Mejora a: 022
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP

## Problema

"El loader carga bien, pero la transición para mostrar la landing hace algo raro y no es limpia ni smooth."

## Diagnóstico (fotogramas + estado medido en cada captura)

1. **El loader desaparecía de golpe.** La red de seguridad inline (`setTimeout` de 4 s desde el `<head>`) se disparaba antes de que terminara la espera real del loader (fuentes + `load`). La clase `is-loading` se quitaba, el panel pasaba a `display: none` sin animar y su transformación nunca se movía de `none`.
2. **La landing aparecía y se volvía a esconder.** Con el loader fuera, el hero ya estaba pintado. Unos 0,8 s después arrancaba la entrada, cuyo `gsap.from` escondía el titular y la card para animarlos de nuevo. En los fotogramas: hero completo → hero vacío → texto subiendo.
3. **Salto lateral en Windows**: al quitar `overflow: hidden` del `body` aparece la barra de scroll y la página se desplaza unos 15 px (no se ve en el navegador headless, que usa barras superpuestas).

## Qué se hizo

- **Red de seguridad**: el script inline guarda el temporizador en `window.__nexaSafety` y lo sube a 8 s. `site-transitions.ts` lo cancela en cuanto se ejecuta, así que solo actúa si el script no llega a cargar.
- **`html.intro-pending`** (inline, antes del primer pintado y sin movimiento reducido): el titular empieza desplazado dentro de su máscara y la card, la meta y los CTA con opacidad 0. `home-motion.ts` quita la clase y fija el estado inicial en la misma tarea (no se pinta ningún fotograma en medio) y anima con `fromTo`. Quitarla primero también evita que GSAP sume la traslación del CSS. Si no hay hero se quita al estar lista la página, y hay un respaldo a 2,5 s si el script de la home no corre.
- **Salida en un solo movimiento**: el logo sale (0,5 s, stagger 0,012). A los 0,28 s el panel sube con el borde inferior curvado (`--curve` hasta el 18 % de la altura, 1 s, `power4.inOut`), manteniéndose visible aunque ya se haya quitado `is-loading`. A los 0,55 s empieza la entrada del hero.
- **`scrollbar-gutter: stable`** en `html` y bloqueo de scroll en `html.is-loading` en lugar del `body`: desbloquear el scroll ya no desplaza la página.

## Verificación

- **Primera visita** (1440×900, estado medido en cada fotograma): el hero está oculto durante todo el loader. El panel sube de 0 a −900 px en ~0,75 s y la entrada del titular empieza mientras el panel lo descubre (título a 85 px de su posición con el panel en −188 px). El loader se retira a 2,65 s y todo queda asentado a 3,4 s. Tras ajustar los tiempos, desaparece la pausa de pantalla negra entre la salida del logo y la subida del panel.
- **Segunda visita** (con el registro de la sesión): sin loader. Todos los fotogramas pintados muestran el hero oculto hasta que empieza la entrada (0,47 s): 0 fotogramas con el titular visible antes de tiempo.
- **Primera visita por /trabajos**: el loader termina y no quedan clases pendientes; el H1 es visible.
- **Movimiento reducido**: sin clases, el hero se ve directamente (opacidad 1).
- Los saltos de layout medidos (0,0007 y 0,033) ocurren bajo el loader, por la carga de fuentes.

```text
$ ui-verify (/, /en/, /trabajos/, /en/trabajos/, /404.html) · 375 / 768 / 1440
[ui-verify] Problemas: 0 en las cinco

$ npx astro check
- 0 errors
- 0 warnings

$ npm run lint
All matched files use Prettier code style!
```
