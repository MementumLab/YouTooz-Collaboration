import { lazy, Suspense } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'

const Viewer = lazy(() => import('./components/Viewer').then((module) => ({ default: module.Viewer })))
const DropCardGenerator = lazy(() =>
  import('./components/CardGenerator').then((module) => ({ default: module.DropCardGenerator })),
)

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),_transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent_92%)]" />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Fan preview site</p>
            <h1 className="font-display text-lg font-bold tracking-wide">TungTungTooz</h1>
          </div>
          <div className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-xs font-medium text-fuchsia-200">
            Unofficial Brainrot Factory × Youtooz concept
          </div>
        </header>

        <Hero />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Suspense fallback={<FeatureSkeleton title="3D Viewer" />}> 
            <Viewer />
          </Suspense>
          <Suspense fallback={<FeatureSkeleton title="Drop Card Generator" />}> 
            <DropCardGenerator />
          </Suspense>
        </section>

        <Footer />
      </main>
    </div>
  )
}

function FeatureSkeleton({ title }: { title: string }) {
  return (
    <div className="glass-card flex min-h-[40rem] flex-col rounded-[2rem] p-4 sm:p-6">
      <div className="px-1 pb-4">
        <div className="h-3 w-24 rounded-full bg-white/10" />
        <div className="mt-3 h-8 w-56 max-w-full rounded-2xl bg-white/10" />
      </div>
      <div className="flex flex-1 items-center justify-center rounded-[1.5rem] border border-white/10 bg-slate-950/40">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl bg-cyan-400/30" />
          <p className="mt-4 text-sm text-slate-300">Loading {title.toLowerCase()}...</p>
        </div>
      </div>
    </div>
  )
}

export default App