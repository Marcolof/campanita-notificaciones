/**
 * Los documentos viven en `documentation/` en la raíz del proyecto y se importan
 * como texto crudo: hay una única fuente editable, no una copia dentro de `src`.
 */
import arquitectura from '../../../documentation/06-ARQUITECTURA-Y-RUTAS.md?raw'
import cambios from '../../../documentation/05-REGISTRO-DE-CAMBIOS.md?raw'
import color from '../../../documentation/03-COLOR-Y-TOKENS.md?raw'
import contexto from '../../../documentation/01-CONTEXTO.md?raw'
import fuentes from '../../../documentation/02-FUENTES.md?raw'
import requerimiento from '../../../documentation/08-REQUERIMIENTO-GC01.md?raw'
import notificaciones from '../../../documentation/07-NOTIFICACIONES.md?raw'
import home from '../../../documentation/04-HOME-LOGUEADA.md?raw'

export type Doc = {
  id: string
  index: string
  title: string
  summary: string
  fileName: string
  content: string
}

export const documents: Doc[] = [
  {
    id: 'contexto',
    index: '01',
    title: 'Contexto',
    summary:
      'Requerimiento inicial, objetivo principal y secundario, campos del formulario, hipótesis a validar y pendientes de definición.',
    fileName: '01-CONTEXTO.md',
    content: contexto,
  },
  {
    id: 'fuentes',
    index: '02',
    title: 'Fuentes',
    summary:
      'De dónde salió cada insumo: el proyecto de Envío Internacional, el HTML guardado de la landing y la landing en producción.',
    fileName: '02-FUENTES.md',
    content: fuentes,
  },
  {
    id: 'color-y-tokens',
    index: '03',
    title: 'Color y tokens',
    summary:
      'Las tres capas de tokens, las primitivas de marca, las superficies y la tipografía, con la regla de qué puede consumir un componente.',
    fileName: '03-COLOR-Y-TOKENS.md',
    content: color,
  },
  {
    id: 'home-logueada',
    index: '04',
    title: 'Home logueada',
    summary:
      'La pantalla base tomada de Figma: qué incluye, de dónde salen los assets y las diferencias conocidas.',
    fileName: '04-HOME-LOGUEADA.md',
    content: home,
  },
  {
    id: 'registro-de-cambios',
    index: '05',
    title: 'Registro de cambios',
    summary:
      'Qué se tomó de cada fuente externa y qué se modificó al portarlo, para armar la PR de desarrollo sin rehacer el razonamiento.',
    fileName: '05-REGISTRO-DE-CAMBIOS.md',
    content: cambios,
  },
  {
    id: 'arquitectura-y-rutas',
    index: '06',
    title: 'Arquitectura y rutas',
    summary:
      'Cómo está armado el monorepo, el mapa de rutas del Hub, la regla de una sola fuente editable y el aislamiento de estilos entre módulos.',
    fileName: '06-ARQUITECTURA-Y-RUTAS.md',
    content: arquitectura,
  },
  {
    id: 'notificaciones',
    index: '07',
    title: 'Notificaciones',
    summary:
      'La propuesta de la campanita, su panel y la página de detalle: comportamiento, estados, decisión sobre el botón de volver y diferencias con el Figma.',
    fileName: '07-NOTIFICACIONES.md',
    content: notificaciones,
  },
  {
    id: 'requerimiento-gc01',
    index: '08',
    title: 'Requerimiento GC01',
    summary:
      'Definiciones del formulario de solicitud GC01 y qué cubre el MVP.',
    fileName: '08-REQUERIMIENTO-GC01.md',
    content: requerimiento,
  },
]

export function findDocument(id: string | undefined): Doc | undefined {
  return documents.find((doc) => doc.id === id)
}
