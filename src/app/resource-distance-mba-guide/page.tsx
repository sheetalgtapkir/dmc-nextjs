import type { Metadata } from 'next'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'Complete Guide to Distance MBA in India 2026 — Fees, Universities, Eligibility',
  description:
    'Everything you need to decide on a Distance MBA from private universities in India, including fees, eligibility, top providers, and application steps.',
}

const topics = [
  'What is a Distance MBA?',
  'Is a Distance MBA valid in India?',
  'Who should consider a Distance MBA?',
  'Distance MBA vs Online MBA',
  'Top private universities for Distance MBA',
  'Fee and EMI options',
  'Specialisations available',
  'Eligibility and application process',
]

export default function ResourceDistanceMBAGuidePage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            Distance MBA Guide
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Distance MBA in India 2026, <span className="italic text-saffron">everything you need to decide.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            A practical guide for working professionals who want a credible MBA path without quitting work.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Table of contents"
            title="The Distance MBA questions we answer for you."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <div key={topic} className="rounded-[20px] border border-hairline bg-slate-50 p-5 text-sm text-slate-700">
                {topic}
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-8 text-slate leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">What is a Distance MBA?</h2>
              <p>
                A Distance MBA is a postgraduate business degree delivered primarily through printed and digital materials, with occasional online support. It is best suited for learners who need maximum schedule flexibility.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Is a Distance MBA valid in India?</h2>
              <p>
                Yes. Private universities with UGC-DEB recognition and NAAC accreditation offer valid Distance MBA degrees that are equivalent to regular offerings as per current regulations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-3">Distance MBA vs Online MBA</h2>
              <p>
                Distance MBA focuses on self-study materials and flexibility. Online MBA adds live sessions, a structured timetable, and greater cohort interaction. Choose based on how much guided structure you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="One conversation"
                title="Tell us your background. We’ll tell you whether Distance MBA is the right option."
              />
              <p className="mt-4 text-slate leading-relaxed">
                Our counsellors compare programmes across fees, accreditation, and career outcomes before recommending the best pathway.
              </p>
            </div>
            <LeadForm heading="One conversation. No commitment." courses={['Distance MBA', 'Online MBA', 'Executive MBA', 'Not sure']} />
          </div>
        </div>
      </section>
    </main>
  )
}
