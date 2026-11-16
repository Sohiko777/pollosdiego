import { useState } from 'react'
import { CalendarDays, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks, reserveLabel } from '../data/navigation'
import useActiveSection from '../hooks/useActiveSection'
import { openReservation } from '../hooks/useReservationModal'

const ids = navLinks.map((l) => l.id)

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  const handleReserve = () => {
    setOpen(false)
    openReservation()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-4 py-3 sm:px-8 lg:px-12">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`border-b-2 pb-1 text-sm font-bold tracking-wide transition-colors hover:text-[#ff3b30] ${
                      isActive ? 'border-brand text-[#ff3b30]' : 'border-transparent text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <Button type="button" onClick={handleReserve} className="px-6 py-3.5 text-sm max-lg:hidden">
          <CalendarDays aria-hidden="true" className="size-5" />
          {reserveLabel}
        </Button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid size-11 place-items-center rounded-xl border border-white/20 text-white lg:hidden"
        >
          {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Principal móvil"
        hidden={!open}
        className="border-t border-white/10 bg-ink px-4 pb-5 pt-2 lg:hidden"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`block border-b border-white/10 py-3.5 text-base font-bold tracking-wide ${
                  active === link.id ? 'text-[#ff3b30]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button type="button" onClick={handleReserve} className="mt-4 w-full px-6 py-3.5 text-sm">
          <CalendarDays aria-hidden="true" className="size-5" />
          {reserveLabel}
        </Button>
      </nav>
    </header>
  )
}
