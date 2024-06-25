import AboutCourses from '@/sections/Courses/AboutCourses/AboutCourses'
import React from 'react'
import WebBasics from '@/sections/Courses/WebBasics/WebBasics'
import FrontendDesign from '@/sections/Courses/FrontendDesign/FrontendDesign'
import FrontendDev from '@/sections/Courses/FrontendDev/FrontendDev'
import BackendDev from '@/sections/Courses/BackendDev/BackendDev'

export default function Courses() {
  return (
    <main>
      <AboutCourses />
      <hr />
      <WebBasics />
      <hr />
      <FrontendDesign />
      <hr />
      <FrontendDev />
      <hr />
      <BackendDev />
    </main>
  )
}
