import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import GoogleIcon from '../components/GoogleIcon'
import ReviewCard from '../components/ReviewCard'
import StarRating from '../components/StarRating'
import { reviews, reviewsContent } from '../data/reviews'
import { site } from '../data/site'

export default function Reviews() {
  return (
    <section id="resenas" aria-labelledby="reviews-title" className="relative overflow-hidden bg-ink py-24 sm:py-20">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 sm:px-8 lg:grid-cols-[1.3fr_1.3fr_0.5fr] lg:items-center lg:gap-10 lg:px-16">
        {/* Texto + rating */}
        <div>
          <p className="text-xs font-extrabold tracking-wide text-[#ff3b30]">{reviewsContent.eyebrow}</p>
          <h2
            id="reviews-title"
            className="mt-3 font-display text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl"
          >
            {reviewsContent.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-snug text-white/80">{reviewsContent.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <GoogleIcon className="size-12 sm:size-14" />
            <div>
              <div className="flex items-center gap-3">
                <span className="text-5xl font-extrabold leading-none text-white">{reviewsContent.rating}</span>
                <StarRating value={5} className="size-6" label={`Calificación ${reviewsContent.rating} de 5`} />
              </div>
              <p className="mt-1 text-sm text-white/75">{reviewsContent.totalReviews}</p>
            </div>
          </div>

          <Button
            as="a"
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full px-8 py-4 text-sm sm:w-auto"
          >
            {reviewsContent.ctaLabel}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>

        {/* Carrusel vertical infinito: sube solo, se pausa al pasar el mouse o enfocar */}
        <div
          role="region"
          aria-label="Reseñas de clientes"
          tabIndex={0}
          className="reviews-window rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          <div className="reviews-viewport relative h-[27rem] overflow-hidden lg:h-[34rem] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="reviews-track" style={{ '--reviews-duration': `${reviews.length * 7}s` }}>
              {/* Se dibuja dos veces para que el bucle no tenga saltos; la copia se oculta a lectores de pantalla */}
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1 ? 'true' : undefined} className="space-y-3 pb-3">
                  {reviews.map((review) => (
                    <ReviewCard key={`${copy}-${review.id}`} review={review} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Imagen lateral grande: sale por el borde derecho, como en el diseño */}
        <img
          src={reviewsContent.sideImage}
          alt={reviewsContent.sideImageAlt}
          width="800"
          height="1000"
          loading="lazy"
          className="pointer-events-none absolute top-1/2 -right-[23.5vw] hidden aspect-square w-[42vw] -translate-y-1/2 rounded-full object-cover lg:block"
        />
      </div>
    </section>
  )
}