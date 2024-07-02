import { Icon } from '@iconify/react/dist/iconify.js'
import ContentLoader from 'react-content-loader'
import styles from './styles.module.css'
import PrimaryButton from '@/components/UI/Buttons/PrimaryButton'
import CourseInfoCard from '@/components/Courses/CourseInfoCard/CourseInfoCard'
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton'

export default function Course() {
  return (
    <section className={styles.courseSection}>
      <h1>Curso de HTML</h1>

      <div className={styles.courseSection__header}>
        <ContentLoader
          speed={1}
          width='50%'
          height='100%'
          viewBox='0 0 400 225'
          backgroundColor='#1d2939'
          foregroundColor='#535b6b'
        >
          <rect x='0' y='0' rx='2' ry='2' width='100%' height='100%' />
        </ContentLoader>

        <article className={styles.courseSection__headerDescription}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            laboriosam numquam odio. Rem quos maxime blanditiis nihil excepturi
            eum, vitae corporis ratione officia nostrum! Pariatur nulla sunt
            reprehenderit quod veniam. Perspiciatis nobis ipsam nisi aliquam
            atque sunt, earum veritatis sapiente voluptates modi cumque at aut
            nulla unde nihil autem illum aperiam distinctio labore architecto
            beatae rerum eos ipsa. Totam, et.
          </p>

          <span>
            <Icon
              icon='icon-park-twotone:time'
              color='#02cf5f'
              width={20}
              height={20}
            />
            Duración 1h 30m.
          </span>

          <div className={styles.courseSection__headerDescriptionButtons}>
            <PrimaryButton>Ver completo</PrimaryButton>
            <SecondaryButton>
              <Icon
                icon='line-md:plus-circle-twotone'
                color='#fff'
                width={25}
                height={25}
              />
              Añadir
            </SecondaryButton>
          </div>
        </article>
      </div>

      <h1>¿Qué verás en este curso?</h1>
      <div className={styles.CourseInfoContainer}>
        <CourseInfoCard />
        <CourseInfoCard />
        <CourseInfoCard />
      </div>
    </section>
  )
}
