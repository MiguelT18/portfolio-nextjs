import ProjectCard from "@/components/Portfolio/ProjectCard"
import styles from "./styles.module.css"
import { projects } from "@/lib/data"

export default function Hero() {
  return (
    <section className={styles.portfolio__hero__section}>
      <article className={styles.portfolio__hero__projects}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </article>
    </section>
  )
}
