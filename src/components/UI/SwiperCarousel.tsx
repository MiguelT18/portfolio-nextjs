'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function SwiperCarousel({ children }: any) {
  return (
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
      {children?.map((child: React.ReactNode, index: number) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
