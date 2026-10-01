type ModuleCard = {
  index: string
  title: string
  route: string
  state: 'draft' | 'review' | 'approved'
  stateLabel: string
}

/**
 * Sólo módulos con una landing real y navegable. `presentation` existe como
 * carpeta pero todavía no tiene artefactos, así que no aparece acá.
 */
export const modules: ModuleCard[] = [
  {
    index: '01',
    title: 'Prototipo navegable',
    route: '/prototipo',
    state: 'review',
    stateLabel: 'En revisión',
  },
  {
    index: '02',
    title: 'Documentación',
    route: '/documentacion',
    state: 'approved',
    stateLabel: 'Vigente',
  },
]
