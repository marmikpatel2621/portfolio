import Link from 'next/link'
import { profile } from '@/content/profile'

const nav = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
]

const BASE = '/portfolio'

const LINKS = {
  email: 'mailto:marmikaptel262@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marmik2621/',
  github: 'https://github.com/marmikpatel2621',
  resume: `${BASE}/Marmik_Patel_Resume.pdf`,
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur">
      <div className="container-app">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <div className="flex items-center gap-4 min-w-0">
            <Link href="/" className="flex items-center gap-4 group">
              <img
                src={`${BASE}/profile.jpg`}
                alt={profile.name}
                className="h-12 w-12 shrink-0 rounded-full border border-slate-200 bg-white object-cover shadow-sm"
              />
              <div className="min-w-0 leading-tight">
                <div className="truncate text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {profile.name}
                </div>
                <div className="truncate text-sm text-slate-500 sm:text-[15px]">
                  {profile.title}
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              className="btn-primary"
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              aria-label="Download resume PDF"
            >
              Download Resume
            </a>
            <a className="btn-secondary" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn-secondary" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn-secondary" href={LINKS.email}>
              Email
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-4 text-sm font-medium text-slate-600">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile quick actions */}
          <div className="ml-auto flex items-center gap-3 sm:hidden">
            <a className="text-sm font-semibold text-blue-700 hover:text-blue-800" href={LINKS.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="text-sm font-medium text-slate-600 hover:text-blue-700" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-sm font-medium text-slate-600 hover:text-blue-700" href={LINKS.email}>
              Email
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
