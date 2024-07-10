import React from 'react'
import styles from './styles.module.css'
import SecondaryButton from '@/components/UI/Buttons/SecondaryButton'

interface SavedCourseCardProps {
  id: string
  category: string
  title: string
  description: string
  removeCourse: (id: string, category: string) => void
}

export default function SavedCourseCard(props: SavedCourseCardProps) {
  const { id, category, title, description, removeCourse } = props

  const handleRemove = () => {
    removeCourse(id, category)
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
