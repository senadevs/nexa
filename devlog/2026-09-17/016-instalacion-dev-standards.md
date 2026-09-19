# 016 — Instalación de dev-standards

- Fecha/hora: 2026-09-17 12:38
- Tipo: infra
- Mejora a: 015
- Tarea: —
- Stack: Astro + CSS + TypeScript

## Qué se hizo

- Se instaló `D:\dev-standards` con `init-project.ps1 -Stack astro -Bundle motion-web,web-design-meta,design-extras`, solo para Claude Code.
- Se generaron `CLAUDE.md`, `.claude/` (skills, hooks, commands, settings), `.mcp.json` y el marcador `.dev-standards.json`.
- Skills disponibles: devlog, project-planner, code-quality, skill-router, front-activation, ui-ux-pro-max, ui-verify, gsap-scrolltrigger, motion-framer, scroll-reveal-libraries, web3d-integration-patterns, modern-web-design, ui-styling, design-system, graphic-design, slides, brand, banner-design y threejs-webgl.
- Se añadió la plantilla `plan/brief.md`; `plan/PLAN.md` ya existía y no se modificó.
- La entrada inicial generada como `001-setup-inicial.md` se renumeró a `016` para mantener la numeración global del devlog.

## Decisiones (detalle en DECISIONES.md)

- Sin `sinapsis-brand`: la marca del proyecto es Nexa.
- Los archivos generados no se editan a mano; cualquier cambio pasa por `sync.ps1`.

## Verificación

- `init-project.ps1` terminó con "Proyecto listo" y sin errores.
- `git status`: solo archivos nuevos; ningún archivo existente modificado.

## Próximos pasos

- Regenerar `design-system/nexa/MASTER.md` con `ui-ux-pro-max` usando la paleta y la tipografía reales.
- Rediseño por secciones con tipografía gigante, cards grandes y movimiento, a partir de las referencias del cliente.

## Nota posterior

- Desde 019 los archivos generados por dev-standards no se versionan (ver `.gitignore`).
