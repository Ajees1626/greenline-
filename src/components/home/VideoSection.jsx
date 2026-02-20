import AnimateOnView from './AnimateOnView'

const WHATSAPP_LINK = 'https://wa.me/918939555025'

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-construction-site-aerial-view-4694151/4694151-4c1f4a0f7c/1080p/preview.mp4'

const CARDS = [
  {
    title: 'End-to-End Construction',
    desc: 'From blueprint to handover, we manage the entire process with precision.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/young-couple-holding-tablet-with-advertisement-of-real-estate-on-sale.jpg',
    alt: 'Couple reviewing real estate plans',
  },
  {
    title: 'Expert Guidance',
    desc: 'Our engineers and specialists provide clear consultations to make your project stress-free.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-agent.jpg',
    alt: 'Real estate professional consultation',
  },
  {
    title: 'Quality & Comfort',
    desc: 'We blend durable construction with modern designs for lasting family comfort.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-sale-and-happy-family-outside-of-new-house-excited-and-smiling-in-a-garden-property-.jpg',
    alt: 'Family outside new home',
  },
]

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'

export default function VideoSection() {
  return (
    <section className="relative py-10 sm:py-14 md:py-20" aria-labelledby="video-section-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6 items-stretch min-h-0 lg:min-h-[520px]">
          {/* Left – Video in a framed block */}
          <div className="relative order-2 lg:order-1 rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-800 min-h-[240px] sm:min-h-[320px] lg:min-h-full shadow-lg ring-1 ring-black/10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
              <h2
                id="video-section-heading"
                className="font-heading text-xl sm:text-2xl font-bold leading-snug max-w-sm"
              >
                Building Homes Today, Creating Value for Tomorrow
              </h2>
              <p className="mt-3 text-sm text-white/90 max-w-md">
                At <strong className="text-white">Greenline Developers</strong> we combine expertise with sustainable practices.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-lg bg-white text-neutral-900 font-semibold text-sm hover:bg-white/90 active:scale-[0.98] transition-all ${focusRing}`}
                aria-label="Discover more – contact on WhatsApp"
              >
                Discover More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right – 3 horizontal feature cards */}
          <div className="order-1 lg:order-2 flex flex-col gap-4 sm:gap-5 justify-center py-6 lg:py-0">
            {CARDS.map((card) => (
              <article
                key={card.title}
                className="group flex rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg ring-1 ring-neutral-200/80 hover:ring-brand/30 transition-all duration-300"
              >
                <div className="w-28 sm:w-32 shrink-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center p-4 sm:p-5 min-w-0">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-flex items-center gap-1.5 w-fit text-brand font-semibold text-sm hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md py-1 -ml-1 transition-colors`}
                    aria-label={`Get quote – ${card.title}`}
                  >
                    Get Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
