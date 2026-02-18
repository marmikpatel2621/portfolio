export function Footer() {
  return (
    <footer className="border-t border-slate-200/70">
      <div className="container-app py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Marmik Patel</div>
          <div className="text-xs">
            Built as a static site (Next.js export). Content sourced from your knowledge base.
          </div>
        </div>
      </div>
    </footer>
  )
}
