import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    setShowLoading(true)
    const t = setTimeout(() => setShowLoading(false), 400)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <>
      {/* Top loading bar – animates on every route change */}
      <div
        className="fixed top-0 left-0 right-0 z-9999 h-0.5 sm:h-1 bg-gray-200/30 pointer-events-none overflow-hidden"
        style={{
          opacity: showLoading ? 1 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
        aria-hidden
      >
        <div
          className="h-full w-full bg-brand origin-left"
          style={{
            animation: showLoading ? 'loadingBar 0.4s ease-out forwards' : 'none',
          }}
        />
      </div>
      <style>{`
        @keyframes loadingBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </>
  )
}
