import type { Metadata } from 'next'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'NMIMS Online MBA 2026 — Fees, Accreditation, Career Fit',
  description:
    'Discover NMIMS Online MBA details, fees, accreditation, programme structure, and how it compares with other private university options.',
}

const strengthPoints = [
  'NAAC A++ accreditation and UGC-DEB approval',
  'Strong brand recognition for corporate management roles',
  'Structured online delivery with mentor support',
]

const alternativePoints = [
  'Symbiosis offers more marketing and HR specialisations',
  'Amity is a flexible, affordable alternative with strong placement support',
  'BITS Pilani WILP is better suited for technology-focused executives',
]

export default function UniversityNmimsPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            NMIMS Online MBA
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            NMIMS, India’s <span className="italic text-saffron">top-ranked</span> private Online MBA in 2026.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            Study with a premium private MBA brand that combines accreditation, a remote learning platform, and placement visibility.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Is NMIMS right for you?"
            title="This is a strong fit if you want a premium brand and structured online delivery."
            description="It is especially suitable for learners who want brand recognition and a well-managed remote MBA experience."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengthPoints.map((point) => (
              <article key={point} className="rounded-[24px] border border-hairline bg-slate-50 p-6">
                <p className="text-slate leading-relaxed">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="About the programme"
            title="A 2-year Online MBA with strong course design and corporate alignment."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-[24px] border border-hairline bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy mb-3">Fee range</h3>
              <p className="text-slate leading-relaxed">₹1.7L – ₹2.4L</p>
            </article>
            <article className="rounded-[24px] border border-hairline bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy mb-3">Duration</h3>
              <p className="text-slate leading-relaxed">2 years</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Get help choosing"
                title="We will tell you if NMIMS is the right fit for your profile and goal."
                description="Not every programme is right for every learner. Speak to a counsellor to get a balanced view."
              />
            </div>
            <LeadForm heading="Speak to a counsellor" courses={['NMIMS Online MBA', 'Symbiosis MBA', 'Amity Online MBA', 'Not sure']} />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="NMIMS vs the alternatives"
            title="When to choose NMIMS and when to consider another private university."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {alternativePoints.map((item) => (
              <article key={item} className="rounded-[24px] border border-hairline bg-white p-6 shadow-sm">
                <p className="text-slate leading-relaxed">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
