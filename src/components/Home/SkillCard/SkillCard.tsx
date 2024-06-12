import React from "react"
import styles from "./styles.module.css"
import { Icon } from "@iconify/react"

import { SkillCardProps } from "@/lib/type"

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className={styles.skillCard_container}>
      <Icon icon={icon} width={28} height={28} />
      <span>{name}</span>
    </div>
  )
}
