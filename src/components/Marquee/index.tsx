'use client'

import { useTranslations } from 'next-intl'

export function Marquee() {
  const t = useTranslations('Marquee')

  const items = [
    t('role'),
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'GraphQL',
  ]

  const strip = (
    <span aria-hidden className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-4xl font-light italic text-bone md:px-14 md:text-6xl">
            {item}
          </span>
          <span className="text-2xl text-accent md:text-3xl">✦</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="relative overflow-hidden border-y border-line py-6 md:py-8">
      <span className="sr-only">{items.join(', ')}</span>
      <div className="animate-marquee flex w-max">
        {strip}
        {strip}
      </div>
    </div>
  )
}
