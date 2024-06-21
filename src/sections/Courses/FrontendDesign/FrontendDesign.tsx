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

export default function FrontendDesign() {
  const frontendDesignCourses = courses[1].frontend_design

  return (
    <LearningPath path='Diseño UX/UI - Frontend'>
      <p className='webFoundamentals_text'>
        Si quieres especializarte como{' '}
        <strong>Diseñador Frontend o UX/UI</strong> es fundamental que domines
        HTML, CSS, conceptos y herramientas de Diseño UX/UI, maquetación web,
        responsive design, efectos y animaciones, entre algunas otras cosas. 👇
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
        {frontendDesignCourses?.map((course) => (
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
