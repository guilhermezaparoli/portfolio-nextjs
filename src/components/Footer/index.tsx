'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const socials = [
  { label: 'GitHub', href: 'https://github.com/guilhermezaparoli' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/guilherme.zaparoli/',
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5517996299200',
  },
]

function useLocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function update() {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'America/Sao_Paulo',
        }).format(new Date()),
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export function Footer() {
  const t = useTranslations('Footer')
  const time = useLocalTime()

  return (
    <footer className="overflow-hidden border-t border-line px-6 pb-8 pt-16 md:px-12">
      <a href="#home" aria-label={t('backToTop')} className="group block">
        <span className="block font-display text-3xl font-light italic leading-tight text-bone transition-colors duration-500 group-hover:text-accent md:text-5xl">
          Guilherme Zaparoli
          <span className="not-italic text-accent transition-colors duration-500 group-hover:text-bone">
            .
          </span>
        </span>
      </a>

      <div className="mt-12 flex flex-col gap-6 font-mono text-xs uppercase tracking-widest text-faint md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-1">
          <span>
            © {new Date().getFullYear()} — {t('rights')}
          </span>
          <span suppressHydrationWarning>
            {t('localTime')} — {time} GMT-3
          </span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep transition-colors hover:text-bone"
            >
              {social.label}
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="link-sweep transition-colors hover:text-bone"
        >
          {t('backToTop')} ↑
        </a>
      </div>
    </footer>
  )
}
