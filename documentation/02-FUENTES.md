# Fuentes del proyecto

Ninguna de estas fuentes se modifica. Todo lo que se usa se copió a este proyecto y se
registra acá con su procedencia.

## 1. Proyecto de referencia — maqueta de Paquetería Internacional

- **Ruta (sólo lectura):** `C:\MLOF 01\VORTEX\CORREO ARGENTINO\Envios internacionales\Envio internacional CLAUDE`
- **Qué es:** maqueta React + TypeScript + Vite de MiCorreo (flujo de envío internacional),
  con un sistema de tokens en tres capas ya documentado.
- **Qué se tomó:**
  - `src/styles/tokens.css` y `src/styles/globals.css` → copiados sin cambios a
    `src/styles/`.
  - Las seis variantes de Gilroy (`.ttf`) → `src/assets/fonts/`.
  - La convención de estructura: `src/app`, `src/modules/<módulo>/components`,
    CSS Modules por componente, alias `@/`.
- **Qué NO se tomó:** componentes de `shared/ui`, lógica de escenarios, feature flags,
  router ni módulos de negocio. La landing no los necesita.

## 2. HTML de referencia de la landing

- **Ruta (sólo lectura):** `C:\MLOF 01\VORTEX\CORREO ARGENTINO\HOME STANDARD CON HUB\html reference`
- **Qué es:** la landing de MiCorreo guardada desde el navegador ("Página web completa").
- **Copia local:** `reference/landing-original.html`, fuera del build. Sólo el HTML, para
  verificar la jerarquía del DOM, los textos y los enlaces. Los assets que usa la réplica ya
  viven en `src/assets/`; el resto queda en el original de sólo lectura.
- **Qué se tomó:** todos los assets (banners, logos, íconos de accesos directos, íconos
  sociales, botón del chatbot) → `src/assets/`. La estructura del DOM, como guía
  de jerarquía y textos.
- **Limitación importante:** el HTML guardado **no conserva los estilos**. La landing usa
  MUI + emotion, que inyecta el CSS por JavaScript en tiempo de ejecución; los `<style>`
  del archivo guardado quedaron vacíos y el chunk `landing-template-*.js` no se guardó.
  Por eso los estilos no salieron de este archivo.

## 3. Landing en producción

- **URL:** `https://micorreo.correoargentino.com.ar/landing`
- **Fecha de captura:** 2026-09-10, viewport 1440×900.
- **Qué se tomó:** los estilos computados reales de cada elemento (medidas, colores,
  tipografía, radios, sombras, orden de apilado). Es la fuente de verdad de la réplica.
- Es una consulta de sólo lectura sobre una página pública. No se modificó nada.

## 4. Proyecto base — Formulario FF claude

- **Ruta (sólo lectura):** `C:\MLOF 01\VORTEX\CORREO ARGENTINO\HOME STANDARD CON HUB\Formulario FF claude`
- **Qué es:** el monorepo (Hub + prototipo + documentación) con la réplica de la landing y
  sus estilos originales.
- **Qué se tomó:** todo el código y los assets, copiados el 2026-10-01 sin `node_modules`,
  `dist` ni `*.tsbuildinfo`. Ver [05-REGISTRO-DE-CAMBIOS.md](05-REGISTRO-DE-CAMBIOS.md).
- **Qué NO se tomó:** el `.docx` y el `.md` de requerimientos de Formulario FF, que no
  aplican a este proyecto.

## 5. Figma — Mi Correo 2.0

- **Archivo:** `wN6vAlF1TgGc2AJdJJvsAU`, nodo `4959:89736` (Home logued example autolayout).
- **Capturado:** 2026-10-01. Fuente de la pantalla base. Los assets se descargaron a `src/assets/home/`.
- **Nota:** la landing sin sesión (secciones 2 y 3) ya no se usa; se conserva sólo como procedencia de la base.

## 6. Formulario de solicitud GC01

- **Archivo:** `documentation/Formulario Solicitud - GC01 - Módulo Notificaciones (1).docx`, fecha de solicitud 25/09/2026.
- **Acceso:** uso interno. Está excluido del repositorio (`.gitignore`) y no se muestra en el módulo de documentación.
- **Uso:** las definiciones relevantes se resumen en [08-REQUERIMIENTO-GC01.md](08-REQUERIMIENTO-GC01.md), contrastadas con el MVP.
