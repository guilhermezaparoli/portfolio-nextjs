'use client'

import { useGlobalContext } from '@/context/GlobalContext'

const SwitchTheme = () => {
  const { setIsLightTheme, isLightTheme } = useGlobalContext()

  const onToggle = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <label className="relative inline-block h-6 w-12">
      <input
        type="checkbox"
        checked={isLightTheme}
        onChange={onToggle}
        className="absolute h-0 w-0 opacity-0"
      />
      <span
        className={`absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out ${isLightTheme ? 'bg-blue-500' : 'bg-gray-400'}`}
      >
        <span
          className={`justify-centerblock flex h-[22px] w-[22px] items-center rounded-full bg-yellow-400 transition-transform duration-300 ease-in-out ${isLightTheme ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </span>
    </label>
  )
}

export default SwitchTheme
