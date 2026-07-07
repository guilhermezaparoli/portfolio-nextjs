import { LineReveal, Reveal } from '@/components/motion/Reveal'

interface SectionTitleProps {
  index: string
  title: string
  meta?: string
}

export function SectionTitle({ index, title, meta }: SectionTitleProps) {
  return (
    <div className="mb-14 border-t border-line pt-6 md:mb-20">
      <Reveal
        y={0}
        className="mb-6 flex items-baseline justify-between font-mono text-xs uppercase tracking-widest"
      >
        <span className="text-accent">({index})</span>
        {meta && <span className="text-dim">{meta}</span>}
      </Reveal>

      <h2 className="font-display text-[13vw] font-light leading-[0.95] tracking-tight md:text-8xl">
        <LineReveal>{title}</LineReveal>
      </h2>
    </div>
  )
}
