'use client'

import { useGlobalContext } from '@/context/GlobalContext'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

export function ThemeToggle() {
  const { isLightTheme, setIsLightTheme } = useGlobalContext()

  return (
    <button
      onClick={() => setIsLightTheme(!isLightTheme)}
      className="rounded-lg p-2 text-muted-fg transition-colors hover:text-foreground"
      aria-label="Toggle theme"
    >
      {isLightTheme ? <MdSunny size={18} /> : <FaMoon size={16} />}
    </button>
  )
}
