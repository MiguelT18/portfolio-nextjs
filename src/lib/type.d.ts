interface Icon {
  id: number
  name: string
  icon: string
  url?: string
}

export interface RegisterForm {
  name: string
  lastName: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface SocialMediaIcon {
  social_media: Icon[]
}

export interface SectionTitleProps {
  title: string
}

export interface FormData {
  name: string
  email: string
  message: string
  [key: string]: string
}

export interface Project {
  id?: number
  title: string
  description: string
  image: ImageMetadata
  url: string
}

interface Skill {
  skill: string
  icon: string
}

export interface SkillsCategory {
  id: number
  category: string
  list_skill: Skill[]
}

export interface SkillCardProps {
  name: string
  icon: string
}
