import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import Button from './Button'
import { reservation as t } from '../data/reservation'
import { closeReservation, useReservationOpen } from '../hooks/useReservationModal'

const emptyForm = { name: '', phone: '', date: '', time: '', people: '2' }

const todayISO = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = t.errors.name
  if (!/^\+?[\d\s-]{9,15}$/.test(form.phone.trim())) errors.phone = t.errors.phone
  if (!form.date || form.date < todayISO()) errors.date = t.errors.date
  if (!form.time || form.time < t.openTime || form.time > t.closeTime) errors.time = t.errors.time
  const people = Number(form.people)
  if (!people || people < 1 || people > t.maxPeople) errors.people = t.errors.people
  return errors
}

const inputBase =
  'mt-1 w-full rounded-xl border bg-white px-4 py-3 text-base text-ink outline-none focus:ring-2 focus:ring-brand'

export default function ReservationModal() {
  const isOpen = useReservationOpen()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)

  // Reinicia el formulario al cerrar
  useEffect(() => {
    if (!isOpen) {
      setForm(emptyForm)
      setErrors({})
      setSent(false)
    }
  }, [isOpen])

  // Esc para cerrar, bloqueo de scroll, foco inicial y foco atrapado dentro del diálogo
  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    firstFieldRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeReservation()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll('button, input, select, a[href]')
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [isOpen, sent])

  if (!isOpen) return null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return

    // TODO: conectar la reserva a un servicio real. Opciones:
    //  1) WhatsApp: armar el mensaje con `form` y abrir
    //     window.open(buildWhatsAppLink(`Reserva a nombre de ${form.name}, ${form.people} personas, ${form.date} ${form.time}`))
    //  2) Backend / servicio de formularios: fetch('/api/reservas', { method: 'POST', body: JSON.stringify(form) })
    // Por ahora solo mostramos el estado de éxito (UI).
    setSent(true)
  }

  const error = (field) =>
    errors[field] ? (
      <span id={`err-${field}`} role="alert" className="mt-1 block text-sm font-medium text-brand-dark">
        {errors[field]}
      </span>
    ) : null

  const fieldProps = (field) => ({
    'aria-invalid': errors[field] ? 'true' : undefined,
    'aria-describedby': errors[field] ? `err-${field}` : undefined,
    className: `${inputBase} ${errors[field] ? 'border-brand' : 'border-neutral-300'}`,
  })

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/70 p-4"
      onMouseDown={(e) => e.target === e.currentTarget && closeReservation()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
        className="relative w-full max-w-md rounded-3xl bg-white p-6 text-ink shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={closeReservation}
          aria-label={t.closeLabel}
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-neutral-600 hover:bg-neutral-100"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        <h2 id="reservation-title" className="font-display text-3xl font-extrabold uppercase tracking-tight">
          {sent ? t.successTitle : t.title}
        </h2>

        {sent ? (
          <>
            <p className="mt-3 text-neutral-700">{t.successText}</p>
            <Button type="button" onClick={closeReservation} className="mt-6 w-full px-6 py-3.5 text-sm">
              {t.successButton}
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-2">
            <p className="text-sm text-neutral-600">{t.intro}</p>

            <div className="mt-5 space-y-4">
              <label className="block text-sm font-semibold">
                {t.fields.name}
                <input ref={firstFieldRef} type="text" autoComplete="name" value={form.name} onChange={update('name')} {...fieldProps('name')} />
                {error('name')}
              </label>

              <label className="block text-sm font-semibold">
                {t.fields.phone}
                <input type="tel" inputMode="tel" autoComplete="tel" placeholder="+51 9XX XXX XXX" value={form.phone} onChange={update('phone')} {...fieldProps('phone')} />
                {error('phone')}
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm font-semibold">
                  {t.fields.date}
                  <input type="date" min={todayISO()} value={form.date} onChange={update('date')} {...fieldProps('date')} />
                  {error('date')}
                </label>
                <label className="block text-sm font-semibold">
                  {t.fields.time}
                  <input type="time" min={t.openTime} max={t.closeTime} value={form.time} onChange={update('time')} {...fieldProps('time')} />
                  {error('time')}
                </label>
              </div>

              <label className="block text-sm font-semibold">
                {t.fields.people}
                <input type="number" inputMode="numeric" min="1" max={t.maxPeople} value={form.people} onChange={update('people')} {...fieldProps('people')} />
                {error('people')}
              </label>
            </div>

            <Button type="submit" className="mt-6 w-full px-6 py-3.5 text-sm">
              {t.submitLabel}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
