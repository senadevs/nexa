# 018 — Hero sin vídeo y secciones sin etiquetas descriptivas

- Fecha/hora: 2026-09-17 13:15
- Tipo: fix
- Mejora a: 017
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP

## Qué se hizo

- Hero: se retira el vídeo de fondo (`nexa-showreel.mp4`) y su degradado porque restaban legibilidad al titular. Queda fondo ink sólido con un halo naranja sutil que se desplaza al hacer scroll.
- Se eliminan las etiquetas que el cliente percibía como "muy IA": píldora "Agencia de marketing digital", fila inferior "Branding · Digital · Paid media / Desliza", cabeceras de sección "01 La idea"… "06 Hablemos", la etiqueta "05 / Próximo proyecto" y "Portfolio Nexa — 2024/2026" en /trabajos.
- La sección de proceso conserva un `h2` solo para lectores de pantalla.
- Las categorías de los casos pasan de texto mono numerado a píldora, como las etiquetas de servicios.
- Se limpian del contenido ES/EN los textos ya no usados (`kicker`, `meta`, `scroll`, labels de sección) y los estilos asociados.
- Las máscaras de SplitText dejan espacio a los descendentes (se cortaba la "g" de "algo").
- `MASTER.md` actualizado: sin vídeo tras el titular y sin eyebrows como anti-patrones.

## Verificación

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

- Capturas revisadas a 1440 (hero, manifiesto, servicios, trabajo, contacto) y 375 (hero, servicios), sin errores de consola.

## Pendiente

- `public/nexa-showreel.mp4` ya no se usa en la home; decidir si se reutiliza (p. ej. en /trabajos) o se elimina.
