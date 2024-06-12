"use client"

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle"
import styles from "./styles.module.css"
import { skills } from "@/lib/data"
import SkillCard from "@/components/Home/SkillCard/SkillCard"
import { useState } from "react"
import { SkillsCategory } from "@/lib/type"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skills[0].category
  )

  const activeSkills =
    skills.find((skill: SkillsCategory) => skill.category === activeCategory)
      ?.list_skill || []

  return (
    <section className={styles.home_sectionSkills}>
      <SectionTitle title="Habilidades" />
      <div className={styles.home_skillsContainer}>
        <div className={styles.home_skillsButtons}>
          {skills.map((skill, index) => (
            <button
              key={skill.id}
              onClick={() => setActiveCategory(skill.category)}
              className={`secondaryButton ${index === 0 ? styles.focused : ""}`}
              autoFocus={index === 0}
            >
              {skill.category}
            </button>
          ))}
        </div>
        <div className={styles.home_skills}>
          {activeSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
