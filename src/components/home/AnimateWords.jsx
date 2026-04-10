/**
 * Splits text into words and reveals each word with a light stagger (for headings).
 * Uses flex gap so spaces never collapse visually (fixes "LuxuryLifestyle" style bugs).
 */
export default function AnimateWords({ text, className = '', as: Tag = 'span', delayStart = 0, staggerMs = 50 }) {
  const words = text.split(/\s+/).filter(Boolean)
  return (
    <Tag className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`.trim()}>
      {words.map((word, i) => (
        <span
          key={i}
          className="animate-home-word-in inline-block"
          style={{
            animationDelay: `${delayStart + i * staggerMs}ms`,
            animationFillMode: 'backwards',
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}
