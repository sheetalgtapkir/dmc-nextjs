'use client'

import { useState } from 'react'
import { useLeadForm } from '@/hooks/useLeadForm'

type LeadFormProps = {
  heading?: string
  subtitle?: string
  courses?: string[]
  hideCity?: boolean
}

const defaultCourses = [
  'Online MBA',
  'Distance MBA',
  'Executive MBA',
  'Correspondence MBA',
  'Not sure, help me choose',
]

export function LeadForm({
  heading = 'Speak to a counsellor',
  subtitle = 'Calls within 24 hours, often the same day.',
  courses = defaultCourses,
  hideCity = false,
}: LeadFormProps) {
  const { submit, loading, state } = useLeadForm()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState(courses[0])
  const [city, setCity] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await submit({
      name,
      phone,
      course,
      city,
      email: '',
      source: window.location.pathname,
    })
  }

  return (
    <div className="rounded-[24px] border border-hairline bg-white p-8 shadow-lg ring-1 ring-slate-100">
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-saffron mb-3">
          {heading}
        </p>
        <h3 className="text-2xl font-bold text-navy leading-tight mb-2">{subtitle}</h3>
        <p className="text-slate text-sm leading-relaxed">
          Calls within 24 hours. No pressure. We match you with the right programme.
        </p>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm font-medium text-slate">
          Your name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-slate focus:border-saffron focus:outline-none"
            type="text"
            placeholder="e.g. Rahul Sharma"
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate">
          Phone
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-slate focus:border-saffron focus:outline-none"
            type="tel"
            placeholder="86696 61005"
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate">
          Course of interest
          <select
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            className="mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-slate focus:border-saffron focus:outline-none"
          >
            {courses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        {!hideCity ? (
          <label className="block text-sm font-medium text-slate">
            City
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="mt-2 w-full rounded-xl border border-hairline bg-cream px-4 py-3 text-slate focus:border-saffron focus:outline-none"
              type="text"
              placeholder="e.g. Mumbai"
            />
          </label>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Submitting…' : 'Request a callback →'}
        </button>
      </form>

      {state.success ? (
        <p className="mt-4 text-sm text-success">{state.message ?? 'Thanks! A counsellor will contact you soon.'}</p>
      ) : null}
      {state.error ? (
        <p className="mt-4 text-sm text-error">{state.error}</p>
      ) : null}
    </div>
  )
}
