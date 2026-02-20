/**
 * Splits text into words and reveals each word with a light stagger (for headings).
 */
export default function AnimateWords({ text, className = '', as: Tag = 'span', delayStart = 0, staggerMs = 50 }) {
  const words = text.split(/\s+/)
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="animate-home-word-in inline-block"
          style={{
            animationDelay: `${delayStart + i * staggerMs}ms`,
            animationFillMode: 'backwards',
          }}
        >
          {word}{' '}
        </span>
      ))}
    </Tag>
  )
}
