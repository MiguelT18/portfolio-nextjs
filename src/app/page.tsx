import ContactForm from "@/components/UI/ContactForm/ContactForm"
import Footer from "@/components/UI/Footer/Footer"
import About from "@/sections/Home/About/About"
import Hero from "@/sections/Home/Hero/Hero"
import Skills from "@/sections/Home/Skills/Skills"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
