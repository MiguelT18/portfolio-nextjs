'use client'

import { UserCoursesContext } from '@/components/Courses/UserCoursesContext'
import styles from './styles.module.css'
import React, { useContext } from 'react'
import useRequireAuth from '@/hooks/useRequireAuth'
import SavedCourseCard from '@/components/Courses/SavedCourseCard/SavedCourseCard'
import { Icon } from '@iconify/react'

export default function AccountDetails() {
  const { courses, removeCourse } = useContext(UserCoursesContext)
  const { session, status } = useRequireAuth()

  if (status === 'loading') {
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

  if (!session) {
    return null
  }

  return (
    <section>
      <h1 className={styles.profileSectionTitle}>Tus cursos añadidos</h1>
      {courses.length === 0 && (
        <div className={styles.noCoursesMessage}>
          <Icon
            icon='ph:empty-duotone'
            width={60}
            height={60}
            color='#02cf5f'
          />
          <span>No tienes cursos añadidos.</span>
        </div>
      )}

      <article className={styles.savedCoursesContainer}>
        {courses.length > 0 &&
          courses.map((course, index) => (
            <div key={index}>
              <SavedCourseCard
                difficult={course.difficult}
                image={course.image}
                id={course.id}
                url={course.url}
                title={course.title}
                description={course.description}
                removeCourse={removeCourse}
              />
            </div>
          ))}
      </article>
    </section>
  )
}
