# Registro de cambios sobre fuentes externas

Qué se trajo de cada fuente y qué se modificó al portarlo. Sirve para armar la PR de
desarrollo sin tener que reconstruir el razonamiento.

## Desde `HOME STANDARD CON HUB / Formulario FF claude` (sólo lectura) — 2026-10-01

Base de este proyecto. Copia local del monorepo completo; el origen no se modificó.

| Origen | Destino | Cambio |
|---|---|---|
| Todo el proyecto, sin `node_modules`, `dist` ni `*.tsbuildinfo` | raíz | Copiado. Se ejecutó `npm install` para regenerar dependencias. |
| `package.json`, `index.html`, `vite.config.ts`, `.claude/launch.json` | ídem | Nombre `campanita-notificaciones`, título nuevo, puerto 4330 → 4330. |
| `data-shell` en `ModuleLayout`, `HubPage` y `shell.tokens.css` | ídem | `formulario-ff` → `campanita-notificaciones`. |
| Textos de Hub, `ModuleLayout` y `PrototypeHome` | ídem | Se quitó la mención a Formulario FF / Fulfillment. |
| `documentation/00, 01, 02, 04, 06` | ídem | Reescritos o ajustados al nuevo proyecto. |
| `.project/project.yaml` | ídem | Reiniciado: origen `local-folder`, sin requerimiento aplicado. |
| Landing sin sesión (`prototype/v1`), `prototype.tokens.css`, assets de la landing | — | **Eliminados** (2026-10-01): la pantalla a trabajar es la Home logueada. |
| — | `src/modules/prototype/home/`, `src/assets/home/` | **Nuevos.** Home logueada recreada desde Figma (nodo 4959:89736). |
| — | `src/modules/prototype/notifications/`, `layout/AppShell.tsx` | **Nuevos** (2026-10-01). Campanita, panel y página de notificaciones desde Figma (nodo 13948:32899). El marco de la Home se extrajo a `AppShell`. |
| — | `package.json` | Dependencia nueva: `lucide-react` (íconos). |
| `src/assets/fonts/*.ttf` + `@font-face` de `globals.css` | `public/fonts/` (fuera de Git) + `src/styles/fonts.ts` | Repo público: Gilroy tiene licencia. Se sirve desde `VITE_FONTS_BASE_URL`. |
| `tokens.css`, `globals.css`, fuentes Gilroy | ídem | Sin cambios. |

## Registro heredado (construcción de la base original)

Se conserva por trazabilidad.

## Desde `Envio internacional CLAUDE` (sólo lectura)

| Origen | Destino | Cambio |
|---|---|---|
| `src/styles/tokens.css` | `src/styles/tokens.css` | Copiado sin modificar. |
| `src/styles/globals.css` | `src/styles/globals.css` | Copiado sin modificar. |
| `src/assets/fonts/*.ttf` | `src/assets/fonts/` | Copiado sin modificar. |
| Convención de estructura | `src/` | Se conservan `app/`, `modules/<m>/components`, CSS Modules y alias `@/`. No se copiaron `core/`, `shared/`, `demo/` ni `devtools/`. |

**Nada del proyecto de origen fue modificado.**

## Desde `html reference` (sólo lectura)

| Origen | Destino | Cambio |
|---|---|---|
| `landing mi correo..html` | `reference/landing-original.html` | Se renombraron las rutas de assets a `./landing-original_files`. Queda fuera del build: es material de consulta, no se sirve. |
| `landing mi correo._files/` | — | No se copió. Los assets que usa la réplica se extrajeron uno por uno a `src/assets/`; el resto queda en el original de sólo lectura. |
| Banners y títulos (`banner-*.webp`) | `src/assets/img/` | Sin cambios. |
| Imágenes de tarjetas (`horizontal-card-image-*.svg`) | `src/assets/img/` | Sin cambios. |
| Logos de servicio | `src/assets/logos/` | Sin cambios. |
| Íconos de accesos, "por qué elegirnos", redes y chatbot | `src/assets/icons/` | Sin cambios. |

## Decisiones al portar de MUI a CSS Modules

| Original | Réplica | Motivo |
|---|---|---|
| MUI + emotion (CSS en runtime) | CSS Modules + tokens | El proyecto no incorpora MUI; los estilos quedan legibles y versionables. |
| Clases `css-*` generadas por hash | Clases con nombre por componente | Legibilidad y trazabilidad. |
| Valores literales en `sx` | Tokens en `landing.tokens.css` | Ningún hex ni medida tipográfica suelta en los `.module.css`. |
| Peso tipográfico 450 | 500 | No existe un `.ttf` de Gilroy en 450; el matching de CSS resuelve al 500. |
| Grilla de MUI (`Grid`, `Paper`, `Card`) | Flexbox propio | Se replicaron las medidas computadas, no la implementación. |
| Input outlined con `fieldset`/`legend` | Input con label flotante en CSS | Mismo comportamiento visible, sin el andamiaje de MUI. |
| Cuarta diapositiva clon del banner | Tres diapositivas con vuelta al inicio | Mismo resultado visible. |
| Menú de usuario logueado (oculto en el DOM) | No portado | Está en `display:none` en la landing sin sesión. |
| Scripts de GTM, Meta Pixel y chat de terceros | No portados | No aportan al prototipo de UX. |

## Utilidades de desarrollo agregadas

| Qué | Dónde | Para qué |
|---|---|---|
| Configuración `campanita-notificaciones` | `.claude/launch.json` | Levanta el proyecto en el puerto 4320. |

Durante la reconstrucción hubo un middleware de Vite que servía el HTML guardado en
`/landing` para compararlo contra la réplica. Se retiró: el archivo no conserva los estilos,
así que abrirlo no aportaba nada, y su copia de assets pesaba 14 MB dentro de `public/`.
