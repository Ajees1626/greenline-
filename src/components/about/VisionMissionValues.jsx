import AnimateOnView from '../home/AnimateOnView'

const VISION = {
  title: 'Our Vision',
  text: 'To be the most trusted name in construction and real estate development, creating sustainable communities and homes that stand the test of time.',
  icon: 'eye',
}

const MISSION = {
  title: 'Our Mission',
  text: 'To deliver quality homes and apartments through expert engineering, transparent processes, and on-time execution — making every client\'s dream home a reality.',
  icon: 'target',
}

const CORE_VALUES = [
  { label: 'Integrity', desc: 'Transparent dealings and honest communication in every project.' },
  { label: 'Quality', desc: 'Durable construction and materials that meet the highest standards.' },
  { label: 'Timely Delivery', desc: 'Committed to completing projects as promised, every time.' },
  { label: 'Sustainability', desc: 'Eco-friendly practices for a greener, healthier future.' },
]

function Icon({ name, className }) {
  const c = className ?? 'w-6 h-6'
  if (name === 'eye') {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

export default function VisionMissionValues() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24" aria-labelledby="vision-mission-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <h2 id="vision-mission-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark text-center mb-3 sm:mb-4">
            Vision, Mission & Core Values
          </h2>
          <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-10 sm:mb-14 text-sm sm:text-base px-1">
            The principles that guide everything we build at Greenline Developers.
          </p>
        </AnimateOnView>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <AnimateOnView animation="fade-up" delay={60}>
            <div className="rounded-2xl bg-brand-light/30 border border-brand/10 p-5 sm:p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-5">
                <Icon name="eye" className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-dark">{VISION.title}</h3>
              <p className="mt-3 font-body text-text-dark/85 leading-relaxed">{VISION.text}</p>
            </div>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={120}>
            <div className="rounded-2xl bg-brand-light/30 border border-brand/10 p-5 sm:p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-5">
                <Icon name="target" className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-dark">{MISSION.title}</h3>
              <p className="mt-3 font-body text-text-dark/85 leading-relaxed">{MISSION.text}</p>
            </div>
          </AnimateOnView>
        </div>

        <AnimateOnView animation="fade-up" delay={80}>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-dark text-center mb-6 sm:mb-8">
            Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CORE_VALUES.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-brand/15 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-brand/25 transition-all duration-300"
              >
                <h4 className="font-heading font-semibold text-text-dark">{item.label}</h4>
                <p className="mt-2 font-body text-sm text-text-dark/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
