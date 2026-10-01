import { Link } from 'react-router-dom'

import { ModuleLayout } from '@/app/ModuleLayout'

import { documents } from './documents'
import styles from './DocumentationHome.module.css'

export function DocumentationHome() {
  return (
    <ModuleLayout
      title="Documentación"
      summary="Documentos funcionales del proyecto."
    >
      <ul className={styles.list}>
        {documents.map((doc) => (
          <li key={doc.id}>
            <Link className={styles.card} to={`/documentacion/${doc.id}`}>
              <span className={styles.index}>{doc.index}</span>
              <div>
                <h2 className={styles.title}>{doc.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ModuleLayout>
  )
}
