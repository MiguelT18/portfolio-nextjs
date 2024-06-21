import styles from './styles.module.css'
import type { ChildrenProp } from '@/types/type'

export default function LearningPath({ children, path }: ChildrenProp) {
  return (
    <article className={styles.learningPath}>
      <h1>{path}</h1>
      {children}
    </article>
  )
}
