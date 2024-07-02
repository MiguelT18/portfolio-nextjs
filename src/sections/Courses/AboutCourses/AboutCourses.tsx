import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from './styles.module.css'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function AboutCourses() {
  return (
    <section className={styles.AboutCourses}>
      <SectionTitle title='Cursos' />

      <div>
        <p>
          Aquí te comparto mi contenido clasificado donde podrás filtrar los
          cursos tanto por rutas de aprendizaje de acuerdo a tu nivel de
          conocimiento, como por temática.
          <br />
          <br />
          Adicional a esto si buscas algún curso en particular puedes buscarlo
          en la barra de búsqueda. Sin nada más que decir te deseo suerte
          programador. 👋😉
          <br />
          <br />
        </p>

        <p>
          Recuerda que para poder consumir todos los cursos deberás tener una
          suscripción activa en la plataforma la cual la puedes adquirir desde{' '}
          <Link href='/pricing'>Aquí.</Link> 👈
        </p>
      </div>
    </section>
  )
}
