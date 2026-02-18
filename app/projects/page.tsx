import Link from 'next/link'
import { projects } from '@/content/projects'
import { Card, CardBody, CardHeader } from '@/app/components/Card'
import { Badge } from '@/app/components/Badge'

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Projects</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-700">
          A curated set of engagements and platform work. Summaries and highlights are taken from your knowledge base; no additional roles or claims are added.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.slug} className="h-full">
            <CardHeader
              title={p.name}
              subtitle={`${p.client} • ${p.year}`}
              right={<Badge>{p.industry}</Badge>}
            />
            <CardBody>
              <p className="text-sm text-slate-700">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              {p.diagram && (
                <div className="mt-4">
                  <Badge>Architecture diagram</Badge>
                </div>
              )}
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

      <div className="mt-10">
        <Link href="/" className="link-accent text-sm">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
