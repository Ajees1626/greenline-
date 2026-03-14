import AnimateOnView from '../home/AnimateOnView'

const VISION = {
  title: 'Our Vision',
  text: 'To become a trusted leader in real estate development, creating iconic residential spaces that combine architectural elegance, modern living, and long-term value for homeowners.',
  icon: 'eye',
}

const MISSION = {
  title: 'Our Mission',
  text: 'To deliver premium apartments and living spaces through innovative design, precision engineering, high-quality construction, and transparent processes — ensuring every project reflects excellence, comfort, and sophistication.',
  icon: 'target',
}

const CORE_VALUES = [
  { label: 'Quality Excellence', desc: 'We maintain the highest construction standards using premium materials and skilled craftsmanship in every project.' },
  { label: 'Integrity & Transparency', desc: 'We believe in honest communication and complete transparency at every stage, from planning to handover.' },
  { label: 'Customer Commitment', desc: 'Our clients’ satisfaction is our top priority, and we strive to exceed expectations in every project we deliver.' },
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
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24" aria-labelledby="vision-mission-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <AnimateOnView animation="fade-up">
          <h2 id="vision-mission-heading" className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark text-center mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            Vision, Mission & Core Values
          </h2>
          <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-14 text-sm sm:text-base px-2">
          The guiding principles behind every luxury space we create at Greenline Developers
          </p>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <AnimateOnView animation="fade-up" delay={60}>
            <div className="rounded-xl sm:rounded-2xl bg-brand-light/30 border border-brand/10 p-4 sm:p-5 md:p-6 lg:p-8 h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                <Icon name="eye" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-dark leading-tight">{VISION.title}</h3>
              <p className="mt-2 sm:mt-3 font-body text-text-dark/85 leading-relaxed text-sm sm:text-base">{VISION.text}</p>
            </div>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={120}>
            <div className="rounded-xl sm:rounded-2xl bg-brand-light/30 border border-brand/10 p-4 sm:p-5 md:p-6 lg:p-8 h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                <Icon name="target" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-dark leading-tight">{MISSION.title}</h3>
              <p className="mt-2 sm:mt-3 font-body text-text-dark/85 leading-relaxed text-sm sm:text-base">{MISSION.text}</p>
            </div>
          </AnimateOnView>
        </div>

        <AnimateOnView animation="fade-up" delay={80}>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text-dark text-center mb-4 sm:mb-6 md:mb-8">
            Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {CORE_VALUES.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-brand/15 bg-white p-3 sm:p-4 md:p-5 shadow-sm hover:shadow-md hover:border-brand/25 transition-all duration-300"
              >
                <h4 className="font-heading font-semibold text-text-dark text-sm sm:text-base md:text-lg">{item.label}</h4>
                <p className="mt-1.5 sm:mt-2 font-body text-xs sm:text-sm text-text-dark/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
