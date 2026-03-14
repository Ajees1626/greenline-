import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimateWords from './AnimateWords'

const WHATSAPP_LINK = 'https://wa.me/918939555025'

// Two hero slides – left text, right side image (PNG/JPEG in public/images).
const HERO_SLIDES = [
  {
    rightImage: '/images/01.png',
    titleLines: ['Luxury', 'LifeStyle Redefined'],
    subtitle: 'We build homes that blend modern design, quality construction, and lasting value for families seeking comfort and trust.',
  },
  {
    rightImage: '/images/01.png',
    titleLines: ['A Life Style Of', 'Unparalleled Comfort & Convenience'],
    subtitle: 'PALLAVARAM — Where your dream home meets premium living and connectivity.',
  },
]

const SLIDE_DURATION_MS = 5000

// Small bird silhouette (V-shape) for sky background
function BirdIcon({ className, style }) {
  return (
    <svg className={className} viewBox="0 0 24 12" fill="currentColor" aria-hidden style={style}>
      <path d="M2 8 L6 4 L10 6 L14 2 L18 4 L22 6" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const slide = HERO_SLIDES[activeIndex]

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* Full-width sky background: gradient + clouds + birds – left and right */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-95"
          style={{
            background: 'linear-gradient(180deg, #7ec8e3 0%, #9dd5e8 25%, #b8e0ee 50%, #d4ebf2 75%, #e8f4f8 90%, #f5fafc 100%)',
          }}
        />
        {/* Cloud shapes – left and right */}
        <div className="absolute top-[8%] left-[5%] w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 rounded-full bg-white/60 blur-[2px]" style={{ boxShadow: '60px 20px 0 -10px rgba(255,255,255,0.5)' }} />
        <div className="absolute top-[18%] right-[15%] w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-10 rounded-full bg-white/50 blur-[1px]" style={{ boxShadow: '40px 15px 0 -8px rgba(255,255,255,0.45)' }} />
        <div className="absolute top-[12%] right-[35%] w-10 h-5 sm:w-14 sm:h-7 rounded-full bg-white/55" />
        <div className="absolute bottom-[35%] left-[12%] w-14 h-7 sm:w-18 sm:h-9 md:w-22 md:h-11 rounded-full bg-white/45 blur-[1px]" style={{ boxShadow: '50px 18px 0 -9px rgba(255,255,255,0.4)' }} />
        <div className="absolute bottom-[25%] right-[25%] w-11 h-6 sm:w-15 sm:h-8 rounded-full bg-white/50" />
        <div className="absolute top-[25%] right-[8%] w-14 h-7 sm:w-18 sm:h-9 rounded-full bg-white/45 blur-[1px]" style={{ boxShadow: '45px 12px 0 -8px rgba(255,255,255,0.4)' }} />
        <div className="absolute bottom-[30%] right-[12%] w-12 h-6 sm:w-16 sm:h-8 rounded-full bg-white/4" />
        {/* Small birds – left and right */}
        <BirdIcon className="absolute w-6 h-3 sm:w-8 sm:h-4 text-gray-500/40 top-[22%] left-[20%]" style={{ transform: 'rotate(-10deg)' }} />
        <BirdIcon className="absolute w-5 h-2.5 sm:w-6 sm:h-3 text-gray-600/35 top-[15%] right-[30%]" style={{ transform: 'rotate(5deg)' }} />
        <BirdIcon className="absolute w-4 h-2 sm:w-5 sm:h-2.5 text-gray-500/30 bottom-[40%] left-[30%]" style={{ transform: 'rotate(-5deg)' }} />
        <BirdIcon className="absolute w-5 h-2.5 sm:w-6 sm:h-3 text-gray-500/35 top-[35%] right-[22%]" style={{ transform: 'rotate(8deg)' }} />
        <BirdIcon className="absolute w-4 h-2 sm:w-5 sm:h-2.5 text-gray-500/25 bottom-[50%] right-[18%]" style={{ transform: 'rotate(-8deg)' }} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-stretch w-full flex-1 gap-0 lg:gap-3">
      {/* Left side – text content (sky shows through). Mobile: first (top). Desktop: left. */}
      <div className="relative flex-1 flex items-center overflow-hidden order-1 lg:order-1">
        <div className="w-full pl-6 sm:pl-8 md:pl-10 lg:pl-12 xl:pl-16 pr-4 sm:pr-6 md:pr-8 lg:pr-6 xl:pr-8 py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24">
        <div className="w-full max-w-6xl mx-auto lg:mx-0">
          <div className={`max-w-xl sm:max-w-2xl text-left transition-opacity duration-500 ${mounted ? 'animate-home-fade-in' : 'opacity-0'}`}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-text-dark">
              {slide.titleLines.map((line, i) => (
                <span key={i} className="block">
                  <AnimateWords key={`${activeIndex}-${i}`} text={line} delayStart={120 + i * 150} staggerMs={45} />
                </span>
              ))}
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-text-dark/90 font-body max-w-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center min-h-[44px] px-5 sm:px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand-light hover:text-brand-dark transition-colors duration-300"
              >
                Explore Homes
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] px-5 sm:px-6 py-3 rounded-lg border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-colors duration-300"
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Right side – image. Mobile: second (below text). Desktop: right. */}
      <div className="relative flex-1 min-h-[40vh] sm:min-h-[50vh] lg:min-h-0 order-2 lg:order-2 lg:pl-0">
        <img
          src={slide.rightImage}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden
        />
      </div>
      </div>
    </section>
  )
}
