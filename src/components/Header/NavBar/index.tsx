import React from 'react'
import { HamburgerMenu } from '../../HamburgerMenu'
import { ScrollProgressBar } from './ScrollProgressBar'

// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-nightDayMenu px-4 py-5">
      <ScrollProgressBar />
      <h1>Logo</h1>
      <HamburgerMenu />
    </div>
  )
}

export default NavBar
