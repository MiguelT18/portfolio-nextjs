import styles from './styles.module.css'
// import { projects } from '@/lib/data'
import { getProjectsData } from '@/lib/loadData'
import HeroClient from './HeroClient'

export default async function Hero() {
  const resJSON = await getProjectsData()
  const projects = JSON.parse(resJSON)

  return (
    <section className={styles.portfolio__hero__section}>
      <HeroClient projects={projects} />
    </section>
  )
}
