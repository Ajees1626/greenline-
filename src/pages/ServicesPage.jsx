import { Link } from 'react-router-dom'
import AnimateOnView from '../components/home/AnimateOnView'
import servicesData from '../data/services.json'

const HERO_BG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920'
const services = servicesData.services

export default function ServicesPage() {
  return (
    <>
      {/* Hero section */}
      <section
        className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="services-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden /> 
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 w-full text-center">
          <p className="font-body inline-block bg-primary text-text-dark px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            What We Offer
          </p>
          <h1
            id="services-hero-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md"
          >
            Our Services
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/95 font-body max-w-2xl mx-auto px-1">
            Construction solutions that transform your living experience — quality, transparency, and on-time delivery.
          </p>
        </div>
      </section>

      {/* Service cards – click goes to detail page */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnView animation="fade-up">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark text-center mb-3 sm:mb-4">
              Construction Solutions That Transform Your Living Experience
            </h2>
            <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-1">
              At <strong className="text-text-dark">Greenline Developers</strong>, we deliver end-to-end construction and contracting services with a strong focus on quality, durability, and timely execution.
            </p>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <AnimateOnView key={service.id} animation="fade-up" delay={i * 60}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block rounded-xl overflow-hidden border border-brand/10 bg-white shadow-md hover:shadow-lg hover:border-brand/30 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-text-dark group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-text-dark/80 line-clamp-3">
                      {service.shortDesc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-brand font-medium text-sm group-hover:gap-2 transition-all">
                      View details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Service – our approach / promise */}
      <section className="bg-light-bg py-16 md:py-24" aria-labelledby="service-approach-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnView animation="fade-up">
            <h2 id="service-approach-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-dark text-center mb-4">
              Service
            </h2>
            <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-12">
              We combine expert execution with transparent communication so every project stays on track and on budget.
            </p>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={60}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl bg-white border border-brand/10 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-dark">Quality Assured</h3>
                <p className="mt-2 font-body text-sm text-text-dark/80">Strict quality checks and trusted materials at every stage of construction.</p>
              </div>
              <div className="rounded-xl bg-white border border-brand/10 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-dark">On-Time Delivery</h3>
                <p className="mt-2 font-body text-sm text-text-dark/80">Clear timelines and regular updates so you know exactly where your project stands.</p>
              </div>
              <div className="rounded-xl bg-white border border-brand/10 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-dark">Dedicated Support</h3>
                <p className="mt-2 font-body text-sm text-text-dark/80">A single point of contact and 24/7 premium support throughout your journey.</p>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Real Estate – properties / partner */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="real-estate-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnView animation="fade-up">
            <h2 id="real-estate-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-dark text-center mb-4">
              Real Estate
            </h2>
            <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-12">
              From land to keys — we help you with construction and real estate needs across Chennai and surrounding areas.
            </p>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={60}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg"
                  alt="Residential real estate"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-text-dark">
                  Your Real Estate & Construction Partner
                </h3>
                <p className="mt-4 font-body text-text-dark/80 leading-relaxed">
                  Greenline Developers offers end-to-end support for residential real estate — villas, apartments, and custom homes. We handle design, construction, and timely handover so you can focus on your move.
                </p>
                <p className="mt-4 font-body text-text-dark/80 leading-relaxed">
                  Our projects are spread across Pozhichalur, Kundrathur, and nearby localities. Whether you have a plot or are looking for a ready or under-construction option, we can guide you with transparent pricing and clear timelines.
                </p>
                <Link
                  to="/projects"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-colors"
                >
                  View Our Projects
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
