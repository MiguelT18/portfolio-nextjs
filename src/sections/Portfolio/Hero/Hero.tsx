"use client"

import ProjectCard from "@/components/Portfolio/ProjectCard"
import styles from "./styles.module.css"
import { projects } from "@/lib/data"
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export default function Hero() {
  const { register, watch } = useForm()

  const searchValue = watch("search")?.toLowerCase() || ""

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchValue) ||
      project.description.toLowerCase().includes(searchValue)
  )

  return (
    <section className={styles.portfolio__hero__section}>
      <div>
        <SectionTitle title="Portfolio" />

        <form className={styles.portfolio__hero__formSearch}>
          <h2>Buscas algún proyecto en particular?</h2>
          <input {...register("search")} type="text" placeholder="Buscar..." />
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
    </section>
  )
}
