import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/UI/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/UI/Footer/Footer'
import SessionProviderWrapper from '@/SessionProviderWrapper'
import { UserCoursesProvider } from '@/components/Courses/UserCoursesContext'

const inter = Roboto({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Miguel Terán | Inicio',
  description: 'Welcome to my portfolio user :)'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProviderWrapper>
          <UserCoursesProvider>
            <Navbar />
            {children}
            <Footer />
          </UserCoursesProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
