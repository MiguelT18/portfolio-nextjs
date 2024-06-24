// Project - Images
import AltavidaImage from '@/public/images/portfolio/altavida.jpg'
import HotmartCourseImage from '@/public/images/portfolio/hotmart_course.jpg'
import DrSimonsImage from '@/public/images/portfolio/drsimons_webapp.jpg'
import BiopharmaImage from '@/public/images/portfolio/biopharma.jpg'
import NestorImage from '@/public/images/portfolio/nestor_arce.jpg'

// Básicos de la Web - Images
import CodingImg from '@/icons/coding.png'
import HtmlImg from '@/icons/html-5.png'
import VscodeImg from '@/icons/vscode.png'
import CssImg from '@/icons/css.png'
import MarkdownImg from '@/icons/markdown.png'
import GitImg from '@/icons/git.png'
import LinuxImg from '@/icons/linux.png'
// Diseño UX/UI - Frontend - Images
import FigmaImg from '@/icons/figma.png'
import ResponsiveImg from '@/icons/responsive.png'
import TailwindImg from '@/icons/tailwindcss.png'
// Desarrollo Frontend - Images
import JavascriptImg from '@/icons/javascript.png'
import ReactImg from '@/icons/react.png'
import NextImg from '@/icons/nextjs.png'
import AstroImg from '@/icons/astro.png'
// Desarrollo Backend - Images
import NodejsImg from '@/icons/nodejs.png'
import PythonImg from '@/icons/python.png'

import type {
  SkillsCategory,
  Project,
  SocialMediaIcon,
  CoursesData
} from '@/types/type'

export const courses: CoursesData = [
  {
    web_basics: [
      {
        url: '/web_basics',
        id: '1',
        title: 'Hablemos de programación',
        description: 'Aprende los conceptos fundamentales de la programación',
        bg_color: '#f62f53',
        image: CodingImg
      },
      {
        url: '/web_basics',
        id: '2',
        title: 'Fundamentos de HTML',
        description:
          'Aprende los conceptos fundamentales de HTML y crea tu primera página web',
        bg_color: '#ff4401',
        image: HtmlImg
      },
      {
        url: '/web_basics',
        id: '3',
        title: 'Fundamentos de CSS',
        description:
          'Aprende cómo darle estilos básicos a tu página web utilizando CSS',
        bg_color: '#0277bd',
        image: CssImg
      },
      {
        url: '/web_basics',
        id: '4',
        title: 'Visual Studio Code & Emmet',
        description:
          'Aprende a utilizar Visual Studio Code y Emmet para crear páginas web más rápido',
        bg_color: '#08c',
        image: VscodeImg
      },
      {
        url: '/web_basics',
        id: '5',
        title: 'Markdown',
        description:
          'Aprende a utilizar Markdown para crear documentos más rápido',
        bg_color: '#242938',
        image: MarkdownImg
      },
      {
        url: '/web_basics',
        id: '6',
        title: 'Terminal de Linux',
        description:
          'Descarga wsl2 y aprende los comandos más utilizados en Linux',
        bg_color: '#a36400',
        image: LinuxImg
      },
      {
        url: '/web_basics',
        id: '7',
        title: 'Git & Github',
        description:
          'Aprende a utilizar Git y Github para controlar versiones de tu código',
        bg_color: '#f03c2e',
        image: GitImg
      }
    ]
  },
  {
    frontend_design: [
      {
        url: '/frontend_design',
        id: '1',
        title: 'Figma',
        description:
          'Curso de diseño 100% práctico para crear prototipos de alta calidad',
        bg_color: '#242938',
        image: FigmaImg
      },
      {
        url: '/frontend_design',
        id: '2',
        title: 'Flexbox CSS',
        description:
          'Aprende a utilizar Flexbox para crear diseños más dinámicos y responsivos',
        bg_color: '#0277bd',
        image: CssImg
      },
      {
        url: '/frontend_design',
        id: '3',
        title: 'Grid CSS',
        description:
          'Aprende a utilizar Grid para crear diseños más complejos y responsivos',
        bg_color: '#0277bd',
        image: CssImg
      },
      {
        url: '/frontend_design',
        id: '4',
        title: 'Efectos y Movimiento en CSS',
        description:
          'Aprende a crear efectos y movimiento en CSS para darle vida a tu página web',
        bg_color: '#0277bd',
        image: CssImg
      },
      {
        url: '/frontend_design',
        id: '5',
        title: 'Responsive Design',
        description:
          'Aprende a crear diseños responsivos para que tu página web se vea bien en cualquier dispositivo',
        bg_color: '#c4a2fc',
        image: ResponsiveImg
      },
      {
        url: '/frontend_design',
        id: '6',
        title: 'TailwindCSS',
        description:
          'Aprende a utilizar TailwindCSS para crear diseños más rápido y eficiente',
        bg_color: '#32b1c1',
        image: TailwindImg
      }
    ]
  },
  {
    frontend_development: [
      {
        url: '/frontend_development',
        id: '1',
        title: 'JavaScript',
        description:
          'Aprende los conceptos fundamentales de JavaScript y crea interacciones en tu página web',
        bg_color: '#f0db4f',
        image: JavascriptImg
      },
      {
        url: '/frontend_development',
        id: '2',
        title: 'React.js',
        description:
          'Aprende a utilizar React.js para crear componentes reutilizables y dinámicos',
        bg_color: '#61dbfb',
        image: ReactImg
      },
      {
        url: '/frontend_development',
        id: '3',
        title: 'Next.js',
        description:
          'Aprende a utilizar Next.js para crear aplicaciones web con React y características de rendimiento y SEO',
        bg_color: '#000',
        image: NextImg
      },
      {
        url: '/frontend_development',
        id: '4',
        title: 'Astro.js',
        description:
          'Aprende a utilizar Astro.js para crear aplicaciones web estáticas y rápidas',
        bg_color: '#7D7D7D',
        image: AstroImg
      }
    ]
  },
  {
    backend_development: [
      {
        url: '/backend_development',
        id: '1',
        title: 'Python',
        description:
          'Aprende los conceptos fundamentales de Python y crea aplicaciones del lado del servidor',
        bg_color: '#000 ',
        image: PythonImg
      },
      {
        url: '/backend_development',
        id: '2',
        title: 'Node.js',
        description:
          'Aprende a utilizar Node.js para crear aplicaciones del lado del servidor',
        bg_color: '#3c873a',
        image: NodejsImg
      },
      {
        url: '/backend_development',
        id: '3',
        title: 'Desarrollo Web con Node.js & Express.js',
        description:
          'Aprende a utilizar Node.js y Express.js para crear aplicaciones web del lado del servidor',
        bg_color: '#3c873a',
        image: NodejsImg
      }
    ]
  }
]

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
