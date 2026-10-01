# Home logueada — base del prototipo

Pantalla sobre la que se va a diseñar la campanita de notificaciones: la **Home de MiCorreo
con el usuario ya logueado**. La pantalla sin sesión (landing con login) **no forma parte**
de este proyecto: los casos de prueba son siempre con usuario logueado.

## Fuente

- Figma «Mi Correo 2.0» (`wN6vAlF1TgGc2AJdJJvsAU`), nodo `4959:89736` — *Home logued example autolayout*.
- Ruta en la app: `/prototipo/home`. Código: `src/modules/prototype/home/`.

## Qué incluye

- Sidebar de 60 px (botón de menú sobre amarillo, íconos de Inicio, Mis envíos, Servicios, Mi saldo, Integraciones).
- Navbar amarilla: logo Correo Argentino · MiCorreo, «Nuevo envío», avatar y «Hola, Sofía / Ver más».
- Encabezado: nombre y N° de cliente, botones «Mis envíos» y «Recargar saldo».
- Accesos: Paquetería, Mis Comunicaciones Digitales, Oficios judiciales, Filatelia.
- Novedades: tres tarjetas (PrestaShop, Mis Comunicaciones Digitales Empresas, PAQ.AR).
- Footer.

Los datos (usuario de prueba, textos de tarjetas) están en `home/home.content.ts`.

## Assets

Descargados desde Figma el 2026-10-01 a `src/assets/home/` (íconos y logos SVG, tres imágenes de
novedades en PNG). No quedan referencias a URLs temporales de Figma.

## Estilos

`home/home.tokens.css`, enganchado a `[data-module='home']`, reutiliza las primitivas de
`src/styles/tokens.css` (amarillo, azul, grises). El módulo no depende de otros estilos del prototipo.

## Diferencias conocidas

- Sólo escritorio (diseño a 1440). El responsive de mobile no está definido en el Figma recibido.
- El ícono «Servicios» del sidebar se arma con CSS porque en Figma son rectángulos, no un vector.
- Los enlaces sin destino real apuntan a `#`; los que traía el Figma se conservaron.
- Sin interacciones: botones y menús son estáticos hasta que llegue el requerimiento.
