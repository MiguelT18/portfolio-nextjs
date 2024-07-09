import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Custom404() {
  return (
    <main>
      <article className='notFound-container'>
        <Icon
          className='notFound-icon'
          icon='ph:smiley-sad-duotone'
          width={100}
          height={100}
          color='#02cf5f'
        />

        <div className='notFound-text-container'>
          <h1>Página no encontrada</h1>
          <p>
            La página que estás tratando de buscar no existe, puedes volver al
            inicio haciendo click <Link href='/'>aquí.</Link>
          </p>
        </div>
      </article>
    </main>
  )
}
