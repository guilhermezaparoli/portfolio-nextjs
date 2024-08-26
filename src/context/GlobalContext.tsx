'use client'

import { createContext, ReactNode, useContext, useState } from "react"

interface GlobalContextType {
    isLightTheme: boolean;
    setIsLightTheme: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)


export function GlobalProvider({children}: {children: ReactNode}){
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true)
    return (
        <GlobalContext.Provider value={{isLightTheme, setIsLightTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    const context = useContext(GlobalContext)

    if(context === undefined){
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context
}