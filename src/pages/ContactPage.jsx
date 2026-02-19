const WHATSAPP_LINK = 'https://wa.me/918939555025'

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark text-center mb-4">
        Contact Us
      </h1>
      <p className="font-body text-text-dark/80 text-center max-w-xl mx-auto mb-12">
        Have a project in mind? We&apos;d love to hear from you. Reach out via WhatsApp, email, or phone.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 rounded-xl bg-white border border-brand/10 text-center">
          <span className="text-3xl">📍</span>
          <h3 className="font-heading font-semibold text-text-dark mt-3">Address</h3>
          <p className="mt-2 font-body text-sm text-text-dark/80">
            No.03, 1st cross street, Krishna nagar, Pammal, Chennai-600075
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white border border-brand/10 text-center">
          <span className="text-3xl">✉</span>
          <h3 className="font-heading font-semibold text-text-dark mt-3">Email</h3>
          <a href="mailto:sales@greenlinedevelopers.in" className="mt-2 font-body text-sm text-brand hover:underline block">
            sales@greenlinedevelopers.in
          </a>
        </div>
        <div className="p-6 rounded-xl bg-white border border-brand/10 text-center">
          <span className="text-3xl">📞</span>
          <h3 className="font-heading font-semibold text-text-dark mt-3">Phone</h3>
          <a href="tel:+918939555025" className="mt-2 font-body text-sm text-brand hover:underline block">
            +91 8939555025
          </a>
        </div>
      </div>

      <div className="text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition-colors text-lg"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  )
}
