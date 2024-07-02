import { Icon } from '@iconify/react/dist/iconify.js'
import styles from './styles.module.css'
import React from 'react'

export default function CourseInfoCard() {
  return (
    <div className={styles.courseInfoCard}>
      <Icon
        icon='line-md:buy-me-a-coffee-filled'
        color='#fff'
        width={55}
        height={55}
      />
      <h3>Hello World</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        voluptates.
      </p>
    </div>
  )
}
