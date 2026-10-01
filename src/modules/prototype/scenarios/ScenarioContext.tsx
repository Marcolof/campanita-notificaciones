import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

/**
 * Casos de uso del prototipo: interruptores para ver estados que con los datos de
 * prueba normales no aparecen. Viven fuera de las pantallas para no ensuciarlas y se
 * activan desde la banda inferior (PrototypeChrome).
 */
export type Scenarios = {
  /** El usuario todavía no recibió ninguna notificación. */
  emptyNotifications: boolean
}

export const scenarioList: { id: keyof Scenarios; label: string }[] = [
  { id: 'emptyNotifications', label: 'Sin notificaciones' },
]

type Ctx = {
  scenarios: Scenarios
  toggle: (id: keyof Scenarios) => void
}

const ScenarioContext = createContext<Ctx | null>(null)

export function ScenarioProvider({ children }: { children: ReactNode }) {
  const [scenarios, setScenarios] = useState<Scenarios>({ emptyNotifications: false })

  const toggle = useCallback((id: keyof Scenarios) => {
    setScenarios((s) => ({ ...s, [id]: !s[id] }))
  }, [])

  const value = useMemo(() => ({ scenarios, toggle }), [scenarios, toggle])
  return <ScenarioContext.Provider value={value}>{children}</ScenarioContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useScenarios() {
  const ctx = useContext(ScenarioContext)
  if (!ctx) throw new Error('useScenarios debe usarse dentro de ScenarioProvider')
  return ctx
}
