const WHATSAPP_LINK = 'https://wa.me/918939555025'

const PROJECTS = [
  { name: 'Lakshmi Nagar', type: 'Individual Villa', location: 'Pozhichalur' },
  { name: 'Venkateshwara Nagar', type: '2BHK & 3BHK', location: 'Pozhichalur' },
  { name: 'Nehru Nagar', type: 'Residential', location: 'Chennai' },
  { name: 'Karaima Nagar', type: '2BHK & 3BHK', location: 'Karaima Nagar' },
  { name: 'Annai Therasa Nagar', type: '2BHK & 3BHK', location: 'Kundrathur' },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark text-center mb-4">
        Our Projects
      </h1>
      <p className="font-body text-text-dark/80 text-center max-w-2xl mx-auto mb-12">
        Quality residential projects across Chennai with modern design and timely delivery.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={`${project.name}-${project.location}`}
            className="group rounded-xl overflow-hidden border border-brand/10 bg-brand-light/20 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-[4/3] bg-brand/10 relative overflow-hidden">
              <img
                src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/modern-house-facade-1.jpg"
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-xl font-semibold text-text-dark">{project.name}</h3>
              <p className="mt-1 font-body text-sm text-text-dark/70">{project.type}</p>
              <p className="mt-1 font-body text-sm text-text-dark/70 flex items-center gap-2">
                <span className="text-brand">📍</span> {project.location}
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
    </div>
  )
}
