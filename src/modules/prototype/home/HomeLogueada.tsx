import logoComunicaciones from '@/assets/home/logo-mis-comunicaciones.svg'

import { AppShell } from '../layout/AppShell'
import { news, services, user } from './home.content'
import styles from './HomeLogueada.module.css'

export function HomeLogueada() {
  return (
    <AppShell>
      <main className={styles.body}>
        <section className={styles.headline}>
          <div>
            <h1 className={styles.name}>{user.fullName}</h1>
            <p className={styles.client}>N° Cliente: {user.clientNumber}</p>
          </div>
          <div className={styles.headlineActions}>
            <button type="button" className={styles.secondary}>
              Mis envíos
            </button>
            <button type="button" className={styles.primary}>
              Recargar saldo
            </button>
          </div>
        </section>

        <ul className={styles.services}>
          {services.map((service) => (
            <li key={service.label}>
              <a className={styles.service} href={service.href}>
                <img src={service.icon} alt="" width={80} height={80} />
                <span className={styles.serviceLabel}>{service.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <section className={styles.newsSection}>
          <h2 className={styles.newsTitle}>Novedades</h2>
          <ul className={styles.news}>
            {news.map((item) => (
              <li key={item.id} className={styles.card}>
                <div className={styles.cardMedia}>
                  <img src={item.image} alt="" />
                  {item.overlay && (
                    <>
                      <span className={styles.scrim} />
                      <img className={styles.cardLogo} src={logoComunicaciones} alt="" />
                    </>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3>{item.title}</h3>
                  {item.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </AppShell>
  )
}
