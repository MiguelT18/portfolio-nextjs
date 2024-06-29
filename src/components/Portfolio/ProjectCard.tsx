import Image from 'next/image'
import styles from './styles.module.css'
import { Project } from '@/types/type'
import PrimaryAnchor from '../UI/Buttons/PrimaryAnchor'

export default function ProjectCard({
  title,
  description,
  url,
  image
}: Project) {
  return (
    <article className={styles.portfolio__hero__projectCard}>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <Image
          className={styles.portfolio__hero__projectImage}
          src={image}
          alt="inside project's view"
          width={300}
          height={200}
          priority={false}
        />
      </a>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <PrimaryAnchor href={url} target='_blank' rel='noopener noreferrer'>
          Ver proyecto
        </PrimaryAnchor>
      </div>
    </article>
  )
}
