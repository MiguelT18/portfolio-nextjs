import React from 'react'
import { getCoursesData } from '@/lib/loadData'
import LearningPath from '@/components/Courses/LearningPath/LearningPath'
import CourseCard from '@/components/Courses/CourseCard/CourseCard'
import SwiperCarousel from '@/components/UI/SwiperCarousel'
import { Course } from '@/types/type'

export default async function WebBasics() {
  const resJSON = await getCoursesData()
  const courses = await JSON.parse(resJSON)

  const currentCourse = courses[0]?.web_basics

  return (
    <LearningPath path='Básicos de la Web'>
      <p className='webFoundamentals_text'>
        No importa el perfil al que te quieras dedicar, estos cursos son
        esenciales, independientemente del camino que quieras seguir.
        <br />
        <br />
        Si vas empezando en este maravilloso mundo del Diseño y Desarrollo Web,
        inicia por estos cursos. 👇
      </p>

      <SwiperCarousel>
        {currentCourse?.map((course: Course) => (
          <CourseCard
            key={course.id}
            bgColor={course.bg_color}
            title={course.title}
            description={course.description}
            image={course.image}
            path={`${course.url}/${course.id}`}
          />
        ))}
      </SwiperCarousel>
    </LearningPath>
  )
}
