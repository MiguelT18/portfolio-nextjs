'use client'

import styles from './styles.module.css'
import useRequireAuth from '@/hooks/useRequireAuth'

export default function Settings() {
  const { session, status } = useRequireAuth()

  return (
    <section className={styles.sectionContainer}>
      <div>
        <h1>User Settings</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          delectus asperiores ipsam laborum porro soluta architecto repellendus
          ullam, recusandae totam quo quidem, neque unde numquam nam officiis
          provident dolores earum.
        </p>
      </div>
    </section>
  )
}
