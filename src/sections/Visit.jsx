import { Flame, MapPin } from 'lucide-react'
import CircularBadge from '../components/CircularBadge'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { site } from '../data/site'
import { visit } from '../data/visit'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Visit() {
  return (
    <section id="contacto" aria-labelledby="visit-title" className="bg-[#d90b0b] py-14 pb-32 sm:py-20 sm:pb-32">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 sm:px-8 lg:grid-cols-[32.5rem_1fr] lg:gap-x-32 lg:px-16">
        {/* Ubicación */}
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

          <address className="mt-6 flex items-start gap-4 not-italic">
            <MapPin aria-hidden="true" className="mt-1 size-8 shrink-0 fill-white text-white" strokeWidth={1.5} />
            <div>
              <p className="text-2xl font-extrabold leading-tight text-white">
                {site.address.line1}
                <span className="block">{site.address.line2}</span>
              </p>
              <p className="mt-2 text-sm text-white">{site.address.reference}</p>
            </div>
          </address>

          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={visit.mapLinkLabel}
            className="relative mt-6 block overflow-hidden rounded-2xl shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
        </div>

        {/* Horarios */}
        <div className="relative">
          <p className="text-xs font-extrabold tracking-wide text-white">{visit.hoursEyebrow}</p>

          <div className="mt-4 rounded-3xl bg-ink p-6 sm:p-8 lg:max-w-[29rem]">
            <ul className="space-y-6">
              {visit.hours.map(({ icon: Icon, lines }, index) => (
                <li
                  key={lines.join(' ')}
                  className={`flex items-center gap-4 text-xl text-white sm:text-[1.4rem] ${index === 0 ? 'border-b border-white/10 pb-6' : ''}}`}
                >
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
              className="mt-8 block rounded-2xl bg-[#d93a3a] px-5 py-5 text-center text-white transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="block text-xs font-extrabold tracking-wide">{visit.orderCtaLabel}</span>
              <span className="mt-1 flex items-center justify-center gap-3 text-2xl font-bold sm:text-3xl">
                <WhatsAppIcon className="size-8" />
                {site.phoneDisplay}
              </span>
            </a>
          </div>

          <CircularBadge
            top={visit.seal.top}
            bottom={visit.seal.bottom}
            tone="white"
            label={`Sello: ${visit.seal.top} ${visit.seal.bottom}`}
            className="relative mx-auto mt-8 size-28 sm:size-32 lg:absolute lg:top-6 lg:right-0 lg:mx-0 lg:mt-0 lg:size-40"
          >
            <Flame aria-hidden="true" className="size-10 fill-white text-white" strokeWidth={1.5} />
          </CircularBadge>
        </div>
      </div>
    </section>
  )
}
