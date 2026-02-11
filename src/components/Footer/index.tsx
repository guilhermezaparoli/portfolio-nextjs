'use client'

import { useTranslations } from 'next-intl'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const socials = [
  {
    icon: FaGithub,
    href: 'https://github.com/guilhermezaparoli',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/',
    label: 'LinkedIn',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/guilherme.zaparoli/',
    label: 'Instagram',
  },
  {
    icon: FaWhatsapp,
    href: 'https://api.whatsapp.com/send?phone=5517996299200',
    label: 'WhatsApp',
  },
  {
    icon: HiOutlineMail,
    href: 'mailto:guilhermezapas@gmail.com',
    label: 'Email',
  },
]

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12">
        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="text-muted transition-colors hover:text-foreground"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-center font-mono text-xs text-muted">
          {t('description')}
        </p>
      </div>
    </footer>
  )
}
