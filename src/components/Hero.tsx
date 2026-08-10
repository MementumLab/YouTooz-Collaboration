import { useEffect, useMemo, useState } from 'react'

const targetDate = new Date('2026-09-15T00:00:00')

function formatPart(value: number) {
  return String(value).padStart(2, '0')
}

function getCountdown() {
  const diff = Math.max(targetDate.getTime() - Date.now(), 0)
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export function Hero() {
  const [countdown, setCountdown] = useState(getCountdown)

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const countdownTiles = useMemo(
    () => [
      { label: 'Days', value: countdown.days },
      { label: 'Hours', value: countdown.hours },
      { label: 'Minutes', value: countdown.minutes },
      { label: 'Seconds', value: countdown.seconds },
    ],
    [countdown],
  )

  return (
    <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-stretch">
      <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.14),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.15),_transparent_30%)]" />
        <div className="relative z-10 flex h-full flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-cyan-200/90">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1">Brainrot Factory × Youtooz</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Triple T preview</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-display max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              TungTungTooz
            </h2>
            <p className="max-w-2xl text-lg text-slate-200/90 sm:text-xl">
              Brainrot Factory × Youtooz – Coming soon 👀
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {countdownTiles.map((tile) => (
              <div key={tile.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-center">
                <div className="font-display text-3xl font-bold text-white">{formatPart(tile.value)}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-300">{tile.label}</div>
              </div>
            ))}
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-300">
            A chaotic, internet-native fan preview for the iconic log-bat energy of Tung Tung Tung Sahur. Built to feel like a drop page that should not exist, but absolutely does.
          </p>
        </div>
      </div>

      <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 sm:p-6 lg:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(236,72,153,0.14),rgba(34,211,238,0.12),rgba(250,204,21,0.12))]" />
        <div className="relative z-10 flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.35em] text-slate-300">
            <span>Official teaser placeholder</span>
            <span className="text-fuchsia-300">Stage 01</span>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center">
            <div className="flex h-44 w-full items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%),linear-gradient(135deg,rgba(168,85,247,0.28),rgba(34,211,238,0.18),rgba(249,115,22,0.18))] sm:h-56">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">Teaser image</p>
                <p className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">Insert the reveal art here</p>
                <p className="mt-2 text-sm text-white/70">For now it&apos;s a neon gradient and too much confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}