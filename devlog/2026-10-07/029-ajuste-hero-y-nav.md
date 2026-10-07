# 029 — El titular del hero ya no se corta y el menú se lee

- Fecha/hora: 2026-10-07 17:15
- Tipo: fix
- Mejora a: 028
- Tarea: X-T17
- Stack: Astro + CSS + TypeScript + GSAP

## Problema

Tras los textos nuevos (028), el cliente avisó de que en algunas pantallas el titular del hero se corta y
de que el menú se ve pequeño.

## Diagnóstico (medido en navegador, 9 anchos × 2 idiomas)

El tope de tamaño del titular se calculó en 021 con las palabras de entonces (la línea más larga ocupaba
3,75 em). Las nuevas son más largas: "cobran vida." mide 4,62 em y "come alive." 4,19 em. Resultado: la
palabra se salía de su máscara en 1920, 1440, 1180, 1024 y 820 px. Además el hero sobresalía 46 px del
alto de pantalla en tablet vertical (768) por la altura de la card de imagen.

| Ancho | Antes                                    | Ahora       |
| ----- | ---------------------------------------- | ----------- |
| 1920  | palabra 1048 px / máscara 948 → se corta | 917 / 948 ✓ |
| 1440  | 873 / 791 → se corta                     | 765 / 791 ✓ |
| 1180  | 763 / 646 → se corta                     | 625 / 646 ✓ |
| 1024  | 652 / 558 → se corta                     | 552 / 558 ✓ |
| 820   | 462 / 407 → se corta                     | 395 / 407 ✓ |

## Qué se hizo

- `fitTitle()` en `hero-slides.ts`: mide la palabra más ancha contra su máscara y, si no cabe, reduce el
  titular con la variable `--hero-fit` (3 % de margen). Vale para cualquier texto futuro y para los dos
  idiomas, sin fórmulas atadas a un copy concreto. Se recalcula al cambiar el tamaño de la ventana.
- Se ejecuta **después** de partir la palabra en letras: SplitText añade un par de píxeles por palabra y
  con el orden anterior el español seguía pasándose por 2 px a 820 px.
- Corre antes de la entrada del hero (que está oculto hasta entonces), así no se ve ningún reajuste.
- Menú: de 0,92 rem (14,7 px) a 1,0625 rem (17 px) con algo más de aire horizontal.
- Tablet vertical: la card del hero se limita a `min(38svh, 56vw)` y deja de empujar el contenido fuera.

## Efecto secundario aceptado

Con palabras más largas, el titular es algo menor que antes en pantallas grandes (1920: 198 px frente a
227 px). Es el precio de que entre "cobran vida." completo. La alternativa sería reducir solo la segunda
línea y dejar "Ideas que" al tamaño máximo; queda propuesto al cliente.

## Verificación

```text
## /
[ui-verify] Problemas: 0
## /en/
[ui-verify] Problemas: 0
## /trabajos/
[ui-verify] Problemas: 0
## /en/trabajos/
[ui-verify] Problemas: 0
## /404.html
[ui-verify] Problemas: 0
```

```text
$ npx astro check
- 0 errors
- 0 warnings

$ npm run lint
All matched files use Prettier code style!
```

- Medición en 1920, 1440, 1366, 1180, 1024, 820, 768, 480 y 375 px, en ES y EN: ninguna palabra se corta.
- Capturas del hero con la palabra larga en pantalla a 1920, 1440, 1180, 820 y 375 px.
