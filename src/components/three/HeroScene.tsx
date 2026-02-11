'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  const [count] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 400 : 800,
  )

  const { positions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const orig = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2 + Math.random() * 3
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = (Math.random() - 0.5) * 2
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      orig[i * 3] = x
      orig[i * 3 + 1] = y
      orig[i * 3 + 2] = z
    }
    return { positions: pos, originalPositions: orig }
  }, [count])

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (!pointsRef.current) return
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array
    const mx = mouseRef.current.x * viewport.width * 0.5
    const my = mouseRef.current.y * viewport.height * 0.5

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const dx = posArray[i3] - mx
      const dy = posArray[i3 + 1] - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - dist / 2)

      posArray[i3] = THREE.MathUtils.lerp(
        posArray[i3],
        originalPositions[i3] + dx * influence * 0.3,
        0.02,
      )
      posArray[i3 + 1] = THREE.MathUtils.lerp(
        posArray[i3 + 1],
        originalPositions[i3 + 1] + dy * influence * 0.3,
        0.02,
      )
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
        size={0.015}
        color="#a1a1aa"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export function HeroScene() {
  return (
    <>
      <InteractiveParticles />
    </>
  )
}
