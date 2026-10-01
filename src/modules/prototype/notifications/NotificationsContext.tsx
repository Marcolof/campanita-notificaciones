import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { useScenarios } from '../scenarios/ScenarioContext'
import { initialNotifications, type Notification } from './notifications.data'

type Ctx = {
  notifications: Notification[]
  unreadCount: number
  /** Marca como leídas las notificaciones indicadas (por haberlas visto, nunca por tocarlas). */
  markSeen: (ids: string[]) => void
  markAllSeen: () => void
}

const NotificationsContext = createContext<Ctx | null>(null)

/** Estado compartido entre la Home y la página de notificaciones (en memoria, sin backend). */
export function NotificationsProvider({ children }: { children?: ReactNode }) {
  const [stored, setNotifications] = useState(initialNotifications)
  // Caso de uso «Sin notificaciones»: se ocultan todas sin perder el estado de lectura.
  const { scenarios } = useScenarios()
  const notifications = useMemo(() => (scenarios.emptyNotifications ? [] : stored), [scenarios.emptyNotifications, stored])
  // Ref y no dependencia: markAllSeen tiene que ser estable (la página lo usa al desmontarse).
  const hidden = useRef(scenarios.emptyNotifications)
  hidden.current = scenarios.emptyNotifications

  const markSeen = useCallback((ids: string[]) => {
    setNotifications((list) => list.map((n) => (ids.includes(n.id) ? { ...n, read: true } : n)))
  }, [])

  const markAllSeen = useCallback(() => {
    // Con el caso «Sin notificaciones» el usuario no vio nada: no se marca.
    if (hidden.current) return
    setNotifications((list) => list.map((n) => (n.read ? n : { ...n, read: true })))
  }, [])

  const value = useMemo<Ctx>(
    () => ({
      notifications,
      unreadCount: notifications.filter((n) => !n.read).length,
      markSeen,
      markAllSeen,
    }),
    [notifications, markSeen, markAllSeen],
  )

  return <NotificationsContext.Provider value={value}>{children ?? <Outlet />}</NotificationsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotifications() {
  const ctx = useContext(NotificationsContext)
  if (!ctx) throw new Error('useNotifications debe usarse dentro de NotificationsProvider')
  return ctx
}
