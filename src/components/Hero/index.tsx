'use client'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import TextAnimed from './TextAnimed'
import { motion } from 'framer-motion'

const NavBarDynamic = dynamic(() => import('./NavBar'))

export function Hero() {
  return (
    <div id="inicio" className="min-h-screen">
      <div className="flex items-center gap-3">
        <NavBarDynamic />
      </div>
      <div className="z-2 relative pt-44">
        <TextAnimed delay={0.5} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => {
          document.body.style.overflow = 'auto'
        }}
        transition={{ delay: 5.5, duration: 1, ease: 'easeInOut' }}
        className="mt-14 flex flex-col gap-5"
      >
        <div className="flex w-full items-center justify-start">
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              type="email"
              href={'mailto:guilhermezapas@gmail.com'}
              title="E-mail"
            >
              <HiOutlineMail
                className="cursor-pointer text-simple transition-transform duration-[300] hover:scale-110 hover:brightness-50 dark:text-simpleDark dark:hover:brightness-[0.85]"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5517996299200"
              title="Whatsapp"
            >
              <FaWhatsapp
                className="cursor-pointer text-simple transition-transform duration-[300] hover:scale-110 hover:brightness-50 dark:text-simpleDark dark:hover:brightness-[0.85]"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/guilherme.zaparoli/"
              title="Instagram"
            >
              <FaInstagram
                className="cursor-pointer text-simple transition-transform duration-[300] hover:scale-110 hover:brightness-50 dark:text-simpleDark dark:hover:brightness-[0.85]"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/guilherme-zaparoli-gomes-b979b5179/"
              title="Linkedin"
            >
              <FaLinkedin
                className="cursor-pointer text-simple transition-transform duration-[300] hover:scale-110 hover:brightness-50 dark:text-simpleDark dark:hover:brightness-[0.85]"
                fontSize={25}
              />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/guilhermezaparoli"
              title="Github"
            >
              <FaGithub
                className="cursor-pointer text-simple transition-transform duration-[300] hover:scale-110 hover:brightness-50 dark:text-simpleDark dark:hover:brightness-[0.85]"
                fontSize={25}
              />
            </Link>
          </div>
        </div>
        <Link href="#contato">
          <button className="w-36 rounded-lg border-2 border-simple p-3 text-center font-itensMenu text-xs font-bold text-simple transition-colors delay-0 hover:bg-simple hover:text-sunnyDay dark:border-white dark:text-simpleDark dark:hover:bg-white dark:hover:text-black">
            Vamos conversar
          </button>
        </Link>
      </motion.div>
    </div>
  )
}
