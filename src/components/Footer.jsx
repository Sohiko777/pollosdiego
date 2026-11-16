import { Clock, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import WhatsAppIcon from './WhatsAppIcon'
import { footer } from '../data/footer'
import { navLinks } from '../data/navigation'
import { site } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand bg-ink text-white">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:gap-12 lg:px-16">
        {/* Marca */}
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{footer.description}</p>
          <Button
            as="a"
            href={buildWhatsAppLink(footer.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3.5 text-sm"
          >
            <WhatsAppIcon className="size-5" />
            {footer.ctaLabel}
          </Button>
        </div>

        {/* Enlaces */}
        <nav aria-label="Pie de página">
          <h2 className="text-xs font-extrabold tracking-wide text-[#ff3b30]">{footer.linksTitle}</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-semibold tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h2 className="text-xs font-extrabold tracking-wide text-[#ff3b30]">{footer.contactTitle}</h2>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
              <address className="not-italic">
                {site.address.line1}, {site.address.line2}
                <span className="block text-white/60">{site.address.reference}</span>
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone aria-hidden="true" className="size-5 shrink-0 text-brand" />
              <a href={site.phoneTel} className="transition-colors hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h2 className="text-xs font-extrabold tracking-wide text-[#ff3b30]">{footer.hoursTitle}</h2>
          <div className="mt-4 flex items-start gap-3 text-sm text-white/80">
            <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
            <ul className="space-y-1">
              {footer.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* pb-28 en móvil: deja espacio para que los botones flotantes no tapen el texto */}
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[90rem] px-4 py-5 pb-28 text-center text-xs text-white/50 sm:px-8 sm:pb-24 lg:px-16 lg:pb-5">
          © {new Date().getFullYear()} {site.fullName}. {footer.rights}
        </p>
      </div>
    </footer>
  )
}