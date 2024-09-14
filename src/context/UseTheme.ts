'use client'
import { useEffect, useState } from 'react'

export function UseTheme() {
  // Initialize state based on localStorage value
  const getInitialTheme = () => {
    const themeLocalStorage = localStorage.getItem('theme') || 'light'
    return themeLocalStorage === 'light'
  }

  const [isLightTheme, setIsLightTheme] = useState<boolean | undefined>(
    getInitialTheme,
  )

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [isLightTheme]) // Add isLightTheme as a dependency to update the class when it changes

  useEffect(() => {
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark')
  }, [isLightTheme])

  return {
    isLightTheme,
    setIsLightTheme,
  }
}
