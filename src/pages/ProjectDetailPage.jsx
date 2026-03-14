import { useParams, Link, useNavigate } from 'react-router-dom'
import projectsData from '../data/projects.json'

const projects = projectsData?.projects ?? []

const STATUS_STYLE = {
  completed: 'bg-primary text-brand border-brand/30',
  ongoing: 'bg-amber-100 text-amber-700 border-amber-500/30',
  upcoming: 'bg-blue-100 text-blue-700 border-blue-500/30',
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3)

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-text-dark">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block text-brand font-medium hover:underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  const statusStyle = STATUS_STYLE[project.status]
  const statusLabel = project.status === 'completed' ? 'Completed' : project.status === 'ongoing' ? 'Ongoing' : 'Upcoming'

  return (
    <div className="min-h-screen bg-light-bg">
      {/* Hero: image + overlay + text – different style (bottom gradient) */}
      <section
        className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-end justify-center text-white overflow-hidden"
        aria-labelledby="project-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${project.heroImage})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-1 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 z-1 bg-primary/20" aria-hidden />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 pt-16 sm:pt-24 text-center">
          <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${statusStyle} border mb-3 sm:mb-4`}>
            {statusLabel}
          </span>
          <h1 id="project-hero-heading" className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            {project.heroTitle}
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-white/95 font-body max-w-2xl mx-auto px-1">
            {project.heroSubtitle}
          </p>
          <p className="mt-3 sm:mt-4 flex items-center justify-center gap-2 font-body text-white/80 text-sm sm:text-base flex-wrap">
            <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </p>
        </div>
      </section>

      {/* Main content: single column card layout (different from service page) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 -mt-6 sm:-mt-8 md:-mt-10 relative z-10">
        <article className="rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl border border-brand/10">
          {/* Content image */}
          <div className="aspect-video md:aspect-21/9 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
              <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${statusStyle} border`}>
                {statusLabel}
              </span>
              <span className="font-body text-text-dark/70">{project.type}</span>
              <span className="font-body text-text-dark/70 flex items-center gap-1">
                <span className="text-brand">📍</span> {project.location}
              </span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark leading-tight">
              {project.name}
            </h2>

            {/* Project details: heading + two paragraphs + list */}
            <div className="mt-5 sm:mt-6 md:mt-8">
              <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-text-dark mb-2 sm:mb-3 md:mb-4">
                Project details
              </h3>
              <p className="font-body text-text-dark/80 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.paragraph1}
              </p>
              <p className="mt-3 sm:mt-4 md:mt-5 font-body text-text-dark/80 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.paragraph2}
              </p>
              {(project.details?.length > 0 || project.highlights?.length > 0) && (
                <ul className="mt-4 sm:mt-5 md:mt-6 space-y-1.5 sm:space-y-2 font-body text-text-dark/85 text-xs sm:text-sm md:text-base list-disc list-inside pl-2 marker:text-brand">
                  {(project.details && project.details.length > 0 ? project.details : project.highlights).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Highlights as pills (existing method) */}
            <div className="mt-6 sm:mt-8">
              <h3 className="font-heading text-base sm:text-lg font-semibold text-text-dark mb-2 sm:mb-3">Highlights</h3>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.highlights?.map((item) => (
                  <li key={item}>
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-light/50 text-text-dark font-body text-xs sm:text-sm border border-brand/20">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Two buttons */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-text-dark/20 text-text-dark text-sm sm:text-base font-semibold hover:bg-text-dark/5 transition-colors touch-manipulation"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
              <a
                href={project.contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl bg-brand text-white text-sm sm:text-base font-semibold hover:bg-brand-dark transition-colors touch-manipulation"
              >
                Talk to Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>

        {/* Other projects – compact cards, click to go */}
        {otherProjects.length > 0 && (
          <div className="mt-10 sm:mt-12 md:mt-16 pb-10 sm:pb-12 md:pb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-dark mb-4 sm:mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {otherProjects.map((p) => {
                const s = STATUS_STYLE[p.status]
                const lbl = p.status === 'completed' ? 'Completed' : p.status === 'ongoing' ? 'Ongoing' : 'Upcoming'
                return (
                  <Link
                    key={p.id}
                    to={`/projects/${p.slug}`}
                    className="group block rounded-xl overflow-hidden bg-white border border-brand/10 shadow-md hover:shadow-lg hover:border-brand/25 transition-all"
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold ${s} border`}>
                        {lbl}
                      </span>
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-text-dark group-hover:text-brand transition-colors leading-tight">
                        {p.name}
                      </h4>
                      <p className="mt-1 font-body text-xs sm:text-sm text-text-dark/70">{p.location}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
