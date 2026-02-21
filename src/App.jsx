import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'
import ScrollToTop from './components/ScrollToTop'
import FloatingSocialLinks from './components/FloatingSocialLinks'
import PageLoader from './components/PageLoader'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg font-body">
      <SplashCursor />
      <FloatingSocialLinks />
      <Navbar />
      <main className="flex-1 pt-14 sm:pt-16 lg:pt-[4.5rem]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/services/:slug" element={<Layout><ServiceDetailPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/projects/:slug" element={<Layout><ProjectDetailPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
