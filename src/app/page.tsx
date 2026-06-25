import type { Metadata } from 'next'
import { FAQSection } from '@/components/sections/FAQSection'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'Distance MBA College - Free Counselling for Distance, Online & Executive MBA',
  description:
    'Honest advice for working professionals comparing Distance, Online, Executive, and Correspondence MBA programmes from India’s top private universities.',
}

const modeCards = [
  {
    title: 'Distance MBA',
    meta: '₹40K – ₹2L · 2-2.5 years · Self-paced',
    description:
      'Flexible mail and digital materials with minimal live instruction. Best for budget-conscious self-study learners.',
    bestFor: 'Budget-conscious, self-paced learners',
    href: '/landing-page-online-mba',
  },
  {
    title: 'Online MBA',
    meta: '₹1.2L – ₹3L · 1.5-2 years · Structured cohort',
    description:
      'Live faculty sessions, structured calendar, recorded lectures, and graded assignments for working professionals.',
    bestFor: 'Structure-seekers with full-time jobs',
    href: '/programme-online-mba',
  },
  {
    title: 'Executive MBA',
    meta: '₹3L – ₹25L · 1-2 years · Weekend / hybrid',
    description:
      'Designed for senior leaders with peer networking and a high-value cohort experience.',
    bestFor: 'Senior professionals with 5+ years experience',
    href: '/programme-online-mba',
  },
  {
    title: 'Correspondence MBA',
    meta: '₹40K – ₹1.5L · 2-3 years · Traditional',
    description:
      'Legacy-style correspondence learning with printed materials and self-paced study.',
    bestFor: 'Traditional learners in tier 2/3 cities',
    href: '/programme-online-mba',
  },
]

const universities = [
  {
    title: 'NMIMS Centre for Distance & Online Education',
    badge: 'NAAC A++',
    fee: '₹1.7L – ₹2.4L',
    duration: '2 years',
    bestFor: 'Corporate management roles at brand-conscious employers',
    href: '/university-nmims',
  },
  {
    title: 'Symbiosis (SCDL & SSODL)',
    badge: 'NAAC A++',
    fee: '₹1.8L – ₹2.4L',
    duration: '2 years',
    bestFor: 'Marketing, HR, Digital Marketing specialisations',
    href: '/compare-nmims-vs-symbiosis',
  },
  {
    title: 'Amity Online MBA',
    badge: 'NAAC A+',
    fee: '₹1.99L',
    duration: '2 years',
    bestFor: 'Flexibility plus strong national brand recognition',
    href: '/resource-distance-mba-guide',
  },
  {
    title: 'Manipal University Jaipur',
    badge: 'NAAC A+',
    fee: '₹1.5L',
    duration: '2 years',
    bestFor: 'Digital-first learning experience',
    href: '/resource-distance-mba-guide',
  },
  {
    title: 'Chandigarh University Online',
    badge: 'NAAC A+',
    fee: '₹1.3L',
    duration: '2 years',
    bestFor: 'Scholarship-friendly, affordable tier-1 brand',
    href: '/resource-distance-mba-guide',
  },
  {
    title: 'Jain Online (Deemed)',
    badge: 'NAAC A++',
    fee: '₹1.4L',
    duration: '2 years',
    bestFor: 'South India base, modern curriculum',
    href: '/resource-distance-mba-guide',
  },
  {
    title: 'LPU Distance Education',
    badge: 'NAAC A++',
    fee: '₹65K',
    duration: '2 years',
    bestFor: 'Tier 2/3 affordability, large alumni base',
    href: '/resource-distance-mba-guide',
  },
  {
    title: 'BITS Pilani WILP',
    badge: 'Deemed',
    fee: '₹2.5L+',
    duration: '2 years',
    bestFor: 'Executive MBA, tech-leaning senior professionals',
    href: '/resource-distance-mba-guide',
  },
]

