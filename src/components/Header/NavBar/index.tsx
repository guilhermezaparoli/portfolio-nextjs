'use client'

import React, { useEffect, useState } from 'react'
import { HamburgerMenu } from '../../HamburgerMenu'
import { ScrollProgressBar } from './ScrollProgressBar'
import SwitchTheme from '@/components/SwitchTheme'

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(100)
  const [isMounted, setIsMounted] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress = 100 - (scrollTop / scrollHeight) * 400
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

  useEffect(() => {
    if (scrollProgress > 81) {
      setIsMounted(true)
      setIsFadingOut(false)
    } else {
      if (!isFadingOut) {
        setIsFadingOut(true)
        setTimeout(() => {
          setIsMounted(false)
        }, 500)
      }
    }
  }, [scrollProgress])

  return (
    <div className="fixed left-0 top-0 z-20 w-full bg-sunnyDayMenu px-6 py-5 dark:bg-nightDayMenu">
      {/* {isMounted && (
        <div
          style={{
            opacity: isFadingOut ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <SwitchTheme />
        </div>
      )} */}
      <div className="min-w-screen flex justify-between">
        <ScrollProgressBar />
        <h1>GZ</h1>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
