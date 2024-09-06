'use client'

import React, { useEffect, useState } from 'react'
import { HamburgerMenu } from '../../HamburgerMenu'
import { ScrollProgressBar } from './ScrollProgressBar'
import SwitchTheme from '@/components/SwitchTheme'

// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(100)

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

  console.log(scrollProgress)
  return (
    <div className="fixed left-0 top-0 z-20 w-full bg-nightDayMenu px-4 py-5">
      <div
        style={{ opacity: scrollProgress / 100 }}
        className={`${scrollProgress <= 9 && 'hidden'}`}
      >
        <SwitchTheme />
      </div>

      <div className="min-w-screen flex justify-between">
        <ScrollProgressBar />
        <h1>GZ</h1>

        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
