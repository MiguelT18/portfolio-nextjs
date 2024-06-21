'use client'

import React from 'react'
import { courses } from '@/lib/data'
import LearningPath from '@/components/Courses/LearningPath/LearningPath'
import CourseCard from '@/components/Courses/CourseCard/CourseCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function BackendDev() {
  const backendDevelopmentCourses = courses[3].backend_development

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

      <Swiper
        effect={'cards'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
      >
        {backendDevelopmentCourses?.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              bgColor={course.bg_color}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </LearningPath>
  )
}
