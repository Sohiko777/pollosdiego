import { site } from '../data/site'
import logoImg from '../assets/logo.png'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#inicio"
      aria-label={`${site.fullName}, ir al inicio`}
      className={`inline-block ${className}`}
    >
      <img
        src={logoImg}
        alt={`Logo de ${site.fullName}`}
        className="h-12 w-auto sm:h-14 lg:h-16"
      />
    </a>
  )
}