import GoogleIcon from './GoogleIcon'
import StarRating from './StarRating'

export default function ReviewCard({ review, active = false, className = '' }) {
  return (
    <figure
      className={`rounded-2xl bg-white p-4 text-ink shadow-lg transition-shadow ${
        active ? 'ring-2 ring-brand/60' : ''
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        <img
          src={review.avatar}
          alt={`Foto de ${review.name}`}
          width="48"
          height="48"
          className="size-11 shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <StarRating value={review.stars} className="size-4" label={`${review.stars} de 5 estrellas`} />
          <figcaption className="mt-0.5 text-sm font-bold leading-tight">{review.name}</figcaption>
          <p className="text-xs text-neutral-600">{review.location}</p>
        </div>
        <GoogleIcon className="size-6 shrink-0" />
      </div>
      <blockquote className="mt-3 text-sm leading-snug text-neutral-700">{review.text}</blockquote>
    </figure>
  )
}