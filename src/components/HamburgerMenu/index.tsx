'use client'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

export function HamburgerMenu() {
  const [statusHamburgerMenu, setStatusHamburgerMenu] = useState(false)

  function onToggle() {
    setStatusHamburgerMenu(!statusHamburgerMenu)
    document.body.style.overflow = statusHamburgerMenu ? 'auto' : 'hidden'
  }

  return (
    <div>
      <label className="relative">
        <input type="checkbox" className="invisible w-5" onClick={onToggle} />

        <RxHamburgerMenu
          fontSize={24}
          className={`text-simple absolute bottom-0 left-0 right-0 top-0 transform transition-transform duration-300 ease-in-out dark:text-simpleDark ${
            !statusHamburgerMenu
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-180 scale-0 opacity-0'
          }`}
        />
      </label>

      <div
        className={`fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
          statusHamburgerMenu ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: statusHamburgerMenu ? 'auto' : 'none' }}
      >
        <div
          className={`fixed inset-0 bg-overlay transition-all duration-700 ease-in-out ${
            statusHamburgerMenu
              ? 'scale-150 rounded-none'
              : 'scale-0 rounded-full'
          }`}
          style={{
            transformOrigin: 'center',
          }}
        ></div>

        <div
          className={`relative flex h-screen w-full flex-1 items-center justify-center p-6 text-center shadow-lg transition-opacity delay-100 duration-500 ${
            statusHamburgerMenu
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-20 scale-0 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul
            className={`flex flex-col gap-5 transition-opacity delay-500 duration-300 ${
              statusHamburgerMenu ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <li className="mb-2">
              <a
                href="#"
                className="font-poppins text-5xl font-bold text-white hover:no-underline"
              >
                Início
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="font-poppins text-5xl font-bold text-white hover:no-underline"
              >
                Sobre
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="font-poppins text-5xl font-bold text-white hover:no-underline"
              >
                Habilidades
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="font-poppins text-5xl font-bold text-white hover:no-underline"
              >
                Projetos
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="font-poppins text-5xl font-bold text-white hover:no-underline"
              >
                Contato
              </a>
            </li>
          </ul>

          <IoMdClose
            onClick={onToggle}
            fontSize={24}
            className={`absolute right-2 top-7 transform text-white transition-transform delay-100 duration-300 ease-in-out ${
              statusHamburgerMenu
                ? 'rotate-180 scale-100 opacity-100'
                : 'rotate-0 scale-0 opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
