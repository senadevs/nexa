# Decisiones — 2026-09-17

- **dev-standards instalado (016):** stack `astro` con bundles `motion-web`, `web-design-meta` y `design-extras`, igual que escombrocero pero sin `sinapsis-brand`, porque la marca es Nexa.
- **Perfil de front genérico:** el perfil generado indica "Astro + React islands + Tailwind", pero Nexa usa Astro con CSS propio, GSAP y Three.js. No se introducen React ni Tailwind; el movimiento sigue con GSAP ScrollTrigger y el 3D con Three.js.
- **Devlog global:** se conserva la numeración correlativa del proyecto (016) en lugar de la `001` que crea el instalador.
- **Tipografía display (017):** se añade Bricolage Grotesque para titulares gigantes (variable, eje `wdth`); Manrope y DM Mono se mantienen. La skill pide aprobación para fuentes nuevas: el usuario pidió cambiar el diseño del texto, queda anotado para confirmarlo.
- **Láminas en vez de separadores (017):** las secciones se dividen por cambio de color con esquinas redondeadas superpuestas, no por líneas finas; da ritmo de agencia sin añadir ornamentos.
- **Servicios sticky, no pin (017):** las cards apiladas usan `position: sticky` nativo para no hacer scroll-jacking en servicios (anti-patrón del patrón `agency`); el pin horizontal se reserva para casos y solo en ≥1025px.
- **Contenido en un solo módulo (017):** `src/i18n/site.ts` evita que ES y EN diverjan (antes EN tenía menos servicios y otro formulario).
- **Sin dark mode (017):** la marca alterna láminas claras y oscuras de forma fija; un tema oscuro automático rompería la paleta oficial.
- **Cifras descriptivas (017):** el manifiesto usa cifras derivadas de la oferta (6 disciplinas, 360°, 1 interlocutor), no métricas de resultados; pendientes de validar con Nexa.
- **Hero sin vídeo (018):** el titular gigante es el protagonista; cualquier vídeo o imagen detrás reduce la legibilidad.
- **Sin eyebrows de sección (018):** la división la hacen las láminas de color y los títulos display; las etiquetas mono numeradas sobraban y daban aspecto de plantilla.
- **dev-standards fuera de git (019):** `.claude/`, `CLAUDE.md`, `.mcp.json`, `.dev-standards.json` y `plan/brief.md` se ignoran; cada máquina los genera con `init-project.ps1`/`sync.ps1`. El devlog y el design system sí se versionan.
