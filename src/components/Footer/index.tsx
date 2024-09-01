import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-DM_Sans text-sm">
      <h1 className="text-3xl font-bold text-white">Conecte-se comigo</h1>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-5">
          <Link
            target="_blank"
            type="email"
            href={'mailto:guilhermezapas@gmail.com'}
          >
            <HiOutlineMail
              className="cursor-pointer text-white"
              fontSize={25}
            />
          </Link>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5517996299200"
          >
            <FaWhatsapp className="cursor-pointer text-white" fontSize={25} />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/guilherme.zaparoli/"
          >
            <FaInstagram className="cursor-pointer text-white" fontSize={25} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/"
          >
            <FaLinkedin className="cursor-pointer text-white" fontSize={25} />
          </Link>
          <Link target="_blank" href="https://github.com/guilhermezaparoli">
            <FaGithub className="cursor-pointer text-white" fontSize={25} />
          </Link>
        </div>
      </div>
      <button className="px- rounded-lg border-2 border-white p-3 text-center font-itensMenu text-xs font-bold text-white">
        Vamos conversar
      </button>

      <div className="font-poppins text-xs">
        <p>Desenvolvido e construído por Guilherme Zaparoli Gomes</p>
      </div>
    </div>
  )
}
