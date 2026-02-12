'use client'

import { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const THRESHOLD = 1.8

export function ConstellationNetwork() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const [count] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 100,
  )

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2
      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001
    }
    return { positions: pos, velocities: vel }
  }, [count])

  const maxLines = (count * (count - 1)) / 2
  const linePositions = useMemo(
    () => new Float32Array(maxLines * 6),
    [maxLines],
  )

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posArray[i3] += velocities[i3]
      posArray[i3 + 1] += velocities[i3 + 1]
      posArray[i3 + 2] += velocities[i3 + 2]

      if (Math.abs(posArray[i3]) > 5) velocities[i3] *= -1
      if (Math.abs(posArray[i3 + 1]) > 3) velocities[i3 + 1] *= -1
      if (Math.abs(posArray[i3 + 2]) > 1) velocities[i3 + 2] *= -1
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    let lineIndex = 0
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArray[i * 3] - posArray[j * 3]
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1]
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < THRESHOLD) {
          const li = lineIndex * 6
          linePositions[li] = posArray[i * 3]
          linePositions[li + 1] = posArray[i * 3 + 1]
          linePositions[li + 2] = posArray[i * 3 + 2]
          linePositions[li + 3] = posArray[j * 3]
          linePositions[li + 4] = posArray[j * 3 + 1]
          linePositions[li + 5] = posArray[j * 3 + 2]
          lineIndex++
        }
      }
    }

    for (let i = lineIndex * 6; i < linePositions.length; i++) {
      linePositions[i] = 0
    }

    const lineGeom = linesRef.current.geometry
    lineGeom.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions.slice(0, lineIndex * 6), 3),
    )
    lineGeom.attributes.position.needsUpdate = true
    lineGeom.setDrawRange(0, lineIndex * 2)
  })

  return (
    <>
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
          size={0.04}
          color="#71717a"
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#27272a" transparent opacity={0.4} />
      </lineSegments>
    </>
  )
}
