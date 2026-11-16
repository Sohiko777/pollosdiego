import { CalendarDays, Clock, Truck } from 'lucide-react'
import mapImg from '../assets/map-ate.jpg'

export const visit = {
  eyebrow: 'VISÍTANOS',
  title: ['TE ESPERAMOS', 'EN ATE'],
  mapImage: mapImg,
  mapImageAlt: 'Mapa de la ubicación de DIEGO\'S en la Av. Nicolás Ayllón, Ate',
  mapLinkLabel: 'Abrir ubicación de DIEGO\'S en Google Maps',
  hoursEyebrow: 'HORARIOS DE ATENCIÓN',
  hours: [
    { icon: CalendarDays, lines: ['Lunes a Domingo'] },
    { icon: Clock, lines: ['11:00 a.m. – 11:00 p.m.'] },
    { icon: Truck, lines: ['Pedidos a domicilio', '11:00 a.m. – 10:30 p.m.'] },
  ],
  orderCtaLabel: '¡HAZ TU PEDIDO AHORA!',
  orderMessage: "Hola DIEGO'S, quiero hacer un pedido.",
  seal: {
    top: 'SABOR QUE',
    bottom: 'TE HACE VOLVER',
  },
}
