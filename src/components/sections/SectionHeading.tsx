type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <p className="text-xs font-semibold tracking-[0.24em] uppercase text-saffron mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
        {title}
      </h2>
      {description ? (
        <p className="text-slate max-w-2xl leading-relaxed">{description}</p>
      ) : null}
    </div>
  )
}
