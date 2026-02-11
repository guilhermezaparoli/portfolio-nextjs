'use client'

import { GlobalProvider } from '@/context/GlobalContext'
import ToastProvider from '@/context/ToastProvider'
import { NextIntlClientProvider } from 'next-intl'
import en from '../../../messages/en.json'
import pt from '../../../messages/pt-BR.json'

interface LayoutLocaleProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LayoutLocale({
  children,
  params: { locale },
}: Readonly<LayoutLocaleProps>) {
  const messages = locale === 'en' ? en : pt
  return (
    <GlobalProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ToastProvider>
          <main className="min-h-screen">{children}</main>
        </ToastProvider>
      </NextIntlClientProvider>
    </GlobalProvider>
  )
}
