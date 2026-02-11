'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { url: '#home', title: t('Menu.home') },
    { url: '#about', title: t('Menu.about') },
    { url: '#skills', title: t('Menu.skills') },
    { url: '#projects', title: t('Menu.projects') },
    { url: '#contact', title: t('Menu.contact') },
  ]

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/50 bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-lg font-bold text-foreground">
          GZ
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="font-mono text-sm text-muted-fg transition-colors hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <MobileMenu />
      </nav>
    </header>
  )
}
