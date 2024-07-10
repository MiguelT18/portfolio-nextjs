import React, { useContext } from 'react'
import { Icon } from '@iconify/react'
import styles from './styles.module.css'
import Image from 'next/image'
import type { Course } from '@/types/type'
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton'
import PrimarAnchor from '@/components/UI/Buttons/PrimaryAnchor'
import { UserCoursesContext } from '../UserCoursesContext'

export default function CourseCard(props: Course) {
  const { title, description, image, bgColor, path, difficult } = props
  const { addCourse } = useContext(UserCoursesContext)

  const getDifficultyColor = () => {
    switch (difficult) {
      case 'fácil':
        return '#4CAF50'
      case 'intermedio':
        return '#FFEB3B'
      case 'difícil':
        return '#F44336'
      default:
        return '#4CAF50'
    }
  }

  const difficultyColor = getDifficultyColor()

  const handleAddCourse = () => {
    addCourse(props)
  }

  return (
    <div className={styles.courseCard__container}>
      <div
        style={{ backgroundColor: bgColor }}
        className={styles.courseCard__header}
      >
        <Image
          style={{ backgroundColor: bgColor }}
          src={image}
          alt='Coding'
          width={70}
          height={70}
        />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        <div
          style={{ color: difficultyColor }}
          className={styles.difficultContainer}
        >
          <Icon
            icon='line-md:alert-circle-twotone-loop'
            width={30}
            height={30}
          />
          <span>{difficult}</span>
        </div>

        <div className={styles.buttonsContainer}>
          <SecondaryButton color='#02cf5f' onClick={handleAddCourse}>
            <span>Añadir</span>
            <Icon icon='line-md:plus-circle-twotone' width={25} height={25} />
          </SecondaryButton>

          <PrimarAnchor href={`/courses/${path}`}>
            <span>Ver más</span>
            <Icon icon='ic:round-navigate-next' width={30} height={30} />
          </PrimarAnchor>
        </div>
      </div>
    </div>
  )
}
