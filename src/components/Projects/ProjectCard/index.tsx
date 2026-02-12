'use client'

import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: StaticImageData
  deploy: string
  repo: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  deploy,
  repo,
}: ProjectCardProps) {
  const t = useTranslations('Projects')

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-muted h-full">
      <div className="overflow-hidden ">
        <Image
          src={image}
          alt={title}
          className="max-h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-fg">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-fg"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-muted-fg transition-colors hover:text-foreground"
          >
            <FaExternalLinkAlt size={12} />
            {t('cardInfo.visit')}
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-muted-fg transition-colors hover:text-foreground"
          >
            <FaGithub size={14} />
            {t('cardInfo.repo')}
          </a>
        </div>
      </div>
    </div>
  )
}
