import { AboutSection, TestimonialsSection } from '../components/home'
import { VisionMissionValues, OurJourney } from '../components/about'
import { BlueprintSection, BlogSection } from '../components/home'

const HERO_BG = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920'

export default function AboutPage() {
  return (
    <>
      {/* About page hero */}
      <section
        className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed max-sm:bg-scroll"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] bg-black/60" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 w-full text-center">
          <p className="font-body text-xs sm:text-sm font-semibold text-brand uppercase tracking-widest mb-2 sm:mb-3">
            Who We Are
          </p>
          <h1
            id="about-hero-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            About Greenline Developers
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto px-1">
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
