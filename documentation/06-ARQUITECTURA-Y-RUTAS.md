# Arquitectura y rutas

El proyecto es un monorepo con **un solo build y una sola URL**. El Hub es la home; cada
módulo es una entidad madre con su propia landing, y sus artefactos cuelgan de ella.

## Estructura

```txt
Campanita notificaciones/
├── .project/project.yaml        # estado del proyecto
├── index.html · vite.config.ts · package.json   # build único en la raíz
├── documentation/               # módulo de documentación: los .md editables
├── presentation/                # vacío por ahora
├── reference/                   # material de origen, fuera del build
│   └── landing-original.html    # HTML guardado de la landing sin sesión (sólo consulta; no se usa)
└── src/
    ├── main.tsx
    ├── app/
    │   ├── router.tsx           # mapa de rutas
    │   ├── ModuleLayout.tsx     # chrome de las landings de módulo
    │   └── shell.tokens.css     # tokens del chrome, separados de los de cada módulo
    ├── styles/                  # tokens y globals compartidos de MiCorreo
    ├── assets/                  # fuentes, logos, íconos e imágenes
    └── modules/
        ├── hub/                 # portada
        ├── prototype/
        │   ├── PrototypeHome.tsx      # listado de artefactos
        │   ├── components/PrototypeChrome.tsx
        │   └── home/          # Home logueada (base): componente, contenido y tokens propios
        └── documentation/       # lector de los .md de documentation/
```

## Mapa de rutas

| Ruta | Qué es | Módulo |
|---|---|---|
| `/` | Hub — portada con las tarjetas de módulo | hub |
| `/prototipo` | Landing del módulo: las versiones y cuál está vigente | prototype |
| `/prototipo/home` | Home logueada con la campanita | prototype |
| `/prototipo/notificaciones` | Detalle de notificaciones (hija de la Home) | prototype |
| `/documentacion` | Índice de documentos | documentation |
| `/documentacion/:docId` | Un documento, con opción de descargar el `.md` | documentation |

Las versiones del prototipo se numeran y cada una tiene su propia ruta. Cuando exista la
propuesta con campanita se agregará como ruta nueva; la base no se modifica para probar propuestas.

Todas las rutas son deep links: se pueden abrir directamente y recargar. Desde cualquier
punto hay regreso al Hub — en las landings de módulo por el breadcrumb, y en las pantallas del
prototipo por la banda inferior que `PrototypeChrome` agrega **por fuera** del marcado (con los casos de uso).

## Una sola fuente editable por información

- Los documentos para leer o descargar viven en `documentation/` como Markdown. El módulo
  de documentación los importa como texto crudo (`?raw`), así que no hay una segunda copia
  dentro de `src/`: editar el `.md` actualiza la app.
- Los datos que consume el front (textos y enlaces de la landing) viven dentro del módulo
  del prototipo, en `home/home.content.ts`.

## Aislamiento de estilos

Tres ámbitos que no se mezclan:

| Ámbito | Archivo | Enganche |
|---|---|---|
| Compartido de MiCorreo | `src/styles/tokens.css` | `:root` |
| Chrome del producto (Hub y landings de módulo) | `src/app/shell.tokens.css` | `[data-shell='campanita-notificaciones']` |
| Home logueada | `src/modules/prototype/home/home.tokens.css` | `[data-module='home']` |

Los tokens de módulo se enganchan a un atributo y no a una clase de CSS Module para que el
selector no dependa del hash del build. Nada del chrome se filtra a la réplica ni al revés.

`prototype.tokens.css` está al nivel del módulo y no dentro de `v1/` a propósito: es el
lenguaje visual de MiCorreo, y toda versión nueva del prototipo lo consume igual. Lo que sí
es propio de cada versión son sus componentes y su layout.

## Levantarlo

```bash
npm run dev
```

Puerto 4330. `npm run build` genera `dist/` y `npm run typecheck` valida los tipos.

## Entrega y despliegue

- **Repositorio:** `https://github.com/Marcolof/campanita-notificaciones` (rama `main`).
- **Vercel:** un solo proyecto con la raíz del repositorio como *Root Directory*. `vercel.json`
  fija el build (`npm run build` → `dist/`) y reescribe todas las rutas a `index.html`, así
  los deep links (`/prototipo/notificaciones`, `/documentacion/:docId`) funcionan al recargar.
- **Repositorio público.** La tipografía Gilroy tiene licencia: los `.ttf` no se versionan.
  `src/styles/fonts.ts` registra los `@font-face` apuntando a `VITE_FONTS_BASE_URL`
  (por defecto `/fonts/`). En local, los archivos van en `public/fonts/` (ignorado por Git).
  En Vercel hay que alojarlos en otro lado (con CORS si es otro dominio) y cargar la URL en
  *Project Settings → Environment Variables*. Sin eso, el sitio cae a la fuente de respaldo.
- **Variables de entorno:** declaradas en `.env.example`; sólo las `VITE_*` llegan al front.
  Los `.env` reales no se versionan.
- **Fuera del repositorio** (`.gitignore`): documentos internos del cliente (`documentation/*.docx`),
  configuración local de Claude (`.claude/`), las fuentes Gilroy (`public/fonts/*.ttf`), `node_modules`, `dist` y `.vercel/`.
