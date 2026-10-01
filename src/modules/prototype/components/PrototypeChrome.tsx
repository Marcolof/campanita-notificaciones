import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { scenarioList, useScenarios } from '../scenarios/ScenarioContext'
import styles from './PrototypeChrome.module.css'

type View = 'main' | 'cases'

/**
 * Envuelve las pantallas del prototipo sin tocar su marcado. Abajo queda fija una banda
 * azul finita: al pasar el mouse (o tocarla en mobile) se levanta un panel con
 * «Volver al HUB» y «Casos de uso».
 */
export function PrototypeChrome({ children }: { children: ReactNode }) {
  const { scenarios, toggle } = useScenarios()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<View>('main')

  const close = () => {
    setOpen(false)
    setView('main')
  }

  return (
    <>
      {children}
      {/* Reserva el alto de la banda para que no tape el final del footer. */}
      <div className={styles.spacer} aria-hidden="true" />

      <div className={styles.dock} data-open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={close}>
        {open && (
          <div className={styles.panel} role="dialog" aria-label="Herramientas del prototipo">
            {view === 'main' ? (
              <ul className={styles.list}>
                <li>
                  <Link className={styles.item} to="/">
                    <ArrowLeft size={22} strokeWidth={2} aria-hidden="true" />
                    <span>Volver al HUB</span>
                  </Link>
                </li>
                <li>
                  <button type="button" className={styles.item} onClick={() => setView('cases')}>
                    <span className={styles.iconSpacer} aria-hidden="true" />
                    <span>Casos de uso</span>
                    <ChevronRight className={styles.trailing} size={20} strokeWidth={2} aria-hidden="true" />
                  </button>
                </li>
              </ul>
            ) : (
              <div>
                <button type="button" className={styles.item} onClick={() => setView('main')}>
                  <ArrowLeft size={22} strokeWidth={2} aria-hidden="true" />
                  <span>Casos de uso</span>
                </button>
                <ul className={styles.cases}>
                  {scenarioList.map((s) => (
                    <li key={s.id}>
                      <label className={styles.case}>
                        <span>{s.label}</span>
                        <input
                          type="checkbox"
                          role="switch"
                          className={styles.switch}
                          checked={scenarios[s.id]}
                          onChange={() => toggle(s.id)}
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <button
          type="button"
          className={styles.band}
          aria-label="Herramientas del prototipo"
          aria-expanded={open}
          onClick={() => (open ? close() : setOpen(true))}
        />
      </div>
    </>
  )
}
