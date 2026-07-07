'use client'

import { useTranslations } from 'next-intl'
import { SectionTitle } from '@/components/SectionTitle'
import { Reveal } from '@/components/motion/Reveal'

const skillGroups = [
  {
    key: '1',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Node.js', 'Vite'],
  },
  {
    key: '2',
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'NestJS',
      'Express',
      'GraphQL',
      'Styled Components',
      'Material UI',
    ],
  },
  {
    key: '3',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    key: '4',
    skills: [
      'AWS Cloud Practitioner (CLF-C02)',
      'Graph Developer — Associate',
      'The Official React Query Course',
    ],
  },
  {
    key: '5',
    skills: [
      'Artificial Intelligence',
      'Git',
      'GitHub',
      'GitLab',
      'Scrum',
      'Jira',
    ],
  },
]

export default function Skills() {
  const t = useTranslations('Skills')

  return (
    <section id="skills" className="px-6 py-24 md:px-12 md:py-36">
      <SectionTitle index="02" title={t('title')} meta={t('meta')} />

      <div>
        {skillGroups.map((group, i) => (
          <Reveal key={group.key} delay={i * 0.05} y={24}>
            <div className="group grid gap-3 border-b border-line-soft py-8 transition-colors first:border-t hover:border-line md:grid-cols-12 md:items-baseline">
              <span className="font-mono text-xs uppercase tracking-widest text-faint transition-colors group-hover:text-accent md:col-span-3">
                {t(`groups.${group.key}`)}
              </span>
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-xl font-light leading-relaxed text-bone md:col-span-9 md:text-3xl">
                {group.skills.map((skill, j) => (
                  <span key={skill} className="flex items-baseline gap-x-3">
                    <span className="cursor-default transition-colors duration-300 hover:italic hover:text-accent">
                      {skill}
                    </span>
                    {j < group.skills.length - 1 && (
                      <span className="text-faint">·</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
