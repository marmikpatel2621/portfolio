import React from 'react'

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string
  title: string
  eyebrow?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-14 pb-3 sm:pt-16 sm:pb-5 md:pt-20 md:pb-8">
      <div className="container-app">
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
            {eyebrow}
          </div>
        ) : null}

        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-10">
          {title}
        </h2>

        {children}
      </div>
    </section>
  )
}