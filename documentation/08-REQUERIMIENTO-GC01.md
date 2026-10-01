# Requerimiento GC01 — Módulo de notificaciones

Resumen de las definiciones del formulario de solicitud **GC01 — Nuevo módulo de
notificaciones en MiCorreo** (fecha de solicitud: 25/09/2026, prioridad: alta).

El documento original es de uso interno: no se publica en este repositorio ni en el
módulo de documentación. Acá sólo se extrae lo relevante para la propuesta.

> **Criterio:** el GC01 describe el módulo completo. Esta propuesta apunta al **MVP**
> acordado con el equipo de desarrollo, así que varias definiciones quedan fuera de
> alcance por ahora. La columna «MVP» de cada tabla dice qué cubre el prototipo.

## Alcance pedido

El módulo contempla:

1. Campana de notificaciones en el header.
2. Historial de notificaciones.
3. Configuración de preferencias.
4. Notificaciones temporales (aviso emergente).
5. Asistencia con IA para crear recordatorios.
6. Tablero de consumo y perfiles administradores que cargan y configuran notificaciones (a definir).

Debe ser escalable a otros servicios de Correo, no sólo los operados en MiCorreo.

## Campana de notificaciones

| Definición del GC01 | MVP |
|---|---|
| Ícono de campana en el header, visible durante toda la navegación | Sí |
| Indica novedades con un **indicador numérico** | Parcial: la campana muestra un punto rojo; el número está dentro del panel |
| El panel se despliega **al posicionarse** sobre la campana | Se abre **al tocar** (también funciona en táctil) |
| Panel: título «Notificaciones» | Sí |
| Panel: ícono de configuración para ajustar preferencias | No (preferencias fuera del MVP) |
| Cada notificación: título, descripción breve, fecha y hora, estado leída / no leída | Sí; la fecha se muestra relativa («Hace 2h») |
| Pie: acceso «Ver todas» al historial | Sí |
| Al presionar una notificación se ve completa | No: en el MVP las notificaciones se marcan leídas al verlas, no al tocarlas |

## Notificaciones temporales

Aviso en la parte superior, cerca del header o debajo de la campana, visible pero no
invasivo. Dura unos segundos (duración parametrizable) y queda guardado en el historial.
**Fuera del MVP.**

## Historial

| Definición del GC01 | MVP |
|---|---|
| Sección con todas las notificaciones recibidas | Sí, `/prototipo/notificaciones` |
| Buscador por palabra clave | No |
| Filtros por tipo, estado o fecha | Parcial: filtros por categoría (Envíos, Cuenta, Pagos, Alertas) |
| Ver nuevas, leídas, con acción pendiente, informativas y de alerta | Parcial: se distinguen leídas / no leídas y el color del indicador por tipo |
| Mínimo por notificación: título, descripción, fecha y hora, estado | Sí |
| El usuario puede marcar como leída / no leída | No: se marcan leídas automáticamente al verlas |

## Tipos de notificación

| Tipo | Qué es | Ejemplos | ¿Desactivable? |
|---|---|---|---|
| **Informativa** | Novedades o eventos ocurridos, sin acción obligatoria | Seguimiento de envíos, promociones, seguimiento de casos del centro de ayuda, alta de usuarios adicionales, eventos especiales (Hot Sale, Cyber) | Sí |
| **Alerta** | Situaciones que pueden afectar una operación o el uso de la plataforma. Más prioridad que las informativas | Mantenimiento del sitio | Las críticas no |
| **Acción requerida** | El usuario debe hacer algo para continuar. Siguen pendientes hasta que la acción se realiza o deja de estar vigente | Aceptar términos y condiciones, actualizar datos, acción en un reclamo, encuestas | No |

**En el MVP:** el color del punto de no leída depende del tipo (`indicator`: azul o rojo).
Todavía no se modela «acción requerida» como estado persistente.

## Preferencias

Pantalla de configuración accesible desde el ícono del módulo, dividida por tipo de
comunicación: envíos y seguimiento, pagos y saldo, promociones o novedades comerciales,
recordatorios. Siempre activas: alertas críticas, seguridad de la cuenta, actualización de
datos y cambios en términos y condiciones. **Fuera del MVP.**

## IA y recordatorios

Asistente complementario para crear recordatorios en lenguaje natural (por ejemplo,
«Recordame todos los 5 de cada mes cargar saldo»). Interpreta, propone la configuración y
pide confirmación antes de crearlo. No reemplaza a las notificaciones operativas.
**Fuera del MVP.**

## Diferencias deliberadas del MVP frente al GC01

Estas decisiones se tomaron con el equipo y conviene validarlas con el área solicitante:

- **Apertura al tocar** y no al pasar el mouse.
- **Leída al ver, no al tocar:** las notificaciones que se mostraron pasan a leídas al cerrar el panel o al salir del historial. No hay acción manual de marcar como leída / no leída.
- **Indicador de la campana:** punto rojo sin número; el contador está en el encabezado del panel.
- **Panel de cuatro:** siempre muestra cuatro, priorizando las no leídas.

## Pendiente de definir

- Duración y lapso de guardado de las notificaciones temporales.
- Perfiles administradores y tablero de consumo.
- Cómo se resuelve una notificación de acción requerida dentro del panel.
