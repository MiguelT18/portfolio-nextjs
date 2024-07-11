import React from 'react'
import styles from './styles.module.css'
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton'

interface SavedCourseCardProps {
  id: string
  url: string
  title: string
  description: string
  removeCourse: (id: string, url: string) => void
}

export default function SavedCourseCard(props: SavedCourseCardProps) {
  const { id, url, title, description, removeCourse } = props

  const handleRemove = () => {
    removeCourse(id, url)
  }

  return (
    <div className={styles.savedCourseCard}>
      <h3>{title}</h3>
      <p>{description}</p>

      <SecondaryButton onClick={handleRemove}>
        Eliminar de la lista
      </SecondaryButton>
    </div>
  )
}
