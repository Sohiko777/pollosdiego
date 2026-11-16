import avatar1 from '../assets/avatar-1.jpg'
import avatar2 from '../assets/avatar-2.jpg'
import avatar3 from '../assets/avatar-3.jpg'
import saladImg from '../assets/ensalada.png'

export const reviewsContent = {
  eyebrow: 'LO QUE DICEN DE NOSOTROS',
  title: ['TU OPINIÓN', 'NOS RESPALDA'],
  description: 'Miles de familias y vecinos ya disfrutan nuestro sabor. ¡Gracias por elegirnos!',
  rating: '4.8',
  // TODO: confirmar cifras reales de Google Maps antes de publicar.
  totalReviews: '+1,250 reseñas en Google Maps',
  ctaLabel: 'VER EN GOOGLE MAPS',
  sideImage: saladImg,
  sideImageAlt: 'Ensalada fresca de tomate, lechuga y cebolla servida en un plato blanco',
}

// TODO: reemplazar por reseñas reales (nombre, texto y foto) con permiso de cada persona.
// El carrusel se adapta solo: puedes agregar o quitar reseñas de esta lista.
export const reviews = [
  {
    id: 'luis',
    name: 'Luis Enrique M.',
    location: 'Ate, Lima',
    avatar: avatar1,
    stars: 5,
    text: 'El mejor pollo a la brasa de Ate, siempre jugoso y con ese sabor único. ¡Totalmente recomendado!',
  },
  {
    id: 'maria',
    name: 'María Fernanda R.',
    location: 'Ate, Lima',
    avatar: avatar2,
    stars: 5,
    text: 'Pedimos en familia cada fin de semana. La parrilla mixta es nuestra favorita.',
  },
  {
    id: 'carlos',
    name: 'Carlos T.',
    location: 'Ate, Lima',
    avatar: avatar3,
    stars: 5,
    text: 'Excelente atención y rapidez en los pedidos. Siempre cumplen.',
  },
  {
    id: 'rosa',
    name: 'Rosa Elena C.',
    location: 'Ate, Lima',
    avatar: avatar2,
    stars: 5,
    text: 'Las papas crujientes y el pollo bien doradito. Se nota que cuidan la brasa.',
  },
  {
    id: 'jorge',
    name: 'Jorge Luis P.',
    location: 'Santa Anita, Lima',
    avatar: avatar1,
    stars: 5,
    text: 'Pedí el combo familiar para el cumpleaños de mi hijo y alcanzó para todos. Llegó calientito.',
  },
  {
    id: 'daniela',
    name: 'Daniela V.',
    location: 'La Molina, Lima',
    avatar: avatar3,
    stars: 5,
    text: 'Los anticuchos son una delicia y las cremas de la casa están buenazas.',
  },
  {
    id: 'miguel',
    name: 'Miguel Ángel S.',
    location: 'Ate, Lima',
    avatar: avatar1,
    stars: 4,
    text: 'Buena porción y buen precio. El local es cómodo para ir en familia.',
  },
  {
    id: 'patricia',
    name: 'Patricia H.',
    location: 'Ate, Lima',
    avatar: avatar2,
    stars: 5,
    text: 'Pedimos por WhatsApp y respondieron al toque. Todo llegó tal cual lo pedimos.',
  },
]