/**
 * Registra Gilroy sin versionar los .ttf: es una tipografía con licencia y el repositorio
 * es público. Los archivos se sirven desde `VITE_FONTS_BASE_URL`.
 *
 * - En local, por defecto `/fonts/`: copiar los .ttf a `public/fonts/` (ignorado por Git).
 * - En Vercel, cargar la variable con la URL donde estén alojadas (con CORS habilitado
 *   si es otro dominio). Sin variable ni archivos, la página cae a la fuente de respaldo.
 */
const base = (import.meta.env.VITE_FONTS_BASE_URL || '/fonts/').replace(/\/?$/, '/')

const weights: [file: string, weight: number][] = [
  ['Gilroy-Light', 300],
  ['Gilroy-Regular', 400],
  ['Gilroy-Medium', 500],
  ['Gilroy-SemiBold', 600],
  ['Gilroy-Bold', 700],
  ['Gilroy-Heavy', 800],
]

const css = weights
  .map(
    ([file, weight]) => `@font-face {
  font-family: 'Gilroy';
  src: url('${base}${file}.ttf') format('truetype');
  font-weight: ${weight};
  font-style: normal;
  font-display: swap;
}`,
  )
  .join('\n')

const style = document.createElement('style')
style.dataset.fonts = 'gilroy'
style.textContent = css
document.head.appendChild(style)
