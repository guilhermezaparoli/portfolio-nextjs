'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/SectionHeader'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export function About() {
  const t = useTranslations('About')

  const values = [
    { key: '1', icon: '{}' },
    { key: '2', icon: '~>' },
    { key: '3', icon: '<>' },
    { key: '4', icon: '//' },
  ]

  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
  

      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <AnimateOnScroll delay={100}>
        <p className="mb-12 max-w-2xl leading-relaxed text-muted-fg">
          {t('bio')}
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, i) => (
          <AnimateOnScroll key={value.key} delay={150 + i * 100}>
            <div className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-muted">
              <span className="mb-3 block font-mono text-2xl text-muted-fg transition-colors group-hover:text-foreground">
                {value.icon}
              </span>
              <h3 className="mb-1 font-semibold text-foreground">
                {t(`values.${value.key}.title`)}
              </h3>
              <p className="text-sm text-muted-fg">
                {t(`values.${value.key}.description`)}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
