import { Bell } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NotificationCard } from './NotificationCard'
import { useNotifications } from './NotificationsContext'
import { DROPDOWN_LIMIT, type Notification } from './notifications.data'
import { NOTIFICATIONS_ROUTE } from './routes'
import styles from './NotificationBell.module.css'

/** Las no leídas primero (más recientes antes); si faltan para completar el panel, las leídas más recientes. */
function pickForPanel(list: Notification[]) {
  const unread = list.filter((n) => !n.read)
  const read = list.filter((n) => n.read)
  return [...unread, ...read].slice(0, DROPDOWN_LIMIT)
}

/**
 * Campanita de la navbar. Punto rojo mientras haya sin leer; el panel muestra cuatro.
 * Mientras está abierto no cambia nada (ni puntos ni contador): lo que se vio pasa a
 * leído recién al cerrarlo. Tocar una notificación no hace nada.
 */
export function NotificationBell() {
  const { notifications, unreadCount, markSeen } = useNotifications()
  const [open, setOpen] = useState(false)
  // Foto tomada al abrir: qué se muestra y cuántas había sin leer.
  const [snapshot, setSnapshot] = useState<{ items: Notification[]; unread: number }>({ items: [], unread: 0 })
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const openPanel = () => {
    setSnapshot({ items: pickForPanel(notifications), unread: unreadCount })
    setOpen(true)
  }

  const closePanel = useCallback(
    (markAsSeen = true) => {
      if (markAsSeen) markSeen(snapshot.items.map((n) => n.id))
      setOpen(false)
    },
    [markSeen, snapshot.items],
  )

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) closePanel()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closePanel()
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, closePanel])

  // «Ver todas» no marca nada: se leen (y se marcan) al salir de la página de detalle.
  const goToAll = () => {
    closePanel(false)
    navigate(NOTIFICATIONS_ROUTE)
  }

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.bell}
        aria-label={unreadCount ? `Notificaciones, ${unreadCount} sin leer` : 'Notificaciones'}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? closePanel() : openPanel())}
      >
        <Bell size={24} strokeWidth={2} aria-hidden="true" />
        {unreadCount > 0 && <span className={styles.badge} aria-hidden="true" />}
      </button>

      {open && (
        <div className={styles.panel} role="region" aria-label="Notificaciones">
          <div className={styles.header}>
            <p>Notificaciones</p>
            {snapshot.unread > 0 && <span className={styles.count}>{snapshot.unread}</span>}
          </div>
          <div className={styles.list}>
            {snapshot.items.map((n) => (
              <NotificationCard key={n.id} notification={n} />
            ))}
          </div>
          <button type="button" className={styles.footer} onClick={goToAll}>
            Ver todas las notificaciones
          </button>
        </div>
      )}
    </div>
  )
}
