const WHATSAPP_LINK = 'https://wa.me/918939555025'

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-construction-site-aerial-view-4694151/4694151-4c1f4a0f7c/1080p/preview.mp4'

const CARDS = [
  {
    title: 'End-to-End Construction',
    desc: 'From blueprint to handover, we manage the entire process with precision.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/young-couple-holding-tablet-with-advertisement-of-real-estate-on-sale.jpg',
  },
  {
    title: 'Expert Guidance',
    desc: 'Our engineers and specialists provide clear consultations to make your project stress-free.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-agent.jpg',
  },
  {
    title: 'Quality & Comfort',
    desc: 'We blend durable construction with modern designs for lasting family comfort.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-sale-and-happy-family-outside-of-new-house-excited-and-smiling-in-a-garden-property-.jpg',
  },
]

export default function VideoSection() {
  return (
    <section className="relative">
      {/* Video block with overlay */}
      <div className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
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
        </div>
        <div className="absolute inset-0 z-[1] bg-black/60" aria-hidden />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            Building Homes Today, Creating Value for Tomorrow
          </h2>
          <p className="mt-6 font-body text-white/90">
            At <strong className="text-white">Greenline Developers</strong> we combine construction expertise with sustainable practices to deliver homes that last.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center px-8 py-3.5 rounded-full bg-brand text-white font-medium hover:bg-brand-light hover:text-brand-dark transition-colors border-2 border-transparent hover:border-white/30"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* CTA cards with overlay – same section, below video */}
      <div className="bg-light-bg py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden min-h-[280px] rounded-2xl"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"
                  aria-hidden
                />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="font-heading text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 font-body text-sm text-white/90">{card.desc}</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand text-white font-medium hover:bg-brand-light hover:text-brand-dark transition-all duration-300 border-2 border-white/20 hover:border-white/40"
                  >
                    Get Quote
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20" aria-hidden>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
