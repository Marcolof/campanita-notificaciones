import { ChevronDown, Plus, User, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '@/assets/home/sidebar-home.svg'
import enviosIcon from '@/assets/home/sidebar-envios.svg'
import saldoIcon from '@/assets/home/sidebar-saldo.svg'
import plusIcon from '@/assets/home/sidebar-servicios-plus.svg'
import integracionesIcon from '@/assets/home/sidebar-integraciones.svg'
import logoMiCorreo from '@/assets/home/logo-micorreo.png'

import { HOME_ROUTE } from '../notifications/routes'
import styles from './MobileDrawer.module.css'

type Props = { open: boolean; onClose: () => void }

/** Menú lateral de mobile: reemplaza al sidebar e incluye «Mi cuenta» y «Nuevo envío». */
export function MobileDrawer({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.root}>
      <button type="button" className={styles.scrim} aria-label="Cerrar menú" onClick={onClose} />
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menú">
        <header className={styles.header}>
          <img src={logoMiCorreo} alt="Correo Argentino MiCorreo" width={197} height={28} />
          <button type="button" className={styles.close} aria-label="Cerrar menú" onClick={onClose}>
            <X size={24} strokeWidth={2} aria-hidden="true" />
          </button>
        </header>

        <nav className={styles.nav} aria-label="Principal">
          <Link className={styles.item} to={HOME_ROUTE} onClick={onClose}>
            <img src={homeIcon} alt="" width={24} height={24} />
            <span>Panel</span>
          </Link>
          <button type="button" className={styles.item}>
            <img src={enviosIcon} alt="" width={24} height={24} />
            <span>Mis envíos</span>
            <ChevronDown className={styles.chevron} size={20} strokeWidth={2} aria-hidden="true" />
          </button>
          <button type="button" className={styles.item}>
            <span className={styles.servicesIcon} aria-hidden="true">
              <i />
              <i />
              <i />
              <img src={plusIcon} alt="" />
            </span>
            <span>Servicios</span>
            <ChevronDown className={styles.chevron} size={20} strokeWidth={2} aria-hidden="true" />
          </button>
          <button type="button" className={styles.item}>
            <img src={saldoIcon} alt="" width={24} height={24} />
            <span>Mi saldo</span>
            <ChevronDown className={styles.chevron} size={20} strokeWidth={2} aria-hidden="true" />
          </button>
          <button type="button" className={styles.item}>
            <span className={styles.iconBox}>
              <img className={styles.rotated} src={integracionesIcon} alt="" />
            </span>
            <span>Integraciones</span>
          </button>
          <button type="button" className={styles.item}>
            <User className={styles.lucide} size={24} strokeWidth={2} aria-hidden="true" />
            <span>Mi cuenta</span>
            <ChevronDown className={styles.chevron} size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        </nav>

        <div className={styles.secondary}>
          <a className={styles.newShipping} href="#">
            <Plus size={24} strokeWidth={2} aria-hidden="true" />
            <span>Nuevo envío</span>
          </a>
        </div>
      </aside>
    </div>
  )
}
