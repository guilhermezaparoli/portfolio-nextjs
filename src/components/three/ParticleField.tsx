'use client'

import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const [count] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 200,
  )

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return pos
  }, [count])

  const velocities = useMemo(() => {
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      vel[i] = (Math.random() - 0.5) * 0.002
    }
    return vel
  }, [count])

  useFrame(() => {
    if (!pointsRef.current) return
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posArray[i3] += velocities[i3]
      posArray[i3 + 1] += velocities[i3 + 1]
      posArray[i3 + 2] += velocities[i3 + 2]

      if (Math.random() < 0.01) {
        velocities[i3] = (Math.random() - 0.5) * 0.002
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.002
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.002
      }

      if (Math.abs(posArray[i3]) > 5) posArray[i3] *= -0.9
      if (Math.abs(posArray[i3 + 1]) > 3) posArray[i3 + 1] *= -0.9
      if (Math.abs(posArray[i3 + 2]) > 2) posArray[i3 + 2] *= -0.9
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#a1a1aa"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
