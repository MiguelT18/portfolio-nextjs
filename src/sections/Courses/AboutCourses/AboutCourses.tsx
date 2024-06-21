import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from './styles.module.css'

export default function AboutCourses() {
  return (
    <section className={styles.AboutCourses}>
      <SectionTitle title='Cursos' />

      <p>
        Aquí te comparto mi contenido clasificado cómo lo deberías consumir en
        rutas de aprendizaje de acuerdo al perfil profesional que te menciono a
        continuación.
        <br />
        <br />
        Todos estos perfiles que propongo incluyen como prerequisito la ruta de
        aprendizaje: <strong>&ldquo;Básicos de la Web&ldquo;.</strong> Así que
        si eres nuevo, comienza por <a href='#'>aquí</a>.
        <br />
        <br />
        Si ya tienes experiencia en este maravilloso mundo de la web, consume
        los cursos que te sirvan, de acuerdo a tu interés o perfil.
        <br />
        <br />
        Buena suerte. 👋😉
      </p>
    </section>
  )
}
