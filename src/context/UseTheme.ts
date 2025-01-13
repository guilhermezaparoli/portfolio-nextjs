'use client'
import { useEffect, useState } from 'react'

export function UseTheme() {
  const [isLightTheme, setIsLightTheme] = useState<boolean | undefined>(
    undefined,
  )

  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme') || 'dark'
    setIsLightTheme(themeLocalStorage === 'light')
  }, [])

  useEffect(() => {
    if (isLightTheme === undefined) return

    if (isLightTheme) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }

    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark')
  }, [isLightTheme])

  return {
    isLightTheme,
    setIsLightTheme,
  }
}
