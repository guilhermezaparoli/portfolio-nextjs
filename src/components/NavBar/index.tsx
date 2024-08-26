import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="flex items-center gap-16">
      <button className="text-center text-xl font-medium text-white">
        Início
      </button>
      <button className="text-center text-xl font-medium text-white">
        Sobre
      </button>
      <button className="text-center text-xl font-medium text-white">
        Habilidades
      </button>
      <button className="text-center text-xl font-medium text-white">
        Projetos
      </button>
      <button className="text-center text-xl font-medium text-white">
        Contato
      </button>

      <div className="flex items-center gap-5">
        <FaGithub className="cursor-pointer text-white" fontSize={30} />
        <FaInstagram className="cursor-pointer text-white" fontSize={30} />
        <FaLinkedin className="cursor-pointer text-white" fontSize={30} />
      </div>
    </div>
  )
}

export default NavBar
