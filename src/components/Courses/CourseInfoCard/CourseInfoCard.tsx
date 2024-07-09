import { Icon } from '@iconify/react/dist/iconify.js'
import styles from './styles.module.css'
import React from 'react'

interface CourseInfoCardProps {
  title: string
  description: string
  icon?: string
}

export default function CourseInfoCard(props: CourseInfoCardProps) {
  const {
    title = 'Untitled',
    description = 'Default description',
    icon = 'line-md:buy-me-a-coffee-filled'
  } = props

  return (
    <div className={styles.courseInfoCard}>
      <Icon icon={icon} color='#fff' width={55} height={55} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
