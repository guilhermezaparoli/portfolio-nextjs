import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FaCheckCircle } from 'react-icons/fa'
interface mailerProps {
  name: string
  email: string
  message: string
}
export async function mailer({ name, email, message }: mailerProps) {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || ''
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''
  const publicKey = process.env.NEXT_PUBLIC_KEY || ''

  if (!serviceId || !templateId || !publicKey) {
    console.error('Missing EmailJS configuration')
    return
  }

  const { status } = await emailjs.send(
    serviceId,
    templateId,
    { name, email, message },
    {
      publicKey,
      limitRate: {
        throttle: 10000,
      },
    },
  )

  if (status === 200) {
    toast.success('E-mail enviado com sucesso!', {
      className: 'font-poppins',
      position: 'top-center',
      autoClose: 2000, // Ensure progress bar is visible
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: <FaCheckCircle className="text-xl text-dark" />,
    })
  } else {
    toast.error('Houve um erro ao enviar o e-mail', {
      className: 'font-poppins',
      position: 'top-center',
      autoClose: 2000, // Ensure progress bar is visible
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }
}
