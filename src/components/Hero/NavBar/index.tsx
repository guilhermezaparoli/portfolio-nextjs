'use client'

import React, { useEffect, useState } from 'react'
import { HamburgerMenu } from '../../HamburgerMenu'
import { ScrollProgressBar } from './ScrollProgressBar'
import SwitchTheme from '@/components/SwitchTheme'
import Link from "next/link"

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(100)
  const [isMounted, setIsMounted] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const links = [
    {
      url: '#inicio',
      title: 'Início',
    },
    {
      url: '#sobre',
      title: 'Sobre',
    },
    {
      url: '#habilidades',
      title: 'Habilidades',
    },
    {
      url: '#projetos',
      title: 'Projetos',
    },
    {
      url: '#contato',
      title: 'Contato',
    },
  ]

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
    <div className="fixed left-0 top-0 z-20 w-full bg-sunnyDayMenu px-6 py-5 dark:bg-nightDayMenu md:px-36 md:py-8">
      
      <div className="min-w-screen flex justify-between">
        <ScrollProgressBar />
        <div className="hidden md:flex gap-4">
        {links.map((link) => (
            <Link className="text-xl font-poppins font-bold text-title md:text-darkTitle" key={link.url} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      <div className="md:hidden">
        <Link href="#inicio">
        <h1>GZ</h1>
        </Link>
      </div>
        <HamburgerMenu />
      </div>

    </div>
  )
}

export default NavBar
