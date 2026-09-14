# 007 — Contacto, formulario y footer

- Fecha/hora: 2026-09-14 18:08
- Tipo: feature
- Mejora a: —
- Tarea: X-T6
- Stack: Astro + TypeScript + CSS

## Qué se hizo

- Se amplió la sección de contacto con email, WhatsApp y ubicación.
- Se añadió un formulario con nombre, email, empresa, servicio y descripción del proyecto.
- El formulario prepara un email a `hola@nexa.agency` mediante `mailto:` sin backend.
- Se añadió un footer completo con navegación, email, base geográfica y mensaje de marca.
- Se replicó el footer en la página de trabajos y se añadieron estilos responsive para móvil.

## Verificación

- Preview local revisada: formulario y footer visibles al final de la home.
- AX tree revisado: labels, campos, select, textarea y CTA accesibles.
- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run lint`: correcto.
- `npm run build`: correcto, 2 páginas estáticas generadas.

## Commit

- `a874ee5` — `feat: add contact form and complete footer`
