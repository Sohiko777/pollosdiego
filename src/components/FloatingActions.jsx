import { CalendarDays } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { floating } from '../data/floating'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { openReservation } from '../hooks/useReservationModal'

/** Botones fijos: reservar (izquierda) y WhatsApp (derecha). */
export default function FloatingActions() {
  return (
    <>
      <button
        type="button"
        onClick={openReservation}
        className="fixed bottom-4 left-4 z-30 inline-flex items-center gap-3 rounded-full bg-brand-dark px-5 py-3.5 text-xs font-bold tracking-wide text-white shadow-xl ring-1 ring-white/10 transition-colors hover:bg-brand sm:bottom-6 sm:left-6 sm:px-8 sm:py-5 sm:text-sm"
      >
        <CalendarDays aria-hidden="true" className="size-5 sm:size-6" />
        {floating.reserveLabel}
      </button>

      <div className="fixed bottom-4 right-4 z-30 flex items-end gap-2 sm:bottom-6 sm:right-6">
        <p className="mb-1 hidden max-w-[9.5rem] rounded-2xl bg-white px-4 py-3 text-sm font-medium leading-snug text-ink shadow-lg sm:block">
          {floating.whatsappBubble}
        </p>
        <a
          href={buildWhatsAppLink(floating.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={floating.whatsappAriaLabel}
          className="grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl ring-4 ring-white transition-transform hover:scale-105 sm:size-16"
        >
          <WhatsAppIcon className="size-8 sm:size-9" strokeWidth={2.2} />
        </a>
      </div>
    </>
  )
}
