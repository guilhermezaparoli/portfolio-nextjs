import Image from 'next/image'
import imagem from '../../../../public/assets/images/image-teste.svg'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

export function ProjectCard() {
  return (
    <div className="borde max-w-80 rounded-2xl bg-white shadow-2xl">
      <div className="max-h-64">
        <Image src={imagem} alt="teste" />
      </div>

      <div className="p-7 text-center font-medium text-black">
        <h1 className="font-poppins text-xl">Project title goes here</h1>
        <p className="mt-4 font-poppins text-sm font-light text-descriptionProject">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </p>
        <p className="mt-3 font-poppins text-xs font-light">
          <span className="font-poppins text-sm font-normal">Tech stack:</span>{' '}
          HTML, JavaScript, SASS, React HTML, JavaScript, SASS, React
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaLink />
            <Link
              className="font-poppins text-sm text-black underline"
              href={'/'}
            >
              Ver site
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <Link
              className="font-poppins text-sm text-black underline"
              href={'/'}
            >
              Ver código
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
