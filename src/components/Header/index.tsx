import { HiOutlineMail } from 'react-icons/hi'
import NavBar from './NavBar'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export function Header() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center gap-3">
        {/* <p>Logo</p> */}
        <NavBar />
      </div>
      <div className="z-2 relative mt-40">
        <h1 className="font-poppins text-sm font-bold text-title">
          Olá, meu nome é
        </h1>

        <h1 className="mt-2 font-poppins text-3xl font-bold text-title">
          Guilherme Zaparoli
        </h1>
        <h1 className="mt-4 font-poppins text-xl font-bold text-slate-800">
          Eu construo coisas para web
        </h1>
      </div>

      <div className="mt-20 flex flex-col gap-5">
        <div className="flex w-full items-center justify-start">
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
              <FaInstagram
                className="cursor-pointer text-white"
                fontSize={25}
              />
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
        <button className="px- w-36 rounded-lg border-2 border-white p-3 text-center font-itensMenu text-xs font-bold text-white">
          Vamos conversar
        </button>
      </div>
    </div>
  )
}
