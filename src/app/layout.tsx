import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guilherme Zaparoli Gomes | Front-End Developer',
  description:
    'Welcome to the portfolio of Guilherme Zaparoli Gomes, a skilled front-end developer specializing in React.js and Next.js. Explore my projects and get in touch!',
  icons: {
    icon: '/favicon.ico',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
