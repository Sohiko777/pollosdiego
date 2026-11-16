import { Flame, Phone } from 'lucide-react'
import Button from '../components/Button'
import CircularBadge from '../components/CircularBadge'
import FeatureItem from '../components/FeatureItem'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { hero } from '../data/hero'
import { site } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink pt-28 sm:pt-32 lg:pt-36">
      {/* Diagonal roja decorativa */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 h-[55%] w-[85%] bg-brand [clip-path:polygon(100%_0,100%_100%,0_100%)] lg:h-[68%] lg:w-[48%]"
      />

      <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-6 px-4 pb-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:px-12 lg:pb-16">
        {/* Texto */}
        <div className="relative z-10 min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white">
            <Flame aria-hidden="true" className="size-4 fill-brand text-brand" />
            {hero.badge}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.9rem] font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-[4.6rem] xl:text-[5.6rem]"
          >
            {hero.title.map((line) => (
              <span key={line.text} className={`block ${line.accent ? 'text-brand' : 'text-white'}`}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xs text-lg leading-snug text-white/85 sm:max-w-sm sm:text-xl">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              as="a"
              href={buildWhatsAppLink(hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start gap-3 px-6 py-4 text-left text-sm leading-tight"
            >
              <WhatsAppIcon className="size-8 shrink-0" />
              <span>
                {hero.whatsappLabel}
                <span className="block text-base">{site.phoneDisplay}</span>
              </span>
            </Button>
            <Button as="a" href={site.phoneTel} variant="dark" className="px-8 py-4 text-sm">
              <Phone aria-hidden="true" className="size-5 fill-white" />
              {hero.callLabel}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {hero.features.map((f) => (
              <FeatureItem key={f.lines.join(' ')} {...f} />
            ))}
          </ul>
        </div>

        {/* Imagen */}
        <div className="relative z-0 min-w-0 sm:mx-0">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width="1200"
            height="1200"
            fetchPriority="high"
            className="mx-auto w-full max-w-2xl object-contain [mask-image:radial-gradient(closest-side,black_72%,transparent)] lg:max-w-none lg:scale-110"
          />
          <CircularBadge
            top={hero.seal.top}
            bottom={hero.seal.bottom}
            label={`Sello: ${hero.seal.top} ${hero.seal.center} ${hero.seal.bottom}`}
            className="absolute right-4 top-0 size-24 bg-ink/40 sm:size-32 lg:right-2 lg:top-[-1rem] lg:size-36"
          >
            <span className="text-xl font-black text-white sm:text-3xl">{hero.seal.center}</span>
          </CircularBadge>
        </div>
      </div>
    </section>
  )
}
