export function Contact() {
  return (
    <div id="contato" className="flex flex-col justify-center pt-20">
      <p className="text-start font-mono text-simple dark:text-simpleDark">
        Contato
      </p>
      <h1 className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl">
        Contato
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg">
        Entre em contato:
      </p>
      <div className="mb-60 mt-8 flex flex-col items-center">
        <form className="flex w-full flex-col gap-4">
          <label className="flex flex-col text-title">
            Nome
            <input
              title="Nome"
              type="text"
              className="h-12 rounded-md border border-title bg-transparent px-3 outline-none focus:border-slate-950"
            />
          </label>
          <label className="flex flex-col text-title">
            Email
            <input
              title="Nome"
              type="mail"
              className="h-12 rounded-md border border-title bg-transparent"
            />
          </label>
          <label className="flex flex-col text-title">
            Mensagem
            <textarea
              title="Nome"
              className="h-48 rounded-md border border-title bg-transparent p-3"
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
