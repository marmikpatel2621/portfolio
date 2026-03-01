import React from 'react'
import { Card, CardBody, CardHeader } from '@/app/components/Card'
import type { Certification } from '@/content/certifications'

type StatusTone = 'active' | 'soon' | 'expired' | 'no-expiry'

function formatMonthYear(isoDate: string): string {
  // ISO dates parse reliably in JS; keep it simple for static export.
  const d = new Date(isoDate)
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

function daysBetween(a: Date, b: Date): number {
  const ms = b.getTime() - a.getTime()
  return Math.floor(ms / (1000 * 60 * 60 * 24))
}

function getExpiryStatus(expiresOn?: string): { tone: StatusTone; label: string } {
  if (!expiresOn) return { tone: 'no-expiry', label: 'No expiration' }

  const now = new Date()
  const exp = new Date(expiresOn)

  // If expires today or earlier
  if (exp.getTime() <= now.getTime()) return { tone: 'expired', label: 'Expired' }

  const daysLeft = daysBetween(now, exp)

  // Tune this threshold if you want (30/60/90)
  if (daysLeft <= 60) return { tone: 'soon', label: `Expires soon (${daysLeft}d)` }

  return { tone: 'active', label: 'Active' }
}

function StatusPill({ tone, label }: { tone: StatusTone; label: string }) {
  const base =
    'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold'

  const cls =
    tone === 'expired'
      ? `${base} border-red-200 bg-red-50 text-red-700`
      : tone === 'soon'
      ? `${base} border-amber-200 bg-amber-50 text-amber-800`
      : tone === 'active'
      ? `${base} border-emerald-200 bg-emerald-50 text-emerald-700`
      : `${base} border-slate-200 bg-slate-50 text-slate-700`

  return <span className={cls}>{label}</span>
}

export function CertificationCard({ cert }: { cert: Certification }) {
  const status = getExpiryStatus(cert.expiresOn)

  const subtitle = cert.expiresOn
    ? `${cert.issuer} • Issued ${formatMonthYear(cert.issuedOn)} • Expires ${formatMonthYear(
        cert.expiresOn
      )}`
    : `${cert.issuer} • Issued ${formatMonthYear(cert.issuedOn)}`

  return (
    <Card className="h-full">
      <CardHeader
        title={cert.title}
        subtitle={subtitle}
        right={<StatusPill tone={status.tone} label={status.label} />}
      />

      <CardBody>
        <div className="flex flex-col gap-5">
          {/* Badge */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
              Badge
            </div>
            <a
              href={cert.badgeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
              title="Open badge"
            >
              <img
                src={cert.badgeUrl}
                alt={`${cert.title} badge`}
                className="h-20 w-auto"
                loading="lazy"
              />
            </a>
          </div>

          {/* Certificate image */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
              Certificate
            </div>
            <a
              href={cert.certificateImageUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
              title="Open certificate"
            >
              <img
                src={cert.certificateImageUrl}
                alt={`${cert.title} certificate`}
                className="w-full h-auto rounded-xl border border-slate-200"
                loading="lazy"
              />
            </a>
          </div>

          {/* Optional verify link */}
          {cert.verifyUrl ? (
            <div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="link-accent text-sm"
              >
                Verify credential →
              </a>
            </div>
          ) : null}
        </div>
      </CardBody>
    </Card>
  )
}
