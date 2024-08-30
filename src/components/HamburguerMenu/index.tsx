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
          className={`absolute bottom-0 left-0 right-0 top-0 transform text-white transition-transform duration-300 ease-in-out ${
            !statusHamburgerMenu
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-180 scale-0 opacity-0'
          }`}
        />
      </label>

      {statusHamburgerMenu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setStatusHamburgerMenu(false)}
          ></div>
          <div
            className="fixed inset-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-overlay relative z-10 flex h-screen w-full items-center justify-center p-6 shadow-lg">
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Início
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Sobre
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Option 3
                  </a>
                </li>
              </ul>

              <IoMdClose
                onClick={onToggle}
                fontSize={24}
                className={`absolute left-0 right-0 transform text-white transition-transform duration-300 ease-in-out ${
                  statusHamburgerMenu
                    ? 'rotate-0 scale-100 opacity-100'
                    : 'rotate-180 scale-0 opacity-0'
                }`}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
