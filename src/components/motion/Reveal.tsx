'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Distance (px) the content travels up while fading in. */
  y?: number
}

/** Fade + rise once the element scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

interface LineRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Masked line reveal — content slides up from behind a clipping box. */
export function LineReveal({
  children,
  className,
  delay = 0,
}: LineRevealProps) {
  return (
    // the observed element must be the visible mask — the inner span starts
    // fully clipped, so IntersectionObserver would never report it in view
    <motion.span
      className={`block overflow-hidden ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      <motion.span
        className="block will-change-transform"
        variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
