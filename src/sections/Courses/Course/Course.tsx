'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import ContentLoader from 'react-content-loader'
import styles from './styles.module.css'
import PrimaryAnchor from '@/components/UI/Buttons/PrimaryAnchor'
import CourseInfoCard from '@/components/Courses/CourseInfoCard/CourseInfoCard'
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton'
import { getCoursesData } from '@/lib/loadData'
import type { Course, CourseCategory } from '@/types/type'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ContactForm from '@/components/UI/ContactForm/ContactForm'
import { UserCoursesContext } from '@/components/Courses/UserCoursesContext'

export default function CourseContent(props: Course) {
  const { id, url } = props
  const { addCourse, removeCourse, isCourseAdded } =
    useContext(UserCoursesContext)

  const { category, courseId } = useParams() as {
    category: string | string[]
    courseId: string | string[]
  }

  const categoryStr = Array.isArray(category) ? category[0] : category
  const courseIdStr = Array.isArray(courseId) ? courseId[0] : courseId

  const [courseData, setCourseData] = useState<Course | null>(null)

  useEffect(() => {
    async function loadCourseData() {
      try {
        const resJSON = await getCoursesData()
        const courses: CourseCategory[] = JSON.parse(resJSON)

        const categoryData = courses.find((cat: CourseCategory) =>
          Object.keys(cat).includes(categoryStr)
        )

        if (categoryData && categoryData[categoryStr]) {
          const course = categoryData[categoryStr].find(
            (course) => course.id === courseIdStr
          )

          if (course) {
            setCourseData(course)
            return
          }
        }
      } catch (error) {
        console.error('Error fetching course data:', error)
      }
    }

    if (categoryStr && courseIdStr) {
      loadCourseData()
    }
  }, [categoryStr, courseIdStr])

  if (!courseData) {
    return (
      <section className={styles.courseSection}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='60px'
          height='60px'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z'
            opacity='0.5'
          />
          <path
            fill='currentColor'
            d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'
          >
            <animateTransform
              attributeName='transform'
              dur='1s'
              from='0 12 12'
              repeatCount='indefinite'
              to='360 12 12'
              type='rotate'
            />
          </path>
        </svg>
      </section>
    )
  }

  if (!courseData.content) {
    return (
      <section className={styles.courseSection}>
        <p>El contenido del curso no está disponible en este momento.</p>
      </section>
    )
  }

  const handleAddCourse = () => {
    addCourse(props)
  }

  const handleRemoveCourse = () => {
    removeCourse(id, url)
  }

  return (
    <section className={styles.courseSection}>
      <h1 className={styles.courseSection__title}>{courseData.title}</h1>

      <div className={styles.courseSection__header}>
        <ContentLoader
          speed={1}
          width='50%'
          height='100%'
          viewBox='0 0 400 225'
          backgroundColor='#1d2939'
          foregroundColor='#535b6b'
          uniqueKey='course-loader'
        >
          <rect x='0' y='0' rx='2' ry='2' width='100%' height='100%' />
        </ContentLoader>

        <article className={styles.courseSection__headerDescription}>
          <p>{courseData.content.introduction}</p>

          <div>
            <span>
              <Icon
                icon='icon-park-twotone:time'
                color='#02cf5f'
                width={20}
                height={20}
              />
              Duración {courseData.content.duration}.
            </span>

            <div className={styles.courseSection__headerDescriptionButtons}>
              <PrimaryAnchor
                href={`/courses/${categoryStr}/${courseId}/content`}
              >
                Ver completo
              </PrimaryAnchor>
              {!isCourseAdded(id, url) ? (
                <SecondaryButton onClick={handleAddCourse}>
                  <Icon
                    icon='line-md:plus-circle-twotone'
                    color='#fff'
                    width={25}
                    height={25}
                  />
                  Añadir
                </SecondaryButton>
              ) : (
                <SecondaryButton onClick={handleRemoveCourse}>
                  <Icon
                    icon='ph:trash-duotone'
                    color='#fff'
                    width={25}
                    height={25}
                  />
                  Borrar
                </SecondaryButton>
              )}
            </div>
          </div>
        </article>
      </div>

      <h1 className={styles.courseSection__title}>
        ¿Qué aprenderás con este curso?
      </h1>
      <div className={styles.CourseInfoContainer}>
        {courseData.content.courseInfo.map((info, index) => (
          <CourseInfoCard
            icon={info.icon}
            key={index}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>

      <h1 className={styles.courseSection__title}>
        Contáctame por si tienes dudas
      </h1>
      <ContactForm />
    </section>
  )
}
