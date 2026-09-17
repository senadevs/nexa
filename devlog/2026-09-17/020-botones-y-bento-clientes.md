# 020 — Auditoría de botones y bento puzzle de clientes

- Fecha/hora: 2026-09-17 13:40
- Tipo: feature
- Mejora a: 019
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP

## Auditoría (review-rubric + components-spec §Button)

| Hallazgo                                                                             | Corrección                                                                                                                              |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Mismo CTA "Hablemos de tu proyecto" repetido en las 6 cards de servicios             | CTA propio por servicio ("Pide propuesta de branding"…) que preselecciona el servicio en el formulario                                  |
| "Diseño gráfico" no existía como opción del formulario                               | Añadida en ES/EN                                                                                                                        |
| Flechas como caracteres unicode (↗ ↓ ↑)                                              | Componente `Icon.astro` con SVG de trazo 2px                                                                                            |
| Dos CTA primarios naranjas a la vez en el hero (header + hero)                       | El CTA del header es outline mientras está sobre el hero                                                                                |
| Anillo de foco naranja invisible sobre superficies naranjas                          | `--focus-ring` ink en contacto, hero de trabajos, card "Tu marca aquí" y cierre de /trabajos                                            |
| Formulario solo con validación nativa del navegador                                  | Errores junto al campo con `aria-invalid` + `aria-describedby`, foco al primer error, `scroll-margin-top` para no quedar bajo el header |
| Selector EN/ES sin nombre accesible                                                  | `aria-label` "English version" / "Versión en español"                                                                                   |
| Cards de servicios animaban `filter` en scroll (prohibido en el catálogo de efectos) | Capa ink con `opacity` + `scale`                                                                                                        |

## Qué se hizo

- `Button.astro`: variantes, tamaños, icono, `as="span"` para botones dentro de cards clicables y opción `magnetic`. Texto que rueda en hover con copia `aria-hidden`.
- Botones magnéticos (receta `modern-web-design` §1.3) en los CTA del hero, solo con puntero fino y desactivados con movimiento reducido.
- Clientes: bento puzzle de 12 columnas con piezas de distinto tamaño (grande 5×2, alta 3×2 con texto vertical, anchas y pequeñas) y una pieza con la frase de la sección; se recoloca a 6 columnas en tablet y 2 en móvil. Entrada escalonada con escala.
- `MASTER.md`: botones, textos de CTA, iconos, foco, bento y sección de referencias (fuentes de las skills; sin análisis de webs en navegador porque Chrome no estaba disponible).

## Verificación

- Capturas: bento a 1440 / 768 / 375, hover del CTA principal (sin restos de letras al rodar el texto tras ajustar el recorrido a 160%) y envío vacío del formulario (tres errores visibles, foco en "Tu nombre", `aria-invalid="true"`).

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
