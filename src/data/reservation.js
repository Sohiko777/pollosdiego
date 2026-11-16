// Textos y reglas del formulario de reservas.
export const reservation = {
  title: 'Reserva tu mesa',
  intro: 'Déjanos tus datos y te confirmamos por WhatsApp.',
  fields: {
    name: 'Nombre',
    phone: 'Celular',
    date: 'Fecha',
    time: 'Hora',
    people: 'Personas',
  },
  submitLabel: 'ENVIAR RESERVA',
  closeLabel: 'Cerrar',
  successTitle: '¡Listo!',
  successText: 'Recibimos tu solicitud. Te confirmaremos por WhatsApp a la brevedad.',
  successButton: 'ENTENDIDO',
  // Horario de atención para validar la hora (formato HH:MM, 24 h)
  openTime: '11:00',
  closeTime: '23:00',
  maxPeople: 20,
  errors: {
    name: 'Escribe tu nombre.',
    phone: 'Ingresa un celular válido (9 dígitos).',
    date: 'Elige una fecha de hoy en adelante.',
    time: 'Elige una hora entre 11:00 a.m. y 11:00 p.m.',
    people: 'Indica cuántas personas serán.',
  },
}
