'use client'

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from './styles.module.css'
import SkillCard from '@/components/Home/SkillCard/SkillCard'
import { useState } from 'react'
import type { SkillsCategory } from '@/types/type'

export default function SkillsClient({ skills }: { skills: SkillsCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<string>(
    skills[0].category
  )

  const activeSkills =
    skills.find((skill: SkillsCategory) => skill.category === activeCategory)
      ?.list_skill || []

  return (
    <section className={styles.home_sectionSkills}>
      <SectionTitle title='Habilidades' />
      <div className={styles.home_skillsContainer}>
        <div className={styles.home_skillsButtons}>
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => setActiveCategory(skill.category)}
              className={`secondaryButton ${
                !activeSkills
                  ? styles.focused
                  : document.body.classList.remove(styles.focused)
              }`}
              autoFocus={skill.id === 1}
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