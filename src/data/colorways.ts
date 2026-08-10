export type ColorwayName = 'Classic Wood' | 'Glow' | 'Midnight' | 'Rainbow'

export type Colorway = {
  name: ColorwayName
  body: string
  trim: string
  accent: string
  glow: string
  background: string
}

export const COLORWAYS: Colorway[] = [
  {
    name: 'Classic Wood',
    body: '#8c5a33',
    trim: '#3f2416',
    accent: '#d6a46b',
    glow: '#f59e0b',
    background: 'radial-gradient(circle at top, rgba(245, 158, 11, 0.18), transparent 40%)',
  },
  {
    name: 'Glow',
    body: '#44c4c8',
    trim: '#0f172a',
    accent: '#d9f99d',
    glow: '#22d3ee',
    background: 'radial-gradient(circle at top, rgba(34, 211, 238, 0.22), transparent 42%)',
  },
  {
    name: 'Midnight',
    body: '#1f2a44',
    trim: '#0f1220',
    accent: '#a855f7',
    glow: '#60a5fa',
    background: 'radial-gradient(circle at top, rgba(96, 165, 250, 0.2), transparent 42%)',
  },
  {
    name: 'Rainbow',
    body: '#ef4444',
    trim: '#1e1b4b',
    accent: '#facc15',
    glow: '#f472b6',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(34, 211, 238, 0.18), rgba(250, 204, 21, 0.16))',
  },
]

export const DEFAULT_COLORWAY = COLORWAYS[0]