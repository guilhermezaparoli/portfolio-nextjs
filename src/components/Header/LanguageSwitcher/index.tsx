'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const [, startTransition] = useTransition()
  const router = useRouter()
  const locale = useLocale()

  function switchTo(value: string) {
    startTransition(() => {
      router.replace(`/${value}`)
    })
  }

  return (
    <div className="flex gap-1 font-mono text-sm">
      <button
        onClick={() => switchTo('pt-BR')}
        className={`px-2 py-1 transition-colors ${
          locale === 'pt-BR'
            ? 'text-foreground'
            : 'text-muted hover:text-muted-fg'
        }`}
      >
        PT
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => switchTo('en')}
        className={`px-2 py-1 transition-colors ${
          locale === 'en' ? 'text-foreground' : 'text-muted hover:text-muted-fg'
        }`}
      >
        EN
      </button>
    </div>
  )
}
