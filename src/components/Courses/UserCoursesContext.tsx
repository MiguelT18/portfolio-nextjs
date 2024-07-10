'use client'

import React, { createContext, useState, ReactNode, useEffect } from 'react'
import type { Course } from '@/types/type'

interface UserCoursesProviderProps {
  children: ReactNode
}

interface UserCoursesContextProps {
  courses: Course[]
  addCourse: (course: Course) => void
  removeCourse: (id: string, category: string) => void
}

const defaultValue: UserCoursesContextProps = {
  courses: [],
  addCourse: () => {},
  removeCourse: () => {}
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

  const removeCourse = (id: string, category: string) => {
    setCourses((prevCourses) =>
      prevCourses.filter(
        (course) => !(course.id === id && course.category === category)
      )
    )
  }

  return (
    <UserCoursesContext.Provider value={{ courses, addCourse, removeCourse }}>
      {children}
    </UserCoursesContext.Provider>
  )
}
