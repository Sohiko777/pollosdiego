import comboFamiliarImg from '../assets/combo1.png'
import parrillaMixtaImg from '../assets/combo2.png'
import comboPara2Img from '../assets/combo3.png'

export const menuContent = {
  eyebrow: 'NUESTRO MENÚ',
  titleDark: 'PARA CADA ANTOJO,',
  titleAccent: 'UN COMBO PERFECTO',
  orderLabel: 'PEDIR POR WHATSAPP',
  fullMenuLabel: 'VER MENÚ COMPLETO',
  // TODO: enlace al menú completo (PDF, carta en línea o catálogo de WhatsApp).
  fullMenuUrl: '#menu',
  // TODO: confirmar el contenido de las pestañas POLLOS y PARRILLAS (el diseño solo muestra COMBOS).
  emptyMessage: 'Muy pronto más opciones aquí. Mientras tanto, consúltanos por WhatsApp.',
}

export const menuTabs = [
  { id: 'combos', label: 'COMBOS' },
  { id: 'pollos', label: 'POLLOS' },
  { id: 'parrillas', label: 'PARRILLAS' },
]

export const menuItems = {
  combos: [
    {
      id: 'combo-familiar-1',
      badge: 'MÁS PEDIDO',
      name: 'COMBO FAMILIAR 1',
      image: comboFamiliarImg,
      imageAlt: 'Combo familiar con pollo a la brasa, papas, ensalada y gaseosa',
      includes: ['1 Pollo a la brasa', 'Papas familiares', 'Ensalada grande', 'Gaseosa 1.5 L'],
      price: 89.9,
    },
    {
      id: 'parrilla-mixta',
      badge: 'NUEVO',
      name: 'PARRILLA MIXTA',
      image: parrillaMixtaImg,
      imageAlt: 'Parrilla mixta con pollo, anticucho, chorizo, papas doradas y ensalada',
      includes: ['1/4 Pollo a la brasa', 'Anticucho + Chorizo', 'Papas doradas', 'Ensalada'],
      price: 79.9,
    },
    {
      id: 'combo-para-2',
      badge: 'IDEAL PARA 2',
      name: 'COMBO PARA 2',
      image: comboPara2Img,
      imageAlt: 'Combo para dos con pollo a la brasa, papas medianas y gaseosa',
      includes: ['1 Pollo a la brasa', 'Papas medianas', 'Ensalada mediana', 'Gaseosa 1.5 L'],
      price: 59.9,
    },
  ],
  pollos: [],
  parrillas: [],
}