const specializations = [
  { title: 'Marketing', description: 'Build customer-facing strategy', href: '/specialization-marketing' },
  { title: 'Finance', description: 'Master corporate and investment finance', href: '/specialization-marketing' },
  { title: 'Human Resources', description: 'Lead people and culture', href: '/specialization-marketing' },
  { title: 'Operations', description: 'Run the engine of the business', href: '/specialization-marketing' },
  { title: 'IT & Systems', description: 'Bridge business and technology', href: '/specialization-marketing' },
  { title: 'Banking & Finance', description: 'Specialise in financial services', href: '/specialization-marketing' },
  { title: 'Digital Marketing', description: 'Performance, brand, content', href: '/specialization-marketing' },
  { title: 'Business Analytics', description: 'Data-driven decision-making', href: '/specialization-marketing' },
  { title: 'Data Science & AI', description: 'The 2026 high-growth stream', href: '/specialization-marketing' },
  { title: 'Supply Chain', description: 'End-to-end logistics', href: '/specialization-marketing' },
  { title: 'Healthcare Management', description: 'Lead in hospitals and pharma', href: '/specialization-marketing' },
  { title: 'International Business', description: 'Global trade and strategy', href: '/specialization-marketing' },
  { title: 'Project Management', description: 'Deliver large initiatives', href: '/specialization-marketing' },
  { title: 'General Management', description: 'Broad-based leadership', href: '/specialization-marketing' },
]

