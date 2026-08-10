export function Footer() {
  return (
    <footer className="glass-card rounded-[2rem] px-5 py-6 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Disclaimer</p>
          <p className="text-sm leading-6 text-slate-200">
            Unofficial fan project. Not affiliated with Youtooz or Mementum Lab / Brainrot Factory.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" href="#" onClick={(event) => event.preventDefault()}>
            Official Youtooz
          </a>
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" href="#" onClick={(event) => event.preventDefault()}>
            Brainrot Factory
          </a>
          <a className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" href="#" onClick={(event) => event.preventDefault()}>
            X / Instagram / TikTok
          </a>
        </div>
      </div>
    </footer>
  )
}