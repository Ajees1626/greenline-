import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimateWords from './AnimateWords'

const WHATSAPP_LINK = 'https://wa.me/918939555025'

// 4 background images – replace with your own in public/: /hero-1.jpg, /hero-2.jpg, etc.
const HERO_BG_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920',
]

const SLIDE_DURATION_MS = 5000

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_BG_IMAGES.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center text-white overflow-hidden"
    >
      {/* 4 rotating background images – fixed on scroll (parallax) on all screen sizes */}
      {HERO_BG_IMAGES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === activeIndex ? 1 : 0,
          }}
          aria-hidden={i !== activeIndex}
        />
      ))}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" aria-hidden />

      {/* Content – left-aligned text with light fade + word animation */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 w-full flex justify-start">
        <div className={`max-w-4xl text-left ${mounted ? 'animate-home-fade-in' : 'opacity-0'}`}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <AnimateWords text="Building Greener Homes, Creating Brighter Futures" delayStart={120} staggerMs={45} />
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 font-body">
            We build eco-friendly homes that blend modern design, quality construction, and sustainability—creating brighter, healthier, and lasting futures for families seeking comfort and trust.
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
              className="inline-flex items-center min-h-[44px] px-5 sm:px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-brand-dark transition-colors duration-300"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
