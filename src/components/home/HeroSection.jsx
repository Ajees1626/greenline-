import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimateWords from './AnimateWords'

const WHATSAPP_LINK = 'https://wa.me/918939555025'

const HERO_SLIDES = [
  {
    rightImage: '/images/b1.1.webp',
    titleLines: ['Luxury Lifestyle', 'Redefined'],
    subtitle:
      'We build homes that blend modern design, quality construction, and lasting value for families seeking comfort and trust.',
  },
  {
    rightImage: '/images/b2.webp',
    titleLines: ['Trusted Spaces.', 'Timeless Value.'],
    subtitle:
      'From concept to completion, we deliver quality, transparency, and long-term value for every client.',
  },
  {
    rightImage: '/images/b3.webp',
    titleLines: ['85L Onwards', 'Book Your Dream Home'],
    subtitle:
      'AREA: 1310 SQ.FT to 1436 SQ.FT\nUP TO 90% Bank Loan Assistance\nSpecial Offers Starting from ₹2 Lakhs',
  },
]

const SLIDE_DURATION_MS = 5000

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, SLIDE_DURATION_MS)

    return () => clearInterval(interval)
  }, [])

  const slide = HERO_SLIDES[activeIndex]

  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden bg-linear-to-b from-sky-200 via-sky-100 to-white">
      {/* Sky + cloud background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-linear-to-b from-sky-200/90 via-sky-100/80 to-white/90" />
        <div
          className="absolute top-[8%] left-[6%] h-10 w-24 rounded-full bg-white/70 blur-[1px]"
          style={{ boxShadow: '42px 10px 0 -10px rgba(255,255,255,0.65), 20px -6px 0 -8px rgba(255,255,255,0.6)' }}
        />
        <div
          className="absolute top-[18%] right-[10%] h-12 w-28 rounded-full bg-white/65 blur-[1px]"
          style={{ boxShadow: '44px 10px 0 -10px rgba(255,255,255,0.55), 18px -8px 0 -8px rgba(255,255,255,0.5)' }}
        />
        <div
          className="absolute bottom-[24%] left-[12%] h-9 w-20 rounded-full bg-white/60"
          style={{ boxShadow: '34px 8px 0 -8px rgba(255,255,255,0.52)' }}
        />
        <div
          className="absolute bottom-[16%] right-[22%] h-10 w-24 rounded-full bg-white/55"
          style={{ boxShadow: '36px 8px 0 -8px rgba(255,255,255,0.48)' }}
        />
      </div>

      {/* LEFT CONTENT */}
      <div className="flex-1 flex items-center px-6 md:px-12 py-12 z-10">
        <div className="max-w-xl">

          {/* TITLE */}
          <h1
            key={activeIndex}
            className="text-4xl md:text-6xl font-bold leading-tight text-text-dark animate-fadeSlide"
          >
            {slide.titleLines.map((line, i) => (
              <span key={i} className="block">
                <AnimateWords
                  text={line}
                  delayStart={100 + i * 150}
                  staggerMs={40}
                />
              </span>
            ))}
          </h1>

          {/* SUBTITLE */}
          <p
            key={`sub-${activeIndex}`}
            className="mt-6 text-lg text-text-dark/85 whitespace-pre-line animate-fadeSlide delay-100"
          >
            {slide.subtitle}
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand-light hover:text-brand-dark transition-all duration-300"
            >
              Explore Homes
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-brand text-brand hover:bg-brand hover:text-white transition-all duration-300"
            >
              Send Enquiry
            </a>
          </div>

          {/* DOTS */}
          <div className="mt-6 flex gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === i
                    ? 'w-8 h-2 bg-brand'
                    : 'w-2 h-2 bg-primary/45'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center items-center px-6 py-10">
        <div className="w-full max-w-xl h-[400px] md:h-[520px] overflow-hidden rounded-2xl border border-primary/20 shadow-[0_16px_40px_rgba(15,23,42,0.16)]">

          <img
            key={slide.rightImage}
            src={slide.rightImage}
            alt="slide"
            className="w-full h-full object-cover animate-zoomFade"
          />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomFade {
          0% {
            opacity: 0;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeSlide {
          animation: fadeSlide 0.8s ease forwards;
        }

        .animate-zoomFade {
          animation: zoomFade 1s ease forwards;
        }
      `}</style>
    </section>
  )
}