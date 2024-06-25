'use client'

import ProjectCard from '@/components/Portfolio/ProjectCard'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import type { Project } from '@/types/type'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'

interface HeroClientProps {
  projects: Project[]
}

export default function HeroClient({ projects }: HeroClientProps) {
  const { register, watch } = useForm()

  const searchValue = watch('search')?.toLowerCase() || ''

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue)
  )

  return (
    <>
      <div className={styles.portfolio__hero__header}>
        <SectionTitle title='Portfolio' />

        <form className={styles.portfolio__hero__formSearch}>
          <h2>Buscas algún proyecto en particular?</h2>
          <input {...register('search')} type='text' placeholder='Buscar...' />
        </form>
      </div>

      <article className={styles.portfolio__hero__projects}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))
        ) : (
          <span>No se encontraron proyectos.</span>
        )}
      </article>
    </>
  )
}
