# Decisiones — 2026-10-07

- **Contenido del PDF aplicado íntegro (028):** navegación, hero de 8 diapositivas, 7 servicios, proyectos, contacto y footer; se traduce también al inglés para no dejar la web descuadrada.
- **Fuera la sección 3D (028):** el cliente pidió quitarla; con ella se van `scroll-scene.ts` y las dependencias de Three.js, que ya no se usaban en ninguna página.
- **Card de servicio sin imagen (028):** "Social Media & Contenido" se muestra solo con color y tipografía hasta tener su visual; el prompt queda preparado en `assets/source/prompts-pendientes.md`.
- **Dominio definitivo (028):** canónica, sitemap, robots y llms.txt pasan a `https://thenexaagency.com`, el dominio que ya sirve Vercel con certificado.
- **Ajuste del titular medido, no calculado (029):** el tamaño del hero lo decide una medición real de la palabra más larga (`--hero-fit`), no una fórmula atada a un copy concreto; así no vuelve a cortarse al cambiar textos.
