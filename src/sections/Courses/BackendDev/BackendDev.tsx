import { getCoursesData } from '@/lib/loadData'
import LearningPath from '@/components/Courses/LearningPath/LearningPath'
import SwiperCarousel from '@/components/UI/SwiperCarousel'
import CourseCard from '@/components/Courses/CourseCard/CourseCard'
import { Course } from '@/types/type'

export default async function BackendDev() {
  const resJSON = await getCoursesData()
  const courses = await JSON.parse(resJSON)
  const currentCourse = courses[3]?.backend_development

  return (
    <LearningPath path='Desarrollo Backend'>
      <p className='webFoundamentals_text'>
        Si ya dominas JavaScript en el frontend, entonces ahora usa tus
        conocimientos en este lenguaje para dominarlo en el backend y así
        convertirte en un <strong>Desarrollador FullStack</strong> con Node.js
        y/o Python de lenguajes de programación del lado del servidor.
        <br />
        <br />
        Si te decides por aprender Python como tu lenguaje de programación
        podrás especializarte en otras áreas de la programación y la ciencia de
        datos como en el Aprendizaje Automático, Machine Learning o Inteligencia
        Artificial.
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
