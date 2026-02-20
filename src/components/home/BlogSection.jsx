import { Link } from 'react-router-dom'
import AnimateOnView from './AnimateOnView'
import blogData from '../../data/blog.json'

const posts = blogData.posts.slice(0, 4)

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnView animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">
              Latest News & Article
            </h2>
            <Link to="/blog" className="font-body font-medium text-brand hover:underline text-sm sm:text-base">
              View All Article →
            </Link>
          </div>
        </AnimateOnView>
        <AnimateOnView animation="fade-up" delay={80}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl overflow-hidden bg-white border border-brand/10 hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video bg-brand/10">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 px-2.5 py-1 rounded bg-brand text-white font-body text-xs font-semibold uppercase">
                    Blog
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-text-dark line-clamp-2 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-body text-xs text-text-dark/60">{post.date}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
