import { useState } from 'react'
import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/contact', label: 'Contact Us' },
]

const FIND_US = [
  { href: 'https://greenlinedevelopers.in/terms-conditions/', label: 'Terms & Conditions' },
  { href: 'https://greenlinedevelopers.in/privacy-policy/', label: 'Privacy Policy' },
]

// Replace with your own: put in public/ and use /footer-bg.jpg
const FOOTER_BG = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      window.open(`https://wa.me/918939555025?text=Get%20Quote%20request%20from%20${encodeURIComponent(email)}`, '_blank')
      setEmail('')
    }
  }

  return (
    <footer className="relative text-gray-600 font-body overflow-hidden">
      {/* Background image – fixed on scroll */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${FOOTER_BG})` }}
        aria-hidden
      />
      {/* White overlay – keeps footer white with subtle image */}
      <div className="absolute inset-0 z-[1] bg-white/92" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="font-heading text-xl font-bold text-text-dark hover:text-secondary transition-colors">
              Greenline Developers
            </Link>
            <div className="mt-3 h-0.5 w-12 bg-secondary/80 rounded-full" aria-hidden />
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-sm">
              Quality homes and apartments built with trust, durability, and modern design—sustainable living and timely delivery.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580458954129"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/greenlinedevelopers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {FIND_US.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-heading text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">
              Get in touch
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 text-sm transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition-colors"
              >
                Get Quote
              </button>
            </form>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded flex items-center justify-center text-secondary" aria-hidden>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span>No.03, 1st cross street, Krishna nagar, Pammal, Chennai-600075</span>
              </li>
              <li>
                <a href="mailto:sales@greenlinedevelopers.in" className="flex items-center gap-3 hover:text-secondary transition-colors">
                  <span className="shrink-0 w-5 h-5 rounded flex items-center justify-center text-secondary" aria-hidden>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  sales@greenlinedevelopers.in
                </a>
              </li>
              <li>
                <a href="tel:+918939555025" className="flex items-center gap-3 hover:text-secondary transition-colors">
                  <span className="shrink-0 w-5 h-5 rounded flex items-center justify-center text-secondary" aria-hidden>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  +91 8939555025
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {year} <span className="text-text-dark font-medium">Greenline Developers</span>. All rights reserved.
          </p>
          <p>
            Developed by <span className="text-text-dark font-medium">PIXDOT</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
