'use client'

import { GlobalProvider } from '@/context/GlobalContext'
import ToastProvider from '@/context/ToastProvider'
import { NextIntlClientProvider } from 'next-intl'
import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { Cursor } from '@/components/motion/Cursor'
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
          <SmoothScroll>
            <Cursor />
            <main className="min-h-screen">{children}</main>
          </SmoothScroll>
        </ToastProvider>
      </NextIntlClientProvider>
    </GlobalProvider>
  )
}
