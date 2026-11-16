import { site } from '../data/site'

/** Devuelve el enlace wa.me del negocio con un mensaje opcional ya codificado. */
export function buildWhatsAppLink(message = '') {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Formatea un precio en soles: 89.9 -> "S/ 89.90" */
export function formatPrice(value) {
  return `S/ ${value.toFixed(2)}`
}
