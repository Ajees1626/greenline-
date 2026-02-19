import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  {
    text: 'Greenline Developers managed our apartment construction seamlessly. The project was delivered on time with excellent quality. Their transparency and commitment made the entire journey stress-free.',
    name: 'Arun Kumar',
    role: 'IT Professional',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/1.jpg',
  },
  {
    text: 'We trusted Greenline Developers to build our family home. They ensured strong foundations, modern design, and timely handover. Truly dependable, and we are proud of the result.',
    name: 'Priya Ramesh',
    role: 'Business Owner',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/5.jpg',
  },
]

const AUTO_CHANGE_SECONDS = 10

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, AUTO_CHANGE_SECONDS * 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-body text-sm font-semibold text-brand uppercase tracking-wider mb-2">
          Testimonial
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
          Client Feedback & Reviews
        </h2>

        <div className="mt-12 relative min-h-[280px] md:min-h-[260px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={i !== activeIndex}
            >
              <div className="p-6 md:p-8 rounded-xl bg-brand-light/30 border border-brand/10 max-w-3xl">
                <p className="font-body text-text-dark/90 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand/30"
                  />
                  <div>
                    <p className="font-heading font-semibold text-text-dark">{t.name}</p>
                    <p className="font-body text-sm text-text-dark/70">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots – click to change, show active */}
        <div className="mt-8 flex justify-center gap-2" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-brand scale-125' : 'bg-brand/40 hover:bg-brand/60'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
