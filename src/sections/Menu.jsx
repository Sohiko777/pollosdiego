import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import ComboCard from '../components/ComboCard'
import MenuTabs from '../components/MenuTabs'
import { menuContent, menuItems, menuTabs } from '../data/menu'

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id)
  const items = menuItems[activeTab] ?? []

  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-cream py-14 text-ink sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-wide text-brand">{menuContent.eyebrow}</p>
            <h2
              id="menu-title"
              className="mt-2 font-display text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl"
            >
              {menuContent.titleDark}
              <span className="block text-brand">{menuContent.titleAccent}</span>
            </h2>
          </div>
          <MenuTabs tabs={menuTabs} activeId={activeTab} onChange={setActiveTab} />
        </div>

        {/* id="combos": destino del enlace COMBOS del menú */}
        <div
          id="combos"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeTab}`}
          aria-live="polite"
          className="mt-10 scroll-mt-24"
        >
          {items.length ? (
            <div id={`menu-panel-${activeTab}`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <ComboCard key={item.id} item={item} orderLabel={menuContent.orderLabel} />
              ))}
            </div>
          ) : (
            <p id={`menu-panel-${activeTab}`} className="rounded-3xl bg-white p-10 text-center text-neutral-600 shadow-sm">
              {menuContent.emptyMessage}
            </p>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as="a" href={menuContent.fullMenuUrl} variant="outline" className="px-10 py-3.5 text-sm normal-case">
            {menuContent.fullMenuLabel}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
