import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 font-DM_Sans text-sm">
      <h1 className="text-3xl font-bold text-white">Conecte-se comigo</h1>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-5">
          <HiOutlineMail className="cursor-pointer text-white" fontSize={25} />
          <FaWhatsapp className="cursor-pointer text-white" fontSize={25} />
          <FaInstagram className="cursor-pointer text-white" fontSize={25} />
          <FaLinkedin className="cursor-pointer text-white" fontSize={25} />
          <FaGithub className="cursor-pointer text-white" fontSize={25} />
        </div>
      </div>
      <button className="font-itensMenu px- rounded-lg border-2 border-white p-3 text-center text-xs font-bold text-white">
        Vamos conversar
      </button>

      <div className="font-poppins text-xs">
        <p>Desenvolvido e construído por Guilherme Zaparoli Gomes</p>
      </div>
    </div>
  )
}
