import type { Metadata } from 'next'
import { FAQSection } from '@/components/sections/FAQSection'
import { LeadForm } from '@/components/sections/LeadForm'

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
      'Flexible, mailed and digital course materials, minimal live instruction. Best for self-study learners and budget-conscious professionals.',
    bestFor: 'Budget-conscious, self-paced learners',
    href: '/landing-page-online-mba',
  },
  {
    title: 'Online MBA',
    meta: '₹1.2L – ₹3L · 1.5-2 years · Structured cohort',
    description:
      'Live faculty sessions, structured calendar, recorded lectures, graded assignments. Closer to a traditional MBA but fully remote.',
    bestFor: 'Structure-seekers with full-time jobs',
    href: '/programme-online-mba',
  },
  {
    title: 'Executive MBA',
    meta: '₹3L – ₹25L · 1-2 years · Weekend / hybrid',
    description:
      'Designed for senior professionals with 5+ years of experience. Cohort peer network is a major value driver.',
    bestFor: 'Senior leaders, 5+ years experience',
    href: '/programme-online-mba',
  },
  {
    title: 'Correspondence MBA',
    meta: '₹40K – ₹1.5L · 2-3 years · Traditional',
    description:
      'The legacy term for distance learning. Suits traditional learners comfortable with printed materials and self-study.',
    bestFor: 'Traditional learners, tier 2/3 cities',
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
      'Yes. UGC-DEB and AICTE recognised online MBA programmes from private universities like NMIMS, Symbiosis, and Amity are formally equivalent to regular MBA degrees per UGC notifications from 2020 to 2022. Most leading private universities now hold both UGC-DEB recognition and NAAC accreditation, often at A++ grade.',
  },
  {
    question: "What's the difference between Distance MBA, Online MBA, Executive MBA, and Correspondence MBA?",
    answer:
      'Distance MBA is self-paced with limited live instruction. Online MBA has structured live sessions and a cohort experience. Executive MBA is designed for senior professionals with 5+ years of experience, often weekend or hybrid format. Correspondence MBA is the legacy term for distance learning, used by older universities and learners.',
  },
  {
    question: "Why don't you counsel learners on IGNOU MBA?",
    answer:
      'IGNOU is an open university with government backing. Distance MBA College specialises in private universities where counselling adds the most value, comparing fees, accreditation, brand strength, and outcomes across 25+ private institutions like NMIMS, Symbiosis, Amity, and Manipal Jaipur.',
  },
  {
    question: 'What does free counselling actually mean?',
    answer:
      "Our counsellors are paid by us, not by the universities. You pay nothing. Universities pay us a per-enrolment commission only when learners enrol, and counsellors are paid the same salary regardless of which university you choose. That's what keeps the advice honest.",
  },
  {
    question: 'How long does it take to get a counsellor call?',
    answer:
      'Within 24 hours, often the same day. For hot leads (those who have engaged deeply with comparison or apply pages), we typically respond within 30 minutes during business hours. WhatsApp follow-up is available if you prefer messaging over calls.',
  },
]

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Honest advice for working professionals</span>
          <h1>
            Find the MBA that fits the <span className="ital">life you already have.</span>
          </h1>
          <p className="hero-sub">
            Distance, Online, Executive, or Correspondence, we counsel you through every credible private university programme in India. Compare fees, accreditation, and outcomes honestly. Then talk to a counsellor whose only job is finding the right fit, not closing the sale.
          </p>
          <div className="hero-actions">
            <a href="#lead" className="btn btn-primary btn-lg">
              Speak to a counsellor <span className="btn-arrow">→</span>
            </a>
            <a href="#universities" className="btn btn-secondary btn-lg">
              Browse programmes
            </a>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="wrap trust-inner">
          <div className="trust-label">
            Trusted by <strong>18,000+</strong> working professionals across India
          </div>
          <div className="trust-badges">
            <span className="badge">UGC-DEB</span>
            <span className="badge">AICTE</span>
            <span className="badge">NAAC</span>
            <span className="badge">AIU</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Four ways to earn your MBA</span>
            <h2>
              One brand. <span className="ital">Four modes.</span> Twenty-five private universities.
            </h2>
            <p>
              Working professionals in India have four credible ways to earn an MBA without quitting work. Each suits a different career stage, learning style, and budget.
            </p>
          </div>

          <div className="mode-strip">
            {modeCards.map((mode) => (
              <a key={mode.title} href={mode.href} className="mode-card">
                <h3>{mode.title}</h3>
                <p className="mode-meta">{mode.meta}</p>
                <p>{mode.description}</p>
                <div className="mode-best">
                  <strong>Best for</strong>
                  {mode.bestFor}
                </div>
                <span className="mode-link">Explore {mode.title} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="universities">
        <div className="wrap">
          <div className="section-head section-head-split">
            <div>
              <span className="eyebrow">Where our learners study</span>
              <h2>
                Top private universities, <span className="ital">in one comparable view.</span>
              </h2>
            </div>
            <a href="/resource-distance-mba-guide" className="btn btn-ghost">
              View all 25+ universities →
            </a>
          </div>

          <div className="grid-4">
            {universities.map((university) => (
              <article key={university.title} className="uni-card">
                <div className="uni-card-header">
                  <h3>{university.title}</h3>
                  <span className="uni-badge">{university.badge}</span>
                </div>
                <div className="uni-card-meta">
                  <div>
                    Fee<strong>{university.fee}</strong>
                  </div>
                  <div>
                    Duration<strong>{university.duration}</strong>
                  </div>
                </div>
                <div className="uni-card-best">
                  <em>Best for</em>
                  {university.bestFor}
                </div>
                <a href={university.href} className="uni-card-link">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Pick your stream</span>
            <h2>
              Fourteen specialisations. <span className="ital">One conversation</span> to find your fit.
            </h2>
          </div>

          <div className="spec-grid">
            {specializations.map((spec) => (
              <a key={spec.title} href={spec.href} className="spec-card">
                <h4>{spec.title}</h4>
                <p>{spec.description}</p>
                <span className="spec-card-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy pullquote">
        <div className="pullquote-mark">&quot;</div>
        <p className="pullquote-text">Talk to us once and you will know exactly which programme is right for you, and why.</p>
        <p className="pullquote-attr">Our brand promise</p>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why people trust us</span>
            <h2>
              You&apos;ll speak with <span className="ital">a real person</span>, not a script.
            </h2>
          </div>
          <div className="counsel">
            <div className="counsel-avatar">P</div>
            <div>
              <p className="counsel-quote">
                Before I suggest anything, tell me what you are actually trying to change in the next two years. The right programme is the one that answers that question.
              </p>
              <p className="counsel-attr">
                Priya Sharma<span>Senior Counsellor · 11 years · Pune</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-mist">
        <div className="wrap text-center">
          <span className="eyebrow justify-center">Want a quick answer first?</span>
          <h2 className="mx-auto mb-4">
            Chat with <span className="ital">Aarya, our AI counsellor.</span>
          </h2>
          <p className="lead mx-auto mb-8">
            Aarya can answer questions about programmes, fees, eligibility, and timelines in seconds. When you&apos;re ready for a deeper conversation, she&apos;ll connect you with a human counsellor.
          </p>
          <a href="#lead" className="btn btn-primary">
            Start the chat →
          </a>
        </div>
      </section>

      <section className="section" id="lead">
        <div className="wrap">
          <div className="lead-section">
            <div>
              <span className="eyebrow">Your next step</span>
              <h2>
                One conversation. <span className="ital">No commitment.</span>
              </h2>
              <p className="lead">
                Tell us about yourself in four short fields. A counsellor will call within 24 hours with a shortlist matched to your goal, not a sales pitch.
              </p>
              <ul className="lead-bullets">
                <li className="lead-bullet">Honest comparisons across 25+ private universities</li>
                <li className="lead-bullet">Counselling is genuinely free, no card details ever</li>
                <li className="lead-bullet">We tell you if a particular MBA mode is the wrong choice for you</li>
                <li className="lead-bullet">Counsellors who have advised 18,000+ working professionals</li>
              </ul>
            </div>

            <LeadForm variant="reference" />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head text-center mx-auto">
            <span className="eyebrow justify-center">Common questions</span>
            <h2 className="mx-auto">
              Honest answers to <span className="ital">what people actually ask.</span>
            </h2>
          </div>

          <div className="mx-auto">
            <FAQSection items={faqs} variant="reference" />
          </div>
        </div>
      </section>

      <div className="mobile-actions" aria-label="Quick contact actions">
        <div className="mobile-actions-grid">
          <a href="tel:+918669661005" className="mobile-action">
            <span className="mobile-action-icon">☎</span>
            <span>Call</span>
          </a>
          <a
            href="https://wa.me/918669661005?text=I'm%20interested%20in%20a%20distance%20MBA"
            className="mobile-action"
          >
            <span className="mobile-action-icon">💬</span>
            <span>WhatsApp</span>
          </a>
          <a href="#lead" className="mobile-action primary">
            <span className="mobile-action-icon">🤖</span>
            <span>Chat with Aarya</span>
          </a>
        </div>
      </div>

      <a href="#lead" className="chat-launcher" aria-label="Open AI counsellor chat">
        💬
        <span className="chat-launcher-pulse" />
      </a>
    </main>
  )
}
