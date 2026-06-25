'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-navy text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-saffron text-navy font-bold">
                D
              </div>
              <div>
                <p className="font-display text-base font-semibold">Distance MBA College</p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-white/70 leading-relaxed">
              Honest counselling for Distance, Online, and Executive MBA programmes from India’s top private universities.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-saffron">Programmes</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/programme-online-mba" className="hover:text-white">
                  Online MBA
                </Link>
              </li>
              <li>
                <Link href="/landing-page-online-mba" className="hover:text-white">
                  Distance MBA
                </Link>
              </li>
              <li>
                <Link href="/programme-online-mba" className="hover:text-white">
                  Executive MBA
                </Link>
              </li>
              <li>
                <Link href="/programme-online-mba" className="hover:text-white">
                  Correspondence MBA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-saffron">Resources</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/resource-distance-mba-guide" className="hover:text-white">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/specialization-marketing" className="hover:text-white">
                  Specializations
                </Link>
              </li>
              <li>
                <Link href="/compare-nmims-vs-symbiosis" className="hover:text-white">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/university-nmims" className="hover:text-white">
                  NMIMS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-saffron">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+918669661005" className="hover:text-white">
                  📞 +91 86696 61005
                </a>
              </li>
              <li>
                <a href="mailto:hello@distancembacollege.com" className="hover:text-white">
                  ✉️ hello@distancembacollege.com
                </a>
              </li>
              <li>📍 Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 MagicWorks IT Solutions Pvt. Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
