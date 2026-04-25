import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimateWords from './AnimateWords'

const WHATSAPP_LINK = 'https://wa.me/918939555025'
const HERO_MOBILE_IMAGE =
  'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1777108016/1_mthwrn.webp'

const HERO_SLIDES = [
  {
    backgroundImage: 'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1777107041/WEBsite_banner-01_result_dzihx3.webp',
    rightTransparent: true,
    compactSpacing: true,
    titleLines: ['Luxury Living', 'Perfectly Redefined'],
    subtitle:
      'We build homes blending modern design, quality construction, and lasting value for families seeking comfort and trust.',
  },
  {
    backgroundImage: 'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1777107041/WEBsite_banner-01_result_dzihx3.webp',
    rightTransparent: true,
    titleLines: ['Trusted Spaces.', 'Timeless Value.'],
    subtitle:
      'From concept to completion, we deliver quality, transparency, and long-term value for every client.',
  },
  {
    backgroundImage: 'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1777107041/WEBsite_banner-01_result_dzihx3.webp',
    rightTransparent: true,
    titleLines: ['Book Your Dream Home'],
    subtitle:
      'Starting from 85L, spacious homes with bank loan support, exclusive offers, and premium area options available.',
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
  const compact = Boolean(slide.compactSpacing)

  return (
    <section className="relative flex flex-col md:flex-row items-stretch overflow-hidden bg-neutral-200 min-h-[82vh] sm:min-h-[86vh] lg:min-h-[90vh]">
      {/* Full-bleed background photo with smooth fade */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {HERO_SLIDES.map((item, i) => (
          <picture key={item.backgroundImage}>
            <source media="(max-width: 767px)" srcSet={HERO_MOBILE_IMAGE} />
            <img
              src={item.backgroundImage}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${
                activeIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          </picture>
        ))}
      </div>

      {/* LEFT CONTENT */}
      <div
        className={`relative z-10 flex-1 flex items-center px-6 md:px-12 ${
          compact ? 'py-5 sm:py-6 lg:py-8' : 'py-10 lg:py-12'
        }`}
      >
        <div className="max-w-xl rounded-2xl bg-white/82 px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7">

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

      {/* RIGHT IMAGE – larger, plain image only */}
      <div
        className={`relative z-10 flex-1 md:flex-[1.15] lg:flex-[1.5] flex justify-center md:justify-end items-stretch min-h-0 px-3 sm:px-4 md:py-0 md:pr-4 xl:pr-8 md:min-w-0 ${
          compact ? 'py-4 sm:py-5 md:py-0' : 'py-6 sm:py-8 md:py-0'
        }`}
      >
        <div className="w-full max-w-none lg:max-w-none lg:h-full h-[min(54vh,540px)] sm:h-[min(60vh,620px)] md:h-[min(66vh,700px)] lg:min-h-[min(88vh,860px)] xl:min-h-[min(90vh,900px)]">
          {slide.rightTransparent ? (
            <div className="h-full w-full bg-transparent" aria-hidden />
          ) : (
            <img
              key={`${activeIndex}-${slide.rightImage}`}
              src={slide.rightImage}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          )}
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

        .animate-fadeSlide {
          animation: fadeSlide 0.8s ease forwards;
        }
      `}</style>
    </section>
  )
}