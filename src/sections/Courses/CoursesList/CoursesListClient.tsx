'use client'

import CourseCard from '@/components/Courses/CourseCard/CourseCard'
import { Course, CourseCategory } from '@/types/type'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function CoursesListClient({ courses }: CourseCategory) {
  const { register, watch } = useForm()

  const [activeLearningPathFilter, setActiveLearningPathFilter] =
    useState<string>('')
  const [activeDifficultyFilters, setActiveDifficultyFilters] = useState<
    string[]
  >([])

  const searchValue = watch('search')?.toLowerCase() || ''

  const handleCheckboxChange = (filterType: string, id: string) => {
    if (filterType === 'learningPath') {
      setActiveLearningPathFilter(id === activeLearningPathFilter ? '' : id)
    } else if (filterType === 'difficulty') {
      setActiveDifficultyFilters((prevFilters) => {
        if (prevFilters.includes(id)) {
          return prevFilters.filter((filter) => filter !== id)
        } else {
          return [...prevFilters, id]
        }
      })
    }
  }

  const filterByLearningPath = (course: Course) => {
    if (!activeLearningPathFilter) return true
    return course.url?.includes(activeLearningPathFilter)
  }

  const filterByDifficulty = (course: Course) => {
    if (activeDifficultyFilters.length === 0) return true
    return activeDifficultyFilters.includes(course.difficult)
  }

  const filteredCourses = courses.filter(
    (course) =>
      (course.title.toLowerCase().includes(searchValue) ||
        course.description.toLowerCase().includes(searchValue)) &&
      filterByLearningPath(course) &&
      filterByDifficulty(course)
  )

  const coursesToDisplay = filteredCourses.filter(filterByLearningPath)

  return (
    <>
      <form className={styles.CoursesForm}>
        <h1>Biblioteca de Cursos</h1>

        <input
          {...register('search')}
          type='text'
          placeholder='Buscar curso...'
        />

        <div className={styles.FilterTitle}>
          <Icon icon='line-md:filter-twotone' width={35} height={35} />
          <h2>Filtrar por...</h2>
        </div>

        <div className={styles.FilterContainer}>
          <div className={styles.learningPathFilter}>
            <h3>Rutas de Aprendizaje</h3>

            <div>
              <label htmlFor='web_basics'>
                <input
                  {...register('web_basics')}
                  onChange={() =>
                    handleCheckboxChange('learningPath', 'web_basics')
                  }
                  checked={activeLearningPathFilter === 'web_basics'}
                  id='web_basics'
                  type='checkbox'
                />
                <span>Básicos de la web</span>
              </label>
              <label htmlFor='frontend_design'>
                <input
                  {...register('frontend_design')}
                  onChange={() =>
                    handleCheckboxChange('learningPath', 'frontend_design')
                  }
                  checked={activeLearningPathFilter === 'frontend_design'}
                  id='frontend_design'
                  type='checkbox'
                />
                <span>Diseño Frontend UX/UI</span>
              </label>
              <label htmlFor='frontend_development'>
                <input
                  {...register('frontend_development')}
                  onChange={() =>
                    handleCheckboxChange('learningPath', 'frontend_development')
                  }
                  checked={activeLearningPathFilter === 'frontend_development'}
                  id='frontend_development'
                  type='checkbox'
                />
                <span>Desarrollo Frontend</span>
              </label>
              <label htmlFor='backend_development'>
                <input
                  {...register('backend_development')}
                  onChange={() =>
                    handleCheckboxChange('learningPath', 'backend_development')
                  }
                  checked={activeLearningPathFilter === 'backend_development'}
                  id='backend_development'
                  type='checkbox'
                />
                <span>Desarrollo Backend</span>
              </label>
            </div>
          </div>

          <div className={styles.difficultContainer}>
            <h3>Dificultad</h3>

            <div>
              <label>
                <input
                  {...register('easy')}
                  onChange={() => handleCheckboxChange('difficulty', 'fácil')}
                  checked={activeDifficultyFilters.includes('fácil')}
                  type='checkbox'
                />
                <span>Fácil</span>
              </label>
              <label>
                <input
                  {...register('intermediate')}
                  onChange={() =>
                    handleCheckboxChange('difficulty', 'intermedio')
                  }
                  checked={activeDifficultyFilters.includes('intermedio')}
                  type='checkbox'
                />
                <span>Intermedio</span>
              </label>
              <label>
                <input
                  {...register('hard')}
                  onChange={() => handleCheckboxChange('difficulty', 'difícil')}
                  checked={activeDifficultyFilters.includes('difícil')}
                  type='checkbox'
                />
                <span>Difícil</span>
              </label>
            </div>
          </div>
        </div>
      </form>

      <article className={styles.CoursesContainer}>
        {coursesToDisplay.length > 0 ? (
          coursesToDisplay.map((course, index) => (
            <CourseCard
              key={index}
              bgColor={course.bg_color}
              description={course.description}
              image={course.image}
              path={`${course.url}/${course.id}`}
              title={course.title}
              id={course.id}
              difficult={course.difficult}
            />
          ))
        ) : (
          <span className='secondaryErrorMessage'>
            No se encontraron resultados.
          </span>
        )}
      </article>
    </>
  )
}
