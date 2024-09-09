'use client'
import React, { useRef } from 'react'
import css3 from '../../../public/assets/images/css3.svg'
import git from '../../../public/assets/images/git.svg'
import gitHub from '../../../public/assets/images/github.svg'
import html5 from '../../../public/assets/images/hml5.svg'
import js from '../../../public/assets/images/js.svg'
import react from '../../../public/assets/images/react.svg'
import tailwind from '../../../public/assets/images/tailwind.svg'
import mongoDB from '../../../public/assets/images/mongo-db.svg'
import nodejs from '../../../public/assets/images/nodejs.svg'
import vite from '../../../public/assets/images/vite.svg'
import figma from '../../../public/assets/images/figma.svg'
import nextjs from '../../../public/assets/images/nextjs.svg'
import styledComponents from '../../../public/assets/images/styled-components.svg'
import typescript from '../../../public/assets/images/typescript.svg'
import materialUI from '../../../public/assets/images/material-ui.svg'
import postgreSQL from '../../../public/assets/images/postgresql.svg'
import jira from '../../../public/assets/images/jira.svg'
import Image from 'next/image'
import { useInView, motion } from 'framer-motion'

const Skills = () => {
  const skillRref = useRef()

  const isSkillRefInView = useInView(skillRref, { once: false })
  return (
    <div id="habilidades" className="" ref={skillRref}>
      <motion.p
        initial={{ x: '-600px' }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="text-start font-mono text-simple dark:text-simpleDark"
      >
        Habilidades
      </motion.p>
      <motion.h1
        initial={{ x: '-600px' }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl"
      >
        Minhas habilidades
      </motion.h1>
      <motion.p
        initial={{ x: '-600px' }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg"
      >
        Tecnologias que estive trabalhando recentemente:
      </motion.p>

      <div className="md:grid md:grid-cols-skills md:gap-36">
        <div className="mt-10">
          <p className="text-simple dark:text-simpleDark md:text-lg">
            Linguagens e Ferramentas
          </p>
          <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
            <Image title="HTML5" src={html5} alt="HTML5" />
            <Image title="CSS3" src={css3} alt="CSS3" />
            <Image title="JavaScript" src={js} alt="JavaScript" />
            <Image title="TypeScript" src={typescript} alt="TypeScript" />
            <Image title="Node.js" src={nodejs} alt="Node.js" />
            <Image title="Vite" src={vite} alt="Vite" />
            <Image title="Figma" src={figma} alt="Figma" />
            <Image title="Jira" src={jira} alt="Jira" />
          </div>
        </div>
        <div className="mt-10">
          <p className="text-simple dark:text-simpleDark md:text-lg">
            Bibliotecas e Frameworks
          </p>
          <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
            <Image title="React.js" src={react} alt="React.js" />
            <Image title="Next.js" src={nextjs} alt="Next.js" />
            <Image title="Tailwind" src={tailwind} alt="Tailwind" />
            <Image
              title="Styled-components"
              src={styledComponents}
              alt="Styled-components"
            />
            <Image title="Material UI" src={materialUI} alt="Material UI" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-simple dark:text-simpleDark md:text-lg">
            Banco de dados
          </p>
          <div className="mt-4 grid w-full grid-cols-icons justify-center gap-8 md:justify-start">
            <Image title="PostgreSQL" src={postgreSQL} alt="PostgreSQL" />
            <Image title="MongoDB" src={mongoDB} alt="MongoDB" />
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="mt-10 flex-1">
          <p className="text-simple dark:text-simpleDark md:text-lg">Outros</p>
          <div className="mt-4 grid w-full grid-cols-icons justify-center gap-6 md:justify-start">
            <Image title="Git" src={git} alt="Git" />
            <Image
              title="GitHub"
              src={gitHub}
              alt="GitHub"
              className="text-white"
            />
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
