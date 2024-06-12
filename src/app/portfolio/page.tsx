import ContactForm from "@/components/UI/ContactForm/ContactForm"
import Footer from "@/components/UI/Footer/Footer"
import Hero from "@/sections/Portfolio/Hero/Hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Miguel Terán | Portafolio",
}

export default function Portfolio() {
  return (
    <>
      <main>
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
