import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import blogData from '../data/blog.json'

const posts = blogData.posts

export default function BlogPostPage() {
  const { slug } = useParams()
  const [comment, setComment] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    if (typeof window !== 'undefined') setShareUrl(window.location.href)
  }, [])

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-text-dark">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-brand font-medium hover:underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  const shareTitle = encodeURIComponent(post.title)
  const encodedUrl = encodeURIComponent(shareUrl || '')

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand/5 translate-y-1/2 -translate-x-1/2" />
      </div>

      <article className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-20">
        {/* BLOG tag */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-brand/15 text-brand font-body text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Blog
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark text-center leading-tight max-w-3xl mx-auto">
          {post.title}
        </h1>
        <p className="mt-3 sm:mt-4 text-center font-body text-text-dark/60 text-xs sm:text-sm">
          {post.date}
          <span className="mx-2">|</span>
          No Comments
        </p>

        {/* Hero image in white rounded card */}
        <div className="mt-8 sm:mt-10 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-brand/10 shadow-xl">
          <img
            src={post.heroImage}
            alt=""
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* Article content with section headings (diamond-style accent) */}
        <div className="mt-8 sm:mt-12 prose prose-lg max-w-none">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-8 sm:mb-10">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text-dark flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-2 h-2 rotate-45 bg-brand shrink-0" aria-hidden />
                {section.heading}
              </h2>
              <p className="font-body text-text-dark/80 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Author bio */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-brand-light/30 border border-brand/10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src={post.authorImage}
              alt={post.authorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-text-dark">{post.authorName}</h3>
            <p className="mt-2 font-body text-sm text-text-dark/80 leading-relaxed">
              {post.authorBio}
            </p>
          </div>
        </div>

        {/* Social share */}
        <div className="mt-10">
          <p className="font-body font-medium text-text-dark mb-3">Share this article</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-brand/30 text-text-dark font-body text-sm font-medium hover:bg-brand/10 hover:border-brand/50 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-brand/30 text-text-dark font-body text-sm font-medium hover:bg-brand/10 hover:border-brand/50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=${shareTitle}&body=${encodedUrl}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-brand/30 text-text-dark font-body text-sm font-medium hover:bg-brand/10 hover:border-brand/50 transition-colors"
            >
              Email
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + (shareUrl || ''))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-brand/30 text-text-dark font-body text-sm font-medium hover:bg-brand/10 hover:border-brand/50 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Leave a Reply */}
        <div className="mt-16 pt-12 border-t border-brand/20">
          <h3 className="font-heading text-2xl font-bold text-text-dark mb-2">Leave a Reply</h3>
          <p className="font-body text-sm text-text-dark/60 mb-6">
            Your email address will not be published. Required fields are marked *
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="blog-comment" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                Comment *
              </label>
              <textarea
                id="blog-comment"
                rows={5}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark placeholder:text-text-dark/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-y"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="blog-name" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                  Name *
                </label>
                <input
                  id="blog-name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="blog-email" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                  Email *
                </label>
                <input
                  id="blog-email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>
            </div>
            <div>
              <label htmlFor="blog-website" className="block font-body font-medium text-text-dark mb-1.5 text-sm">
                Website
              </label>
              <input
                id="blog-website"
                type="url"
                className="w-full px-4 py-3 rounded-lg border border-brand/20 bg-white font-body text-text-dark focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 rounded border-brand/30 text-brand focus:ring-brand/30" />
              <span className="font-body text-sm text-text-dark/70">
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-colors"
            >
              Post Comment
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body font-medium text-brand hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  )
}
