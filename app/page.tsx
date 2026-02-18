import Link from 'next/link'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { skills } from '@/content/skills'
import { experiences } from '@/content/experience'
import { Section } from '@/app/components/Section'
import { Card, CardBody, CardHeader } from '@/app/components/Card'
import { Badge } from '@/app/components/Badge'

function Metric({ label, value }:{ label: string; value: string }){
  return (
    <div className="card card-hover px-5 py-4">
      <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
    </div>
  )
}

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-14 shadow-[0_14px_50px_rgba(15,23,42,0.08)] sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" aria-hidden />
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <Badge tone="strong">{profile.title}</Badge>
            <Badge>{profile.location}</Badge>
            <Badge>{profile.experience} experience</Badge>
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Architecting data platforms with measurable performance, cost, and reliability outcomes.
          </h1>
          <p className="prose-tight mt-4 text-base text-slate-700">
            {profile.summary}
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Metric label="Modernization scope" value="700+ databases" />
            <Metric label="Ingestion throughput" value="1.2B+ rows/hour" />
            <Metric label="Reliability / cost" value="99.8% / 20%↓" />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/#experience"
              className="btn-primary"
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              className="btn-secondary"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experiences.map((e) => (
            <Card key={e.title}>
              <CardHeader title={e.title} subtitle={`${e.scope} • ${e.timeframe}`} />
              <CardBody>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <Card key={p.slug} className="h-full">
              <CardHeader
                title={p.name}
                subtitle={`${p.client} • ${p.year}`}
                right={<Badge>{p.industry}</Badge>}
              />
              <CardBody>
                <p className="text-sm text-slate-700">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 6).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="link-accent text-sm"
                  >
                    Read details →
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/projects"
            className="btn-secondary"
          >
            Browse all projects
          </Link>
        </div>
      </Section>

      <Section id="skills" title="What I work with">
        <div className="grid gap-6 md:grid-cols-2">
          {skills.categories.map((c) => (
            <Card key={c.name}>
              <CardHeader title={c.name} />
              <CardBody>
                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      
      <Section id="certifications" title="Certifications">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader title="SnowPro Core Certified" subtitle="Snowflake • 2024" />
            <CardBody>
              <p className="text-sm text-slate-700">Snowflake certification listed on resume.</p>
            </CardBody>
          </Card>
        </div>
      </Section>

    <Section id="education" title="Education">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader
              title="Master of Science in Computer Science"
              subtitle="University of Missouri – Kansas City, MO • Jan 2016 – Dec 2017"
            />
            <CardBody>
              <p className="text-sm text-slate-700">GPA: 3.95 / 4.00</p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader
              title="Bachelor of Engineering in Computer Engineering"
              subtitle="Gujarat Technological University – Ahmedabad, India • Aug 2011 – May 2015"
            />
            <CardBody>
              <p className="text-sm text-slate-700">GPA: 8.6 / 10.00</p>
            </CardBody>
          </Card>
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <div className="card card-hover p-7 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-slate-900">Location</div>
              <a className="mt-1 inline-block text-sm text-blue-700 hover:text-blue-800" rel="noreferrer">
                Spring Hill, Kansas - 66083
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Email</div>
              <a className="mt-1 inline-block text-sm text-blue-700 hover:text-blue-800" href="mailto:marmikaptel262@gmail.com">
                marmikaptel262@gmail.com
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Contact</div>
              <a className="mt-1 inline-block text-sm text-blue-700 hover:text-blue-800">
                +1 816-456-7598
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">LinkedIn</div>
              <a className="mt-1 inline-block text-sm text-blue-700 hover:text-blue-800" href="https://www.linkedin.com/in/marmik2621/" target="_blank" rel="noreferrer">
                linkedin.com/in/marmik2621
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">GitHub</div>
              <a className="mt-1 inline-block text-sm text-blue-700 hover:text-blue-800" href="https://github.com/marmikpatel2621" target="_blank" rel="noreferrer">
                github.com/marmikpatel2621
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900">Resume</div>
              <a className="mt-1 inline-block text-sm text-blue-700 hover:text-blue-800" href="/portfolio/Marmik_Patel_Resume.pdf" target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </div>

            


          </div>
        </div>
      </Section>

    </div>
  )
}