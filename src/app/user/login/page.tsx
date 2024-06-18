'use client'

import type { Credentials } from '@/types/type'
import styles from './styles.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Credentials>()

  const router = useRouter()

  const [error, setError] = useState<string | null>(null)

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if (res?.error) {
      setError('Ha ocurrido un error')
      setTimeout(() => {
        setError(null)
      }, 2000)
    } else {
      router.push('/')
      router.refresh()
    }
  })

  return (
    <main>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit} className={styles.form}>
          <h1>Inicia Sesión</h1>
          <p>Llena el siguiente formulario para poder iniciar sesión.</p>

          {error && <span className='secondaryErrorMessage'>{error}</span>}

          <input
            {...register('email', {
              required: { value: true, message: 'Tu correo es requerido' }
            })}
            type='email'
            placeholder='Correo electrónico'
          />
          {errors.email && (
            <span className='errorMessage'>{errors.email?.message}</span>
          )}

          <input
            {...register('password', {
              required: { value: true, message: 'Tu contraseña es requerida' }
            })}
            type='password'
            placeholder='Contraseña'
          />
          {errors.password && (
            <span className='errorMessage'>{errors.password?.message}</span>
          )}

          <button className='primaryButton fullWidth'>Iniciar Sesión</button>
          <span className={styles.formFooter}>
            No tienes una cuenta? <Link href='/user/register'>Regístrate</Link>
          </span>
        </form>
      </div>
    </main>
  )
}
