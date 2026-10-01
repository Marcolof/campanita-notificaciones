import type { Notification } from './notifications.data'
import styles from './NotificationCard.module.css'

/**
 * Card del Figma (variante v1, con ícono). Es sólo informativa: no se puede marcar
 * como leída tocándola. `read` quita el punto; su color depende del tipo (`indicator`).
 */
export function NotificationCard({ notification }: { notification: Notification }) {
  const { icon: Icon, type, time, title, body, action, read, indicator } = notification
  return (
    <article className={styles.card} data-read={read}>
      <div className={styles.icon}>
        <span className={styles.iconCircle}>
          <Icon size={24} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <div className={styles.main}>
        <div className={styles.headline}>
          {!read && (
            <span className={styles.dot} data-indicator={indicator} role="img" aria-label="No leída" />
          )}
          <span className={styles.type} data-type={type}>
            {type}
          </span>
          <span className={styles.time}>{time}</span>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.body}>{body}</p>
        {action && <span className={styles.action}>{action}</span>}
      </div>
    </article>
  )
}
