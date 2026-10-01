import { useCallback, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '@/assets/home/sidebar-home.svg'
import enviosIcon from '@/assets/home/sidebar-envios.svg'
import saldoIcon from '@/assets/home/sidebar-saldo.svg'
import plusIcon from '@/assets/home/sidebar-servicios-plus.svg'
import integracionesIcon from '@/assets/home/sidebar-integraciones.svg'
import sidebarLogo from '@/assets/home/sidebar-logo.svg'
import logoMiCorreo from '@/assets/home/logo-micorreo.png'
import addIcon from '@/assets/home/icon-add.png'
import chevron from '@/assets/home/chevron.svg'

import { user } from '../home/home.content'
import '../home/home.tokens.css'
import { NotificationBell } from '../notifications/NotificationBell'
import { HOME_ROUTE } from '../notifications/routes'
import styles from './AppShell.module.css'
import { MobileDrawer } from './MobileDrawer'

const sidebarItems: { label: string; icon: string | null; rotated?: boolean; to?: string }[] = [
  { label: 'Inicio', icon: homeIcon, to: HOME_ROUTE },
  { label: 'Mis envíos', icon: enviosIcon },
  { label: 'Servicios', icon: null },
  { label: 'Mi saldo', icon: saldoIcon },
  { label: 'Integraciones', icon: integracionesIcon, rotated: true },
]

/** Marco de MiCorreo logueado: sidebar, navbar (con la campanita) y footer. */
export function AppShell({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  return (
    <div className={styles.page} data-module="home">
      <aside className={styles.sidebar}>
        <button type="button" className={styles.menuButton} aria-label="Menú">
          <img src={sidebarLogo} alt="" width={30} height={30} />
        </button>
        <nav className={styles.sidebarNav} aria-label="Principal">
          {sidebarItems.map((item) => {
            const content = item.icon ? (
              <img className={item.rotated ? styles.rotated : undefined} src={item.icon} alt="" width={28} height={28} />
            ) : (
              <span className={styles.servicesIcon} aria-hidden="true">
                <i />
                <i />
                <i />
                <img src={plusIcon} alt="" />
              </span>
            )
            return item.to ? (
              <Link key={item.label} to={item.to} className={styles.sidebarItem} aria-label={item.label}>
                {content}
              </Link>
            ) : (
              <button key={item.label} type="button" className={styles.sidebarItem} aria-label={item.label}>
                {content}
              </button>
            )
          })}
        </nav>
      </aside>

      <div className={styles.column}>
        <header className={styles.navbar}>
          <div className={styles.navbarInner}>
            <button
              type="button"
              className={styles.mobileMenu}
              aria-label="Abrir menú"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
            >
              <img src={sidebarLogo} alt="" width={30} height={30} />
            </button>
            <Link className={styles.logo} to={HOME_ROUTE}>
              <img src={logoMiCorreo} alt="Correo Argentino MiCorreo" width={197} height={28} />
            </Link>
            <div className={styles.navbarActions}>
              <a className={styles.newShipping} href="#">
                <img src={addIcon} alt="" width={26} height={26} />
                Nuevo envío
              </a>
              <NotificationBell />
              <div className={styles.account}>
                <span className={styles.avatar}>{user.initial}</span>
                <span className={styles.accountText}>
                  <strong>{user.greeting}</strong>
                  <button type="button" className={styles.more}>
                    Ver más <img src={chevron} alt="" width={15} height={15} />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </header>

        <MobileDrawer open={drawerOpen} onClose={closeDrawer} />

        {children}

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <span className={styles.copyright}>Copyright</span>
            <span className={styles.footerLinks}>
              <a href="#">Preguntas frecuentes</a>
              <i aria-hidden="true">|</i>
              <a href="#">Términos y condiciones</a>
              <i aria-hidden="true">|</i>
              <a className={styles.baja} href="https://www.correoargentino.com.ar/MiCorreo/public/solicitud-de-baja">
                Botón de baja
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}
