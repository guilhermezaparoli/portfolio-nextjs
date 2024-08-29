import React from 'react'
import css3 from '../../../public/assets/images/css3.svg'
import git from '../../../public/assets/images/git.svg'
import gitHub from '../../../public/assets/images/github.svg'
import html5 from '../../../public/assets/images/hml5.svg'
import js from '../../../public/assets/images/js.svg'
import react from '../../../public/assets/images/react.svg'
import tailwind from '../../../public/assets/images/tailwind.svg'
import vscode from '../../../public/assets/images/vscode.svg'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="font-poppins text-xl font-bold text-white">
        Minhas habilidades
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-white">
        Tecnologias que estive trabalhando recentemente:
      </p>

      <div className="mt-10 grid w-full grid-cols-[repeat(auto-fit,minmax(50px,60px))] justify-center gap-8">
        <Image src={html5} priority alt="ccs3" />
        <Image src={css3} priority alt="ccs3" />
        <Image src={js} priority alt="ccs3" />
        <Image src={react} priority alt="ccs3" />
        <Image src={tailwind} priority alt="ccs3" />
        <Image src={git} priority alt="ccs3" />
        <Image src={vscode} priority alt="ccs3" />
        <Image src={gitHub} priority alt="ccs3" />
      </div>
    </div>
  )
}

export default Skills
