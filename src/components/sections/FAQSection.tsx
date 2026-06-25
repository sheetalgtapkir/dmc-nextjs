type FAQItem = {
  question: string
  answer: string
}

type FAQSectionProps = {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-[20px] border border-hairline bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-navy">
            {item.question}
          </summary>
          <div className="mt-4 text-slate leading-relaxed">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}
