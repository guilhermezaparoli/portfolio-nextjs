'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

export interface IRedoAnimTextProps {
  delay: number
}

export default function AnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0)
  const texts = [
    'Sou desenvolvedor front-end',
    'Crio interfaces intuitivas e funcionais',
    'Sou apaixonado por desenvolver experiências digitais',
    'Transformo ideias em aplicações modernas',
  ]

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '')
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  )
  const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay,
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false)
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0)
          } else {
            textIndex.set(textIndex.get() + 1)
          }
          updatedThisRound.set(true)
        }
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.span className="mt-4 font-poppins text-xl font-bold text-simple dark:text-simpleDark md:text-2xl">
      {displayText}
    </motion.span>
  )
}
