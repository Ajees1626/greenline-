const PROMISES = [
  'Smart Architectural Design – Innovative plans by expert architects.',
  'Engineering Precision – Strong foundations with flawless execution.',
  'Quality Construction – Durable builds using trusted materials.',
  'On-Time Delivery – Projects completed exactly as promised.',
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <p className="font-body text-sm font-semibold text-brand uppercase tracking-wider mb-2">
        Who We Are
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark">
        Building With Purpose, Delivering With Care
      </h1>
      <p className="mt-6 text-lg text-text-dark/80 font-body leading-relaxed max-w-3xl">
        At <strong className="text-text-dark">Greenline Developers</strong>, we transform ideas into reality by designing, building, and delivering quality homes and apartments. As a trusted construction and contracting company, we focus on every detail—from structural strength and design precision to timely execution and sustainable practices.
      </p>
      <p className="font-heading font-semibold text-text-dark mt-8 text-xl">
        Our Promises
      </p>
      <ul className="mt-4 space-y-3 max-w-2xl">
        {PROMISES.map((item) => (
          <li key={item} className="flex items-start gap-3 font-body text-text-dark/85">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
              <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-light/30">
          <img
            src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg"
            alt="Modern house facade"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-text-dark">
            Why Choose Greenline Developers
          </h2>
          <p className="mt-4 font-body text-text-dark/80">
            We combine engineering expertise, skilled workforce, and quality materials to deliver projects that are durable, modern, and future-ready. Our focus is on timely execution and transparent processes.
          </p>
          <a
            href="https://wa.me/918939555025"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
