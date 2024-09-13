'use client'

import 'react-toastify/dist/ReactToastify.css'
import '../../app/globals.css'
import { ToastContainer } from 'react-toastify'

interface ToastProviderProps {
  children: React.ReactNode
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        hideProgressBar={true}
      />
    </>
  )
}
