import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { COLORWAYS, DEFAULT_COLORWAY, type Colorway } from '../data/colorways'

function CharacterModel({ colorway, withAccessory }: { colorway: Colorway; withAccessory: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const accessoryRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.35
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.06
    }

    if (accessoryRef.current) {
      accessoryRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2.2) * 0.15
    }
  })

  return (
    <group ref={groupRef} scale={1.2} position={[0, -0.7, 0]}>
      <group>
        <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.72, 0.8, 2.65, 7, 1, false]} />
          <meshStandardMaterial color={colorway.body} roughness={0.8} metalness={0.05} flatShading />
        </mesh>

        <mesh position={[0, 1.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.58, 0.68, 0.8, 7, 1, false]} />
          <meshStandardMaterial color={colorway.body} roughness={0.82} metalness={0.04} flatShading />
        </mesh>

        <mesh position={[0, 2.18, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.44, 7, 7]} />
          <meshStandardMaterial color={colorway.body} roughness={0.74} metalness={0.05} flatShading />
        </mesh>

        <mesh position={[0, 2.12, 0.42]} castShadow>
          <planeGeometry args={[0.96, 0.92]} />
          <meshStandardMaterial color={colorway.trim} roughness={1} emissive={colorway.glow} emissiveIntensity={0.12} />
        </mesh>

        <mesh position={[-0.14, 2.2, 0.84]} castShadow>
          <sphereGeometry args={[0.065, 10, 10]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[0.14, 2.2, 0.84]} castShadow>
          <sphereGeometry args={[0.065, 10, 10]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[0, 2.05, 0.88]} rotation={[0, 0, 0.15]} castShadow>
          <boxGeometry args={[0.18, 0.05, 0.05]} />
          <meshStandardMaterial color={colorway.accent} emissive={colorway.glow} emissiveIntensity={0.2} />
        </mesh>

        <mesh position={[-0.95, 1.1, 0]} rotation={[0, 0, 0.35]} castShadow>
          <capsuleGeometry args={[0.13, 0.8, 4, 6]} />
          <meshStandardMaterial color={colorway.body} roughness={0.85} flatShading />
        </mesh>
        <mesh position={[0.95, 1.1, 0]} rotation={[0, 0, -0.35]} castShadow>
          <capsuleGeometry args={[0.13, 0.8, 4, 6]} />
          <meshStandardMaterial color={colorway.body} roughness={0.85} flatShading />
        </mesh>

        <mesh position={[-0.42, -0.95, 0.08]} rotation={[0, 0, -0.05]} castShadow>
          <capsuleGeometry args={[0.18, 0.86, 4, 6]} />
          <meshStandardMaterial color={colorway.trim} roughness={0.9} />
        </mesh>
        <mesh position={[0.42, -0.95, 0.08]} rotation={[0, 0, 0.05]} castShadow>
          <capsuleGeometry args={[0.18, 0.86, 4, 6]} />
          <meshStandardMaterial color={colorway.trim} roughness={0.9} />
        </mesh>

        <mesh position={[-0.42, -1.48, 0.14]} castShadow>
          <sphereGeometry args={[0.18, 8, 8]} />
          <meshStandardMaterial color={colorway.accent} />
        </mesh>
        <mesh position={[0.42, -1.48, 0.14]} castShadow>
          <sphereGeometry args={[0.18, 8, 8]} />
          <meshStandardMaterial color={colorway.accent} />
        </mesh>

        {withAccessory ? (
          <group ref={accessoryRef} position={[1.22, 0.72, 0.18]} rotation={[0.15, 0.2, -0.85]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.1, 0.12, 1.25, 6]} />
              <meshStandardMaterial color={colorway.glow} emissive={colorway.glow} emissiveIntensity={0.35} />
            </mesh>
            <mesh position={[0, 0.72, 0]} castShadow>
              <sphereGeometry args={[0.18, 8, 8]} />
              <meshStandardMaterial color={colorway.accent} />
            </mesh>
            <mesh position={[0, -0.72, 0]} castShadow>
              <sphereGeometry args={[0.14, 8, 8]} />
              <meshStandardMaterial color={colorway.trim} />
            </mesh>
          </group>
        ) : null}
      </group>
    </group>
  )
}

export function Viewer() {
  const [selectedColorway, setSelectedColorway] = useState<Colorway>(DEFAULT_COLORWAY)
  const [withAccessory, setWithAccessory] = useState(true)

  const paletteLabel = useMemo(() => selectedColorway.name, [selectedColorway])

  return (
    <section className="glass-card flex min-h-[40rem] flex-col overflow-hidden rounded-[2rem] p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">3D Viewer</p>
          <h3 className="section-title mt-1">Spin the Triple T figure</h3>
        </div>
        <label className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-200">
          <input
            type="checkbox"
            checked={withAccessory}
            onChange={(event) => setWithAccessory(event.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-white/10 accent-cyan-400"
          />
          accessory
        </label>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_34%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]">
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: selectedColorway.background }}
        />

        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-200">
          {paletteLabel}
        </div>

        <Canvas
          className="relative z-0 h-[32rem] w-full sm:h-[36rem]"
          shadows
          camera={{ position: [0, 1.2, 5.2], fov: 40 }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#030615"]} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 6, 5]} intensity={2.4} color={selectedColorway.glow} castShadow />
          <directionalLight position={[-5, 2, -3]} intensity={1.1} color={selectedColorway.accent} />
          <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.75}>
            <CharacterModel colorway={selectedColorway} withAccessory={withAccessory} />
          </Float>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.25, 0]} receiveShadow>
            <planeGeometry args={[8, 8]} />
            <shadowMaterial transparent opacity={0.3} />
          </mesh>
          <OrbitControls enablePan={false} minDistance={3.8} maxDistance={8} maxPolarAngle={Math.PI / 1.7} />
        </Canvas>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {COLORWAYS.map((colorway) => {
          const active = selectedColorway.name === colorway.name

          return (
            <button
              key={colorway.name}
              type="button"
              onClick={() => setSelectedColorway(colorway)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                active
                  ? 'border-cyan-300/40 bg-cyan-400/15 text-white shadow-neon'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/30 hover:bg-white/10'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorway.glow }} />
                {colorway.name}
              </span>
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        A simple low-poly figure built from basic primitives so the whole page stays lightweight, playful, and easy to deploy.
      </p>
    </section>
  )
}