'use client'
import { useEffect, useState } from 'react'

export function UseTheme() {
  const [isLightTheme, setIsLightTheme] = useState<boolean | undefined>(
    undefined,
  )

  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme') || 'light'
    setIsLightTheme(themeLocalStorage === 'light')
  }, []) // Run only on the client side, on the first render

  useEffect(() => {
    if (isLightTheme === undefined) return // Prevent updating before the theme is set

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
