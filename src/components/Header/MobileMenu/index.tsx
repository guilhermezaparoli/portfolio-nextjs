'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { ThemeToggle } from '../ThemeToggle'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const links = [
    { url: '#home', title: t('Menu.home') },
    { url: '#about', title: t('Menu.about') },
    { url: '#skills', title: t('Menu.skills') },
    { url: '#projects', title: t('Menu.projects') },
    { url: '#contact', title: t('Menu.contact') },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        aria-label="Menu"
      >
        <span
          className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light text-foreground transition-colors hover:text-muted-fg"
            >
              {link.title}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  )
}
