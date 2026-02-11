'use client'

import { FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/SectionHeader'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { mailer } from './mailer'

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: 'guilhermezapas@gmail.com',
    href: 'mailto:guilhermezapas@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5517996299200',
  },
]

export function Contact() {
  const t = useTranslations('Contact')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const name = (target[0] as HTMLInputElement).value
    const email = (target[1] as HTMLInputElement).value
    const message = (target[2] as HTMLTextAreaElement).value
    mailer({ name, email, message })
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <AnimateOnScroll delay={100}>
          <div className="flex flex-col gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-muted-fg transition-colors hover:text-foreground"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface transition-colors group-hover:border-muted">
                  <info.icon size={20} />
                </div>
                <span className="font-mono text-sm">{info.label}</span>
              </a>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1 text-sm text-muted-fg">
              {t('Form.name')}
              <input
                type="text"
                required
                className="rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-muted-fg"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-muted-fg">
              {t('Form.email')}
              <input
                type="email"
                required
                className="rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-muted-fg"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-muted-fg">
              {t('Form.message')}
              <textarea
                required
                rows={5}
                className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-muted-fg"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-lg border border-foreground bg-foreground px-6 py-3 font-mono text-sm text-background transition-all hover:bg-transparent hover:text-foreground"
            >
              {t('Form.send')}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
