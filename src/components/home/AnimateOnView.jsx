import { useRef, useEffect, useState } from 'react'

/**
 * Wrapper that reveals children with a light fade or fade-up when the element enters the viewport.
 * @param {'fade' | 'fade-up'} animation
 * @param {number} delay - optional delay in ms before starting animation
 */
export default function AnimateOnView({ children, animation = 'fade-up', delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const animClass = inView
    ? animation === 'fade'
      ? 'animate-home-fade-in'
      : 'animate-home-fade-in-up'
    : 'animate-home-initial'

  const style = inView && delay ? { animationDelay: `${delay}ms`, animationFillMode: 'backwards' } : inView ? { animationFillMode: 'backwards' } : undefined

  return (
    <Tag ref={ref} className={`${animClass} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
