import React from 'react'
import { HamburgerMenu } from '../HamburguerMenu'

// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <h1>Logo</h1>
      <HamburgerMenu />
    </div>
  )
}

export default NavBar
