import AnimateOnView from './AnimateOnView'

const WHATSAPP_LINK = 'https://wa.me/918939555025'

export default function BlueprintSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <AnimateOnView animation="fade-up">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark">
            From Vision to Luxury Living, Built with Precision
            </h2>
            <p className="mt-4 sm:mt-6 font-body text-text-dark/80 text-sm sm:text-base">
            At Greenline Developers, we transform visionary concepts into ultra-luxury living spaces
through expert engineering, skilled craftsmanship, and premium construction materials. Every
project is thoughtfully planned and executed to deliver modern design, structural strength, and
long-lasting value.
            </p>
            <p className="mt-4 sm:mt-6 font-body text-text-dark/80 text-sm sm:text-base">
            With a strong commitment to timely delivery, transparency, and superior construction
standards, we ensure a seamless and stress-free experience for our clients while creating
homes that reflect elegance, comfort, and prestige.            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 inline-flex items-center min-h-[44px] px-5 sm:px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
            >
              Elevate Your Journey
            </a>
          </div>
          </AnimateOnView>
          <AnimateOnView animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1775801579/demo2_result_k9rcgn.webp"
              alt=""
              className="rounded-lg sm:rounded-xl object-cover w-full aspect-[4/3]"
            />
            <img
              src="https://res.cloudinary.com/dzhtbcxhw/image/upload/q_auto/f_auto/v1775801576/demo1_result_n5bptn.webp"
              alt=""
              className="rounded-lg sm:rounded-xl object-cover w-full aspect-[4/3] mt-6 sm:mt-8"
            />
          </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}
