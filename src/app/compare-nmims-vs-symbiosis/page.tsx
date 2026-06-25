import type { Metadata } from 'next'
import { FAQSection } from '@/components/sections/FAQSection'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'NMIMS vs Symbiosis Online MBA 2026 — Honest Comparison',
  description:
    'Compare NMIMS and Symbiosis Online MBA programmes by fees, accreditation, specialisations, and career fit to find the right private university path.',
}

const comparisonItems = [
  {
    title: 'Accreditation',
    nmims: 'UGC-DEB, NAAC A++',
    symbiosis: 'UGC-DEB, NAAC A++',
  },
  {
    title: 'Fee range',
    nmims: '₹1.7L – ₹2.4L',
    symbiosis: '₹1.8L – ₹2.4L',
  },
  {
    title: 'Learning style',
    nmims: 'Structured online cohort',
    symbiosis: 'Flexible online and distance mix',
  },
  {
    title: 'Best fit',
    nmims: 'Brand-conscious mid-career professionals',
    symbiosis: 'Marketing and HR specialisations',
  },
]

const faqs = [
  {
    question: 'Which programme is better for a mid-career manager?',
    answer:
      'NMIMS tends to suit mid-career managers looking for strong brand recognition, while Symbiosis is often preferred by marketing and HR professionals.',
  },
  {
    question: 'Can both programmes be completed without leaving work?',
    answer:
      'Yes. Both are designed for working professionals with remote learning, though schedules and live class frequency may differ.',
  },
  {
    question: 'Which university offers more specialisations?',
    answer:
      'Symbiosis currently offers a broad marketing and HR-led online portfolio, while NMIMS focuses on general management and leadership specialisations.',
  },
]

export default function CompareNmimsVsSymbiosisPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            NMIMS vs Symbiosis
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            NMIMS vs Symbiosis, <span className="italic text-saffron">the honest breakdown.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            Compare accreditation, fees, programme style and career fit so you can choose the MBA that matches your experience and goal.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="What actually matters"
            title="The comparison points that help working professionals decide faster."
            description="Focus on accreditation, fees, delivery model, and the types of careers each programme is normally used for."
          />
          <div className="mt-10 overflow-hidden rounded-[24px] border border-hairline">
            <div className="grid bg-slate-50 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 sm:grid-cols-[1.2fr_1fr_1fr]">
              <div>Category</div>
              <div>NMIMS</div>
              <div>Symbiosis</div>
            </div>
            {comparisonItems.map((item) => (
              <div key={item.title} className="grid gap-4 border-t border-hairline px-6 py-5 sm:grid-cols-[1.2fr_1fr_1fr] text-sm text-slate-700">
                <div className="font-semibold text-navy">{item.title}</div>
                <div>{item.nmims}</div>
                <div>{item.symbiosis}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Free 20-minute call"
                title="Book a no-pressure conversation and get the right comparison for your profile."
                description="We’ll help you choose between NMIMS and Symbiosis based on your experience, budget and career path."
              />
            </div>
            <LeadForm heading="Free 20-minute call. No pressure." courses={[
              'NMIMS Online MBA',
              'Symbiosis Online MBA',
              'Not sure yet',
            ]} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Comparison FAQs" title="Answers to the questions people ask first." centered />
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQSection items={faqs} />
          </div>
        </div>
      </section>
    </main>
  )
}
