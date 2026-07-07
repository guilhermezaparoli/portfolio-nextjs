'use client'

import { FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { LineReveal, Reveal } from '@/components/motion/Reveal'
import { mailer } from './mailer'

const channels = [
  {
    label: 'guilhermezapas@gmail.com',
    href: 'mailto:guilhermezapas@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/',
  },
  {
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
    mailer({ name, email, message, onSuccess: () => target.reset() })
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-12 md:py-36">
      <SectionTitle index="04" title={t('title')} meta={t('meta')} />

      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <h3 className="font-display text-4xl font-light leading-[1.05] text-bone md:text-6xl">
            <LineReveal>{t('headline.1')}</LineReveal>
            <LineReveal delay={0.12}>
              <em className="text-accent">{t('headline.2')}</em>
            </LineReveal>
          </h3>

          <Reveal delay={0.3} className="mt-12 flex flex-col gap-4">
            <>
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-3 font-mono text-sm text-dim transition-colors hover:text-bone"
                >
                  <span className="text-accent transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-1">
                    ↗
                  </span>
                  <span className="link-sweep">{channel.label}</span>
                </a>
              ))}
            </>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-5 md:col-start-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <label className="group flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-faint transition-colors group-focus-within:text-accent">
                {t('Form.name')}
              </span>
              <input
                type="text"
                required
                className="border-b border-line bg-transparent pb-3 text-lg text-bone outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="group flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-faint transition-colors group-focus-within:text-accent">
                {t('Form.email')}
              </span>
              <input
                type="email"
                required
                className="border-b border-line bg-transparent pb-3 text-lg text-bone outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="group flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-faint transition-colors group-focus-within:text-accent">
                {t('Form.message')}
              </span>
              <textarea
                required
                rows={4}
                className="resize-none border-b border-line bg-transparent pb-3 text-lg text-bone outline-none transition-colors focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="group relative mt-2 self-start overflow-hidden border border-bone px-10 py-4 font-mono text-xs uppercase tracking-widest text-bone transition-colors duration-500 hover:border-accent hover:text-ink"
            >
              <span className="absolute inset-0 -z-0 translate-y-full bg-accent transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
              <span className="relative z-10">{t('Form.send')} →</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
