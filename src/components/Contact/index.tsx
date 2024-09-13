'use client'

import { FormEvent, useRef } from 'react'
import { mailer } from './mailer'
import { motion, useInView } from 'framer-motion'
import { toast } from 'react-toastify'
import { useTranslations } from "next-intl"

export function Contact() {
  const t = useTranslations("Contact")
  const contactRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const isContactRefInView = useInView(contactRef, { once: true })
  const isFormRefInView = useInView(formRef, { once: true })
  function sendDataMail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const { name, email, message } = {
      name: (target[0] as HTMLInputElement).value,
      email: (target[1] as HTMLInputElement).value,
      message: (target[2] as HTMLTextAreaElement).value,
    }

    mailer({ name, email, message })
  }

  return (
    <div id="contato" className="">
      <div
        className="mb-48 flex flex-col justify-center pt-24"
        ref={contactRef}
      >
        <motion.p
          initial={{ x: '-1000px' }}
          animate={isContactRefInView ? { x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-start font-mono text-simple dark:text-simpleDark"
        >
          {t("tag")}
        </motion.p>
        <motion.h1
          initial={{ x: '-1000px' }}
          animate={isContactRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl"
        >
           {t("title")}
        </motion.h1>
        <motion.p
          initial={{ x: '-1000px' }}
          animate={isContactRefInView ? { x: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg"
        >
           {t("subtitle")}
        </motion.p>

        <motion.div
          ref={formRef}
          initial={{ y: '500px', opacity: 0 }}
          animate={isFormRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-60 mt-14 flex w-full flex-col items-center place-self-center md:w-[700px]"
        >
          <form className="flex w-full flex-col gap-4" onSubmit={sendDataMail}>
            <label className="flex flex-col text-title dark:text-simpleDark">
            {t("Form.name")}
              <input
                title="Nome"
                type="text"
                className="h-16 w-full rounded-md border border-title bg-transparent px-3 font-poppins text-lg outline-none focus:border-2 focus:border-simple dark:border-simpleDark"
                required
              />
            </label>
            <label className="flex flex-col text-title dark:text-simpleDark">
            {t("Form.email")}
              <input
                title="Nome"
                type="email"
                className="h-16 rounded-md border border-title bg-transparent px-3 font-poppins text-lg outline-none focus:border-2 focus:border-simple dark:border-simpleDark"
                required
              />
            </label>
            <label className="flex flex-col text-title dark:text-simpleDark">
            {t("Form.message")}
              <textarea
                title="Nome"
                className="h-48 rounded-md border border-title bg-transparent p-3 font-poppins text-lg outline-none focus:border-2 focus:border-simple dark:border-simpleDark"
                required
              />
            </label>

            <button
              type="submit"
              onClick={() =>
                toast.error('Houve um erro ao enviar o e-mail', {
                  className: 'font-poppins',
                  position: 'top-center',
                  autoClose: 2000, // Ensure progress bar is visible
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                })
              }
              className="mt-5 w-36 place-self-center rounded-lg border-2 border-simple p-3 text-center font-itensMenu text-xs font-bold text-simple transition-colors delay-0 hover:bg-simple hover:text-sunnyDay dark:border-white dark:text-simpleDark dark:hover:bg-white dark:hover:text-black"
            >
                {t("Form.send")}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
