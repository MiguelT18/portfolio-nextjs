import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from './styles.module.css'
import Link from 'next/link'

export default function AboutCourses() {
  return (
    <section className={styles.AboutCourses}>
      <SectionTitle title='Cursos' />

      <p>
        Aquí te comparto mi contenido clasificado, aquí podrás filtrar los
        cursos tanto por rutas de aprendizaje de acuerdo a tu nivel de
        conocimiento, como por temática.
        <br />
        <br />
        Adicional a esto si buscas algún curso en particular puedes buscarlo en
        la barra de búsqueda. Sin nada más que decir te deseo suerte
        programador. 👋😉
        <br />
        <br />
        Recuerda que para poder consumir los cursos deberás tener una
        suscripción activa en la plataforma la cual la puedes adquirir desde{' '}
        <Link href='/pricing'>Aquí</Link>
      </p>
    </section>
  )
}
