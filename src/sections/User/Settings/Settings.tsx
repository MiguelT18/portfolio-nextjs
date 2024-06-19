'use client'

import styles from './styles.module.css'
import useRequireAuth from '@/hooks/useRequireAuth'

export default function Settings() {
  const { session, status } = useRequireAuth()

  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1>User Settings</h1>
        <p>Esta página está en construcción, vuelve más tarde</p>
      </div>
    </section>
  )
}
