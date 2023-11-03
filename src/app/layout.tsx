import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Online shop',
  description: 'Created by Mukhammadjon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  )
}
