'use client'

import { Float, MeshDistortMaterial } from '@react-three/drei'

function Orb({
  position,
  scale,
  speed,
  distort,
}: {
  position: [number, number, number]
  scale: number
  speed: number
  distort: number
}) {
  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[scale, 32, 32]} />
        <MeshDistortMaterial
          color="#1e1e22"
          emissive="#27272a"
          emissiveIntensity={0.3}
          roughness={0.8}
          metalness={0.2}
          distort={distort}
          speed={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

export function GlowingOrbs() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Orb position={[-3, 1.5, -2]} scale={1.2} speed={1.5} distort={0.3} />
      <Orb position={[3.5, -1, -1.5]} scale={0.9} speed={1.2} distort={0.4} />
      <Orb position={[0.5, 2.5, -3]} scale={0.7} speed={1.8} distort={0.25} />
    </>
  )
}
