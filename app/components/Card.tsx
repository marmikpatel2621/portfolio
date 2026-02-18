import clsx from 'clsx'

export function Card({ children, className }:{ children: React.ReactNode; className?: string }){
  return (
    <div className={clsx('card card-hover', className)}>
      {children}
    </div>
  )
}

export function CardHeader({ title, subtitle, right }:{ title: string; subtitle?: string; right?: React.ReactNode }){
  return (
    <div className="flex items-start justify-between gap-6 border-b border-slate-200 px-6 py-5">
      <div>
        <div className="text-base font-semibold text-slate-900">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-slate-600">{subtitle}</div> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  )
}

export function CardBody({ children }:{ children: React.ReactNode }){
  return <div className="px-6 py-5">{children}</div>
}
