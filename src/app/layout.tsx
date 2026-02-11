import type { Metadata } from 'next'
import { Inter, JetBrains_Mono as JetBrainsMono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Guilherme Zaparoli Gomes | Front-End Developer',
  description:
    'Portfolio of Guilherme Zaparoli Gomes, a front-end developer specializing in React.js and Next.js.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
