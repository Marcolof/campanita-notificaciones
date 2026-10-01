# Notificaciones — propuesta

Fuente de verdad: Figma «Mi Correo 2.0», sección *evolutivo* (nodo `13948:32899`). Captura: 2026-10-01.

## Alcance

La campanita de la navbar de la Home logueada, su panel desplegable y la página de detalle
«Notificaciones», hija de la Home.

## Rutas

| Ruta | Qué es |
|---|---|
| `/prototipo/home` | Home logueada (madre) |
| `/prototipo/notificaciones` | Detalle de notificaciones (hija) |

## Comportamiento

**Una notificación se pone leída por haberla visto, nunca por tocarla.** Las cards son sólo informativas: no tienen cursor de clic ni acción de «marcar como leída».

- **Campanita:** ícono `Bell` de Lucide con un punto rojo (10 px) mientras haya notificaciones sin leer.
- **Panel:** al abrirlo muestra **cuatro**, priorizando las no leídas (más recientes primero); si hay menos de cuatro sin leer, completa con las leídas más recientes. El contador amarillo indica el **total de sin leer al abrir** (puede ser mayor que las cuatro visibles, p. ej. 8).
- **Mientras está abierto no cambia nada:** ni los puntos ni el contador. Es una foto tomada al abrir.
- **Al cerrarlo** (tocar la campanita, clic afuera o `Esc`), las cuatro que se mostraron pasan a leídas. Si quedan más sin leer, la campanita conserva el punto rojo; al volver a abrir se ven las siguientes cuatro. Cuando ya no queda ninguna, el punto rojo desaparece.
- **Ver todas:** lleva a `/prototipo/notificaciones` **sin marcar nada**: ahí se ve todo con sus puntos. Todas pasan a leídas **al salir** de la página (volver, navegar o botón atrás del navegador).
- **Indicador por tipo:** el punto de no leída depende del tipo de notificación. «Tu paquete está en camino» lleva punto **rojo**; el resto, **azul**. El tipo lo define el campo `indicator` de cada notificación.
- **Estados:** *no leída* = punto de 6 px; *leída* = sin punto (variante `read` del Card del Figma).
- **Detalle:** título, chips de filtro (Todas, Envíos, Cuenta, Pagos, Alertas) y listado completo (máx. 900 px).
- **Regreso:** «← Volver al inicio» arriba del título; el logo y el ícono Inicio del sidebar también llevan a la Home.

Ejemplo con 8 sin leer: abrir (contador 8, cuatro visibles) → cerrar (cuatro leídas, punto rojo sigue) → abrir (contador 4, las otras cuatro) → cerrar (todas leídas, desaparece el punto rojo).

## Estado vacío

Cuando el usuario todavía no recibió notificaciones:

- La campanita no muestra el punto rojo.
- El panel muestra un círculo gris claro (`#F2F2F2`) con el ícono `BellOff` de Lucide en color deshabilitado, el título **«Aún no tenés notificaciones»** y el texto «Cuando haya novedades sobre tus envíos, tu cuenta o tus pagos, las vas a ver acá.»
- No hay contador ni «Ver todas las notificaciones»: el acceso al historial se habilita con la primera notificación.
- El historial muestra el mismo estado vacío, sin filtros.

## Herramientas del prototipo y casos de uso

Las pantallas del prototipo tienen una **banda azul de 5 px fija abajo**. Al pasar el mouse (o tocarla en mobile) se levanta un panel con:

- **Volver al HUB** — vuelve a la portada del proyecto.
- **Casos de uso** — el panel crece con la lista de casos y una flecha para volver al modo chico.

| Caso | Qué hace |
|---|---|
| Sin notificaciones | Oculta todas las notificaciones para ver el estado vacío. Al apagarlo vuelven como estaban; mientras está activo no se marca nada como leído. |

Los casos son parte del prototipo, no del producto. Viven en `src/modules/prototype/scenarios/`.

## Responsive (≤ 900 px)

- **Navbar:** sólo el botón de menú (izquierda) y la campanita (derecha). Se ocultan el logo, «Nuevo envío» y la cuenta.
- **Menú lateral:** reemplaza al sidebar. Encabezado amarillo con el logo y cerrar (✕); ítems Panel, Mis envíos, Servicios, Mi saldo, Integraciones y Mi cuenta; separador y «+ Nuevo envío». Se cierra con ✕, tocando el fondo oscuro o con `Esc`. Los desplegables (chevron) todavía no abren submenús.
- **Notificaciones:** al tocar la campanita el panel ocupa la **pantalla completa**, con un botón de cerrar. Mismas reglas de lectura que en escritorio: cerrar marca como leídas las cuatro que se vieron; «Ver todas» lleva al historial sin marcar. En mobile, «Ver todas las notificaciones» es el mismo enlace de texto que en escritorio, ubicado **inmediatamente debajo de la lista** (el panel siempre muestra hasta cuatro, así que no hace falta fijarlo al pie).
- El contenido de la Home (accesos y novedades) se reacomoda en una columna, sin un diseño mobile específico todavía.

## Decisión de diseño: botón de volver

El Figma no incluye navegación de regreso en la página de notificaciones. Se agregó, porque es
una página hija de la Home: sin ella, la única salida sería el logo o el sidebar, que no
comunican "volver". Es una **propuesta que se aparta del Figma** y está pendiente de validación.

## Íconos

Lucide (`lucide-react`): `Bell`, `MapPin`, `Mail`, `Send`, `ArrowLeft`. Trazo 2, color azul de marca.

## Diferencias y supuestos respecto del Figma

- El panel del Figma tiene textos distintos a la página; se usó un único juego de datos (`notifications/notifications.data.ts`) y el panel muestra las 4 primeras.
- Los datos de prueba son **8 notificaciones sin leer**, para poder ver cómo se priorizan en el panel.
- El color del texto del tipo (gris para «Envío», gris oscuro para «Cuenta») sigue al Figma; parece una inconsistencia del diseño y no un estado.
- El punto rojo por tipo y la regla de marcar al cerrar **no están en el Figma**: salen de las indicaciones del 2026-10-01 y quedan pendientes de pasarse al diseño.
- Los filtros **Pagos** y **Alertas** son funcionales, pero el Figma etiqueta «Pago exitoso» como «Envío»; se asignó a Pagos por contenido.
- El panel se ancla al borde derecho de la navbar y no a la posición exacta del Figma, para que no se desborde.
- Mobile se armó a partir de capturas de referencia (menú y navbar), no de un frame de Figma.
- Estado en memoria: recargar la página restablece las notificaciones.

## Código

`src/modules/prototype/notifications/` (campanita, panel, card, página, estado) y
`src/modules/prototype/layout/AppShell.tsx` (sidebar, navbar y footer compartidos por Home y Notificaciones).
