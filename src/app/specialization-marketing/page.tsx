import type { Metadata } from 'next'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'MBA in Marketing 2026 — Top Universities, Career Paths, Fees',
  description:
    'Explore private university MBA Marketing programmes in India, the core learning areas, career pathways, and how to choose the right fit for your next role.',
}

const skills = [
  'Digital marketing strategy',
  'Brand management',
  'Customer analytics',
  'Marketing communications',
  'Sales enablement',
  'Market research',
  'Product positioning',
]

const careers = [
  { role: 'Brand Manager', salary: '₹10L – ₹18L' },
  { role: 'Digital Marketing Lead', salary: '₹8L – ₹14L' },
  { role: 'Product Marketing Manager', salary: '₹12L – ₹20L' },
]

export default function SpecializationMarketingPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            MBA in Marketing
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            MBA in Marketing, <span className="italic text-saffron">for the career you actually want.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            Build customer-facing strategy and brand leadership with a marketing-focused MBA from India’s top private universities.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Seven core areas of marketing depth"
            title="A marketing MBA covers brand, digital, analytics and customer-led growth."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <article key={skill} className="rounded-[20px] border border-hairline bg-slate-50 p-5">
                <p className="text-base font-semibold text-navy">{skill}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Career paths and salary bands"
            title="Marketing MBA graduates move into brand, digital and product roles."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {careers.map((career) => (
              <article key={career.role} className="rounded-[24px] border border-hairline bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-saffron mb-3">Role</p>
                <h3 className="text-xl font-semibold text-navy mb-2">{career.role}</h3>
                <p className="text-slate leading-relaxed">Salary range {career.salary}*.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Pick your Marketing MBA in four questions"
                title="Get a shortlist of the best marketing-focused MBA programmes for your career goal."
                description="Our counsellors compare the top private university offerings so you can choose with clarity."
              />
            </div>
            <LeadForm heading="Get a Marketing MBA shortlist" courses={['Marketing', 'Digital Marketing', 'General Management', 'Not sure yet']} />
          </div>
        </div>
      </section>
    </main>
  )
}
