'use client'
import { Variants } from "framer-motion";
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import {motion} from "framer-motion"
const cardVariants: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 50,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
interface ProjectCardProps {
  title: string
  description: string
  technologies: string
  image: StaticImageData
  url: string,
  repo: string
}
export function ProjectCard({
  image,
  title,
  description,
  technologies,
  url,
  repo
}: ProjectCardProps) {
  return (
    <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen"  className="max-w-80 rounded-2xl bg-white shadow-2xl md:max-w-[475px] md:h-[530px]"  viewport={{ once: true, amount: 0.8 }}>
      <div className="max-h-64 overflow-hidden rounded-t-2xl">
        <Image src={image} alt="teste" />
      </div>

      <div className="p-7 text-center font-medium text-black">
        <h1 className="font-poppins text-xl">{title}</h1>
        <p className="mt-4 font-poppins text-sm font-light text-descriptionProject text-start">
          {description}
        </p>
        <p className="mt-3 font-poppins text-xs font-light">
          <span className="font-poppins text-sm font-normal">Tecnologias:</span>{' '}
          {technologies}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaLink />
            <Link
              className="font-poppins text-sm text-black underline"
              href={url}
            >
              Visitar site
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <Link
              className="font-poppins text-sm text-black underline"
              href={repo}
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
