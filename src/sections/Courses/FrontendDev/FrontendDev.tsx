import { getCoursesData } from '@/lib/loadData'
import LearningPath from '@/components/Courses/LearningPath/LearningPath'
import CourseCard from '@/components/Courses/CourseCard/CourseCard'
import SwiperCarousel from '@/components/UI/SwiperCarousel'
import { Course } from '@/types/type'

export default async function FrontendDev() {
  const resJSON = await getCoursesData()
  const courses = await JSON.parse(resJSON)
  const currentCourse = courses[2]?.frontend_development

  return (
    <LearningPath path='Desarrollo Frontend'>
      <p className='webFoundamentals_text'>
        Si quieres especializarte como <strong>Frontend Developer</strong> es
        fundamental que domines JavaScript y algunas de sus librerías y
        frameworks, en los últimos años React y su ecosistema de herramientas
        dominan el mercado laboral. 👇
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
