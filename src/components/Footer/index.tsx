import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-DM_Sans text-sm">
      <h1 className="text-simple text-3xl font-bold dark:text-simpleDark">
        Conecte-se comigo
      </h1>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-5">
          <Link
            target="_blank"
            type="email"
            href={'mailto:guilhermezapas@gmail.com'}
          >
            <HiOutlineMail
              className="text-simple cursor-pointer dark:text-simpleDark"
              fontSize={25}
            />
          </Link>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5517996299200"
          >
            <FaWhatsapp
              className="text-simple cursor-pointer dark:text-simpleDark"
              fontSize={25}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/guilherme.zaparoli/"
          >
            <FaInstagram
              className="text-simple cursor-pointer dark:text-simpleDark"
              fontSize={25}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/"
          >
            <FaLinkedin
              className="text-simple cursor-pointer dark:text-simpleDark"
              fontSize={25}
            />
          </Link>
          <Link target="_blank" href="https://github.com/guilhermezaparoli">
            <FaGithub
              className="text-simple cursor-pointer dark:text-simpleDark"
              fontSize={25}
            />
          </Link>
        </div>
      </div>
      <button className="px- border-simple text-simple rounded-lg border-2 p-3 text-center font-itensMenu text-xs font-bold dark:border-white dark:text-simpleDark">
        Vamos conversar
      </button>

      <div className="text-simple font-poppins text-xs dark:text-simpleDark">
        <p>Desenvolvido e construído por Guilherme Zaparoli Gomes</p>
      </div>
    </div>
  )
}
