import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

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
  const [notifications, setNotifications] = useState(initialNotifications)

  const markSeen = useCallback((ids: string[]) => {
    setNotifications((list) => list.map((n) => (ids.includes(n.id) ? { ...n, read: true } : n)))
  }, [])

  const markAllSeen = useCallback(() => {
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
