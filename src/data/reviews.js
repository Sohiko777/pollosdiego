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
]
