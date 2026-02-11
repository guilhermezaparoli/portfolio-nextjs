import { AnimateOnScroll } from '@/components/AnimateOnScroll'

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle: string
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <AnimateOnScroll className="mb-12">
      <span className="mb-2 inline-block font-mono text-sm text-muted-fg">
        {tag}
      </span>
      <h2 className="mb-3 text-3xl font-bold text-foreground">{title}</h2>
      <p className="text-muted-fg">{subtitle}</p>
    </AnimateOnScroll>
  )
}
