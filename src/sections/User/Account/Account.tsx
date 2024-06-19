'use client'

import styles from './styles.module.css'
import useRequireAuth from '@/hooks/useRequireAuth'

export default function Account() {
  const { session, status } = useRequireAuth()

  return (
    <section className={styles.sectionContainer}>
      <div>
        <h2>Hola {session?.user?.name}</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          laborum deserunt esse deleniti, doloribus vitae architecto dolores
          error repellendus accusantium dolore, nesciunt saepe et facere quidem
          dignissimos inventore dolorem eveniet?
        </p>
      </div>
    </section>
  )
}
