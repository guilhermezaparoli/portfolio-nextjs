import type { Metadata, Viewport } from 'next'
import {
  Fraunces,
  Instrument_Sans as InstrumentSans,
  Fragment_Mono as FragmentMono,
} from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--font-fraunces',
})

const instrument = InstrumentSans({
  subsets: ['latin'],
  variable: '--font-instrument',
})

const fragment = FragmentMono({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-fragment',
})

export const metadata: Metadata = {
  title: 'Guilherme Zaparoli — Full-Stack Developer',
  description:
    'Portfolio of Guilherme Zaparoli Gomes, a full stack developer specializing in React.js, Next.js, Node.js and TypeScript.',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e0d0b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${fraunces.variable} ${instrument.variable} ${fragment.variable}`}
    >
      <body className="grain font-sans">{children}</body>
    </html>
  )
}
