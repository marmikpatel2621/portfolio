import Link from 'next/link'
import { projects } from '@/content/projects'
import { Card, CardBody, CardHeader } from '@/app/components/Card'
import { Badge } from '@/app/components/Badge'
import { DiagramViewer } from '@/app/components/DiagramViewer'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectDetailPage({ params }:{ params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Project not found</h1>
        <div className="mt-6">
          <Link href="/projects" className="link-accent text-sm">
            ← Back to projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="strong">{project.client}</Badge>
          <Badge>{project.year}</Badge>
          <Badge>{project.industry}</Badge>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{project.name}</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader title="Highlights" subtitle="" />
        <CardBody>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </CardBody>
      </Card>

      {project.diagram && (
        <div className="mt-8">
          <Card>
            <CardHeader title="Architecture" subtitle="High-level system flow derived from the project architecture notes." />
            <CardBody>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <DiagramViewer src={project.diagram.src} alt={project.diagram.alt} label={project.name} />
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      <div className="mt-10 flex gap-6">
        <Link href="/projects" className="link-accent text-sm">
          ← Back to projects
        </Link>
        <Link href="/" className="link-accent text-sm">
          Home
        </Link>
      </div>
    </div>
  )
}
