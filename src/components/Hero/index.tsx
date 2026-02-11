'use client'

import { useTranslations } from 'next-intl'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

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

export function Hero() {
  const t = useTranslations('Hero')

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-muted/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-muted/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <AnimateOnScroll>
          <span className="mb-4 inline-block font-mono text-sm text-muted-fg">
            {t('greeting')}
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
            Guilherme Zaparoli
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="mb-8 text-lg text-muted-fg md:text-xl">
            {t('description')}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg border border-foreground bg-foreground px-6 py-3 font-mono text-sm text-background transition-all hover:bg-transparent hover:text-foreground"
            >
              {t('cta')}
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-border px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-muted-fg"
            >
              {t('projects')}
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
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
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
