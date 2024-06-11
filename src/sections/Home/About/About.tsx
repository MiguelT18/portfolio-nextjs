import SectionTitle from "@/components/UI/SectionTitle/SectionTitle"
import styles from "./styles.module.css"
import Image from "next/image"
import AboutImg from "@/images/profile-picture.jpg"

export default function About() {
  return (
    <section className={styles.home_aboutSection}>
      <div>
        <div>
          <SectionTitle title="Conóceme" />
        </div>
        <Image
          src={AboutImg}
          alt="Profile picture"
          width={250}
          height={250}
          className={styles.home_aboutImage}
        />
      </div>
      <p>
        Soy un programador freelance y también me dedico al desarrollo de
        aplicaciones web que sean adaptables para todos los dispositivos. La
        base de mis habilidades se basa en JavaScript y me encanta usarlo para
        casi todos los proyectos en los que trabajo, en especial para los sitios
        web. Comencé en el desarrollo de aplicaciones web desde el año 2020 y
        hasta ahora vengo mejorando mis habilidades y expandiendo mis
        conocimientos para poder ofrecerte un producto final de mejor calidad.
      </p>
    </section>
  )
}
