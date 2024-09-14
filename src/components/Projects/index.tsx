'use client'
import { ProjectCard } from './ProjectCard'
import pokedex from '../../../public/assets/images/project-pokedex.png'
import propertyPulse from '../../../public/assets/images/propertyPulse.png'
import cooffeeDelivery from '../../../public/assets/images/coffee-delivery.png'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function Projects() {
  const t = useTranslations('Projects')
  const skillRref = useRef<HTMLDivElement>(null)
  const isProjectContainerInView = useInView(skillRref, { once: false })
  const projects = [
    {
      description: t('projects.propertyPulse.description'),
      title: t('projects.propertyPulse.title'),
      technologies:
        'Next.js 14, Tailwind, MongoDB, Mongoose, React Geocode, NextAuth.js',
      image: propertyPulse,
      deploy: 'https://property-pulse-ten-gamma.vercel.app/',
      repo: 'https://github.com/guilhermezaparoli/property-pulse',
    },
    {
      description: t('projects.pokedex.description'),
      title: t('projects.pokedex.title'),
      technologies: 'React.js, TypeScript, Styled Components, Vite',
      image: pokedex,
      deploy: 'https://pokedex-ts-lyart.vercel.app/',
      repo: 'https://github.com/guilhermezaparoli/Pokedex-TS',
    },
    {
      description: t('projects.coffeeDelivery.description'),
      title: t('projects.coffeeDelivery.title'),
      technologies: 'React.js, TypeScript, Styled Components, Vite, zod',
      image: cooffeeDelivery,
      deploy: 'https://coffee-delivery-amber-psi.vercel.app/',
      repo: 'https://github.com/guilhermezaparoli/Coffee-Delivery',
    },
  ]
  return (
    <div id="projetos" className="flex flex-col justify-center pt-20">
      <div className="mb-40" ref={skillRref}>
        <motion.div
          initial={{ x: '-1000px' }}
          animate={isProjectContainerInView ? { x: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={skillRref}
        >
          <p className="text-start font-mono text-simple dark:text-simpleDark">
            {t('tag')}
          </p>
          <h1 className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl">
            {t('title')}
          </h1>
          <p className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="mb-40 flex grid-cols-projects flex-col items-center gap-8 md:grid md:gap-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              description={project.description}
              title={project.title}
              technologies={project.technologies}
              image={project.image}
              deploy={project.deploy}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
