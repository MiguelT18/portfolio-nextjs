import React from 'react'
import { Icon } from '@iconify/react'
import styles from './styles.module.css'
import Image from 'next/image'
import type { CourseCardProps } from '@/types/type'
import Link from 'next/link'

export default function CourseCard(props: CourseCardProps) {
  const { title, description, image, bgColor, path, difficult } = props

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
          <button className='secondaryButton'>
            <span>Añadir</span>
            <Icon icon='line-md:plus-circle-twotone' width={25} height={25} />
          </button>

          <Link href={`/courses/${path}`} className='primaryButton fit-width'>
            <span>Ver más</span>
            <Icon icon='ic:round-navigate-next' width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  )
}
