# 021 — Hero con presentación de imágenes sincronizada con el texto

- Fecha/hora: 2026-09-17 13:50
- Tipo: feature
- Mejora a: 019
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP

## Qué se hizo

- Hero con 4 diapositivas que unen palabra rotatoria, imagen demo y pie de foto:
  - mueven / move → Marea (Branding + Digital)
  - venden / sell → Paid media
  - conectan / connect → Orbita
  - crecen / grow → Diseño web
- Contenido en `site.ts` (`hero.slides`), ES y EN. Se descartan `hero-ribbon` y `hero-planes` por su tono verde, fuera de paleta.
- Composición: en escritorio y tablet, card vertical a la derecha del titular; en móvil, card 16:10 encima del titular. Las imágenes nunca van detrás del texto (anti-patrón del 018).
- El tamaño del titular en escritorio se limita con `min(15.5vw, 21svh, (ancho − card) / 3.9)`: medido con Playwright, la línea más larga ocupa ≈3.75em ("conectan." y "Ideas that").
- Nuevo `src/scripts/hero-slides.ts` que sustituye al rotador de `home-motion.ts`: una sola secuencia coordina palabra, imagen, contador y progreso. Barrido de imagen solo con `transform` (máscara y `<picture>` en direcciones opuestas con igual duración y curva) y zoom en el `<img>`.
- Botón de pausa/reanudar con `aria-label` que cambia; pausa automática fuera de pantalla y con la pestaña oculta. Movimiento reducido: fundidos de 0.4 s sin desplazamiento.
- Imágenes WebP generadas con sharp: 16:10 a 720/1280 px y vertical 4:5 a 820 px (`<picture>` por breakpoint). Unos 330 KB en total frente a ~8 MB de los PNG originales.
- Iconos `pause` / `play` añadidos a `Icon.astro`.

## Verificación

- Capturas a 1440×900, 1366×768 y 375×812: el hero cabe en pantalla, no hay solape de titular y card, y las 4 imágenes cargan.
- Primera versión con la card encima del titular en escritorio: dejaba un hueco vacío a la derecha; se pasa a card vertical.
- Fotogramas del primer cambio: la primera versión mostraba bandas mezcladas (máscara e imagen con duraciones distintas). Corregido: barrido limpio.
- Pausa: tras pulsar, el contador sigue en 02 pasados 4.5 s y la etiqueta cambia a "Reanudar presentación".
- `reducedMotion: reduce` en `/en/`: pasa de "move." (01) a "sell." (02) con fundido, sin errores de consola.

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
All matched files use Prettier code style!
```
