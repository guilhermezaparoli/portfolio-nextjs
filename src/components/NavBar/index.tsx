import React from 'react'
import { HamburgerMenu } from '../HamburguerMenu'
import { ScrollProgressBar } from '../ScrollProgressBar'

// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="bg-nightDayMenu fixed left-0 top-0 z-20 flex w-full items-center justify-between px-4 py-5">
      <ScrollProgressBar />
      <h1>Logo</h1>
      <HamburgerMenu />
    </div>
  )
}

export default NavBar
