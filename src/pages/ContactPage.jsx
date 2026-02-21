import { useState } from 'react'
import AnimateOnView from '../components/home/AnimateOnView'

const WHATSAPP_LINK = 'https://wa.me/918939555025'
const HERO_BG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920'
const IMG_OFFICE = 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/young-couple-holding-tablet-with-advertisement-of-real-estate-on-sale.jpg'
const IMG_SUPPORT = 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-agent.jpg'
const IMG_MAP_PREVIEW = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800'

const ADDRESS = 'No.03, 1st cross street, Krishna nagar, Pammal, Chennai-600075'
const EMAIL = 'sales@greenlinedevelopers.in'
const PHONE = '+91 8939555025'

const FAQ_ITEMS = [
  { q: 'What are your working hours?', a: 'We are available Monday–Saturday, 9 AM to 6 PM. You can also reach us on WhatsApp for quick queries.' },
  { q: 'How do I get a quote for my project?', a: 'Share your requirements via the form, WhatsApp, or phone. We will schedule a consultation and provide a detailed quote.' },
  { q: 'Do you offer site visits?', a: 'Yes. We can arrange a site visit or show you our completed and ongoing projects. Get in touch to fix a time.' },
  { q: 'Where are you located?', a: 'Our office is at Krishna Nagar, Pammal, Chennai-600075. We serve Chennai and surrounding areas including Pozhichalur, Kundrathur, and Karaima Nagar.' },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* Hero – with subtle diagonal accent */}
      <section
        className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 z-[1] pointer-events-none" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 w-full text-center">
          <p className="font-body inline-block bg-primary text-text-dark px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1
            id="contact-hero-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md"
          >
            Contact Us
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/95 font-body max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Reach out via form, WhatsApp, or visit us.
          </p>
        </div>
      </section>

      {/* Form + Contact: two white cards on light green – Send a message | Image + Contact details */}
      <section className="bg-light-bg py-12 sm:py-16 md:py-24" aria-labelledby="contact-form-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            {/* Left card: Send a message form */}
            <AnimateOnView animation="fade-up">
              <div className="rounded-2xl bg-white shadow-lg border border-white overflow-hidden p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 id="contact-form-heading" className="font-heading text-2xl font-bold text-text-dark">
                      Send a message
                    </h2>
                    <p className="font-body text-sm text-text-dark/60 mt-0.5">
                      We&apos;ll get back within 24 hours
                    </p>
                  </div>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="contact-name" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark placeholder:text-text-dark/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark placeholder:text-text-dark/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 "
                        className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark placeholder:text-text-dark/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your project or enquiry..."
                      className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark placeholder:text-text-dark/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </AnimateOnView>

            {/* Right card: image on top, contact details below (single card) */}
            <AnimateOnView animation="fade-up" delay={80}>
              <div className="rounded-2xl bg-white shadow-lg border border-white overflow-hidden flex flex-col h-full">
                <div className="flex-1 min-h-[200px] overflow-hidden">
                  <img
                    src={IMG_OFFICE}
                    alt="Discuss your project with us"
                    className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:min-h-[220px]"
                  />
                </div>
                <div className="p-6 md:p-7 border-t border-brand/10">
                  <h3 className="font-heading text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                    <span className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center text-brand text-base">📍</span>
                    Contact details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-brand/15 flex items-center justify-center text-brand text-sm">📍</span>
                      <div>
                        <p className="font-heading font-medium text-text-dark text-sm">Address</p>
                        <p className="font-body text-sm text-text-dark/70 mt-0.5">{ADDRESS}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-brand/15 flex items-center justify-center text-brand text-sm">✉</span>
                      <div>
                        <p className="font-heading font-medium text-text-dark text-sm">Email</p>
                        <a href={`mailto:${EMAIL}`} className="font-body text-sm text-brand hover:underline mt-0.5 block">{EMAIL}</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-brand/15 flex items-center justify-center text-brand text-sm">📞</span>
                      <div>
                        <p className="font-heading font-medium text-text-dark text-sm">Phone</p>
                        <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="font-body text-sm text-brand hover:underline mt-0.5 block">{PHONE}</a>
                      </div>
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center w-full py-3.5 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Map – with image-style header and framed map */}
      <section className="bg-white py-12 sm:py-16 md:py-24" aria-label="Office location map">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnView animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="md:w-2/5">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-dark mb-2">
                  Find us
                </h2>
                <p className="font-body text-text-dark/80 mb-6 md:mb-0">
                  Krishna Nagar, Pammal, Chennai-600075. Drop in or get directions below.
                </p>
              </div>
              <div className="md:w-3/5 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 aspect-video max-h-[200px] md:max-h-none">
                <img
                  src={IMG_MAP_PREVIEW}
                  alt="Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={60}>
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <div className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] bg-brand/10">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.1689!3d12.9699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e2f2c6f%3A0x2b3b3b3b3b3b3b3b!2sPammal%2C%20Chennai!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* FAQ – with support image and refined accordion */}
      <section className="bg-light-bg py-12 sm:py-16 md:py-24" aria-labelledby="contact-faq-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 items-start">
            <AnimateOnView animation="fade-up" className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src={IMG_SUPPORT}
                  alt="We're here to help"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="bg-white p-5 text-center">
                  <p className="font-heading font-semibold text-text-dark">Questions?</p>
                  <p className="font-body text-sm text-text-dark/70 mt-1">We&apos;re here to help.</p>
                </div>
              </div>
            </AnimateOnView>
            <div className="lg:col-span-3">
              <AnimateOnView animation="fade-up">
                <h2 id="contact-faq-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-2">
                  Frequently asked questions
                </h2>
                <p className="font-body text-text-dark/80 mb-8">
                  Quick answers about getting in touch and our services.
                </p>
              </AnimateOnView>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, i) => (
                  <AnimateOnView key={i} animation="fade-up" delay={i * 50}>
                    <div className="rounded-xl bg-white border border-brand/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-body font-medium text-text-dark hover:bg-brand-light/20 transition-colors"
                      >
                        <span>{item.q}</span>
                        <span className={`shrink-0 w-8 h-8 rounded-full bg-brand/15 flex items-center justify-center text-brand transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="px-5 pb-4 pt-0 font-body text-text-dark/80 text-sm leading-relaxed border-t border-brand/10">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
