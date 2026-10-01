import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { DocumentationHome } from '@/modules/documentation/DocumentationHome'
import { DocumentViewer } from '@/modules/documentation/DocumentViewer'
import { HubPage } from '@/modules/hub/HubPage'
import { PrototypeChrome } from '@/modules/prototype/components/PrototypeChrome'
import { PrototypeHome } from '@/modules/prototype/PrototypeHome'
import { HomeLogueada } from '@/modules/prototype/home/HomeLogueada'
import { NotificationsPage } from '@/modules/prototype/notifications/NotificationsPage'
import { NotificationsProvider } from '@/modules/prototype/notifications/NotificationsContext'
import { HOME_ROUTE, NOTIFICATIONS_ROUTE } from '@/modules/prototype/notifications/routes'
import { ScenarioProvider } from '@/modules/prototype/scenarios/ScenarioContext'

export const router = createBrowserRouter([
  { path: '/', element: <HubPage /> },
  { path: '/prototipo', element: <PrototypeHome /> },
  {
    // Home y notificaciones comparten el estado leído / no leído y los casos de uso.
    element: (
      <ScenarioProvider>
        <NotificationsProvider>
          <PrototypeChrome>
            <Outlet />
          </PrototypeChrome>
        </NotificationsProvider>
      </ScenarioProvider>
    ),
    children: [
      { path: HOME_ROUTE, element: <HomeLogueada /> },
      { path: NOTIFICATIONS_ROUTE, element: <NotificationsPage /> },
    ],
  },
  { path: '/documentacion', element: <DocumentationHome /> },
  { path: '/documentacion/:docId', element: <DocumentViewer /> },
  // Las rutas viejas quedan enlazadas en notas y mensajes: mejor volver al Hub
  // que dejar una pantalla de error.
  { path: '*', element: <Navigate to="/" replace /> },
])
