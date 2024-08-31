'use client'

import { useEffect, useState } from 'react'

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    const scrollListener = () => {
      requestAnimationFrame(calculateScrollProgress)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div
      className="fixed left-0 top-0 h-[3px] rounded-lg bg-white"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}
