'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface GlobalContextType {
  isLightTheme: boolean
  setIsLightTheme: (value: boolean | ((prev: boolean) => boolean)) => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined,
)

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true)

  // Set initial theme based on localStorage or prefers-color-scheme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (
      storedTheme === 'dark' ||
      (!storedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setIsLightTheme(false)
    } else {
      document.documentElement.classList.remove('dark')
      setIsLightTheme(true)
    }
  }, [])

  // Update localStorage and theme class on changes
  useEffect(() => {
    if (isLightTheme) {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }, [isLightTheme])

  return (
    <GlobalContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)

  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return context
}
