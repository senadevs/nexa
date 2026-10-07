# 028 — Cambios del cliente (PDF): contenido nuevo, 7 servicios y fuera la sección 3D

- Fecha/hora: 2026-10-07 16:10
- Tipo: feature
- Mejora a: 023
- Tarea: X-T17
- Stack: Astro + CSS + TypeScript + GSAP

## Origen

`Cambios web nexa.pdf` (11 páginas de capturas anotadas). El PDF es de imagen: se extrajo el texto con
`pdfjs-dist` en la carpeta temporal y las capturas con un script propio, sin añadir dependencias al proyecto.

## Decisiones acordadas antes de empezar

- Inglés: se traduce todo el contenido nuevo (la web sigue bilingüe).
- Imagen de "Social Media & Contenido": no existe; el cliente pidió dejar el prompt preparado
  (`assets/source/prompts-pendientes.md`). La card se muestra solo con color y tipografía.
- Hero: cada diapositiva cambia palabra, disciplina, texto e imagen.
- Dominio definitivo: `https://thenexaagency.com`.

## Qué se hizo

**Contenido (`src/i18n/site.ts`, ES y EN)**

- Navegación: Nosotros · Servicios · Proyectos · Contacto (nuevo ancla `about`; Clientes sale del menú).
- Hero: 8 diapositivas con palabra, disciplina, pie, texto propio e imagen (antes 4 y un texto fijo).
- Manifiesto: texto nuevo y cifras "Disciplinas conectadas", "Una visión integral", "Un solo equipo".
- Clientes: el cuadro pasa a "Cada marca empieza con una conversación. Cada proyecto, con una idea.".
- Servicios: 7 servicios nuevos con descripción, etiquetas y CTA propio, y aside nuevo.
- Proyectos: intro nueva y textos nuevos de Marea, Norte, Órbita y Studio; la card final suma su línea de copy.
- Contacto: párrafo nuevo, `info@thenexaagency.com`, Santo Domingo (República Dominicana), etiquetas del
  formulario y las 8 opciones del desplegable, que coinciden exactamente con las categorías de servicios.
- Footer: tagline nuevo, enlaces nuevos y "© 2026 The Nexa Agency. Todos los derechos reservados.".

**Estructura**

- Eliminada la sección 3D del proceso: marcado, textos, estilos, `scroll-scene.ts` y las dependencias
  `three` y `@types/three`. El botón del manifiesto apunta ahora a Servicios y pierde su icono.
- El hero cambia su texto con cada diapositiva (`hero-slides.ts`), sincronizado con palabra y contador.
- Card de servicio sin imagen (`.service-body-plain`): el texto crece y ocupa la card.
- 8 imágenes de hero generadas con `scripts/optimize-images.mjs` (estrategia, branding, gráfico,
  audiovisual y studio nuevas; paid, web y órbita reutilizadas).

**Marca y SEO**

- `astro.config.mjs`, `sitemap.xml`, `robots.txt` y `llms.txt` pasan a `https://thenexaagency.com`.
- Nombre "The Nexa Agency" en metadatos y datos estructurados; `areaServed` DO; `knowsAbout` con los 7 servicios.
- `.prettierignore`: se excluyen `.agents/`, `.codex/` y `AGENTS.md`, generados por Senzu.

## Verificación

- Contenido comprobado en navegador (1440 y 375, ES y EN): 8 diapositivas, 7 servicios con sus títulos,
  1 card sin imagen, 0 secciones de proceso, las 9 opciones del desplegable, correo y footer nuevos.
- El texto del hero cambia con la diapositiva (medido: pasa de "Convertimos objetivos de negocio…" a
  "Creamos identidades con personalidad…").
- Sin errores de consola ni peticiones fallidas.

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

$ npm run build
5 page(s) built

$ npm run lint
All matched files use Prettier code style!
```

## Memoria

Se crea `devlog/MEMORIA.md` (no existía con 28 entradas ya escritas): decisiones vigentes D-001…D-025,
reglas del cliente, lo que no funcionó y los pendientes abiertos con fecha. Las de hoy son D-023 (contenido
del PDF aplicado y traducido), D-024 (sin sección 3D ni Three.js) y D-025 (opciones del formulario iguales a
las categorías de servicios).

## Pendiente

- Imagen propia de "Social Media & Contenido" (prompt listo).
- Número real de WhatsApp: sigue el provisional (`18090000000`).
- Enlace de Instagram: apunta a la raíz del sitio.
- Clientes del muro: siguen siendo nombres de muestra.
- El `www` del dominio lo sirve Squarespace con una redirección; el dominio sin www ya está en Vercel.
