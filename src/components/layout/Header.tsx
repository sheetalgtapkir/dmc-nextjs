import Link from 'next/link'

export interface HeaderProps {
  sticky?: boolean
}

export function Header({ sticky = true }: HeaderProps) {
  return (
    <header
      className={`${sticky ? 'sticky top-0' : ''} z-[50] border-b border-[rgba(203,213,225,0.5)] bg-[rgba(250,247,240,0.92)] backdrop-blur-[12px] backdrop-saturate-[140%]`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-[clamp(20px,4vw,48px)] py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-display text-[20px] font-medium leading-none tracking-[-0.01em] text-[#0B1F4D] hover:text-[#0B1F4D]"
        >
          <svg className="h-[30px] w-8 shrink-0" viewBox="0 0 100 95" aria-hidden="true">
            <path
              d="M 12 72 L 12 40 L 50 10 L 88 40 L 88 72"
              fill="none"
              stroke="#0B1F4D"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 5 85 Q 50 102 95 80"
              fill="none"
              stroke="#E8930E"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <span>
            <span className="font-medium text-[#0B1F4D]">Distance </span>
            <span className="font-bold text-[#E8930E]">MBA</span>
            <span className="font-medium text-[#0B1F4D]"> College</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 font-body text-[14px] font-medium text-[#475569] min-[881px]:flex"
          aria-label="Main"
        >
          <div className="group relative">
            <button className="inline-flex cursor-pointer items-center gap-1 font-medium text-[#475569] hover:text-[#0B1F4D]">
              Programmes
              <span className="text-[10px] opacity-60">▾</span>
            </button>
            <div className="absolute left-[-16px] top-full mt-2 hidden min-w-[220px] rounded-[8px] border border-[#CBD5E1] bg-white p-3 shadow-[0_12px_28px_-16px_rgba(11,31,77,0.12)] group-hover:block">
              <Link
                href="/programme-online-mba"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Online MBA
              </Link>
              <Link
                href="/landing-page-online-mba"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Distance MBA
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Executive MBA
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Correspondence MBA
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="inline-flex cursor-pointer items-center gap-1 font-medium text-[#475569] hover:text-[#0B1F4D]">
              Universities
              <span className="text-[10px] opacity-60">▾</span>
            </button>
            <div className="absolute left-[-16px] top-full mt-2 hidden min-w-[220px] rounded-[8px] border border-[#CBD5E1] bg-white p-3 shadow-[0_12px_28px_-16px_rgba(11,31,77,0.12)] group-hover:block">
              <Link
                href="/university-nmims"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                NMIMS
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Symbiosis (SCDL/SSODL)
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Amity Online
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                Manipal University Jaipur
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                BITS Pilani WILP
              </Link>
              <Link
                href="#"
                className="block rounded-[4px] p-3 text-[14px] font-medium text-[#1F2937] hover:bg-[#F1F5F9] hover:text-[#0B1F4D]"
              >
                View all 25+ →
              </Link>
            </div>
          </div>

          <Link href="/compare-nmims-vs-symbiosis" className="text-[#475569] hover:text-[#0B1F4D]">
            Compare
          </Link>
          <Link href="/resource-distance-mba-guide" className="text-[#475569] hover:text-[#0B1F4D]">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+918669661005"
            className="hidden items-center gap-2 text-[14px] font-semibold text-[#0B1F4D] before:text-[16px] before:opacity-70 before:content-['☎'] min-[661px]:inline-flex"
          >
            +91 86696 61005
          </a>
          <Link
            href="/#lead"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] border-[1.5px] border-transparent bg-[#E8930E] px-[18px] py-[10px] font-body text-[14px] font-semibold leading-none text-[#0B1F4D] shadow-[0_1px_0_rgba(11,31,77,0.08),0_4px_12px_rgba(232,147,14,0.25)] transition-[transform,box-shadow,background,color] duration-200 hover:-translate-y-px hover:bg-[#d8830a] hover:text-[#0B1F4D] hover:shadow-[0_1px_0_rgba(11,31,77,0.08),0_8px_20px_rgba(232,147,14,0.32)]"
          >
            Talk to a counsellor
          </Link>
          <button
            className="hidden h-8 w-8 cursor-pointer bg-transparent p-1.5 max-[880px]:block"
            aria-label="Open menu"
            type="button"
          >
            <span className="mb-1 block h-0.5 w-full rounded-[1px] bg-[#0B1F4D] transition duration-200" />
            <span className="mb-1 block h-0.5 w-full rounded-[1px] bg-[#0B1F4D] transition duration-200" />
            <span className="block h-0.5 w-full rounded-[1px] bg-[#0B1F4D] transition duration-200" />
          </button>
        </div>
      </div>
    </header>
  )
}
