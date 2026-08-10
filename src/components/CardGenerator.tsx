import html2canvas from 'html2canvas'
import { useRef, useState } from 'react'

function MockMiniFigure() {
  return (
    <div className="relative h-40 w-28 shrink-0">
      <div className="absolute inset-x-5 bottom-0 h-24 rounded-[1.5rem] bg-gradient-to-b from-amber-700 to-amber-950 shadow-[0_20px_40px_rgba(0,0,0,0.35)]" />
      <div className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-full bg-amber-700" />
      <div className="absolute left-1/2 top-2 h-10 w-10 -translate-x-1/2 rounded-full border-2 border-amber-950/70 bg-[#f2d0a7]" />
      <div className="absolute left-[34%] top-7 h-2 w-2 rounded-full bg-slate-900" />
      <div className="absolute right-[34%] top-7 h-2 w-2 rounded-full bg-slate-900" />
      <div className="absolute left-1/2 top-9 h-1 w-4 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="absolute left-1/2 top-12 h-12 w-24 -translate-x-1/2 rounded-[2rem] bg-gradient-to-b from-amber-700 to-amber-900" />
      <div className="absolute left-0 top-12 h-4 w-4 rounded-full bg-amber-700" />
      <div className="absolute right-0 top-12 h-4 w-4 rounded-full bg-amber-700" />
    </div>
  )
}

export function DropCardGenerator() {
  const [caption, setCaption] = useState("I'm ready for Triple T")
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cardRef.current) return

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
      logging: false,
    })

    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'tungtuntooz-card.png'
    link.click()
  }

  return (
    <section className="glass-card flex min-h-[40rem] flex-col rounded-[2rem] p-4 sm:p-6">
      <div className="px-1 pb-4">
        <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300/80">Drop Card Generator</p>
        <h3 className="section-title mt-1">Build your own hype card</h3>
      </div>

      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-200">Card text</span>
          <input
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            placeholder="I'm ready for Triple T"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-400/20"
          />
        </label>

        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-3 sm:p-4">
          <div
            ref={cardRef}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.98))] p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />
            <div className="relative z-10 flex h-full min-h-[22rem] flex-col justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.45em] text-cyan-200/80">Youtooz-style drop card</p>
                  <h4 className="mt-2 font-display text-3xl font-black text-white">TungTungTooz</h4>
                </div>
                <div className="rounded-full border border-fuchsia-300/30 bg-fuchsia-500/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-fuchsia-200">
                  preview
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-center">
                <div className="flex justify-center rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4">
                  <MockMiniFigure />
                </div>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Custom hype line</p>
                  <p className="max-w-sm font-display text-3xl font-black leading-tight text-white sm:text-4xl">{caption || '...'}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Fan-made</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">PNG export</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Instant mockup</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>Triple T energy only</span>
                <span>Brainrot Factory × Youtooz</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 px-4 py-3 font-semibold text-slate-950 transition hover:brightness-110"
        >
          Download Card
        </button>
      </div>
    </section>
  )
}