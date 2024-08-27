import React from 'react'
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="font-DM_Sans text-center text-base font-medium text-white">
        Início
      </button>
      <button className="font-DM_Sans text-center text-base font-medium text-white">
        Sobre
      </button>
      <button className="font-DM_Sans text-center text-base font-medium text-white">
        Habilidades
      </button>
      <button className="font-DM_Sans text-center text-base font-medium text-white">
        Projetos
      </button>
      <button className="font-DM_Sans text-center text-base font-medium text-white">
        Contato
      </button>

      {/* <div className="flex items-center gap-5">
        <FaGithub className="cursor-pointer text-white" fontSize={15} />
        <FaInstagram className="cursor-pointer text-white" fontSize={15} />
        <FaLinkedin className="cursor-pointer text-white" fontSize={15} />
      </div> */}
    </div>
  )
}

export default NavBar