const faqs = [
  {
    question: 'Is an online MBA from a private university valid in India in 2026?',
    answer:
      'Yes. UGC-DEB and AICTE recognised online MBA programmes from top private universities are formally equivalent to regular MBA degrees under current regulations.',
  },
  {
    question: 'What is the difference between Distance, Online, Executive, and Correspondence MBA?',
    answer:
      'Distance MBA is self-paced with minimal live teaching. Online MBA has structured live sessions. Executive MBA is for senior professionals with weekend or hybrid timetables. Correspondence MBA is the legacy self-study mode.',
  },
  {
    question: 'Why don’t you counsel learners on IGNOU MBA?',
    answer:
      'Distance MBA College specialises in private universities where counselling adds value through accreditation, fee comparison, and placement alignment.',
  },
  {
    question: 'How long does it take to get a counsellor call?',
    answer:
      'Within 24 hours, often the same day. Hot leads are typically responded to within 30 minutes during business hours.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            Honest advice for working professionals
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Find the MBA that fits the <span className="italic font-semibold text-saffron">life you already have.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            Distance, Online, Executive, or Correspondence, we counsel you through every credible private university programme in India. Compare fees, accreditation, and outcomes honestly.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#lead" className="inline-flex rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-navy transition hover:bg-[#d8830a]">
              Speak to a counsellor →
            </a>
            <a href="#universities" className="inline-flex rounded-full border border-white/20 bg-white bg-opacity-10 px-6 py-3 text-sm font-semibold text-white transition hover:border-saffron hover:text-saffron">
              Browse programmes
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Trusted by</p>
              <p className="text-xl font-semibold text-navy">18,000+ working professionals across India</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-navy">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">UGC-DEB</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">AICTE</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">NAAC</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">AIU</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Four ways to earn your MBA"
            title={
              <>
                One brand. <span className="italic text-saffron">Four modes.</span> Twenty-five private universities.
              </>
            }
            description="Working professionals in India have four credible ways to earn an MBA without quitting work. Each suits a different career stage, learning style, and budget."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modeCards.map((mode) => (
              <a
                key={mode.title}
                href={mode.href}
                className="rounded-[24px] border border-hairline bg-white p-6 text-left transition hover:border-saffron/50 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-navy mb-2">{mode.title}</h3>
                <p className="text-sm uppercase tracking-[0.22em] text-saffron mb-4">{mode.meta}</p>
                <p className="text-slate leading-relaxed mb-6">{mode.description}</p>
                <p className="text-sm font-semibold text-navy">Best for</p>
                <p className="text-sm text-slate">{mode.bestFor}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-saffron">Explore {mode.title} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="universities">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-saffron mb-4">Where our learners study</p>
              <h2 className="text-3xl font-bold text-navy leading-tight">
                Top private universities, <span className="italic text-saffron">in one comparable view.</span>
              </h2>
            </div>
            <a
              href="/resource-distance-mba-guide"
              className="inline-flex rounded-full border border-slate/30 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-saffron hover:text-saffron"
            >
              View all 25+ universities →
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {universities.map((university) => (
              <article key={university.title} className="rounded-[24px] border border-hairline bg-slate-50 p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-navy">{university.title}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate">{university.badge}</span>
                </div>
                <div className="grid gap-3 border-t border-hairline pt-4 text-sm text-slate">
                  <div>
                    Fee <strong className="text-navy">{university.fee}</strong>
                  </div>
                  <div>
                    Duration <strong className="text-navy">{university.duration}</strong>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate">{university.bestFor}</p>
                <a href={university.href} className="mt-6 inline-flex text-sm font-semibold text-saffron">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Pick your stream"
            title={
              <>
                Fourteen specialisations. <span className="italic text-saffron">One conversation</span> to find your fit.
              </>
            }
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((spec) => (
              <a
                key={spec.title}
                href={spec.href}
                className="rounded-[20px] border border-hairline bg-white p-5 text-left transition hover:border-saffron hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-navy mb-2">{spec.title}</h4>
                <p className="text-slate text-sm leading-relaxed">{spec.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-saffron">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 sm:px-6 text-center">
          <p className="text-7xl font-display leading-none text-saffron opacity-20">“</p>
          <p className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight">
            Talk to us once and you will know exactly which programme is right for you, and why.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.28em] text-saffron/90">Our brand promise</p>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
              <SectionHeading
                eyebrow="Why people trust us"
                title={
                  <>
                    You&apos;ll speak with <span className="italic text-saffron">a real person</span>, not a script.
                  </>
                }
                description="We listen to your career goal, then recommend the MBA mode and university that actually match your priorities."
              />
            </div>
            <div className="rounded-[24px] border border-hairline bg-white p-8 shadow-sm">
              <div className="flex items-center gap-5 border-b border-hairline pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-saffron text-navy text-2xl font-bold">P</div>
                <div>
                  <p className="text-lg font-semibold text-navy">Priya Sharma</p>
                  <p className="text-sm text-slate">Senior Counsellor · 11 years · Pune</p>
                </div>
              </div>
              <p className="mt-6 text-slate leading-relaxed">
                Before I suggest anything, tell me what you are actually trying to change in the next two years. The right programme is the one that answers that question.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-saffron">Want a quick answer first?</p>
          <h2 className="mt-4 text-3xl font-bold text-navy leading-tight">
            Chat with <span className="italic text-saffron">Aarya, our AI counsellor.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate leading-relaxed">
            Aarya can answer questions about programmes, fees, eligibility, and timelines in seconds. When you&apos;re ready for a deeper conversation, she&apos;ll connect you with a human counsellor.
          </p>
          <a href="#lead" className="mt-8 inline-flex rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
            Start the chat →
          </a>
        </div>
      </section>

      <section className="section" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Your next step"
                title={
                  <>
                    One conversation. <span className="italic text-saffron">No commitment.</span>
                  </>
                }
                description="Tell us about yourself in four short fields. A counsellor will call within 24 hours with a shortlist matched to your goal, not a sales pitch."
              />
              <ul className="mt-8 space-y-3 text-sm text-slate leading-relaxed">
                <li>• Honest comparisons across 25+ private universities</li>
                <li>• Counselling is genuinely free, no card details ever</li>
                <li>• We tell you if a particular MBA mode is the wrong choice for you</li>
                <li>• Counsellors who have advised 18,000+ working professionals</li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-saffron">Common questions</p>
            <h2 className="mt-4 text-3xl font-bold text-navy leading-tight">
              Honest answers to <span className="italic text-saffron">what people actually ask.</span>
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQSection items={faqs} />
          </div>
        </div>
      </section>
    </main>
  )
}
