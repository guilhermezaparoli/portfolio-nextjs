'use client'

import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'

interface SceneContainerProps {
  children: ReactNode
  className?: string
}

export function SceneContainer({
  children,
  className = '',
}: SceneContainerProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        {children}
      </Canvas>
    </div>
  )
}
