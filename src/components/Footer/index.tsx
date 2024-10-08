'use client'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')
  const refFooter = useRef<HTMLDivElement>(null)
  const isFooterInView = useInView(refFooter, { once: true })
  return (
    <motion.div
      ref={refFooter}
      initial={{ opacity: 0, y: 20 }}
      animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
      id="contato"
      className="flex flex-col items-center justify-center gap-8 font-poppins text-sm"
    >
      <h1 className="text-center text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl">
        {t('connect')}
      </h1>
      <div className="flex w-full items-center justify-center">
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
        <button className="px- w-36 rounded-lg border-2 border-simple p-3 text-center font-itensMenu text-xs font-bold text-simple transition-colors delay-0 hover:bg-simple hover:text-sunnyDay dark:border-white dark:text-simpleDark dark:hover:bg-white dark:hover:text-black">
          {t('letsTalk')}
        </button>
      </Link>

      <div className="font-poppins text-simple dark:text-simpleDark">
        <p className="whitespace-nowrap text-[10px] md:text-lg">
          {t('description')}
        </p>
      </div>
    </motion.div>
  )
}
