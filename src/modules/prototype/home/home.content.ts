import carta from '@/assets/home/svc-carta-documento.svg'
import filatelia from '@/assets/home/svc-filatelia.svg'
import oficios from '@/assets/home/svc-oficios.svg'
import paqueteria from '@/assets/home/svc-paqueteria.svg'
import newsComunicaciones from '@/assets/home/news-comunicaciones.png'
import newsPaqar from '@/assets/home/news-paqar.png'
import newsPrestashop from '@/assets/home/news-prestashop.png'

/** Datos mock de la Home logueada (usuario de prueba). */
export const user = {
  initial: 'S',
  greeting: 'Hola, Sofía',
  fullName: 'RIOS SOFÍA',
  clientNumber: '0001109066',
}

export const services = [
  { label: 'Paquetería', icon: paqueteria, href: '#' },
  { label: 'Mis Comunicaciones Digitales', icon: carta, href: '#' },
  {
    label: 'Oficios judiciales',
    icon: oficios,
    href: 'https://www.correoargentino.com.ar/MiCorreo/public/oficiosjudiciales',
  },
  { label: 'Filatelia', icon: filatelia, href: 'https://wsec01.correoargentino.com.ar/' },
]

export const news = [
  {
    id: 'prestashop',
    image: newsPrestashop,
    overlay: false,
    title: '¡Integrá tu tienda PrestaShop a Correo Argentino!',
    body: [
      'En Correo Argentino estamos en constante crecimiento. Por eso anunciamos una nueva integración, en esta oportunidad con PrestaShop para que puedas realizar tus envíos PAQ.AR a todo el país.',
    ],
  },
  {
    id: 'comunicaciones',
    image: newsComunicaciones,
    overlay: true,
    title: 'Mis Comunicaciones Digitales Empresas',
    body: [
      'Presentamos una nueva herramienta digital para realizar tus comunicaciones a nombre de tu empresa o pyme.',
      'Una solución digital pensada especialmente para empresas y pymes que necesitan comunicar de manera ágil, segura y personalizada.',
    ],
  },
  {
    id: 'paqar',
    image: newsPaqar,
    overlay: false,
    title: '¡Mandate seguro con PAQ.AR y potenciá tu eCommerce!',
    body: [
      'Llegó PAQ.AR HOY el servicio de entrega de envíos en el día. Junto a nuestros servicios Clásico y Expreso simplifican tu eCommerce al precio más conveniente.',
    ],
  },
]
