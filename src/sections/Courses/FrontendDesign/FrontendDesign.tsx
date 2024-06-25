import { getCoursesData } from '@/lib/loadData'
import LearningPath from '@/components/Courses/LearningPath/LearningPath'
import CourseCard from '@/components/Courses/CourseCard/CourseCard'
import SwiperCarousel from '@/components/UI/SwiperCarousel'
import { Course } from '@/types/type'

export default async function FrontendDesign() {
  const resJSON = await getCoursesData()
  const courses = await JSON.parse(resJSON)
  const currentCourse = courses[1]?.frontend_design

  return (
    <LearningPath path='Diseño UX/UI - Frontend'>
      <p className='webFoundamentals_text'>
        Si quieres especializarte como{' '}
        <strong>Diseñador Frontend o UX/UI</strong> es fundamental que domines
        HTML, CSS, conceptos y herramientas de Diseño UX/UI, maquetación web,
        responsive design, efectos y animaciones, entre algunas otras cosas. 👇
      </p>

      <SwiperCarousel>
        {currentCourse?.map((course: Course) => (
          <CourseCard
            key={course.id}
            bgColor={course.bg_color}
            title={course.title}
            description={course.description}
            image={course.image}
            path={`${course.id}`}
          />
        ))}
      </SwiperCarousel>
    </LearningPath>
  )
}
