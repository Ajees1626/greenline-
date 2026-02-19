const WHATSAPP_LINK = 'https://wa.me/918939555025'
const BG_IMAGE =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920'

export default function DreamHomeCTA() {
  return (
    <section className="relative min-h-[650px] md:min-h-[720px] flex items-center overflow-hidden">

      {/* Background – fixed on scroll (parallax) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        aria-hidden
      />

      {/* 3-layer overlay: left, center, right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(10,50,50,10) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">

        {/* Circle Container */}
        <div className="relative w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px]
                        rounded-full 
                        bg-gradient-to-br from-white/15 via-white/10 to-white/5
                        backdrop-blur-2xl
                        border border-white/20
                        shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                        flex items-center justify-center
                        p-12 text-center">

          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-brand/20 blur-3xl opacity-30 pointer-events-none" />

          <div className="relative max-w-[360px]">

            {/* Small Label */}
            <span className="uppercase tracking-[3px] text-xs text-brand font-semibold">
              Luxury Living
            </span>

            {/* Heading */}
            <h2 className="mt-5 font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.15]">
              Turning Your
              <br />
              <span className="text-brand">Dream Home</span>
              <br />
              Into Reality
            </h2>

            {/* Divider Line */}
            <div className="mx-auto mt-6 h-[2px] w-16 bg-brand rounded-full" />

            {/* Paragraph */}
            <p className="mt-6 font-body text-white/80 text-sm sm:text-base leading-relaxed">
              We craft modern, sustainable homes designed for comfort,
              safety, and timeless elegance — built to elevate everyday living.
            </p>

            

          </div>
        </div>
      </div>
    </section>
  )
}
