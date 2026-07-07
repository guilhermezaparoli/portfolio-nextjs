'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'

const EASE = [0.16, 1, 0.3, 1] as const

export function Header() {
  const t = useTranslations('Header')

  const links = [
    { url: '#about', index: '01', title: t('Menu.about') },
    { url: '#skills', index: '02', title: t('Menu.skills') },
    { url: '#projects', index: '03', title: t('Menu.projects') },
    { url: '#contact', index: '04', title: t('Menu.contact') },
  ]

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full mix-blend-difference"
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, delay: 2.2, ease: EASE }}
    >
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <a
          href="#home"
          className="font-display text-xl italic text-bone"
          aria-label="Back to top"
        >
          GZ<span className="not-italic text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="text-bone/70 group font-mono text-xs uppercase tracking-widest transition-colors hover:text-bone"
            >
              <sup className="mr-1 text-accent">{link.index}</sup>
              <span className="link-sweep">{link.title}</span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        <MobileMenu />
      </nav>
    </motion.header>
  )
}
