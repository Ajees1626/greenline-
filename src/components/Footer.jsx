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
    <footer className="bg-brand-dark text-brand-light/90 font-body">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <span className="font-heading text-xl font-bold text-brand">Greenline Developers</span>
            <p className="mt-3 text-sm text-brand-light/80 leading-relaxed">
              Greenline Developers builds quality homes and apartments with trust, durability, and modern design, ensuring sustainable living and timely delivery always.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61580458954129" target="_blank" rel="noopener noreferrer" className="text-brand-light/80 hover:text-brand transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.instagram.com/greenlinedevelopers/" target="_blank" rel="noopener noreferrer" className="text-brand-light/80 hover:text-brand transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Link&apos;s</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-brand-light/80 hover:text-brand transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Find Us</h4>
            <ul className="space-y-2">
              {FIND_US.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-brand-light/80 hover:text-brand transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-brand-light/60 focus:outline-none focus:ring-2 focus:ring-brand text-sm" />
              <button type="submit" className="w-full py-2.5 rounded-lg bg-brand text-white font-medium hover:bg-brand-light hover:text-brand-dark transition-colors text-sm">Get Quote</button>
            </form>
            <div className="mt-6 space-y-3 text-sm text-brand-light/80">
              <p className="flex items-start gap-2"><span className="text-brand flex-shrink-0 mt-0.5">📍</span> No.03, 1st cross street, Krishna nagar, Pammal, Chennai-600075</p>
              <a href="mailto:sales@greenlinedevelopers.in" className="flex items-center gap-2 hover:text-brand transition-colors"><span className="text-brand">✉</span> sales@greenlinedevelopers.in</a>
              <a href="tel:+918939555025" className="flex items-center gap-2 hover:text-brand transition-colors"><span className="text-brand">📞</span> +91 8939555025</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-brand-light/70">
          Copyright © {year} <strong className="text-white">GREENLINE DEVELOPERS</strong>. All Rights Reserved. Developed By <strong className="text-brand">ZHAR TECH.</strong>
        </div>
      </div>
    </footer>
  )
}
