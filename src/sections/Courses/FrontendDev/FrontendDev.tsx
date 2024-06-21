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

export default function FrontendDev() {
  const frontendDevelopmentCourses = courses[2].frontend_development

  return (
    <LearningPath path='Desarrollo Frontend'>
      <p className='webFoundamentals_text'>
        Si quieres especializarte como <strong>Frontend Developer</strong> es
        fundamental que domines JavaScript y algunas de sus librerías y
        frameworks, en los últimos años React y su ecosistema de herramientas
        dominan el mercado laboral. 👇
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
        {frontendDevelopmentCourses?.map((course) => (
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
