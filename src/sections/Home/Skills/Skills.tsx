import { getSkillsData } from '@/lib/loadData'
import SkillsClient from './SkillsClient'
import type { SkillsCategory } from '@/types/type'

export default async function Skills() {
  const resJSON = await getSkillsData()
  const skills: SkillsCategory[] = JSON.parse(resJSON)

  return <SkillsClient skills={skills} />
}
