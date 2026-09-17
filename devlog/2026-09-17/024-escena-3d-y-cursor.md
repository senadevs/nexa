# 024 — Escena 3D encuadrada, transiciones entre formas y fuera el cursor redondo

- Fecha/hora: 2026-09-17 14:55
- Tipo: fix
- Mejora a: 023
- Tarea: —
- Stack: Astro + TypeScript + Three.js + GSAP

## Problema (captura del cliente)

- En "Cómo trabajamos" las formas 3D eran más grandes que su contenedor y salían cortadas. Detrás asomaba la imagen de respaldo gris.
- El cambio entre formas era brusco: se ocultaban y aparecían sin transición.
- El cursor redondo naranja "Ver proyectos" se veía feo.

## Skills consultadas

`threejs-webgl` → `fundamentals.md` §Encuadrar un objeto (fit to view) y `gsap-three.md` §1 y §6 (animar `scale`/`rotation` y aparición con escala).

## Qué se hizo

- **Encuadre**: la cámara estaba fija en z = 6 con fov 28°. Con un lienzo más alto que ancho, las formas de radio ~1,5 no cabían en horizontal. Ahora la distancia se calcula en cada resize: `radio de la forma más grande × 1,3 / (tan(fov/2) × min(1, aspecto))`. El margen cubre el rebote de la animación.
- **Transición**: la forma saliente encoge a 0 girando 90° (0,45 s, `power3.in`) y la nueva crece desde 0 con `back.out(1.4)` y giro inverso. Si se hace scroll rápido, se interrumpe el cambio anterior para que nunca haya dos formas a la vez.
- Giro suave continuo sobre la rotación ligada al scroll (desactivado con movimiento reducido). Se sustituye `THREE.Clock`, obsoleto, por `performance.now()` con el delta limitado.
- **Pasos de texto**: además de la opacidad, entran con desplazamiento vertical (título y texto con distinto recorrido). Sin desplazamiento en tablet, móvil o movimiento reducido.
- **Respaldo**: la imagen gris solo se muestra si no hay WebGL (`.has-webgl` / `.no-webgl`).
- **Cursor**: eliminados el seguidor redondo (markup, CSS, JS, textos `cursor` en `site.ts`) y `cursor: none`. Cursor normal. Como pista de que la card es clicable, un círculo con flecha (mismo lenguaje que los botones) crece, se vuelve naranja y gira en hover/foco.

## Verificación

- Formas enteras y con margen en 1440×900, 1366×768 y 1920×1080, en los tres pasos (capturas del escenario, con WebGL activo).
- Fotogramas cada 140 ms del paso 01 → 02: la esfera encoge, el nudo crece con rebote y en su tamaño máximo queda dentro del lienzo; el texto "02" entra.
- Ya no queda `.cursor-follower` ni `[data-cursor]` en la página y el cursor de las cards es `pointer`.

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
## /404.html
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

$ npm run lint
All matched files use Prettier code style!
```
