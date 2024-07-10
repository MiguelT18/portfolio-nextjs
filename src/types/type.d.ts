import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { Url } from 'url'

export interface UIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  fullWidth?: boolean
  color?: string
}

export interface UIAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  fullWidth?: boolean
  href: string | Url
  color?: string
}

interface Course {
  id: string
  title: string
  description: string
  image: StaticImageData
  bgColor?: Properties<string | number, string & {}>
  path?: string
  bg_color?: string
  url?: string
  difficult: string
  category: string
  content?: {
    introduction: string
    duration: string
    courseInfo: {
      icon?: string
      title: string
      description: string
    }[]
  }
}
interface CourseCategory {
  [key: string]: Course[]
}
export type CoursesData = {
  [index: number]: CourseCategory[]
}
export interface ChildrenProp {
  children: ReactNode
  path?: string
}

export interface RegisterUser {
  username: string
  email: string
  password: string
  confirmPassword: string
  name: string
  lastName: string
}

export interface Credentials {
  username: string
  email: string
  password: string
}
export interface UserData {
  email: string
  username: string
}
interface Icon {
  id: number
  name: string
  icon: string
  url?: string | undefined
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
