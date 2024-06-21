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

export default function WebBasics() {
  const webBasicsCourses = courses[0].web_basics

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
        {webBasicsCourses?.map((course) => (
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
