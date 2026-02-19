const POSTS = [
  { title: 'The Role of Expert Engineers in Modern Construction', date: 'October 3, 2025', link: 'https://greenlinedevelopers.in/the-role-of-expert-engineers-in-modern-construction/', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/10/asian-businesswoman-in-formal-suit-in-office-happy-and-cheerful-during-using-smartphone-and-working-.jpg' },
  { title: 'Designing Apartments and Homes for Modern Lifestyles', date: 'October 3, 2025', link: 'https://greenlinedevelopers.in/designing-apartments-and-homes-for-modern-lifestyles/', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/10/contemporary-design-living-houses-modern-luxury-apartments-buildings-.jpg' },
  { title: 'Why On-Time Delivery Matters in Construction Projects', date: 'October 3, 2025', link: 'https://greenlinedevelopers.in/why-on-time-delivery-matters-in-construction-projects/', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/10/real-estate-agent-showing-young-buyers-new-property.jpg' },
  { title: 'Sustainable Building: Creating Homes for a Greener Tomorrow', date: 'October 3, 2025', link: 'https://greenlinedevelopers.in/sustainable-building-creating-homes-for-a-greener-tomorrow/', image: 'https://greenlinedevelopers.in/wp-content/uploads/2025/09/view-of-luxurious-modern-house-with-decorative-ele-2025-03-15-04-36-36-utc-scaled.jpg' },
]

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-dark mb-4">
        Latest News & Article
      </h1>
      <p className="font-body text-text-dark/80 mb-12">
        Insights and updates from Greenline Developers.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {POSTS.map((post) => (
          <article key={post.title} className="rounded-xl overflow-hidden bg-white border border-brand/10 hover:shadow-lg transition-shadow">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-video bg-brand/10">
                <img src={post.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-text-dark line-clamp-2 hover:text-brand transition-colors">{post.title}</h3>
                <p className="mt-2 font-body text-xs text-text-dark/60">{post.date}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
