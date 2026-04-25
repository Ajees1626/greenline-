import { useRef, useEffect, useState } from 'react'
import AnimateOnView from '../home/AnimateOnView'

const MILESTONES = [
  {
    year: '2019',
    title: 'The Beginning',
    desc: 'Greenline Developers was founded with a vision to create high-quality residential spaces withmodern architectural design and strong construction standards.',
    image: 'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1775801796/The_Beginning_result_b2hg1r.webp',
    alt: 'Construction foundation and early projects',
  },
  {
    year: '2021',
    title: 'Growth & Expansion',
    desc: 'The company expanded its portfolio by developing premium residential apartments and strengthening its team of architects, engineers, and construction professionals.',
    image: 'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1775801799/Growth_Expansion_result_sv8czl.webp',
    alt: 'Residential and commercial expansion',
  },
  {
    year: '2023',
    title: 'Building Trust',
    desc: 'Greenline Developers earned recognition for delivering well-planned projects with quality construction, transparent processes, and timely completion.',
    image: 'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1775801798/Building_Trust_result_pikikz.webp',
    alt: 'Award-winning project delivery',
  },
  {
    year: 'Today',
    title: 'A Trusted Name in Luxury Living',
    desc: 'Today, Greenline Developers continues to develop ultra-luxury apartments, creating elegantliving spaces designed for comfort, sophistication, and long-term value.',
    image:  'https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1775801797/A_Trusted_Name_in_Luxury_Living_result_ac2drd.webp',
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand/20 -translate-x-1/2" />

          {/* Animated Line Fill */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-brand -translate-x-1/2 transition-all duration-20"
            style={{ height: `${lineProgress * 100}%` }}
          />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {MILESTONES.map((milestone, i) => (
              <AnimateOnView key={milestone.year} animation="fade-up">
                <div
                  className={`relative flex flex-col md:flex-row items-center ${
                    i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* TEXT SIDE */}
                  <div
                    className={`flex-1 w-full ${
                      i % 2 === 0
                        ? 'md:pr-8 lg:pr-12 md:text-right md:items-end'
                        : 'md:pl-8 lg:pl-12 md:text-left md:items-start'
                    } flex flex-col justify-center text-center md:text-left ${
                      i % 2 !== 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <span className="font-heading text-xl sm:text-2xl font-bold text-brand">
                      {milestone.year}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mt-1 text-text-dark">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 font-body text-text-dark/80 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-brand rounded-full border-4 border-light-bg z-10" />

                  {/* IMAGE SIDE */}
                  <div
                    className={`flex-1 w-full mt-6 sm:mt-8 md:mt-0 ${
                      i % 2 === 0 ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12'
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