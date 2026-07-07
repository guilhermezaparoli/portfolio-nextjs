'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { SectionTitle } from '@/components/SectionTitle'
import { Reveal } from '@/components/motion/Reveal'
import propertyPulse from '../../../public/assets/images/propertyPulse.png'
import beerCalculator from '../../../public/assets/images/beer-calculator.png'
import iadex from '../../../public/assets/images/iadex.png'
import acheiPromocoes from '../../../public/assets/images/acheiPromocoes.png'

interface Project {
  key: string
  technologies: string[]
  image: StaticImageData
  deploy: string
  repo?: string
}

const projects: Project[] = [
  {
    key: 'acheiPromocoes',
    technologies: ['Next.js', 'TypeScript', 'AI', 'Telegram Bot'],
    image: acheiPromocoes,
    deploy: 'https://www.acheipromocoes.com.br',
  },
  {
    key: 'aiDex',
    technologies: ['Fastify', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAI'],
    image: iadex,
    deploy: 'https://iadex.guilhermezaparoli.dev',
    repo: 'https://github.com/guilhermezaparoli/vite-IA-dex-',
  },
  {
    key: 'propertyPulse',
    technologies: ['Next.js 14', 'Tailwind', 'MongoDB', 'NextAuth.js'],
    image: propertyPulse,
    deploy: 'https://property-pulse-ten-gamma.vercel.app/',
    repo: 'https://github.com/guilhermezaparoli/property-pulse',
  },
  {
    key: 'beerCalculator',
    technologies: ['Next.js 15', 'Tailwind', 'OpenAI'],
    image: beerCalculator,
    deploy:
      'https://beer-calculator-git-main-guilhermezaparolis-projects.vercel.app',
    repo: 'https://github.com/guilhermezaparoli/beer-calculator',
  },
]

export function Projects() {
  const t = useTranslations('Projects')
  const [active, setActive] = useState<number | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const previewX = useSpring(mouseX, { stiffness: 260, damping: 28 })
  const previewY = useSpring(mouseY, { stiffness: 260, damping: 28 })

  function onMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-12 md:py-36"
      onMouseMove={onMouseMove}
    >
      <SectionTitle index="03" title={t('title')} meta={t('meta')} />

      {/* framed preview that chases the cursor (desktop only) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden w-96 md:block"
        style={{
          x: previewX,
          y: previewY,
          translateX: '-50%',
          translateY: '-55%',
        }}
        animate={{
          opacity: active !== null ? 1 : 0,
          scale: active !== null ? 1 : 0.9,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[16/10] overflow-hidden border border-line bg-panel shadow-2xl shadow-black/60">
          {projects.map((project, i) => (
            <Image
              key={project.key}
              src={project.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo ${
                active === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between border-x border-b border-line bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-dim">
          <span>
            {active !== null && t(`projects.${projects[active].key}.title`)}
          </span>
          <span className="text-accent">
            0{active !== null ? active + 1 : 0} / 0{projects.length}
          </span>
        </div>
      </motion.div>

      <div>
        {projects.map((project, i) => (
          <Reveal key={project.key} delay={i * 0.05} y={24}>
            <div
              className="group relative border-b border-line-soft py-8 transition-colors first:border-t hover:border-line md:py-10"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-baseline md:gap-10">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>

                <div className="flex-1">
                  <h3 className="font-display text-4xl font-light text-bone transition-all duration-500 ease-out-expo group-hover:translate-x-4 group-hover:italic group-hover:text-accent md:text-6xl">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-dim">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  {/* inline image on touch layouts, where there is no hover preview */}
                  <div className="mt-5 aspect-[16/10] overflow-hidden border border-line md:hidden">
                    <Image
                      src={project.image}
                      alt={t(`projects.${project.key}.title`)}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:items-end">
                  <span className="max-w-xs font-mono text-xs uppercase tracking-wider text-faint md:text-right">
                    {project.technologies.join(' / ')}
                  </span>
                  <div className="flex gap-5 font-mono text-xs uppercase tracking-widest">
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep text-dim transition-colors hover:text-bone"
                    >
                      {t('cardInfo.visit')} ↗
                    </a>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-sweep text-dim transition-colors hover:text-bone"
                      >
                        {t('cardInfo.repo')} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
