import { useRef, useEffect, useState } from 'react'

const STATS = [
  { label: 'Ongoing Projects', value: 5, suffix: '+', icon: 'home' },
  { label: 'Client Satisfaction', value: 95, suffix: '%', icon: 'users' },
  { label: 'Expert Engineers', value: 20, suffix: '+', icon: 'engineers' },
]

const DURATION_MS = 2000
const TICK_MS = 40

function StatIcon({ icon, className }) {
  const c = className ?? 'w-6 h-6'
  if (icon === 'home') {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
  if (icon === 'users') {
    return (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
  return (
    <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function easeOutQuart(t) {
  return 1 - (1 - t) ** 4
}

export default function StatsSection() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [displayValues, setDisplayValues] = useState(STATS.map(() => 0))
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setInView(true)
        }
      },
      { threshold: 0.3, rootMargin: '0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return

    const targets = STATS.map((s) => s.value)
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const eased = easeOutQuart(progress)

      setDisplayValues(
        targets.map((target) => Math.round(eased * target))
      )

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplayValues(targets)
      }
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [inView])

  return (
    <section ref={sectionRef} className="bg-primary py-10 sm:py-14 md:py-20" aria-label="Key statistics">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          className={`font-heading text-xl sm:text-2xl md:text-3xl font-bold text-text-dark text-center max-w-xl mx-auto leading-tight px-1 ${
            inView ? 'animate-home-fade-in-up' : 'animate-home-initial'
          }`}
        >
          Delivering Quality Projects with Trust and Timely Commitment
        </h2>

        <div
          className={`mt-10 sm:mt-14 flex flex-col sm:flex-row sm:divide-x sm:divide-gray-200/80 sm:items-stretch ${
            inView ? 'animate-home-fade-in-up' : 'animate-home-initial'
          }`}
          style={inView ? { animationDelay: '0.12s', animationFillMode: 'backwards' } : undefined}
        >
          {STATS.map(({ label, value, suffix, icon }, i) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center text-center py-6 sm:py-8 md:py-10 sm:flex-1 sm:px-4 md:px-6 lg:px-10"
            >
              <div
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/15 text-secondary mb-3 sm:mb-4 shrink-0"
                aria-hidden
              >
                <StatIcon icon={icon} className="w-5 h-5" />
              </div>
              <p
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark tabular-nums tracking-tight"
                aria-label={`${value}${suffix} ${label}`}
              >
                {displayValues[i]}{suffix}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 max-w-44 mx-auto">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 mx-auto w-12 sm:w-16 h-1 rounded-full bg-secondary/40" aria-hidden />
      </div>
    </section>
  )
}
