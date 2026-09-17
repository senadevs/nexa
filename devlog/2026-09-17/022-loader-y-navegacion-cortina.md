# 022 — Loader con logo y navegación con cortina

- Fecha/hora: 2026-09-17 14:20
- Tipo: feature
- Mejora a: 021
- Tarea: —
- Stack: Astro + CSS + TypeScript + GSAP

## Skills consultadas

- `gsap-scrolltrigger`: §Astro (scripts globales sin islas), `performance-a11y` (preloaders de 1-1,5 s como máximo, que se puedan saltar, nunca en visitas repetidas; nada de smooth scroll con movimiento reducido) y §Lenis.
- `front-activation` → catálogo de efectos: "Transiciones de página" y "Smooth scroll (Lenis)".
- Decisión: sin Lenis. El usuario no quiere que se vea el scroll al navegar, y Lenis lo suavizaría pero lo seguiría mostrando. Se usa una cortina que tapa el salto, sin nueva dependencia.

## Qué se hizo

- `src/scripts/site-transitions.ts`, importado desde `BaseLayout` en las cuatro páginas:
  - **Loader**: un script inline en `<head>` añade `html.is-loading` antes del primer pintado si es la primera visita de la sesión y no hay movimiento reducido (red de seguridad a los 4 s). Solo se ve el logo, cuyas piezas SVG suben desde máscara. Espera fuentes + `load` (mínimo 1 s, máximo 1,6 s); clic o tecla lo saltan. Sale subiendo el panel y marca `sessionStorage`.
  - **`whenSiteReady()`**: la intro del hero (`home-motion.ts`) y la presentación (`hero-slides.ts`) esperan a que el loader empiece a salir, para que no se reproduzcan debajo.
  - **Cortina**: intercepta enlaces con hash de la misma página (menú, móvil, CTAs, "Volver arriba", enlaces de /trabajos). La cortina sube (0,55 s), muestra el nombre de la sección y el logo, salta con `behavior: "instant"`, actualiza el hash, mueve el foco a la sección y sale hacia arriba. No actúa sobre el enlace "Saltar al contenido", enlaces a otras páginas o nuevas pestañas, ni con modificadores.
- Secciones con `data-label` (Clientes, Servicios, Trabajo, Cómo trabajamos, Contacto, Proyectos; `body` = Inicio/Home).
- Al llegar desde otra página con hash (`/#servicios`), se realinea tras crear los pins.

## Verificación

- Loader (1440, sesión nueva): fotogramas a 0,19 / 0,74 / 1,29 s solo con el logo; a 1,69 s el panel sube destapando el hero; termina a 2,72 s y fija `nexa-intro`. Al recargar no aparece.
- Salto con clic en /trabajos (375): el loader termina 1,2 s después del clic, animación de salida incluida.
- Cortina (1440 → Servicios): tapa por completo de 0,56 s a 1,16 s y el scroll salta (0 → 3014 px) a 0,86 s con la pantalla cubierta. Termina a 1,76 s con la sección a 108 px del borde (header + margen), `#servicios` en la URL y el foco en la sección.
- Fallo encontrado y corregido: el `transform: translateY(100%)` del CSS se sumaba al `yPercent` de GSAP y la cortina nunca tapaba.
- Móvil (375): menú → Clientes, con cortina y menú cerrado. Desde /trabajos → `/#servicios` llega alineado (92 px).
- Movimiento reducido: sin loader y salto directo alineado.

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
