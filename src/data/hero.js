import { Flame, Bird, Heart } from 'lucide-react'
import heroImg from '../assets/pollo2.JPEG'

export const hero = {
  badge: 'EL MEJOR SABOR DE ATE',
  // Cada línea del título; `accent: true` la pinta de rojo
  title: [
    { text: 'POLLO', accent: false },
    { text: 'A LA BRASA', accent: true },
    { text: 'QUE UNE', accent: false },
    { text: 'FAMILIAS', accent: false },
  ],
  description: 'Jugoso, dorado y con ese sabor que nos hace únicos.',
  whatsappLabel: 'PEDIR POR WHATSAPP',
  whatsappMessage: "Hola DIEGO'S, quiero hacer un pedido.",
  callLabel: 'LLAMAR',
  image: heroImg,
  imageAlt: 'Pollo a la brasa dorado servido con papas fritas sobre una plancha caliente',
  seal: {
    top: 'SABOR · CALIDAD',
    center: '100%',
    bottom: 'GARANTIZADA',
  },
  features: [
    { icon: Flame, lines: ['BRASA', 'DE VERDAD'] },
    { icon: Bird, lines: ['POLLOS', 'FRESCOS'] },
    { icon: Heart, lines: ['HECHO CON', 'PASIÓN'] },
  ],
}
