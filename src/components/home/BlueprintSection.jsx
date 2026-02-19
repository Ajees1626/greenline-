const WHATSAPP_LINK = 'https://wa.me/918939555025'

export default function BlueprintSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
              From Blueprint to Reality, We Build with Precision
            </h2>
            <p className="mt-6 font-body text-text-dark/80">
              At <strong className="text-text-dark">Greenline Developers</strong>, we combine engineering expertise, skilled workforce, and quality materials to deliver projects that are durable, modern, and future-ready. Our focus is on timely execution and transparent processes, making construction stress-free for our clients.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark transition-colors"
            >
              Elevate Your Journey
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-agent.jpg"
              alt=""
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
            <img
              src="https://greenlinedevelopers.in/wp-content/uploads/2025/09/real-estate-sale-and-happy-family-outside-of-new-house-excited-and-smiling-in-a-garden-property-.jpg"
              alt=""
              className="rounded-xl object-cover w-full aspect-[4/3] mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
