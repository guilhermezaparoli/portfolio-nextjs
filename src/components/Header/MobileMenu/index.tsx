'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageSwitcher } from '../LanguageSwitcher'

const EASE = [0.76, 0, 0.24, 1] as const

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    setMounted(true)
  }, [])

  useLayoutEffect(() => {
    if (!isOpen) return

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])

  const links = [
    { url: '#home', index: '00', title: t('Menu.home') },
    { url: '#about', index: '01', title: t('Menu.about') },
    { url: '#skills', index: '02', title: t('Menu.skills') },
    { url: '#projects', index: '03', title: t('Menu.projects') },
    { url: '#contact', index: '04', title: t('Menu.contact') },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-px w-6 bg-bone transition-all duration-300 ${
            isOpen ? 'translate-y-[3.5px] rotate-45' : ''
          }`}
        />
        <span
          className={`h-px w-6 bg-bone transition-all duration-300 ${
            isOpen ? '-translate-y-[3.5px] -rotate-45' : ''
          }`}
        />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28"
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <nav className="flex flex-col">
                  {links.map((link, i) => (
                    <span
                      key={link.url}
                      className="overflow-hidden border-b border-line-soft"
                    >
                      <motion.a
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className="flex items-baseline gap-4 py-4 font-display text-4xl text-bone"
                        initial={{ y: '110%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '110%' }}
                        transition={{
                          duration: 0.6,
                          delay: 0.15 + i * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <sup className="font-mono text-xs text-accent">
                          {link.index}
                        </sup>
                        <em>{link.title}</em>
                      </motion.a>
                    </span>
                  ))}
                </nav>

                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-faint">
                    © {new Date().getFullYear()}
                  </span>
                  <LanguageSwitcher />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  )
}
