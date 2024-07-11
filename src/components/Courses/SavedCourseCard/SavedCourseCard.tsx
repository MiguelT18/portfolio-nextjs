import React from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton'
import PrimaryAnchor from '@/components/UI/Buttons/PrimaryAnchor'
import Image from 'next/image'
import type { SavedCourseCardProps } from '@/types/type'

export default function SavedCourseCard(props: SavedCourseCardProps) {
  const { id, url, image, title, description, removeCourse, difficult } = props

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

  const handleRemove = () => {
    removeCourse(id, url)
  }

  return (
    <div className={styles.savedCourseCard}>
      <Image
        priority={false}
        className={styles.savedCourseCard__img}
        src={image}
        alt='course image'
        width={60}
        height={60}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div
        style={{ color: difficultyColor }}
        className={styles.difficultContainer}
      >
        <Icon icon='line-md:alert-circle-twotone-loop' width={30} height={30} />
        <span>{difficult}</span>
      </div>

      <div className={styles.savedCourseCard__buttonsContainer}>
        <PrimaryAnchor href={`/courses${url}/${id}/content`}>
          Ver curso
        </PrimaryAnchor>
        <SecondaryButton onClick={handleRemove}>
          <span>Borrar</span>
          <Icon icon='ph:trash-duotone' width={25} height={25} />
        </SecondaryButton>
      </div>
    </div>
  )
}
