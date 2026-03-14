import { useRef, useEffect, useState } from 'react'
import AnimateOnView from '../home/AnimateOnView'

const MILESTONES = [
  {
    year: '2019',
    title: 'The Beginning',
    desc: 'Greenline Developers was founded with a vision to create high-quality residential spaces withmodern architectural design and strong construction standards.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600',
    alt: 'Construction foundation and early projects',
  },
  {
    year: '2021',
    title: 'Growth & Expansion',
    desc: 'The company expanded its portfolio by developing premium residential apartments and strengthening its team of architects, engineers, and construction professionals.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    alt: 'Residential and commercial expansion',
  },
  {
    year: '2023',
    title: 'Building Trust',
    desc: 'Greenline Developers earned recognition for delivering well-planned projects with quality construction, transparent processes, and timely completion.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
    alt: 'Award-winning project delivery',
  },
  {
    year: 'Today',
    title: 'A Trusted Name in Luxury Living',
    desc: 'Today, Greenline Developers continues to develop ultra-luxury apartments, creating elegantliving spaces designed for comfort, sophistication, and long-term value.',
    image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg',
    alt: 'Greenline Developers today',
  },
]

export default function OurJourney() {
  const sectionRef = useRef(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const updateProgress = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const sectionHeight = section.offsetHeight

      if (rect.top >= vh) {
        setLineProgress(0)
        return
      }

      const scrolled = vh - rect.top
      const total = sectionHeight + vh
      const progress = Math.max(0, Math.min(1, scrolled / total))
      setLineProgress(progress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-light-bg py-12 sm:py-16 md:py-24"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-text-dark">
            Our Journey
          </h2>
          <p className="font-body text-center max-w-2xl mx-auto mb-10 sm:mb-14 text-text-dark/80 text-sm sm:text-base">
          Milestones that shaped Greenline Developers into a trusted name in luxury apartment development.
          </p>
        </AnimateOnView>

        <div className="relative">

          {/* Center Line Track */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand/20 -translate-x-1/2" />

          {/* Animated Line Fill */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 w-[2px] bg-brand -translate-x-1/2 transition-all duration-20"
            style={{ height: `${lineProgress * 100}%` }}
          />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {MILESTONES.map((milestone, i) => (
              <AnimateOnView key={milestone.year} animation="fade-up">
                <div
                  className={`relative flex flex-col lg:flex-row items-center ${
                    i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* TEXT SIDE */}
                  <div
                    className={`flex-1 w-full ${
                      i % 2 === 0
                        ? 'lg:pr-12 lg:text-right lg:items-end'
                        : 'lg:pl-12 lg:text-left lg:items-start'
                    } flex flex-col justify-center text-center lg:text-left ${
                      i % 2 !== 0 ? 'lg:text-right' : ''
                    }`}
                  >
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mt-1 text-text-dark">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 font-body text-text-dark/80 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-brand rounded-full border-4 border-light-bg z-10" />

                  {/* IMAGE SIDE */}
                  <div
                    className={`flex-1 w-full mt-6 sm:mt-8 lg:mt-0 ${
                      i % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={milestone.image}
                        alt={milestone.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}