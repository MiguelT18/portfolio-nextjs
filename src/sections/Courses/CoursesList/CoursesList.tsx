import { getCoursesData } from '@/lib/loadData'
import { CourseCategory } from '@/types/type'
import CoursesListClient from './CoursesListClient'

export default async function CoursesList() {
  const resJSON = await getCoursesData()
  const data: CourseCategory[] = JSON.parse(resJSON)
  let courses = data
    .flatMap((category: CourseCategory) => Object.values(category).flat())
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <section>
      <CoursesListClient courses={courses} />
    </section>
  )
}
