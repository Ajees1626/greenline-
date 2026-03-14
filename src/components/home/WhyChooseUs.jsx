import AnimateOnView from './AnimateOnView'

const ITEMS = [
  {
    title: 'Architectural Excellence',
    desc: 'Sophisticated and modern architectural designs that reflect luxury, functionality, and timeless elegance.',
    icon: 'building',
  },
  {
    title: 'Precision Engineering',
    desc: 'Advanced engineering techniques ensure strong structural integrity and flawless construction.',
    icon: 'time',
  },
  {
    title: 'Premium Quality Construction',
    desc: 'We use high-grade materials and expert craftsmanship to create durable and luxurious living spaces.',
    icon: 'precision',
  },
  {
    title: 'On-Time Project Delivery',
    desc: 'Every project is completed on schedule with strict quality standards and professional project management.',
    icon: 'users',
  },
  {
    title: 'Prime Location Advantage',
    desc: 'Our projects are carefully developed in strategic locations that provide connectivity, convenience, and long-term investment value.',
    icon: 'users',
  },
  {
    title: 'Sustainable & Smart Living',
    desc: 'Thoughtfully designed spaces with natural ventilation, efficient planning, and eco-friendly construction practices.',
    icon: 'users',
  },
  
]

function Icon({ icon, className }) {
  const c = className ?? 'w-6 h-6'
  if (icon === 'building') {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
  if (icon === 'time') {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
  if (icon === 'precision') {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="bg-light-bg py-12 sm:py-16 md:py-24" aria-labelledby="why-choose-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <header className="max-w-2xl">
            <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-widest mb-2 sm:mb-3">
              Why Choose us
            </p>
            <h2 id="why-choose-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            We Create Luxury Living Spaces With Precision & Trust
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-brand/60" aria-hidden />
            <p className="mt-6 font-body text-text-dark/80 text-base leading-relaxed">
            At Greenline Developers, we specialize in building ultra-luxury apartments that combine
elegant architecture, advanced engineering, and premium construction quality. Every project is
crafted with meticulous attention to detail to deliver comfort, sophistication, and long-term value
for modern families
            </p>
          </header>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={100}>
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {ITEMS.map(({ title, desc, icon }) => (
            <article
              key={title}
              className="group relative bg-white rounded-xl border border-brand/10 p-4 sm:p-5 md:p-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-brand/25 hover:-translate-y-0.5"
            >
              {/* Reflection / shine on hover */}
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                aria-hidden
              >
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-xl"
                  style={{
                    background: 'linear-gradient(105deg, transparent 0%, transparent 35%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.25) 55%, transparent 65%, transparent 100%)',
                    width: '60%',
                  }}
                />
              </div>
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/15 text-brand flex items-center justify-center group-hover:bg-brand/25 transition-colors duration-300">
                  <Icon icon={icon} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-text-dark">
                    {title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-text-dark/75 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
