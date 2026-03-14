import { AboutSection, TestimonialsSection } from '../components/home'
import { VisionMissionValues, OurJourney } from '../components/about'
import { BlueprintSection, BlogSection } from '../components/home'

const HERO_BG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920'

export default function AboutPage() {
  return (
    <>
      {/* About page hero */}
      <section
        className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 z-1 bg-black/50" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-28 w-full text-center">
          <p className="font-body inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
            Who We Are
          </p>
          <h1
            id="about-hero-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight px-2"
          >
            About Greenline Developers
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-body max-w-2xl mx-auto px-2">
            Building with purpose, delivering with care — quality homes and trusted construction.
          </p>
        </div>
      </section>

      <AboutSection isAboutPage />
      <VisionMissionValues />
      <OurJourney />
      <TestimonialsSection />
      <BlueprintSection />
      <BlogSection />
    </>
  )
}
