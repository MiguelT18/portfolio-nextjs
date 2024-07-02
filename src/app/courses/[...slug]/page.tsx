import { getCoursesData } from '@/lib/loadData'
import Course from '@/sections/Courses/Course/Course'
import type { CourseCategory } from '@/types/type'
import React from 'react'

interface ParamsProps {
  params: { slug: string[] }
}

export default async function CoursePage({ params }: ParamsProps) {
  const resJSON = await getCoursesData()
  const courses: CourseCategory[] = JSON.parse(resJSON)

  if (params.slug.length === 2) {
    const [categorySlug, courseId] = params.slug
    const category = courses.find((cat: CourseCategory) =>
      Object.keys(cat).includes(categorySlug)
    )

    if (category && category[categorySlug]) {
      const course = category[categorySlug].find(
        (course) => course.id === courseId
      )

      if (course) {
        return (
          <main>
            <Course />
          </main>
        )
      }
    }

    // Si no se encuentra el curso, mostrar un mensaje de error o redirigir a una página de error.
    return (
      <main>
        <section>
          <h1>Curso no encontrado</h1>
          <p>La categoría o el curso especificado no existe.</p>
          <p>Mostrar una página 404.</p>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section>
        <h1>Curso no encontrado</h1>
        <p>
          Este componente se mostrará sólamente cuando existan más de 2
          parámetros en la URL.
        </p>
        <p>Mostrar una página 404.</p>
      </section>
    </main>
  )
}
