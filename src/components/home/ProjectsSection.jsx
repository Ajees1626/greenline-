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
    <section id="projects" className="bg-white py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <AnimateOnView animation="fade-up">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark text-center mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
            Our Projects
          </h2>
          <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base px-2 sm:px-1 leading-relaxed">
            Quality residential projects across Chennai with modern design and timely delivery.
          </p>
        </AnimateOnView>
        <AnimateOnView animation="fade-up" delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={`${project.name}-${project.location}`}
              className="group rounded-lg sm:rounded-xl overflow-hidden border border-brand/10 bg-brand-light/20 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="aspect-4/3 bg-brand/10 relative overflow-hidden">
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
              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-text-dark leading-tight">
                  {project.name}
                </h3>
                <p className="mt-1 sm:mt-1.5 font-body text-xs sm:text-sm text-text-dark/70 flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-brand" aria-hidden>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                  </span>
                  <span className="truncate">{project.type}</span>
                </p>
                <p className="mt-1 font-body text-xs sm:text-sm text-text-dark/70 flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-brand" aria-hidden>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="truncate">{project.location}</span>
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 sm:mt-4 inline-flex items-center justify-center w-full min-h-[44px] py-2.5 sm:py-3 rounded-lg bg-brand text-white text-sm sm:text-base font-medium hover:bg-brand-dark transition-colors touch-manipulation"
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
