'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/SectionHeader'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { SceneContainer } from '@/components/three/SceneContainer'
import { ParticleField } from '@/components/three/ParticleField'

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
      'GraphQl',
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
      'Graph Developer - Associate',
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
    <section
      id="skills"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      <SceneContainer>
        <ParticleField />
      </SceneContainer>

      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <AnimateOnScroll key={group.key} delay={groupIndex * 100}>
            <div className="min-h-48 rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                {t(`groups.${group.key}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-fg transition-colors hover:border-muted-fg hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
