import { Star } from 'lucide-react'

export default function StarRating({ value = 5, className = 'size-4', label }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={label ?? `${value} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`${className} ${i < value ? 'fill-[#fbbc04] text-[#fbbc04]' : 'text-white/30'}`}
        />
      ))}
    </span>
  )
}
