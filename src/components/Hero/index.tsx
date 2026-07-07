'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const
// hero choreography starts after the preloader curtain lifts
const T0 = 1.8

const socials = [
  { label: 'GitHub', href: 'https://github.com/guilhermezaparoli' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/',
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5517996299200',
  },
  { label: 'Email', href: 'mailto:guilhermezapas@gmail.com' },
]

function MaskedLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) {
  return (
    <span className={`block overflow-hidden ${className ?? ''}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const t = useTranslations('Hero')
  const sectionRef = useRef<HTMLElement>(null)
  const [wordIndex, setWordIndex] = useState(0)

  const words = [t('words.1'), t('words.2'), t('words.3'), t('words.4')]

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % 4), 2600)
    return () => clearInterval(id)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const spin = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-8 pt-28 md:px-12 md:pt-32"
    >
      {/* slow-spinning accent sparkle */}
      <motion.svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute right-2 top-[34%] w-32 text-accent md:right-24 md:top-[28%] md:w-44"
        fill="currentColor"
        style={{ rotate: spin }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: T0 + 0.9, ease: EASE }}
      >
        <path d="M100 0c6 55 45 94 100 100-55 6-94 45-100 100-6-55-45-94-100-100C55 94 94 55 100 0Z" />
      </motion.svg>

      <motion.div style={{ opacity: fade }}>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-dim">
          <MaskedLine delay={T0}>({t('role')})</MaskedLine>
          <MaskedLine delay={T0 + 0.1}>
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t('status')}
            </span>
          </MaskedLine>
        </div>

        <motion.h1
          style={{ y: nameY }}
          className="font-display text-[14.5vw] font-light leading-[0.88] tracking-tight text-bone md:text-[11.5vw]"
        >
          <MaskedLine delay={T0 + 0.15}>Guilherme</MaskedLine>
          <MaskedLine delay={T0 + 0.28} className="md:pl-[14vw]">
            <em className="font-normal">
              Zaparoli<span className="not-italic text-accent">.</span>
            </em>
          </MaskedLine>
        </motion.h1>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
      >
        <div className="max-w-md">
          {/* margin lives on the mask: inside it, it would inflate the mask
              beyond the content height and the 110% offset would not clear it */}
          <MaskedLine delay={T0 + 0.5} className="mb-4">
            <span className="flex items-baseline gap-3 text-2xl md:text-3xl">
              <span className="font-mono text-sm text-dim">{t('iBuild')}</span>
              <span className="relative inline-block overflow-hidden align-baseline">
                <AnimatePresence mode="wait">
                  <motion.em
                    key={wordIndex}
                    className="inline-block font-display text-accent"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-110%' }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    {words[wordIndex]}
                  </motion.em>
                </AnimatePresence>
              </span>
            </span>
          </MaskedLine>

          <motion.p
            className="text-sm leading-relaxed text-dim md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: T0 + 0.7 }}
          >
            {t('description')}
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-6 md:items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: T0 + 0.8 }}
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-dim transition-colors hover:text-bone"
              >
                {social.label}
              </a>
            ))}
          </div>
          <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-faint">
            {t('scroll')}
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ↓
            </motion.span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
