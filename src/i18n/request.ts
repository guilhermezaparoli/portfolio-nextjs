import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

type Locale = 'en' | 'pt-BR'

export default getRequestConfig(async (params: { locale: string }) => {
  const locale = params.locale as Locale
  if (!routing.locales.includes(locale)) notFound()

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
