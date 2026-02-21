import { useParams, Link, useNavigate } from 'react-router-dom'
import servicesData from '../data/services.json'

const services = servicesData?.services ?? []

function ServiceDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = services.find((s) => s.slug === slug)
  const otherServices = services.filter((s) => s.slug !== slug)

  if (!service) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-text-dark">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-brand font-medium hover:underline">
          Back to Services
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: full-width image + overlay + text */}
      <section
        className="relative min-h-[38vh] sm:min-h-[42vh] md:min-h-[45vh] flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="service-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${service.heroImage})` }}
          aria-hidden
        />
        <div className="absolute inset-0 z-1 bg-black/50" aria-hidden />
        <div className="absolute inset-0 z-1 bg-primary/30" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 w-full text-center">
          <p className="font-body inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            Service
          </p>
          <h1 id="service-hero-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            {service.heroTitle}
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-white/95 font-body max-w-2xl mx-auto px-1">
            {service.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main layout: left 75% scrollable, right 25% fixed */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Left: 75% – scrollable content */}
        <div className="w-full lg:w-3/4 lg:pr-6 xl:pr-8 py-10 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-3xl">
            {/* Content image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-8 sm:mb-10">
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-video object-cover"
              />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">
              {service.title}
            </h2>
            <p className="mt-4 sm:mt-6 font-body text-text-dark/80 leading-relaxed text-base sm:text-lg">
              {service.paragraph1}
            </p>
            <p className="mt-6 font-body text-text-dark/80 leading-relaxed text-lg">
              {service.paragraph2}
            </p>
            <ul className="mt-8 space-y-3">
              {service.listItems.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-text-dark/85">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {/* Two buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 min-h-[44px] px-5 sm:px-6 py-3 rounded-lg border-2 border-brand text-brand font-semibold hover:bg-brand hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
              <a
                href={service.contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-colors"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            {/* Other services – small divs, click to go to that service */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-brand/20">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-dark mb-4 sm:mb-6">
                Other Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {otherServices.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="flex gap-4 p-4 rounded-xl border border-brand/15 hover:border-brand/40 hover:bg-brand-light/20 transition-all duration-300"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading font-semibold text-text-dark block">{s.title}</span>
                      <span className="font-body text-sm text-text-dark/70 line-clamp-2">{s.shortDesc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: 25% – fixed sidebar (contact + summary + Q&A) */}
        <aside className="w-full lg:w-1/4 shrink-0 border-t lg:border-t-0 border-brand/10 pt-8 lg:pt-0">
          <div className="lg:sticky lg:top-24 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:pl-0 lg:pr-8">
            <div className="rounded-xl sm:rounded-2xl border border-brand/20 bg-brand-light/20 p-4 sm:p-6 space-y-4 sm:space-y-6">
              <h3 className="font-heading text-lg font-bold text-text-dark">
                Contact & Enquiry
              </h3>
              <p className="font-body text-sm text-text-dark/80 leading-relaxed">
                {service.contactSummary}
              </p>
              <a
                href={`tel:${service.contactPhone.replace(/\s/g, '')}`}
                className="block font-body font-medium text-brand hover:underline"
              >
                {service.contactPhone}
              </a>
              <a
                href={service.contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full min-h-[44px] py-3 rounded-lg bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="mt-8 rounded-2xl border border-brand/20 bg-white p-6">
              <h3 className="font-heading text-lg font-bold text-text-dark mb-4">
                Quick Q&A
              </h3>
              <dl className="space-y-4">
                {service.qa.map((item, i) => (
                  <div key={i}>
                    <dt className="font-body font-semibold text-text-dark text-sm">
                      {item.question}
                    </dt>
                    <dd className="mt-1 font-body text-sm text-text-dark/80 leading-relaxed">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ServiceDetailPage
