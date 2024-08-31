import React from 'react'
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
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="mt-20">
      <p className="text-start font-mono text-white">Habilidades</p>
      <h1 className="font-poppins text-3xl font-bold text-white">
        Minhas habilidades
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-white">
        Tecnologias que estive trabalhando recentemente:
      </p>

      <div className="mt-10">
        <p className="text-white">Linguagens e Ferramentas</p>
        <div className="mt-4 grid w-full grid-cols-[repeat(auto-fit,minmax(50px,50px))] justify-center gap-8">
          <Image src={html5} alt="HTML5" />
          <Image src={css3} alt="CSS3" />
          <Image src={js} alt="JavaScript" />
          <Image src={typescript} alt="TypeScript" />
          <Image src={nodejs} alt="Node.js" />
          <Image src={vite} alt="Vite" />
          <Image src={figma} alt="Figma" />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-white">Bibliotecas e Frameworks</p>
        <div className="mt-4 grid w-full grid-cols-[repeat(auto-fit,minmax(50px,50px))] justify-center gap-8">
          <Image src={react} alt="React.js" />
          <Image src={nextjs} alt="Next.js" />
          <Image src={tailwind} alt="Tailwind" />
          <Image src={styledComponents} alt="Styled-components" />
          <Image src={materialUI} alt="MaterialUI" />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="mt-10">
          <p className="text-white">Banco de dados</p>
          <div className="mt-4 grid w-full grid-cols-[repeat(auto-fit,minmax(50px,50px))] justify-center gap-8">
            <Image src={mongoDB} alt="MongoDB" />
          </div>
        </div>
        <div className="mt-10 flex-1">
          <p className="text-white">Outros</p>
          <div className="mt-4 grid w-full grid-cols-[repeat(auto-fit,minmax(50px,50px))] justify-center gap-8">
            <Image src={git} alt="Git" />
            <Image src={gitHub} alt="GitHub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
