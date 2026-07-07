'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as const

export function Preloader() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    const start = performance.now()
    const duration = 1400

    let rafId: number
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      // ease-out so the counter sprints early and settles at the end
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * 100))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setDone(true)
        document.documentElement.style.overflow = ''
      }
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col justify-between bg-ink px-6 py-8 md:px-12"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-dim">
            <span>Guilherme Zaparoli</span>
            <span>Portfolio — 2026</span>
          </div>

          <div className="overflow-hidden">
            <motion.p
              className="font-display text-[18vw] leading-none text-bone md:text-[10vw]"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <em className="text-accent">{count}</em>
              <span className="text-dim">%</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
