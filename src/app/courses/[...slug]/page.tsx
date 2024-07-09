import Custom404 from '@/app/not-found'
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

    return <Custom404 />
  }

  return <Custom404 />
}
