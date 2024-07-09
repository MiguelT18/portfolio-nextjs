import Custom404 from '@/app/not-found'
import { getCoursesData } from '@/lib/loadData'
import type { CourseCategory } from '@/types/type'
import React from 'react'
import Course from '@/sections/Courses/Course/Course'

interface ParamsProps {
  params: { category: string; courseId: string }
}

export default async function CoursePage({ params }: ParamsProps) {
  const resJSON = await getCoursesData()
  const courses: CourseCategory[] = JSON.parse(resJSON)

  const { category, courseId } = params
  const categoryData = courses.find((cat: CourseCategory) =>
    Object.keys(cat).includes(category)
  )

  if (categoryData && categoryData[category]) {
    const course = categoryData[category].find(
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
