import { ArrowLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { AppShell } from '../layout/AppShell'
import { NotificationCard } from './NotificationCard'
import { useNotifications } from './NotificationsContext'
import { filterChips, type NotificationFilter } from './notifications.data'
import { HOME_ROUTE } from './routes'
import styles from './NotificationsPage.module.css'

/** Página hija de la Home: listado completo con filtros. Incluye regreso a la Home. */
export function NotificationsPage() {
  const { notifications, markAllSeen } = useNotifications()
  const pendingMark = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [filter, setFilter] = useState<'todas' | NotificationFilter>('todas')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Lo visto pasa a leído recién al salir de la página (volver, navegar o botón atrás),
  // no mientras está abierta. El aplazado con timeout evita que el doble montaje de
  // StrictMode en desarrollo lo marque apenas se entra.
  useEffect(() => {
    clearTimeout(pendingMark.current)
    return () => {
      pendingMark.current = setTimeout(markAllSeen, 0)
    }
  }, [markAllSeen])

  const visible = filter === 'todas' ? notifications : notifications.filter((n) => n.filter === filter)

  return (
    <AppShell>
      <main className={styles.main}>
        <Link className={styles.back} to={HOME_ROUTE}>
          <ArrowLeft size={20} strokeWidth={2} aria-hidden="true" />
          Volver al inicio
        </Link>

        <h1 className={styles.title}>Notificaciones</h1>

        <div className={styles.filters} role="group" aria-label="Filtrar notificaciones">
          {filterChips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              className={styles.chip}
              data-active={filter === chip.id}
              aria-pressed={filter === chip.id}
              onClick={() => setFilter(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className={styles.list}>
            {visible.map((n) => (
              <NotificationCard key={n.id} notification={n} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No tenés notificaciones en esta categoría.</p>
        )}
      </main>
    </AppShell>
  )
}
