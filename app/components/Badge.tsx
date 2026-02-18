import clsx from 'clsx'

export function Badge({ children, tone = 'neutral' }:{ children: React.ReactNode; tone?: 'neutral' | 'strong' }){
  return (
    <span className={clsx(
      'inline-flex items-center rounded-full border px-2.5 py-1 text-xs',
      tone === 'strong'
        ? 'border-blue-600 bg-blue-600 text-white'
        : 'border-slate-200 bg-slate-50 text-slate-700'
    )}>
      {children}
    </span>
  )
}
