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
  // Se muestra solo si una pestaña no tiene productos.
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

  // EJEMPLOS: cambia nombres, contenido y precios por los reales.
  // Las fotos son temporales (reusan las de arriba). Cuando tengas las tuyas,
  // súbelas a src/assets/, impórtalas arriba y cámbialas aquí.
  pollos: [
    {
      id: 'pollo-entero',
      badge: 'FAMILIAR',
      name: '1 POLLO ENTERO',
      image: comboFamiliarImg,
      imageAlt: 'Pollo a la brasa entero con papas fritas',
      includes: ['1 Pollo a la brasa entero', 'Papas fritas', 'Ensalada', 'Cremas de la casa'],
      price: 49.9,
    },
    {
      id: 'medio-pollo',
      badge: 'PARA COMPARTIR',
      name: '1/2 POLLO',
      image: comboPara2Img,
      imageAlt: 'Medio pollo a la brasa con papas fritas',
      includes: ['1/2 Pollo a la brasa', 'Papas fritas', 'Ensalada', 'Cremas de la casa'],
      price: 29.9,
    },
    {
      id: 'cuarto-pollo',
      badge: 'PERSONAL',
      name: '1/4 POLLO',
      image: comboFamiliarImg,
      imageAlt: 'Un cuarto de pollo a la brasa con papas fritas',
      includes: ['1/4 Pollo a la brasa', 'Papas fritas', 'Ensalada', 'Cremas de la casa'],
      price: 17.9,
    },
  ],
  parrillas: [
    {
      id: 'anticuchos',
      badge: 'CLÁSICO',
      name: 'ANTICUCHOS',
      image: parrillaMixtaImg,
      imageAlt: 'Parrilla con anticuchos, chorizo y papas doradas',
      includes: ['3 Palitos de anticucho', 'Papas doradas', 'Choclo con queso', 'Ají de la casa'],
      price: 29.9,
    },
    {
      id: 'parrilla-personal',
      badge: 'PERSONAL',
      name: 'PARRILLA PERSONAL',
      image: parrillaMixtaImg,
      imageAlt: 'Parrilla personal con carnes y papas doradas',
      includes: ['1/4 Pollo a la parrilla', 'Bife + Chorizo', 'Papas doradas', 'Ensalada'],
      price: 44.9,
    },
    {
      id: 'parrilla-familiar',
      badge: 'PARA 4',
      name: 'PARRILLA FAMILIAR',
      image: parrillaMixtaImg,
      imageAlt: 'Parrilla familiar con pollo, bife, anticuchos y chorizo',
      includes: ['Pollo, bife y anticuchos', 'Chorizo y mollejitas', 'Papas doradas grandes', 'Ensalada grande'],
      price: 139.9,
    },
  ],
}