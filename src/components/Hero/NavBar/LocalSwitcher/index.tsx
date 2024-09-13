'use client'
import { useState, useTransition } from 'react'
import brasil from '../../../../../public/assets/svg/brasil.svg'
import usa from '../../../../../public/assets/svg/usa.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LocalSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActiove = useLocale()
  const [selected, setSelected] = useState(localActiove)

  console.log(router, 'aaa')
  function onSelectChange(value: string) {
    setSelected(value)
    startTransition(() => {
      router.replace(`/${value}`)
    })
  }

  return (
    <>
      <button
        onClick={() => onSelectChange('pt-BR')}
        className={`flex w-full items-center p-2 ${selected == 'en' && 'brightness-50'}`}
      >
        <Image src={brasil} alt="Portuguese" width={30} height={15} />
      </button>
      <button
        onClick={() => onSelectChange('en')}
        className={`flex w-full items-center p-2 ${selected == 'pt-BR' && 'brightness-50'}`}
      >
        <Image src={usa} alt="English" width={30} height={15} />
      </button>
    </>
  )
}
