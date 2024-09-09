'use client'

import { HamburgerMenu } from '../../HamburgerMenu'
import { ScrollProgressBar } from './ScrollProgressBar'

import Link from 'next/link'

const NavBar = () => {
  const links = [
    {
      url: '#inicio',
      title: 'Início',
    },
    {
      url: '#sobre',
      title: 'Sobre',
    },
    {
      url: '#habilidades',
      title: 'Habilidades',
    },
    {
      url: '#projetos',
      title: 'Projetos',
    },
    {
      url: '#contato',
      title: 'Contato',
    },
  ]

  return (
    <div className="fixed left-0 top-0 z-20 w-full bg-sunnyDayMenu px-6 py-5 dark:bg-nightDayMenu md:px-36 md:py-8">
      <div className="min-w-screen flex justify-between">
        <ScrollProgressBar />
        <div className="hidden gap-4 md:flex">
          {links.map((link) => (
            <Link
              className="font-poppins text-xl font-bold text-title dark:text-simpleDark"
              key={link.url}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Link href="#inicio">
            <h1>GZ</h1>
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
