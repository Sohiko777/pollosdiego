import { useRef } from 'react'

/** Pestañas accesibles (role=tablist) con navegación por flechas. */
export default function MenuTabs({ tabs, activeId, onChange, idPrefix = 'menu' }) {
  const refs = useRef({})

  const onKeyDown = (event, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const dir = event.key === 'ArrowRight' ? 1 : -1
    const next = tabs[(index + dir + tabs.length) % tabs.length]
    onChange(next.id)
    refs.current[next.id]?.focus()
  }

  return (
    <div
      role="tablist"
      aria-label="Categorías del menú"
      className="inline-flex w-full rounded-full bg-neutral-200/60 p-1.5 shadow-inner sm:w-auto"
    >
      {tabs.map((tab, index) => {
        const selected = tab.id === activeId
        return (
          <button
            key={tab.id}
            ref={(el) => (refs.current[tab.id] = el)}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className={`flex-1 rounded-full px-4 py-3 text-xs font-extrabold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:flex-none sm:px-8 sm:text-sm ${
              selected ? 'bg-brand text-white shadow-md' : 'text-ink hover:bg-white/70'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
