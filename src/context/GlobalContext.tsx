'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext } from 'react'
import { UseTheme } from './UseTheme'

interface GlobalContextType {
  isLightTheme: boolean | undefined;
  setIsLightTheme: Dispatch<SetStateAction<boolean | undefined>>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined,
)

export function GlobalProvider({ children }: { children: ReactNode }) {
  const { isLightTheme, setIsLightTheme } = UseTheme()

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
