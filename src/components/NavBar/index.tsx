import React from 'react'
import { HamburgerMenu } from '../HamburguerMenu'

// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1>Logo</h1>
      <HamburgerMenu />

      {/* <button className="text-center font-DM_Sans text-base font-medium text-white">
        Início
      </button>
      <button className="text-center font-DM_Sans text-base font-medium text-white">
        Sobre
      </button>
      <button className="text-center font-DM_Sans text-base font-medium text-white">
        Habilidades
      </button>
      <button className="text-center font-DM_Sans text-base font-medium text-white">
        Projetos
      </button>
      <button className="text-center font-DM_Sans text-base font-medium text-white">
        Contato
      </button> */}

      {/* <div className="flex items-center gap-5">
        <FaGithub className="cursor-pointer text-white" fontSize={15} />
        <FaInstagram className="cursor-pointer text-white" fontSize={15} />
        <FaLinkedin className="cursor-pointer text-white" fontSize={15} />
      </div> */}
    </div>
  )
}

export default NavBar
