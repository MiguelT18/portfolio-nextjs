"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import styles from "./styles.module.css"
import SectionTitle from "../SectionTitle/SectionTitle"

export default function ContactForm() {
  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <section className={styles.sectionContact}>
      <SectionTitle title="Contáctame" />

      <form onSubmit={onSubmit} className={styles.contactForm}>
        <p>
          Llena el siguiente formulario o envíame un mensaje de WhatsApp y
          recibe una respuesta:
        </p>

        <input type="text" placeholder="Nombre Completo" />

        <input type="email" placeholder="Correo Electrónico" />

        <textarea placeholder="Escribe tu mensaje..." rows={4} />

        <div className={styles.contactForm__buttonContainer}>
          <button className="primaryButton" type="submit">
            Enviar
          </button>
          <a className="secondaryButton" href="https://wa.link/fknvmv">
            <span>WhatsApp</span>
            <Icon
              className="w-fit rounded-full"
              icon={"logos:whatsapp-icon"}
              width={25}
              height={25}
            />
          </a>
        </div>
      </form>
    </section>
  )
}
