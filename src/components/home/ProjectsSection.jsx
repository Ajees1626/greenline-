import AnimateOnView from './AnimateOnView'

const WHATSAPP_LINK = 'https://wa.me/918939555025'

const PROJECTS = [
  { name: 'Lakshmi Nagar', type: 'Individual Villa', location: 'Pozhichalur' },
  { name: 'Venkateshwara Nagar', type: '2BHK & 3BHK', location: 'Pozhichalur' },
  { name: 'Lakshmi Nagar', type: '1BHK & 2BHK', location: 'Pozhichalur' },
  { name: 'Karaima Nagar', type: '2BHK & 3BHK', location: 'Karaima Nagar' },
  { name: 'Annai Therasa Nagar', type: '2BHK & 3BHK', location: 'Kundrathur' },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark text-center mb-3 sm:mb-4">
            Our Projects
          </h2>
          <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-1">
            Quality residential projects across Chennai with modern design and timely delivery.
          </p>
        </AnimateOnView>
        <AnimateOnView animation="fade-up" delay={80}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={`${project.name}-${project.location}`}
              className="group rounded-xl overflow-hidden border border-brand/10 bg-brand-light/20 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="aspect-[4/3] bg-brand/10 relative overflow-hidden">
                <img
                  src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg"
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Reflection / shine overlay – sweeps on hover */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden
                >
                  <div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                    style={{
                      background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.15) 55%, transparent 100%)',
                      backgroundSize: '60% 100%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-text-dark">
                  {project.name}
                </h3>
                <p className="mt-1 font-body text-sm text-text-dark/70 flex items-center gap-2">
                  <span className="inline-block w-4 h-4 text-brand">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                  </span>
                  {project.type}
                </p>
                <p className="mt-1 font-body text-sm text-text-dark/70 flex items-center gap-2">
                  <span className="inline-block w-4 h-4 text-brand">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  </span>
                  {project.location}
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
                >
                  Talk To Us
                </a>
              </div>
            </div>
          ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
