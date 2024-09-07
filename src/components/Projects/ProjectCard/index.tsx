import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  tecnologies: string
  image: StaticImageData
}
export function ProjectCard({
  image,
  title,
  description,
  tecnologies,
}: ProjectCardProps) {
  return (
    <div className="max-w-80 rounded-2xl bg-white shadow-2xl">
      <div className="max-h-64 overflow-hidden rounded-t-2xl">
        <Image src={image} alt="teste" />
      </div>

      <div className="p-7 text-center font-medium text-black">
        <h1 className="font-poppins text-xl">{title}</h1>
        <p className="mt-4 font-poppins text-sm font-light text-descriptionProject">
          {description}
        </p>
        <p className="mt-3 font-poppins text-xs font-light">
          <span className="font-poppins text-sm font-normal">Tecnologias:</span>{' '}
          {tecnologies}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaLink />
            <Link
              className="font-poppins text-sm text-black underline"
              href={'/'}
            >
              Visitar site
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <Link
              className="font-poppins text-sm text-black underline"
              href={'/'}
            >
              Repositório
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
