import type { Metadata } from 'next'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'Top Online MBA Programmes 2026 — Remote, Accredited, Career-Focused',
  description:
    'Discover top online MBA programmes from private universities in India, their fees, duration, and career fit for working professionals.',
}

const programmes = [
  { name: 'NMIMS Online MBA', details: '₹1.7L – ₹2.4L · 2 years · NAAC A++' },
  { name: 'Symbiosis Online MBA', details: '₹1.8L – ₹2.4L · 2 years · NAAC A++' },
  { name: 'Amity Online MBA', details: '₹1.99L · 2 years · NAAC A+' },
  { name: 'Manipal Online MBA', details: '₹1.5L · 2 years · NAAC A+' },
  { name: 'BITS Pilani WILP', details: '₹2.5L+ · 2 years · Deemed University' },
  { name: 'Jain Online MBA', details: '₹1.4L · 2 years · NAAC A++' },
]

export default function LandingPageOnlineMBA() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            Top Online MBA programmes 2026
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Online MBA programmes with the structure you need and the flexibility you want.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            Compare leading private university offerings, fees, accreditation and career pathways in one place.
          </p>
          <a href="#lead" className="mt-10 inline-flex rounded-full bg-saffron px-8 py-3 text-sm font-semibold text-navy transition hover:bg-[#d8830a]">
            Get a shortlist now →
          </a>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why choose an Online MBA"
            title="Structured guidance and recorded learning for busy professionals."
            description="A strong online MBA blends faculty sessions, recorded classes, and a paced cohort experience so you can grow without quitting your job."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-[24px] border border-hairline bg-white p-6">
              <h3 className="text-lg font-semibold text-navy mb-3">Cohort learning</h3>
              <p className="text-slate leading-relaxed">Study with peers while keeping full-time work on track.</p>
            </article>
            <article className="rounded-[24px] border border-hairline bg-white p-6">
              <h3 className="text-lg font-semibold text-navy mb-3">Live classes</h3>
              <p className="text-slate leading-relaxed">Attend scheduled sessions from wherever you are.</p>
            </article>
            <article className="rounded-[24px] border border-hairline bg-white p-6">
              <h3 className="text-lg font-semibold text-navy mb-3">Assessment driven</h3>
              <p className="text-slate leading-relaxed">Stay accountable with graded assignments and term reviews.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Programmes we compare"
            title="A shortlist of the Online MBA programmes our counsellors track closely."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {programmes.map((programme) => (
              <article key={programme.name} className="rounded-[24px] border border-hairline p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-navy mb-3">{programme.name}</h3>
                <p className="text-slate leading-relaxed">{programme.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Get a shortlist"
                title="Get a personalised shortlist for your Online MBA goals."
                description="Share details and our counsellors will help you narrow down the best university fit across fees, specialisations and outcomes."
              />
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}
