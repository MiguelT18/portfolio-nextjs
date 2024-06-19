// Images
import AltavidaImage from '@/public/images/portfolio/altavida.jpg'
import HotmartCourseImage from '@/public/images/portfolio/hotmart_course.jpg'
import DrSimonsImage from '@/public/images/portfolio/drsimons_webapp.jpg'
import BiopharmaImage from '@/public/images/portfolio/biopharma.jpg'
import NestorImage from '@/public/images/portfolio/nestor_arce.jpg'

import type { SkillsCategory, Project, SocialMediaIcon } from '@/types/type'

export const icons: SocialMediaIcon[] = [
  {
    social_media: [
      {
        id: 1,
        name: 'github',
        icon: 'line-md:github-loop',
        url: 'https://github.com/MiguelT18'
      },
      {
        id: 2,
        name: 'instagram',
        icon: 'line-md:instagram',
        url: 'https://www.instagram.com/miguelterann01?igsh=MWZrN3Bqem54MXRvaQ=='
      },
      {
        id: 3,
        name: 'tiktok',
        icon: 'line-md:tiktok',
        url: 'https://www.tiktok.com/@miguel_terann?_t=8mcg76fX2lK&_r=1'
      }
    ]
  }
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Alta Vida',
    description:
      'Aplicación web desarrollada para una empresa que se dedica al desarrollo inmobiliario.',
    image: AltavidaImage,
    url: 'https://altavidasrl.vercel.app/'
  },
  {
    id: 2,
    title: 'Curso Programación',
    description:
      'Landing page desarrollada para un proyecto personal dedicado a la venta de un curso digital de programación.',
    image: HotmartCourseImage,
    url: 'https://hotmart-course.vercel.app/'
  },
  {
    id: 3,
    title: 'Dr. Cristian Simons',
    description:
      'Aplicación web desarrollada para las consultas y la newsletter del Dr.Simons.',
    image: DrSimonsImage,
    url: 'https://drsimons-app-miguelt18s-projects.vercel.app/'
  },
  {
    id: 4,
    title: 'BIO Pharma',
    description:
      'Landing page desarrollada para una empresa que se dedica a la elaboración de productos naturales para la diabetes, rendimiento deportivo, intimidad, etc.',
    image: BiopharmaImage,
    url: 'https://biopharma-landing.vercel.app/'
  },
  {
    id: 5,
    title: 'Néstor Árce',
    description:
      'Landing page desarrollada para un entrenador personal con experiencia en la nutrición y biomecánica de los ejercicios.',
    image: NestorImage,
    url: 'https://nestorarce.vercel.app/'
  }
]

export const skills: SkillsCategory[] = [
  {
    id: 1,
    category: 'Frontend',
    list_skill: [
      { skill: 'HTML', icon: 'devicon:html5' },
      { skill: 'CSS', icon: 'devicon:css3' },
      { skill: 'JavaScript', icon: 'logos:javascript' },
      { skill: 'NextJS', icon: 'logos:nextjs-icon' },
      { skill: 'AstroJS', icon: 'logos:astro-icon' },
      { skill: 'React', icon: 'logos:react' },
      { skill: 'Vite', icon: 'skill-icons:vite-dark' }
    ]
  },
  {
    id: 2,
    category: 'Backend',
    list_skill: [
      { skill: 'Python', icon: 'skill-icons:python-dark' },
      { skill: 'NodeJS', icon: 'skill-icons:nodejs-dark' },
      { skill: 'MongoDB', icon: 'devicon:mongodb-wordmark' },
      { skill: 'Supabase', icon: 'skill-icons:supabase-dark' },
      { skill: 'Turso', icon: 'simple-icons:turso' },
      { skill: 'MySQL', icon: 'logos:mysql' },
      { skill: 'Scikitlearn', icon: 'skill-icons:scikitlearn-light' },
      { skill: 'Prisma', icon: 'simple-icons:prisma' }
    ]
  },
  {
    id: 3,
    category: 'Herramientas',
    list_skill: [
      { skill: 'Figma', icon: 'skill-icons:figma-dark' },
      { skill: 'WordPress', icon: 'skill-icons:wordpress' }
    ]
  },
  {
    id: 4,
    category: 'Otros...',
    list_skill: [
      { skill: 'Arduino', icon: 'vscode-icons:file-type-arduino' },
      { skill: 'C++', icon: 'logos:c-plusplus' },
      { skill: 'Raspberry Pi', icon: 'logos:raspberry-pi' }
    ]
  }
]
