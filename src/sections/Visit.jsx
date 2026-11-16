import { Flame, MapPin, Navigation } from 'lucide-react'
import Button from '../components/Button'
import CircularBadge from '../components/CircularBadge'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { site } from '../data/site'
import { visit } from '../data/visit'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Visit() {
  return (
    <section id="contacto" aria-labelledby="visit-title" className="bg-[#d90b0b] py-14 pb-32 sm:py-20 sm:pb-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-16">
        {/* Encabezado: título a la izquierda, sello a la derecha */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-extrabold tracking-wide text-white">{visit.eyebrow}</p>
            <h2
              id="visit-title"
              className="mt-3 font-display text-[2.8rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl"
            >
              {visit.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="hidden shrink-0 sm:block">
            <CircularBadge
              top={visit.seal.top}
              bottom={visit.seal.bottom}
              tone="white"
              label={`Sello: ${visit.seal.top} ${visit.seal.bottom}`}
              className="relative size-32 lg:size-36"
            >
              <Flame aria-hidden="true" className="size-10 fill-white text-white" strokeWidth={1.5} />
            </CircularBadge>
          </div>
        </div>

        {/* Dos tarjetas con la misma altura */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Tarjeta 1: mapa + dirección */}
          <div className="flex flex-col overflow-hidden rounded-3xl bg-white text-ink shadow-xl">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={visit.mapLinkLabel}
              className="relative block focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
            >
              <img
                src={visit.mapImage}
                alt={visit.mapImageAlt}
                width="1000"
                height="400"
                loading="lazy"
                className="aspect-[14/5] w-full object-cover"
              />
              <span className="absolute left-4 top-3 text-xs font-medium text-[#1a5fb4]">{site.address.mapNearby}</span>
              <span className="absolute left-[44%] top-[22%] flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-8 fill-brand text-brand" />
                <span className="text-sm font-medium text-brand-dark">{site.address.mapLabel}</span>
              </span>
              <span className="absolute bottom-4 left-[30%] -rotate-[32deg] text-xs font-medium text-neutral-500">
                {site.address.mapStreet}
              </span>
            </a>

            <div className="flex flex-1 flex-col justify-center gap-5 p-6 sm:p-8 xl:flex-row xl:items-center xl:justify-between">
              <address className="flex items-start gap-4 not-italic">
                <MapPin aria-hidden="true" className="mt-1 size-8 shrink-0 fill-brand text-brand" strokeWidth={1.5} />
                <div>
                  <p className="text-2xl font-extrabold leading-tight">
                    {site.address.line1}
                    <span className="block">{site.address.line2}</span>
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">{site.address.reference}</p>
                </div>
              </address>

              <Button
                as="a"
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full shrink-0 px-6 py-3.5 text-sm sm:w-auto sm:self-start xl:self-auto"
              >
                <Navigation aria-hidden="true" className="size-4" />
                {visit.directionsLabel}
              </Button>
            </div>
          </div>

          {/* Tarjeta 2: horarios + pedido */}
          <div className="flex flex-col rounded-3xl bg-ink p-6 text-white shadow-xl sm:p-8">
            <p className="text-xs font-extrabold tracking-wide text-[#ff3b30]">{visit.hoursEyebrow}</p>

            <ul className="mb-6 mt-2 divide-y divide-white/10">
              {visit.hours.map(({ icon: Icon, lines }) => (
                <li key={lines.join(' ')} className="flex items-center gap-4 py-5 text-xl sm:text-[1.4rem]">
                  <Icon aria-hidden="true" className="size-9 shrink-0" strokeWidth={1.5} />
                  <span>
                    {lines.map((line) => (
                      <span key={line} className="block leading-snug">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink(visit.orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block rounded-2xl bg-brand px-5 py-5 text-center text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="block text-xs font-extrabold tracking-wide">{visit.orderCtaLabel}</span>
              <span className="mt-1 flex items-center justify-center gap-3 text-2xl font-bold sm:text-3xl">
                <WhatsAppIcon className="size-8" />
                {site.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}