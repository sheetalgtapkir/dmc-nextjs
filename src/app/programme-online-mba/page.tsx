import type { Metadata } from 'next'
import { FAQSection } from '@/components/sections/FAQSection'
import { LeadForm } from '@/components/sections/LeadForm'
import { SectionHeading } from '@/components/sections/SectionHeading'

export const metadata: Metadata = {
  title: 'Online MBA in India 2026 — Structured learning, fully remote',
  description:
    'Learn how Online MBA programmes from India’s top private universities deliver career-ready remote learning with live sessions and strong industry outcomes.',
}

const faqs = [
  {
    question: 'What is an Online MBA?',
    answer:
      'An Online MBA is a full postgraduate management programme delivered remotely, with live faculty sessions, recorded lectures, and graded assignments.',
  },
  {
    question: 'Is Online MBA suitable for working professionals?',
    answer:
      'Yes. Online MBA programmes combine structured pacing with remote access, making them ideal for people who must balance work and study.',
  },
  {
    question: 'Which universities offer credible Online MBA options?',
    answer:
      'Top private providers include NMIMS, Symbiosis, Amity, Manipal, and BITS Pilani WILP, all backed by accreditation and modern learning platforms.',
  },
]

const universities = [
  {
    name: 'NMIMS',
    fee: '₹1.7L – ₹2.4L',
    duration: '2 years',
  },
  {
    name: 'Symbiosis',
    fee: '₹1.8L – ₹2.4L',
    duration: '2 years',
  },
  {
    name: 'Amity Online',
    fee: '₹1.99L',
    duration: '2 years',
  },
  {
    name: 'Manipal University Jaipur',
    fee: '₹1.5L',
    duration: '2 years',
  },
]

export default function ProgrammeOnlineMBAPage() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-saffron mb-4">
            Online MBA programmes 2026
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Online MBA in India 2026, <span className="italic text-saffron">structured learning, fully remote.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-200 leading-relaxed">
            Choose from top private university Online MBA programmes with live sessions, recordings, and a peer cohort that keeps your study aligned with your career.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#lead" className="inline-flex rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-navy transition hover:bg-[#d8830a]">
              Get your shortlist →
            </a>
            <a href="#universities" className="inline-flex rounded-full border border-white/20 bg-white bg-opacity-10 px-6 py-3 text-sm font-semibold text-white transition hover:border-saffron hover:text-saffron">
              See top universities
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="What is an Online MBA?"
            title="A remote MBA with structured live learning and career-focused support."
            description="The right Online MBA gives you faculty-led classes, peer interaction, and a paced calendar without needing to relocate or resign."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[24px] border border-hairline bg-slate-50 p-6">
              <h3 className="font-semibold text-navy mb-3">Live sessions</h3>
              <p className="text-slate leading-relaxed">Regular online classes with faculty and mentors help you stay accountable and build a stronger learning rhythm.</p>
            </div>
            <div className="rounded-[24px] border border-hairline bg-slate-50 p-6">
              <h3 className="font-semibold text-navy mb-3">Recorded lectures</h3>
              <p className="text-slate leading-relaxed">Rewind lessons anytime and complete coursework around your work schedule.</p>
            </div>
            <div className="rounded-[24px] border border-hairline bg-slate-50 p-6">
              <h3 className="font-semibold text-navy mb-3">Graded assignments</h3>
              <p className="text-slate leading-relaxed">Structured evaluation keeps the programme on track and gives you measurable progress each term.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream" id="universities">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Where to do your Online MBA in 2026"
            title="Top private universities that match career-ready online learning."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {universities.map((university) => (
              <article key={university.name} className="rounded-[24px] border border-hairline bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-navy mb-3">{university.name}</h3>
                <div className="text-sm text-slate leading-relaxed">
                  <p>Fee: <strong className="text-navy">{university.fee}</strong></p>
                  <p>Duration: <strong className="text-navy">{university.duration}</strong></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Is Online MBA right for you?"
                title="If you want a flexible, remote MBA with guided structure, this is the mode to prioritise."
                description="It works best for professionals who can commit to scheduled classes and still need the convenience of working from home."
              />
              <ul className="mt-8 space-y-4 text-slate leading-relaxed">
                <li>• You want a modern MBA without relocating.</li>
                <li>• You can attend live online sessions and complete graded assignments.</li>
                <li>• You want a recognised private university degree with placement support.</li>
              </ul>
            </div>
            <LeadForm heading="Three Online MBA shortlist, in 48 hours." />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="Want a quick answer?"
            title="Chat with Aarya, our AI counsellor."
            description="Aarya can suggest the best Online MBA programme and university fit instantly, then connect you with a human counsellor."
            centered
          />
          <a href="#lead" className="mt-8 inline-flex rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
            Start the chat →
          </a>
        </div>
      </section>

      <section className="section bg-white" id="lead">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Your next step"
                title="Get an Online MBA shortlist matched to your goals."
                description="Share your details and our counsellors will call within 24 hours with a personalised recommendation."
              />
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Popular questions" title="Answers to the most common Online MBA questions." centered />
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQSection items={faqs} />
          </div>
        </div>
      </section>
    </main>
  )
}
