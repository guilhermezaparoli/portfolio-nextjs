'use client'

import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { LineReveal, Reveal } from '@/components/motion/Reveal'

export function About() {
  const t = useTranslations('About')

  const values = ['1', '2', '3', '4']

  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-36">
      <SectionTitle index="01" title={t('title')} meta={t('meta')} />

      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h3 className="font-display text-2xl font-light leading-snug text-bone md:text-4xl">
            <LineReveal>{t('lede.1')}</LineReveal>
            <LineReveal delay={0.1}>
              <em className="text-accent">{t('lede.2')}</em>
            </LineReveal>
          </h3>
          <Reveal delay={0.25} className="mt-8 max-w-xl">
            <p className="leading-relaxed text-dim">{t('bio')}</p>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          {values.map((key, i) => (
            <Reveal key={key} delay={0.1 + i * 0.08} y={20}>
              <div className="group border-b border-line-soft py-5 transition-colors first:border-t hover:border-line">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-lg text-bone transition-transform duration-500 ease-out-expo group-hover:translate-x-2 group-hover:italic">
                      {t(`values.${key}.title`)}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-dim">
                      {t(`values.${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
