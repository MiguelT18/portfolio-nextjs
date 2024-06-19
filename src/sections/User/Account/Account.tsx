'use client'

import styles from './styles.module.css'
import useRequireAuth from '@/hooks/useRequireAuth'

export default function Account() {
  const { session, status } = useRequireAuth()

  return (
    <section className={styles.sectionContainer}>
      <div>
        <h2>Hola {session?.user?.name}</h2>

        <p>Esta página está en construcción, vuelve más tarde</p>
      </div>
    </section>
  )
}
