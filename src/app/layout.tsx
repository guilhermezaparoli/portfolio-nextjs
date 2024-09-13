import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalProvider } from '@/context/GlobalContext'
import { ToastContainer } from 'react-toastify'
import ToastProvider from '@/context/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guilherme Zaparoli Gomes',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth antialiased">
      <GlobalProvider>
        <body className={`${inter.className} bg-sunnyDay dark:bg-nightDay`}>
          <div className="min-h-screen px-4 py-5 md:px-36 md:py-8">
            <ToastProvider>
              <main>{children}</main>
            </ToastProvider>
          </div>
        </body>
      </GlobalProvider>
    </html>
  )
}
