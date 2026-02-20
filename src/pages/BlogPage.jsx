import { Link } from 'react-router-dom'
import AnimateOnView from '../components/home/AnimateOnView'
import blogData from '../data/blog.json'

const posts = blogData.posts

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-brand/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-brand/5 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-brand/[0.03] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        {/* Breadcrumbs */}
        <AnimateOnView animation="fade-up">
          <nav className="flex justify-center mb-6 sm:mb-8 flex-wrap gap-2 sm:gap-0 sm:flex-nowrap" aria-label="Breadcrumb">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand/10 shadow-sm text-text-dark/80 font-body text-sm hover:text-brand hover:border-brand/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <span className="mx-2 text-text-dark/40 font-body">›</span>
            <span className="px-4 py-2 rounded-full bg-white border border-brand/10 shadow-sm text-text-dark font-body text-sm font-medium">
              Blog
            </span>
          </nav>
        </AnimateOnView>

        {/* Header */}
        <AnimateOnView animation="fade-up" delay={40}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark text-center mb-3 sm:mb-4">
            News & Articles
          </h1>
          <p className="font-body text-text-dark/70 text-center max-w-2xl mx-auto text-base sm:text-lg px-1">
            Latest updates and insights on construction and living.
          </p>
        </AnimateOnView>

        {/* Blog cards grid */}
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {posts.map((post, i) => (
            <AnimateOnView key={post.slug} animation="fade-up" delay={60 + i * 50}>
              <article className="group rounded-2xl overflow-hidden bg-white border border-brand/10 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <Link to={`/blog/${post.slug}`} className="flex flex-col flex-1">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded bg-brand text-white font-body text-xs font-semibold uppercase tracking-wider">
                      Blog
                    </span>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h2 className="font-heading text-lg md:text-xl font-semibold text-text-dark line-clamp-2 group-hover:text-brand transition-colors underline decoration-transparent group-hover:decoration-brand">
                      {post.title}
                    </h2>
                    <p className="mt-3 font-body text-sm text-text-dark/70 line-clamp-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 font-body text-xs text-text-dark/50">
                      {post.date}
                      <span className="mx-1.5">•</span>
                      <span>No Comments</span>
                    </p>
                  </div>
                </Link>
              </article>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </div>
  )
}
