'use client'

import { FormEvent } from 'react'
import { mailer } from './mailer'

export function Contact() {
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
    <div id="contato" className="flex flex-col justify-center pt-24">
      <p className="text-start font-mono text-simple dark:text-simpleDark">
        Contato
      </p>
      <h1 className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl">
        Contato
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg">
        Entre em contato:
      </p>
      <div className="mb-60 mt-14 flex flex-col items-center place-self-center">
        <form className="flex w-full flex-col gap-4" onSubmit={sendDataMail}>
          <label className="flex flex-col text-title dark:text-simpleDark">
            Nome
            <input
              title="Nome"
              type="text"
              className="h-16 rounded-md border border-title bg-transparent px-3 font-poppins text-lg outline-none focus:border-2 focus:border-simple dark:border-simpleDark md:w-[700px]"
              required
            />
          </label>
          <label className="flex flex-col text-title dark:text-simpleDark">
            Email
            <input
              title="Nome"
              type="email"
              className="h-16 rounded-md border border-title bg-transparent px-3 font-poppins text-lg outline-none focus:border-2 focus:border-simple dark:border-simpleDark md:w-[700px]"
              required
            />
          </label>
          <label className="flex flex-col text-title dark:text-simpleDark">
            Mensagem
            <textarea
              title="Nome"
              className="h-48 rounded-md border border-title bg-transparent p-3 font-poppins text-lg outline-none focus:border-2 focus:border-simple dark:border-simpleDark md:w-[700px]"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-5 w-36 place-self-center rounded-lg border-2 border-simple p-3 text-center font-itensMenu text-xs font-bold text-simple transition-colors delay-0 hover:bg-simple hover:text-sunnyDay dark:border-white dark:text-simpleDark dark:hover:bg-white dark:hover:text-black"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
