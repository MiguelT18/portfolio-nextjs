import React from 'react'
import { Icon } from '@iconify/react'
import styles from './styles.module.css'
import Image from 'next/image'
import type { CourseCardProps } from '@/types/type'
import Link from 'next/link'

export default function CourseCard(props: CourseCardProps) {
  const { title, description, image, bgColor, path, url } = props

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
      </div>

      <Link href={`/courses/${path}`} className='secondaryButton'>
        <span className={styles.courseCard__span}>Ver más</span>
        <Icon
          icon='ic:round-navigate-next'
          color='#02cf5f'
          width={30}
          height={30}
        />
      </Link>
    </div>
  )
}
