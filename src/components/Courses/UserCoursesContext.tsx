'use client'

import React, { createContext, useState, ReactNode, useEffect } from 'react'
import type { Course } from '@/types/type'

interface UserCoursesProviderProps {
  children: ReactNode
}

interface UserCoursesContextProps {
  courses: Course[]
  addCourse: (course: Course) => void
  removeCourse: (id: string, url: string) => void
  isCourseAdded: (id: string, url: string) => boolean
}

const defaultValue: UserCoursesContextProps = {
  courses: [],
  addCourse: () => {},
  removeCourse: () => {},
  isCourseAdded: () => false
}

export const UserCoursesContext =
  createContext<UserCoursesContextProps>(defaultValue)

export const UserCoursesProvider = ({ children }: UserCoursesProviderProps) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    // Obtener cursos del localStorage al inicio
    if (typeof window !== 'undefined') {
      const storedCourses = localStorage.getItem('userCourses')
      return storedCourses ? JSON.parse(storedCourses) : []
    }
    return []
  })

  useEffect(() => {
    // Guardar cursos en el localStorage cuando cambien
    localStorage.setItem('userCourses', JSON.stringify(courses))
  }, [courses])

  const addCourse = (course: Course) => {
    setCourses((prevCourses) => [...prevCourses, course])
  }

  const removeCourse = (id: string, url: string) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => !(course.id === id && course.url === url))
    )
  }

  const isCourseAdded = (id: string, url: string) => {
    return courses.some((course) => course.id === id && course.url === url)
  }

  return (
    <UserCoursesContext.Provider
      value={{ courses, addCourse, removeCourse, isCourseAdded }}
    >
      {children}
    </UserCoursesContext.Provider>
  )
}
