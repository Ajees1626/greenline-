import { useEffect } from 'react'

const LOADER_DURATION_MS = 5000

export default function PageLoader({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(() => onComplete?.(), LOADER_DURATION_MS)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-primary"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="app-loader" />
      <style>{`
        .app-loader {
          width: 65px;
          aspect-ratio: 1;
          position: relative;
        }
        .app-loader::before,
        .app-loader::after {
          content: "";
          position: absolute;
          border-radius: 50px;
          box-shadow: 0 0 0 3px inset #1a4d2e;
          animation: app-loader-l4 2.5s infinite;
        }
        .app-loader::after {
          animation-delay: -1.25s;
        }
        @keyframes app-loader-l4 {
          0%   { inset: 0 35px 35px 0; }
          12.5% { inset: 0 35px 0 0; }
          25%  { inset: 35px 35px 0 0; }
          37.5% { inset: 35px 0 0 0; }
          50%  { inset: 35px 0 0 35px; }
          62.5% { inset: 0 0 0 35px; }
          75%  { inset: 0 0 35px 35px; }
          87.5% { inset: 0 0 35px 0; }
          100% { inset: 0 35px 35px 0; }
        }
      `}</style>
    </div>
  )
}
