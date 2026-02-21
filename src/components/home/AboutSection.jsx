import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PROMISES = [
  'Smart Architectural Design – Innovative plans by expert architects.',
  'Engineering Precision – Strong foundations with flawless execution.',
  'Quality Construction – Durable builds using trusted materials.',
  'On-Time Delivery – Projects completed exactly as promised.',
]

// 4 images for 2x2 grid – replace with your own
const ABOUT_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
]

function BuildersIcon({ className = 'w-12 h-12' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}

const WHATSAPP_LINK = 'https://wa.me/918939555025'

export default function AboutSection({ isAboutPage } = {}) {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imagesRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="bg-white py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left: text with letter/line animation */}
          <div
            ref={textRef}
            className={`order-last md:order-0 transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-wider mb-2">
              Who We Are
            </p>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark leading-tight">
              Building With Purpose, Delivering With Care
            </h2>
            <p className="mt-3 sm:mt-4 text-text-dark/80 font-body text-sm sm:text-base leading-relaxed text-left sm:text-justify">
              At <strong className="text-text-dark">Greenline Developers</strong>, we transform ideas into reality by designing, building, and delivering quality homes and apartments. As a trusted construction and contracting company, we focus on every detail—from structural strength and design precision to timely execution and sustainable practices.
            </p>
            <p className="font-heading font-semibold text-text-dark mt-4 sm:mt-6 text-base sm:text-lg">
              Our Promises:
            </p>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
              {PROMISES.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 sm:gap-3 font-body text-text-dark/85 text-sm sm:text-normal "
                  style={{
                    animation: inView ? `fadeInUp 0.5s ease-out ${i * 0.08}s both` : 'none',
                  }}
                >
                  <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            {isAboutPage ? (
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 sm:mt-6 md:mt-8 inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors duration-300 touch-manipulation"
              >
                Contact Us
              </a>
            ) : (
              <Link
                to="/about"
                className="mt-5 sm:mt-6 md:mt-8 inline-flex items-center justify-center min-h-[44px] w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors duration-300 touch-manipulation"
              >
                More About Us
              </Link>
            )}
          </div>

          {/* Right: 4 images 2x2 grid, center round builders icon with animation */}
          <div
            ref={imagesRef}
            className={`relative flex justify-center items-center transition-all duration-700 delay-150 order-first md:order-0 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg mx-auto grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {ABOUT_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-md sm:rounded-lg overflow-hidden shadow-md ring-1 ring-black/5"
                  style={{
                    animation: inView ? `fadeInScale 0.5s ease-out ${0.2 + i * 0.1}s both` : 'none',
                  }}
                >
                  <img
                    src={src}
                    alt={`Greenline project ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Center: round shape with builders icon + animation */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white shadow-xl ring-2 sm:ring-4 ring-brand/30 flex items-center justify-center text-brand animate-pulse-slow"
                  style={{
                    animation: inView ? 'iconFloat 3s ease-in-out infinite' : undefined,
                  }}
                >
                  <BuildersIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-brand" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse 2.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(72, 168, 75, 0.25); }
          50% { box-shadow: 0 0 0 12px rgba(72, 168, 75, 0); }
        }
      `}</style>
    </section>
  )
}
