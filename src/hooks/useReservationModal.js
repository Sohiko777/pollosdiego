import { useSyncExternalStore } from 'react'

// Mini-store para abrir/cerrar el modal de reservas desde cualquier componente
// (NavBar, botón flotante, etc.) sin tener que pasar props ni poner lógica en App.jsx.
let isOpen = false
const listeners = new Set()
const emit = () => listeners.forEach((l) => l())

export const openReservation = () => {
  isOpen = true
  emit()
}
export const closeReservation = () => {
  isOpen = false
  emit()
}

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export const useReservationOpen = () => useSyncExternalStore(subscribe, () => isOpen)
