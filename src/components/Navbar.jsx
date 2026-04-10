import { useState, useEffect } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/blog', label: 'Blog' },
]

function NavLink({ to, label, onClick, isMobile }) {
  const base = 'inline-block font-body font-medium transition-colors duration-300 relative py-2'
  const desktop = 'text-black hover:text-secondary after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-secondary after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100'
  const mobile = 'text-gray-800 text-lg py-4 min-h-[48px] flex items-center border-b border-gray-200 active:bg-gray-100'

  return (
    <li>
      <RouterNavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `${base} ${isMobile ? mobile : `group ${desktop} ${isActive ? 'text-secondary' : ''}`}`
        }
      >
        {label}
      </RouterNavLink>
    </li>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 font-body w-full bg-white text-black shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 lg:h-18 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tight text-black hover:text-secondary transition-colors duration-300 shrink-0"
          >
            Greenline
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10 tracking-wide">
            <ul className="flex items-center gap-6 xl:gap-10">
              {NAV_LINKS.map((item) => (
                <NavLink key={item.label} to={item.to} label={item.label} />
              ))}
            </ul>
            {/* <Link
              to="/projects"
              className="shrink-0 inline-flex items-center px-7 py-3 rounded-full border-2 border-secondary text-secondary font-medium transition-colors duration-300 hover:bg-secondary hover:text-white"
            >
              Explore Properties
            </Link> */}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg text-black hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? 'Close' : 'Menu'}</span>
            <div className="w-6 h-5 flex flex-col justify-between pointer-events-none">
              <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} aria-hidden={!mobileOpen}>
        <div className="absolute inset-0 bg-black/30" onClick={closeMobile} aria-hidden />
        <aside
          className={`absolute top-0 right-0 h-full w-full max-w-[min(100vw,22rem)] sm:max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 sm:p-6 pt-20 pb-8 overflow-y-auto">
            <ul className="space-y-0">
              {NAV_LINKS.map((item) => (
                <NavLink key={item.label} to={item.to} label={item.label} onClick={closeMobile} isMobile />
              ))}
            </ul>
            {/* <Link
              to="/projects"
              onClick={closeMobile}
              className="mt-8 inline-flex items-center justify-center w-full min-h-[48px] px-7 py-3.5 rounded-full border-2 border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-colors duration-300 active:scale-[0.98]"
            >
              Explore Properties
            </Link> */}
          </div>
        </aside>
      </div>
    </>
  )
}
