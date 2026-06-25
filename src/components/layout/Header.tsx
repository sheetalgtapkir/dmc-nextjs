'use client'

import Link from 'next/link'

export interface HeaderProps {
  sticky?: boolean
}

export function Header({ sticky = true }: HeaderProps) {
  return (
    <header className={`${sticky ? 'sticky top-0 z-40' : ''} bg-cream border-b border-hairline`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-white text-lg font-bold">
              D
            </div>
            <div className="font-display text-base font-semibold text-navy">
              Distance <span className="font-bold text-saffron">MBA</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate">
            <Link href="/programme-online-mba" className="hover:text-navy transition-colors">
              Online MBA
            </Link>
            <Link href="/landing-page-online-mba" className="hover:text-navy transition-colors">
              Distance MBA
            </Link>
            <Link href="/university-nmims" className="hover:text-navy transition-colors">
              NMIMS
            </Link>
            <Link href="/compare-nmims-vs-symbiosis" className="hover:text-navy transition-colors">
              Compare
            </Link>
            <Link href="/resource-distance-mba-guide" className="hover:text-navy transition-colors">
              Resources
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918669661005"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate/20 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-saffron hover:text-saffron"
            >
              +91 86696 61005
            </a>
            <Link
              href="/#lead"
              className="hidden md:inline-flex rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-navy transition hover:bg-[#d8830a]"
            >
              Talk to a counsellor
            </Link>
            <Link
              href="/#lead"
              className="inline-flex md:hidden items-center justify-center rounded-full bg-navy px-3 py-3 text-white"
              aria-label="Talk to a counsellor"
            >
              Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
