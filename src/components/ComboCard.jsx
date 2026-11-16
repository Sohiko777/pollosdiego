import { Check } from 'lucide-react'
import Button from './Button'
import WhatsAppIcon from './WhatsAppIcon'
import { buildWhatsAppLink, formatPrice } from '../utils/whatsapp'

export default function ComboCard({ item, orderLabel }) {
  const message = `Hola DIEGO'S, quiero pedir: ${item.name} (${formatPrice(item.price)}).`

  return (
    <article className="flex flex-col rounded-3xl bg-white p-3 text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={item.imageAlt}
          width="900"
          height="560"
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-extrabold tracking-wide text-white">
          {item.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
        <h3 className="text-xl font-extrabold uppercase tracking-tight">{item.name}</h3>
        <ul className="mt-4 space-y-2">
          {item.includes.map((line) => (
            <li key={line} className="flex items-center gap-2.5 text-sm text-neutral-700">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand">
                <Check aria-hidden="true" className="size-2.5 text-white" strokeWidth={4} />
              </span>
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-6 text-3xl font-extrabold text-brand">{formatPrice(item.price)}</p>
        {/* TODO: conectar a tu flujo real de pedidos si luego usas carrito/backend. Por ahora abre WhatsApp. */}
        <Button
          as="a"
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full px-4 py-3 text-xs sm:text-sm"
        >
          <WhatsAppIcon className="size-5" />
          {orderLabel}
        </Button>
      </div>
    </article>
  )
}
