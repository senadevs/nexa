# 019 — Transición del rotador del hero y dev-standards fuera de git

- Fecha/hora: 2026-09-17 13:25
- Tipo: fix
- Mejora a: 018
- Tarea: —
- Stack: Astro + TypeScript + GSAP

## Qué se hizo

- Rotador del hero ("mueven / venden / conectan"): al terminar de salir, la palabra volvía de arriba a abajo atravesando la línea visible (transición CSS de `translateY(-105%)` a `translateY(105%)`). Se rehace con GSAP + SplitText letra a letra: la palabra saliente sube 60% y se desvanece, se recoloca abajo de forma instantánea (sin animar) y la nueva entra desde abajo con `expo.out` y stagger. Sin JS o con movimiento reducido solo se muestra la primera palabra.
- `.gitignore`: se excluyen los archivos de dev-standards (`.claude/`, `CLAUDE.md`, `.mcp.json`, `.dev-standards.json`, `plan/brief.md`); son herramientas locales del agente y se regeneran con `sync.ps1`.
- Trabajo en rama `feat/rediseno-agencia` (regla del proyecto: no commitear en `main`).

## Verificación

- Fotogramas capturados desde la carga (~33 ms entre capturas) durante el primer cambio de palabra: la saliente sube y se funde, la entrante aparece desde abajo, sin solape ni recorrido de arriba a abajo.

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

## Commits

- `chore` + `feat` en `feat/rediseno-agencia` (ver `git log`). Sin push.
