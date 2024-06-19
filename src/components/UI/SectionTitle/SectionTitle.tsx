import React from 'react'
import styles from './styles.module.css'
import type { SectionTitleProps } from '@/types'

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitleContainer}>
      <h1 className={styles.sectionTitle}>{title}</h1>
    </div>
  )
}
