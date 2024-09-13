'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

import CursorBlinker from './CursorBlinker'
import AnimText from './AnimText.tsx'

export interface IAnimTextProps {
  delay: number
}

export default function TextAnimed({ delay }: IAnimTextProps) {
  const [doneFirstPart, setDoneFirstPart] = useState(false)
  const [doneSecondPart, setDoneSecondPart] = useState(false)
  const firstPart = 'Olá, meu nome é'
  const secondPart = 'Guilherme Zaparoli'

  const countFirst = useMotionValue(0)
  const countSecond = useMotionValue(0)

  const roundedFirst = useTransform(countFirst, (latest) => Math.round(latest))
  const roundedSecond = useTransform(countSecond, (latest) =>
    Math.round(latest),
  )

  const displayFirstPart = useTransform(roundedFirst, (latest) =>
    firstPart.slice(0, latest),
  )
  const displaySecondPart = useTransform(roundedSecond, (latest) =>
    secondPart.slice(0, latest),
  )

  useEffect(() => {
    const controlsFirst = animate(countFirst, firstPart.length, {
      type: 'tween',
      delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDoneFirstPart(true)
      },
    })
    // window.scrollTo(0, 0)
    // document.body.style.overflow = 'hidden'
    return controlsFirst.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (doneFirstPart) {
      const controlsSecond = animate(countSecond, secondPart.length, {
        type: 'tween',
        delay: 0,
        duration: 1,
        ease: 'easeInOut',
        onComplete: () => {
          setDoneSecondPart(true)
        },
      })
      return controlsSecond.stop
    }
  }, [doneFirstPart])

  return (
    <div>
      <div>
        <motion.span className="font-poppins text-sm font-bold text-simple dark:text-simpleDark md:text-lg">
          {displayFirstPart}
        </motion.span>
        {!doneFirstPart && <CursorBlinker />}
      </div>
      {doneFirstPart && (
        <div className="flex min-h-7">
          <motion.div className="mt-2 font-poppins text-3xl font-bold text-title dark:text-simpleDark md:text-5xl">
            {displaySecondPart}
          </motion.div>
          {!doneSecondPart && <CursorBlinker height={40} />}
        </div>
      )}
      {doneFirstPart && (
        <>
          <br />
        </>
      )}
      {doneSecondPart && (
        <div className="min-h-16">
          <AnimText delay={delay} />
          <CursorBlinker />
        </div>
      )}
    </div>
  )
}
