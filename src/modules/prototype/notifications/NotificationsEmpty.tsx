import { BellOff } from 'lucide-react'

import styles from './NotificationsEmpty.module.css'

/** Estado vacío: el usuario todavía no recibió notificaciones. Se usa en el panel y en el historial. */
export function NotificationsEmpty() {
  return (
    <div className={styles.empty}>
      <span className={styles.circle} aria-hidden="true">
        <BellOff size={28} strokeWidth={2} />
      </span>
      <p className={styles.title}>Aún no tenés notificaciones</p>
      <p className={styles.text}>Cuando haya novedades sobre tus envíos, tu cuenta o tus pagos, las vas a ver acá.</p>
    </div>
  )
}
