import { useState, useEffect } from 'react'
import AnimateOnView from './AnimateOnView'

const TESTIMONIALS = [
  { text: 'Greenline Developers managed our apartment construction seamlessly. The project was delivered on time with excellent quality. Their transparency and commitment made the entire journey stress-free.', name: 'Arun Kumar', role: 'IT Professional', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/1.jpg' },
  { text: 'We trusted Greenline Developers to build our family home. They ensured strong foundations, modern design, and timely handover. Truly dependable, and we are proud of the result.', name: 'Priya Ramesh', role: 'Business Owner', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/5.jpg' },
  { text: 'From design to handover, the team was professional and responsive. Our villa was completed with great attention to detail. Highly recommend Greenline for anyone building a home.', name: 'Suresh M.', role: 'Engineer', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/1.jpg' },
  { text: 'We are very happy with our 3BHK apartment. Quality of construction is solid and the team kept us informed at every stage. Value for money and on-time delivery.', name: 'Lakshmi K.', role: 'Teacher', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/5.jpg' },
  { text: 'Greenline built our dream home in Nehru Nagar. The execution was flawless and they used good materials. We have been living here for a year and have no complaints.', name: 'Rajesh V.', role: 'Entrepreneur', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/1.jpg' },
  { text: 'Professional approach and clear communication throughout. Our 2BHK was delivered as promised. The after-sales support has also been good.', name: 'Meena S.', role: 'Banker', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/5.jpg' },
  { text: 'We compared several builders and chose Greenline for their reputation and transparent pricing. The construction quality and timeline were both met. Satisfied customers.', name: 'Karthik P.', role: 'Software Lead', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/1.jpg' },
  { text: 'Our experience with Greenline Developers was smooth from day one. They explained every step and delivered a well-built home. Would recommend to friends and family.', name: 'Anitha R.', role: 'Homemaker', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/5.jpg' },
  { text: 'Timely completion and good quality work. The team was easy to reach and addressed our queries quickly. Our new apartment is exactly what we wanted.', name: 'Vijay C.', role: 'Business Analyst', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/1.jpg' },
  { text: 'Building a home can be stressful, but Greenline made it hassle-free. Strong structure, modern design, and they stuck to the schedule. Thank you, Greenline.', name: 'Divya N.', role: 'Architect', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/5.jpg' },
]

const PAIRS_COUNT = Math.ceil(TESTIMONIALS.length / 2) // 5 pairs
const AUTO_CHANGE_MS = 5000

export default function TestimonialsSection() {
  const [pairIndex, setPairIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPairIndex((i) => (i + 1) % PAIRS_COUNT)
    }, AUTO_CHANGE_MS)
    return () => clearInterval(id)
  }, [])

  const start = pairIndex * 2
  const visible = TESTIMONIALS.slice(start, start + 2)

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider mb-2">
            Testimonial
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">
            Client Feedback & Reviews
          </h2>
        </AnimateOnView>
        <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-5 sm:gap-8 min-h-[180px] sm:min-h-[220px]">
          {visible.map((t) => (
            <div
              key={`${t.name}-${start}`}
              className="p-4 sm:p-6 md:p-8 rounded-xl bg-brand-light/30 border border-brand/10 animate-fade-in"
            >
              <p className="font-body text-text-dark/90 leading-relaxed text-sm sm:text-base">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-brand/30"
                />
                <div>
                  <p className="font-heading font-semibold text-text-dark">{t.name}</p>
                  <p className="font-body text-sm text-text-dark/70">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots indicator */}
        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          {Array.from({ length: PAIRS_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPairIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                i === pairIndex ? 'bg-brand scale-125' : 'bg-brand/30 hover:bg-brand/50'
              }`}
              aria-label={`Go to testimonial set ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
