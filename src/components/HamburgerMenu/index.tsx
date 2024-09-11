'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import SwitchTheme from '../SwitchTheme'

export function HamburgerMenu() {
  const [open, setOpen] = useState(false)
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
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      // backgroundColor: 'rgb(255,255,255)',
    },
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      // backgroundColor: 'rgb(255,255,255)',
    },
  }

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <div className="flex gap-5">
      <SwitchTheme />
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-8 w-10 flex-col justify-between md:hidden"
      >
        <motion.div
          animate={open ? 'opened' : 'closed'}
          variants={topVariants}
          className={`h-1 w-10 origin-left rounded bg-title transition-colors duration-0 dark:bg-simpleDark ${open && 'bg-white'}`}
        ></motion.div>
        <motion.div
          animate={open ? 'opened' : 'closed'}
          variants={centerVariants}
          className="h-1 w-10 rounded bg-title transition-colors duration-0 dark:bg-simpleDark"
        ></motion.div>
        <motion.div
          animate={open ? 'opened' : 'closed'}
          variants={bottomVariants}
          className={`h-1 w-10 origin-left rounded bg-title transition-colors duration-0 dark:bg-simpleDark ${open && 'bg-white'}`}
        ></motion.div>
      </button>

      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-overlay font-poppins text-5xl font-bold text-white hover:no-underline"
        >
          {links.map((link) => (
            <motion.div key={link.url} variants={listItemVarients}>
              <Link onClick={() => setOpen(!open)} href={link.url}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
