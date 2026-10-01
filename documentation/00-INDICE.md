# Campanita de notificaciones — Documentación

Proyecto: **Campanita de notificaciones**
Producto: **MiCorreo — Correo Argentino**
Estado: propuesta de notificaciones armada sobre la Home logueada, fuente de verdad en Figma.

## Documentos

| Documento | Qué contiene |
|---|---|
| [01-CONTEXTO.md](01-CONTEXTO.md) | Estado del proyecto, confirmaciones, inferencias y pendientes. |
| [02-FUENTES.md](02-FUENTES.md) | Procedencia de cada insumo: proyecto base, HTML de la landing, landing en producción. |
| [03-COLOR-Y-TOKENS.md](03-COLOR-Y-TOKENS.md) | Primitivas de color, capas de tokens y reglas de uso. |
| [04-HOME-LOGUEADA.md](04-HOME-LOGUEADA.md) | La pantalla base (Home logueada) tomada de Figma, assets y diferencias conocidas. |
| [05-REGISTRO-DE-CAMBIOS.md](05-REGISTRO-DE-CAMBIOS.md) | Qué se tomó de cada fuente externa y qué se modificó al portarlo. |
| [06-ARQUITECTURA-Y-RUTAS.md](06-ARQUITECTURA-Y-RUTAS.md) | Cómo está armado el monorepo, el Hub y el mapa de rutas. |
| [07-NOTIFICACIONES.md](07-NOTIFICACIONES.md) | Propuesta de la campanita, el panel y la página de notificaciones. |
| [08-REQUERIMIENTO-GC01.md](08-REQUERIMIENTO-GC01.md) | Definiciones del formulario de solicitud GC01 y qué cubre el MVP. |

## Módulos del proyecto

| Módulo | Ruta en la app | Código | Estado |
|---|---|---|---|
| Hub | `/` | `src/modules/hub/` | Vigente |
| Prototipo navegable | `/prototipo` | `src/modules/prototype/` | Home logueada + notificaciones, en revisión |
| Documentación | `/documentacion` | `src/modules/documentation/` + `documentation/` | Vigente |
| Presentación | — | `presentation/` | Vacío, sin tarjeta en el Hub |

Todo se sirve desde una sola URL. Ver [06-ARQUITECTURA-Y-RUTAS.md](06-ARQUITECTURA-Y-RUTAS.md).
