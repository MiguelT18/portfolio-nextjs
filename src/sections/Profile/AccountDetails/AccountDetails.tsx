'use client'

import { UserCoursesContext } from '@/components/Courses/UserCoursesContext'
import styles from './styles.module.css'
import React, { useContext } from 'react'
import useRequireAuth from '@/hooks/useRequireAuth'
import SavedCourseCard from '@/components/Courses/SavedCourseCard/SavedCourseCard'

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

      <ul className={styles.savedCoursesContainer}>
        {courses.map((course, index) => (
          <li key={index}>
            <SavedCourseCard
              id={course.id}
              category={course.category}
              title={course.title}
              description={course.description}
              removeCourse={removeCourse}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
