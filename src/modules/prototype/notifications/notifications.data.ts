import type { LucideIcon } from 'lucide-react'
import { Mail, MapPin, Send } from 'lucide-react'

export type NotificationFilter = 'envios' | 'cuenta' | 'pagos' | 'alertas'

export type Notification = {
  id: string
  icon: LucideIcon
  /** Etiqueta que muestra la tarjeta (tal cual el Figma). */
  type: 'Envío' | 'Cuenta'
  /** Chip del listado completo con el que se filtra. */
  filter: NotificationFilter
  time: string
  title: string
  body: string
  /** Enlace de acción opcional (en el Figma sólo la primera lo tiene). */
  action?: string
  /** Color del punto de no leída según el tipo de notificación. */
  indicator: 'info' | 'alert'
  read: boolean
}

/**
 * Datos de prueba. Fuente: Figma Mi Correo 2.0, nodos 13948:32936 (dropdown)
 * y 13948:33010 (página). Orden: más reciente primero. El dropdown muestra
 * siempre las primeras cuatro.
 */
export const initialNotifications: Notification[] = [
  {
    id: 'n1',
    icon: MapPin,
    type: 'Envío',
    filter: 'envios',
    time: 'Hace 5m',
    title: 'Tu paquete está en camino',
    body: 'El pedido #45892 salió del centro de distribución y llegará mañana.',
    action: 'Ver envío',
    indicator: 'alert',
    read: false,
  },
  {
    id: 'n2',
    icon: Mail,
    type: 'Cuenta',
    filter: 'alertas',
    time: 'Hace 1h',
    title: 'Verificación de identidad pendiente',
    body: 'Completa la verificación de tu cuenta para habilitar retiros.',
    indicator: 'info',
    read: false,
  },
  {
    id: 'n3',
    icon: MapPin,
    type: 'Envío',
    filter: 'envios',
    time: 'Hace 3h',
    title: 'Entrega realizada con éxito',
    body: 'Tu pedido #45201 fue entregado en la dirección registrada.',
    indicator: 'info',
    read: false,
  },
  {
    id: 'n4',
    icon: Mail,
    type: 'Cuenta',
    filter: 'cuenta',
    time: 'Ayer',
    title: 'Nuevo método de pago agregado',
    body: 'Se vinculó la tarjeta terminada en •••• 4532 a tu cuenta.',
    indicator: 'info',
    read: false,
  },
  {
    id: 'n5',
    icon: Send,
    type: 'Envío',
    filter: 'envios',
    time: 'Hace 2h',
    title: 'Tu envío requiere atención',
    body: 'Necesitamos que revises información relacionada con tu envío.',
    indicator: 'info',
    read: false,
  },
  {
    id: 'n6',
    icon: Send,
    type: 'Envío',
    filter: 'envios',
    time: 'Hace 2h',
    title: 'Tu envío requiere atención',
    body: 'Necesitamos que revises información relacionada con tu envío.',
    indicator: 'info',
    read: false,
  },
  {
    id: 'n7',
    icon: Send,
    type: 'Envío',
    filter: 'envios',
    time: 'Hace 2h',
    title: 'Tu envío requiere atención',
    body: 'Necesitamos que revises información relacionada con tu envío.',
    indicator: 'info',
    read: false,
  },
  {
    id: 'n8',
    icon: Mail,
    type: 'Envío',
    filter: 'pagos',
    time: 'Hace 5 días',
    title: 'Pago exitoso',
    body: 'Se acreditó el importe de $1.250,00 a tu saldo disponible.',
    indicator: 'info',
    read: false,
  },
]

export const filterChips: { id: 'todas' | NotificationFilter; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'envios', label: 'Envíos' },
  { id: 'cuenta', label: 'Cuenta' },
  { id: 'pagos', label: 'Pagos' },
  { id: 'alertas', label: 'Alertas' },
]

export const DROPDOWN_LIMIT = 4
