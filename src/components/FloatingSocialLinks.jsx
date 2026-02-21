import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AUTO_SHOW_DELAY_MS = 10000

// Update these with your actual social / contact URLs
const LEFT_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook', label: 'Facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram', label: 'Instagram' },
  { name: 'Twitter', href: 'https://twitter.com/', icon: 'twitter', label: 'Twitter / X' },
]

const RIGHT_LINKS = [
  { name: 'WhatsApp', href: 'https://wa.me/918939555025', icon: 'whatsapp', label: 'WhatsApp' },
  { name: 'Mail', href: 'mailto:sales@greenlinedevelopers.in', icon: 'mail', label: 'Email' },
  { name: 'Message', href: '/contact', icon: 'message', label: 'Contact us' },
]

function Icon({ name, className = 'w-5 h-5' }) {
  const c = className
  switch (name) {
    case 'facebook':
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    case 'twitter':
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg className={c} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    case 'mail':
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'message':
      return (
        <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    default:
      return null
  }
}

function ToggleButton({ onClick, isOpen }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed z-100 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation
        bottom-5 left-3 w-12 h-12 min-h-[44px] min-w-[44px]
        sm:bottom-6 sm:left-6 sm:w-14 sm:h-14
        md:bottom-8 md:left-8 md:w-14 md:h-14"
      aria-label={isOpen ? 'Close social links' : 'Open social links'}
    >
      {isOpen ? (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )}
    </button>
  )
}

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed z-100 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation
        bottom-5 right-3 w-12 h-12 min-h-[44px] min-w-[44px]
        sm:bottom-6 sm:right-6 sm:w-14 sm:h-14
        md:bottom-8 md:right-8 md:w-14 md:h-14"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

function SidePanel({ links, side, isOpen }) {
  const isLeft = side === 'left'
  const LinkWrapper = ({ href, children, ...rest }) =>
    href.startsWith('/') ? (
      <Link to={href} {...rest}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
    )

  return (
    <div
      className={`fixed z-99 flex flex-col transition-all duration-300 ease-out pointer-events-none -translate-y-1/2
        top-[40%] sm:top-1/2
        ${isLeft ? 'left-2 sm:left-6 md:left-8 items-start' : 'right-2 sm:right-6 md:right-8 items-end'}
        ${isOpen ? 'opacity-100 translate-x-0' : isLeft ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      aria-hidden={!isOpen}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-gray-200/80 py-2 px-1.5 sm:py-3 sm:px-2 flex flex-col gap-0.5 sm:gap-1 min-w-[48px] sm:min-w-[52px]">
        {links.map((item) => (
          <LinkWrapper
            key={item.name}
            href={item.href}
            className="flex items-center justify-center w-10 h-10 min-h-[44px] min-w-[44px] sm:w-11 sm:h-11 rounded-lg sm:rounded-xl text-gray-600 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation"
            title={item.label}
            aria-label={item.label}
          >
            <Icon name={item.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
          </LinkWrapper>
        ))}
      </div>
    </div>
  )
}

export default function FloatingSocialLinks() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), AUTO_SHOW_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <SidePanel links={LEFT_LINKS} side="left" isOpen={isOpen} />
      <SidePanel links={RIGHT_LINKS} side="right" isOpen={isOpen} />
      <ToggleButton onClick={() => setIsOpen((o) => !o)} isOpen={isOpen} />
      <ScrollToTopButton />
    </>
  )
}
