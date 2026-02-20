import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnView from './AnimateOnView'
import servicesData from '../../data/services.json'

const ACCORDION_ITEMS = [
  { title: 'Free Consultations', content: 'Guidance from our experts to plan your project.' },
  { title: 'Creative & Smart Solutions', content: 'Custom designs that combine beauty and functionality.' },
  { title: '24/7 Premium Support', content: 'Dedicated assistance throughout the construction journey.' },
]

const services = servicesData.services

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="services" className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-3 sm:mb-4">
            Construction Solutions That Transform Your Living Experience
          </h2>
          <p className="font-body text-text-dark/80 max-w-3xl mb-8 sm:mb-12 text-sm sm:text-base">
            At <strong className="text-text-dark">Greenline Developers</strong>, we deliver end-to-end construction and contracting services with a strong focus on quality, durability, and timely execution.
          </p>
        </AnimateOnView>

        <AnimateOnView animation="fade-up" delay={80}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
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
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-body font-medium text-text-dark hover:bg-brand-light/30 transition-colors"
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
                      <p className="px-5 pb-4 pt-0 font-body text-text-dark/80 text-sm">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
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
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-text-dark group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 font-body text-sm text-text-dark/80 line-clamp-2">
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
