import { Link } from 'react-router-dom'

import { ModuleLayout } from '@/app/ModuleLayout'

import styles from './PrototypeHome.module.css'

export function PrototypeHome() {
  return (
    <ModuleLayout
      title="Prototipo navegable"
      summary="Las versiones navegables de la propuesta de notificaciones de MiCorreo."
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.head}>
            <h2 className={styles.title}>Notificaciones 1.0</h2>
            <span className={styles.review}>En revisión</span>
          </div>
          <p className={styles.summary}>
            La campanita con su panel de notificaciones y la página de detalle, sobre la Home
            de MiCorreo con el usuario logueado.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/prototipo/home">
              Ver prototipo navegable
            </Link>
          </div>
        </li>
      </ul>
    </ModuleLayout>
  )
}
