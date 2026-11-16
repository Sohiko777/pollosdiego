import { useId } from 'react'

/**
 * Sello circular con texto curvo arriba y abajo y contenido al centro.
 * `tone="red"` = borde/texto rojo (fondo oscuro) · `tone="white"` = blanco (fondo rojo).
 */
export default function CircularBadge({ top, bottom, children, tone = 'red', className = 'relative size-28', label }) {
  const id = useId()
  const color = tone === 'white' ? 'text-white' : 'text-[#ff3b30]'
  return (
    <div
      role="img"
      aria-label={label}
      className={`grid place-items-center rounded-full border-2 border-current ${color} ${className}`}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path id={`${id}-top`} d="M 18 60 A 42 42 0 0 1 102 60" />
          <path id={`${id}-bottom`} d="M 12 60 A 48 48 0 0 0 108 60" />
        </defs>
        <text fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="2.2" textAnchor="middle">
          <textPath href={`#${id}-top`} startOffset="50%">{top}</textPath>
        </text>
        <text fill="currentColor" fontSize="11" fontWeight="800" letterSpacing="2.2" textAnchor="middle">
          <textPath href={`#${id}-bottom`} startOffset="50%">{bottom}</textPath>
        </text>
      </svg>
      <div className="relative">{children}</div>
    </div>
  )
}
