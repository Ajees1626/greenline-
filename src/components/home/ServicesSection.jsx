import { useState } from 'react'

const ACCORDION_ITEMS = [
  { title: 'Free Consultations', content: 'Guidance from our experts to plan your project.' },
  { title: 'Creative & Smart Solutions', content: 'Custom designs that combine beauty and functionality.' },
  { title: '24/7 Premium Support', content: 'Dedicated assistance throughout the construction journey.' },
]

const FLIP_CARDS = [
  {
    title: 'Residential Construction',
    front: 'We deliver end-to-end construction with strong foundations and finishes.',
    back: 'End-to-end home and apartment construction ensuring durability and design.',
  },
  {
    title: 'Architectural Design',
    front: 'Smart architectural planning and space optimization tailored to client needs.',
    back: 'Smart architectural planning and space optimization tailored to client needs.',
  },
  {
    title: 'Contracting Services',
    front: 'Reliable project management with precise material sourcing and execution.',
    back: 'Reliable project management with precise material sourcing and execution.',
  },
  {
    title: 'Sustainable Building',
    front: 'Eco-friendly methods creating innovative, healthier, and future-ready living spaces.',
    back: 'Eco-friendly methods creating innovative, healthier, and future-ready living spaces.',
  },
]

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-body text-sm font-semibold text-brand uppercase tracking-wider mb-2">
          WHAT WE OFFER
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">
          Construction Solutions That Transform Your Living Experience
        </h2>
        <p className="font-body text-text-dark/80 max-w-3xl mb-12">
          At <strong className="text-text-dark">Greenline Developers</strong>, we deliver end-to-end construction and contracting services with a strong focus on quality, durability, and timely execution.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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
            {FLIP_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-brand/20 bg-brand-light/20 p-5 hover:border-brand/40 hover:bg-brand-light/40 transition-colors"
              >
                <h3 className="font-heading font-semibold text-text-dark">{card.title}</h3>
                <p className="mt-2 font-body text-sm text-text-dark/80">{card.front}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
