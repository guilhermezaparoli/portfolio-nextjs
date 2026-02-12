'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/SectionHeader'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import { ProjectCard } from './ProjectCard'
import { SceneContainer } from '@/components/three/SceneContainer'
import { GlowingOrbs } from '@/components/three/GlowingOrbs'
import pokedex from '../../../public/assets/images/project-pokedex.png'
import propertyPulse from '../../../public/assets/images/propertyPulse.png'
import beerCalculator from '../../../public/assets/images/beer-calculator.png'
import coffeeDelivery from '../../../public/assets/images/coffee-delivery.png'
import iadex from '../../../public/assets/images/iadex.png'

export function Projects() {
  const t = useTranslations('Projects')

  const projects = [
    {
      title: t('projects.aiDex.title'),
      description: t('projects.aiDex.description'),
      technologies: [
        'Fastify',
        'TypeScript',
        'Clean Architecture',
        'Prisma',
        'PostgreSQL',
        'JWT',
        'OpenAI API',
        'React.js',
      ],
      image: iadex,
      deploy: 'https://iadex.guilhermezaparoli.dev',
      repo: 'https://github.com/guilhermezaparoli/vite-IA-dex-',
    },
    {
      title: t('projects.beerCalculator.title'),
      description: t('projects.beerCalculator.description'),
      technologies: ['Next.js 15', 'Tailwind', 'OpenAI', 'lucide-react'],
      image: beerCalculator,
      deploy:
        'https://beer-calculator-git-main-guilhermezaparolis-projects.vercel.app',
      repo: 'https://github.com/guilhermezaparoli/beer-calculator',
    },
    {
      title: t('projects.propertyPulse.title'),
      description: t('projects.propertyPulse.description'),
      technologies: ['Next.js 14', 'Tailwind', 'MongoDB', 'NextAuth.js'],
      image: propertyPulse,
      deploy: 'https://property-pulse-ten-gamma.vercel.app/',
      repo: 'https://github.com/guilhermezaparoli/property-pulse',
    },
    {
      title: t('projects.pokedex.title'),
      description: t('projects.pokedex.description'),
      technologies: ['React.js', 'TypeScript', 'Styled Components', 'Vite'],
      image: pokedex,
      deploy: 'https://pokedex-ts-lyart.vercel.app/',
      repo: 'https://github.com/guilhermezaparoli/Pokedex-TS',
    },
    {
      title: t('projects.coffeeDelivery.title'),
      description: t('projects.coffeeDelivery.description'),
      technologies: [
        'React.js',
        'TypeScript',
        'Styled Components',
        'Vite',
        'zod',
      ],
      image: coffeeDelivery,
      deploy: 'https://coffee-delivery-amber-psi.vercel.app/',
      repo: 'https://github.com/guilhermezaparoli/Coffee-Delivery',
    },
  ]

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24"
    >
      <SceneContainer>
        <GlowingOrbs />
      </SceneContainer>

      <SectionHeader
        tag={t('tag')}
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <AnimateOnScroll key={project.title} delay={i * 100}>
            <ProjectCard {...project} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
