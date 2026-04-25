import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnView from './AnimateOnView'
import servicesData from '../../data/services.json'

const ACCORDION_ITEMS = [
  { title: 'Expert Consultation', content: 'Professional guidance from experienced architects and engineers to plan and execute yourdream home or apartment project.' },
  { title: 'Creative & Intelligent Design', content: 'Thoughtfully designed spaces that combine modern architecture, functionality, and luxuryaesthetics.' },
  { title: 'Premium Client Support', content: 'Dedicated support and transparent communication throughout every stage of the project toensure a smooth experience.' },
]

const services = servicesData.services

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-6">
        <AnimateOnView animation="fade-up">
          <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2.25rem] lg:text-4xl font-bold text-text-dark mb-3 sm:mb-4 md:mb-5 lg:mb-4">
          Luxury Construction Solutions That Elevate Your Living Experience
          </h2>
          <p className="font-body text-text-dark/80 max-w-3xl mb-8 sm:mb-12 md:mb-10 lg:mb-12 text-sm sm:text-base md:text-lg lg:text-base">
          At Greenline Developers, we provide complete construction and development solutions for
ultra-luxury apartments. From planning and design to construction and project completion, our
focus is on delivering exceptional quality, elegant design, and a premium living experience.
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={80}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            <div>
              <div className="space-y-2">
                {ACCORDION_ITEMS.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-brand/20 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left font-body font-medium text-text-dark hover:bg-brand-light/30 transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className={`text-brand transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="px-5 md:px-6 pb-4 md:pb-5 pt-0 font-body text-text-dark/80 text-sm md:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-5 lg:gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group rounded-xl border border-brand/20 bg-brand-light/20 overflow-hidden hover:border-brand/40 hover:bg-brand-light/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-5 lg:p-4">
                    <h3 className="font-heading font-semibold text-text-dark group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm md:text-base lg:text-sm text-text-dark/80 line-clamp-2">
                      {service.shortDesc}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-brand text-sm font-medium">
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
