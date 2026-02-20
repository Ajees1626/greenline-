import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnView from '../components/home/AnimateOnView'
import projectsData from '../data/projects.json'
import { TestimonialsSection } from '../components/home'

const HERO_BG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920'
const projects = projectsData.projects

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'completed', label: 'Completed' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'upcoming', label: 'Upcoming' },
]

const STATUS_LABELS = {
  completed: { label: 'Completed', className: 'bg-brand/20 text-brand' },
  ongoing: { label: 'Ongoing', className: 'bg-amber-500/20 text-amber-700' },
  upcoming: { label: 'Upcoming', className: 'bg-blue-500/20 text-blue-700' },
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.status === filter)

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="projects-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed max-sm:bg-scroll"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-black/60" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 w-full text-center">
          <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-widest mb-2 sm:mb-3">
            What We Build
          </p>
          <h1
            id="projects-hero-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Our Projects
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto px-1">
            Quality residential projects across Chennai — completed, ongoing, and upcoming.
          </p>
        </div>
      </section>

      {/* Filter + project cards */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnView animation="fade-up">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark text-center mb-3 sm:mb-4">
              Quality Residential Projects
            </h2>
            <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base px-1">
              Explore our completed deliveries, ongoing construction, and upcoming projects.
            </p>
          </AnimateOnView>

          {/* Optional filter: Completed / Ongoing / Upcoming */}
          <AnimateOnView animation="fade-up" delay={40}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2 mb-8 sm:mb-12">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-colors min-h-[44px] sm:min-h-0 ${
                    filter === f.key
                      ? 'bg-brand text-white'
                      : 'bg-brand-light/50 text-text-dark hover:bg-brand-light'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </AnimateOnView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((project, i) => {
              const statusMeta = STATUS_LABELS[project.status]
              return (
                <AnimateOnView key={project.id} animation="fade-up" delay={i * 50}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block rounded-xl overflow-hidden border border-brand/10 bg-white shadow-md hover:shadow-lg hover:border-brand/25 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span
                        className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${statusMeta.className}`}
                      >
                        {statusMeta.label}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-xl font-semibold text-text-dark group-hover:text-brand transition-colors">
                        {project.name}
                      </h3>
                      <p className="mt-1 font-body text-sm text-text-dark/70">{project.type}</p>
                      <p className="mt-1 font-body text-sm text-text-dark/70 flex items-center gap-2">
                        <span className="text-brand">📍</span> {project.location}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-brand font-medium text-sm group-hover:gap-2 transition-all">
                        View details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </AnimateOnView>
              )
            })}
          </div>
          {filtered.length === 0 && (
            <p className="text-center font-body text-text-dark/70 py-8">No projects in this category.</p>
          )}
        </div>
      </section>

      {/* Component 1: Why Our Projects – image left, content right, unique card layout */}
      <section className="bg-light-bg py-16 md:py-24" aria-labelledby="projects-why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnView animation="fade-up">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img
                    src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg"
                    alt="Quality construction and design"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400"
                    alt="Residential project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimateOnView>
            <AnimateOnView animation="fade-up" delay={80}>
              <div>
                <h2 id="projects-why-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
                  Why Our Projects Stand Out
                </h2>
                <p className="mt-4 font-body text-text-dark/80 leading-relaxed">
                  Every Greenline project is built with the same focus: strong foundations, clear timelines, and finishes that last. We keep you informed at every stage so you can plan with confidence.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { title: 'On-time handover', desc: 'Clear schedules and regular updates so you know exactly when to move in.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200' },
                    { title: 'Quality materials', desc: 'We use trusted brands and strict quality checks for durability and safety.', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-brand/10 shadow-sm hover:shadow-md transition-shadow">
                      <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img src={item.img} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-text-dark">{item.title}</h3>
                        <p className="mt-1 font-body text-sm text-text-dark/75">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Component 2: Locations & Reach – full-width image strip + overlay content, different layout */}
      <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="projects-locations-heading">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-text-dark/75" aria-hidden />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <AnimateOnView animation="fade-up">
            <h2 id="projects-locations-heading" className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Locations & Reach
            </h2>
            <p className="font-body text-white/90 text-center max-w-2xl mx-auto mb-12">
              Our projects are spread across Chennai and nearby areas — Pozhichalur, Kundrathur, Karaima Nagar, and more. Good connectivity and trusted neighbourhoods.
            </p>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={60}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { location: 'Pozhichalur', count: 'Multiple projects', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg' },
                { location: 'Kundrathur', count: 'Upcoming & planned', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600' },
                { location: 'Karaima Nagar', count: 'Ongoing construction', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600' },
              ].map((item, i) => (
                <div
                  key={item.location}
                  className="group rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.location}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-white">
                    <h3 className="font-heading font-semibold text-lg">{item.location}</h3>
                    <p className="mt-1 font-body text-sm text-white/85">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnView>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-colors"
            >
              Enquire about a location
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  )
}
