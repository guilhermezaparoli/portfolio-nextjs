'use client'
import React, { useRef, useState } from 'react'
import css3 from '../../../public/assets/svg/css3.svg'
import git from '../../../public/assets/svg/git.svg'
import gitHub from '../../../public/assets/svg/github.svg'
import gitHubDark from '../../../public/assets/svg/github dark.svg'
import html5 from '../../../public/assets/svg/hml5.svg'
import js from '../../../public/assets/svg/js.svg'
import react from '../../../public/assets/svg/react.svg'
import tailwind from '../../../public/assets/svg/tailwind.svg'
import mongoDB from '../../../public/assets/svg/mongo-db.svg'
import nodejs from '../../../public/assets/svg/nodejs.svg'
import nodejsDark from '../../../public/assets/svg/nodejs-dark.svg'
import vite from '../../../public/assets/svg/vite.svg'
import figma from '../../../public/assets/svg/figma.svg'
import nextjs from '../../../public/assets/svg/nextjs.svg'
import nextjsDark from '../../../public/assets/svg/nextjs dark.svg'
import styledComponents from '../../../public/assets/svg/styled-components.svg'
import typescript from '../../../public/assets/svg/typescript.svg'
import materialUI from '../../../public/assets/svg/material-ui.svg'
import postgreSQL from '../../../public/assets/svg/postgresql.svg'
import jira from '../../../public/assets/svg/jira.svg'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'
import { useGlobalContext } from '@/context/GlobalContext'
import { useTranslations } from 'next-intl'

const Skills = () => {
  const t = useTranslations('Skills')
  const skillRref = useRef<HTMLDivElement>(null)
  const { isLightTheme } = useGlobalContext()
  const [finishedFirstAnimation, setFinishedFirstAnimation] = useState(false)
  const isSkillRefInView = useInView(skillRref, { once: false })

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  }

  const skillsGroup1 = [
    { light: html5, dark: html5, title: 'HTML5' },
    { light: css3, dark: css3, title: 'CSS3' },
    { light: js, dark: js, title: 'JavaScript' },
    { light: typescript, dark: typescript, title: 'TypeScript' },
    { light: nodejs, dark: nodejsDark, title: 'Node.js' },
    { light: vite, dark: vite, title: 'Vite' },
    { light: figma, dark: figma, title: 'Figma' },
    { light: jira, dark: jira, title: 'Jira' },
  ]

  const skillsGroup2 = [
    { light: react, dark: react, title: 'React.js' },
    { light: nextjs, dark: nextjsDark, title: 'Next.js' },
    { light: tailwind, dark: tailwind, title: 'Tailwind' },
    {
      light: styledComponents,
      dark: styledComponents,
      title: 'Styled-components',
    },
    { light: materialUI, dark: materialUI, title: 'Material UI' },
  ]

  const skillsGroup3 = [
    { light: postgreSQL, dark: postgreSQL, title: 'PostgreSQL' },
    { light: mongoDB, dark: mongoDB, title: 'MongoDB' },
  ]

  const skillsGroup4 = [
    { light: git, dark: git, title: 'Git' },
    { light: gitHub, dark: gitHubDark, title: 'GitHub' },
  ]

  return (
    <div id="habilidades" className="pt-20">
      <div className="mb-40" ref={skillRref}>
        <motion.div
          initial={{ x: '-1000px' }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => setFinishedFirstAnimation(true)}
        >
          <p className="text-start font-mono text-simple dark:text-simpleDark">
            {t('tag')}
          </p>
          <h1 className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl">
            {t('title')}
          </h1>
          <motion.p className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg">
            {t('subtitle')}
          </motion.p>
        </motion.div>

        <div className="md:grid md:grid-cols-skills md:gap-36">
          {/* Group 1 */}
          <div className="mt-10">
            <motion.p
              initial={{ x: '-1000px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-simple dark:text-simpleDark md:text-lg"
            >
              {t('groups.1')}
            </motion.p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
              {skillsGroup1.map((icon, i) => (
                <motion.div
                  key={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate={finishedFirstAnimation ? 'visible' : {}}
                  custom={i}
                  whileHover="hover"
                >
                  <Image
                    title={icon.title}
                    src={isLightTheme ? icon.light : icon.dark}
                    alt={icon.title}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div className="mt-10">
            <motion.p
              initial={{ x: '-1000px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-simple dark:text-simpleDark md:text-lg"
            >
              {t('groups.2')}
            </motion.p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
              {skillsGroup2.map((icon, i) => (
                <motion.div
                  key={i}
                  variants={iconVariants}
                  animate={finishedFirstAnimation ? 'visible' : {}}
                  initial="hidden"
                  custom={i}
                  whileHover="hover"
                >
                  <Image
                    title={icon.title}
                    src={isLightTheme ? icon.light : icon.dark}
                    alt={icon.title}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Group 3 */}
          <div className="mt-10">
            <motion.p
              initial={{ x: '-1000px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-simple dark:text-simpleDark md:text-lg"
            >
              {t('groups.3')}
            </motion.p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
              {skillsGroup3.map((icon, i) => (
                <motion.div
                  key={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate={finishedFirstAnimation ? 'visible' : {}}
                  custom={i}
                  whileHover="hover"
                >
                  <Image
                    title={icon.title}
                    src={isLightTheme ? icon.light : icon.dark}
                    alt={icon.title}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Group 4 */}
          <div className="mt-10 flex-1">
            <motion.p
              initial={{ x: '-1000px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-simple dark:text-simpleDark md:text-lg"
            >
              {t('groups.4')}
            </motion.p>
            <div className="mt-4 grid w-full grid-cols-icons justify-center gap-6 md:justify-start">
              {skillsGroup4.map((icon, i) => (
                <motion.div
                  key={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate={finishedFirstAnimation ? 'visible' : {}}
                  custom={i}
                  whileHover="hover"
                >
                  <Image
                    title={icon.title}
                    src={isLightTheme ? icon.light : icon.dark}
                    alt={icon.title}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
