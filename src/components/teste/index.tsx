'use client'

import { useGlobalContext } from '@/context/GlobalContext'

const Teste = () => {
  const { setIsLightTheme } = useGlobalContext()
  return (
    <button
      className="text-white"
      onClick={() => setIsLightTheme((prev) => !prev)}
    >
      Mudar o tema
    </button>
  )
}

export default Teste
