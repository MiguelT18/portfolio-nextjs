import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Navbar from "@/components/UI/Navbar/Navbar"
import "./globals.css"

const inter = Roboto({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Miguel Terán | Inicio",
  description: "Welcome to my portfolio user :)",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
