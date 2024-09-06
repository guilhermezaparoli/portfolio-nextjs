import { HiOutlineMail } from 'react-icons/hi'

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const NavBarDynamic = dynamic(() => import('./NavBar'))

export function Header() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center gap-3">
        {/* <p>Logo</p> */}
        <NavBarDynamic />
      </div>
      <div className="z-2 relative mt-44">
        <h1 className="text-simple font-poppins text-sm font-bold">
          Olá, meu nome é
        </h1>

        <h1 className="mt-2 font-poppins text-3xl font-bold text-title dark:text-white">
          Guilherme Zaparoli
        </h1>
        <h1 className="text-simple mt-4 font-poppins text-xl font-bold">
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
                className="text-simple cursor-pointer"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5517996299200"
            >
              <FaWhatsapp
                className="text-simple cursor-pointer"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/guilherme.zaparoli/"
            >
              <FaInstagram
                className="text-simple cursor-pointer"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/"
            >
              <FaLinkedin
                className="text-simple cursor-pointer"
                fontSize={25}
              />
            </Link>
            <Link target="_blank" href="https://github.com/guilhermezaparoli">
              <FaGithub className="text-simple cursor-pointer" fontSize={25} />
            </Link>
          </div>
        </div>
        <button className="px- border-simple text-simple w-36 rounded-lg border-2 p-3 text-center font-itensMenu text-xs font-bold">
          Vamos conversar
        </button>
      </div>
    </div>
  )
}
