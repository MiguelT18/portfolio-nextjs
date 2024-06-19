'use client'

import type { Credentials } from '@/types/type'
import styles from './styles.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Credentials>()

  const router = useRouter()

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [passwordHidden, setPasswordHidden] = useState(true)

  useEffect(() => {
    const registrationSuccess = localStorage.getItem('registrationSuccess')
    if (registrationSuccess) {
      setSuccess('Usuario registrado correctamente.')
      localStorage.removeItem('registrationSuccess')
      setTimeout(() => {
        setSuccess(null)
      }, 3000)
    }
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false
    })

    if (res?.error) {
      setError(res.error)
      setTimeout(() => {
        setError(null)
      }, 3000)
    } else {
      router.push('/')
      router.refresh()
    }
  })

  const handleShowPassword = () => {
    setPasswordHidden(!passwordHidden)
  }

  const handleSignInWithGoogle = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <main>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit} className={styles.form}>
          <h1>Inicia Sesión</h1>
          <p>Llena el siguiente formulario para poder iniciar sesión.</p>

          {error && <span className='secondaryErrorMessage'>{error}</span>}
          {success && (
            <span className='secondarySuccessMessage'>{success}</span>
          )}

          <div className={styles.inputFields}>
            <div>
              <input
                autoComplete='off'
                {...register('username', {
                  required: {
                    value: true,
                    message: 'Tu nombre de usuario o correo es requerido'
                  },
                  pattern: {
                    value:
                      /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9](?:[a-zA-Z0-9._]*[a-zA-Z0-9])?)$/,
                    message: 'Ingresa un correo o nombre de usuario válido'
                  }
                })}
                type='text'
                placeholder='Nombre de usuario o correo'
              />
              {errors.username && (
                <span className='errorMessage'>{errors.username?.message}</span>
              )}
            </div>

            <div>
              <div className={styles.passwordInputContainer}>
                <input
                  autoComplete='off'
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Tu contraseña es requerida'
                    }
                  })}
                  type={`${passwordHidden ? 'password' : 'text'}`}
                  placeholder='Contraseña'
                />
                {passwordHidden && (
                  <Icon
                    onClick={handleShowPassword}
                    className={styles.passwordIcon}
                    icon='ph:eye-slash-duotone'
                    width={34}
                    height={34}
                  />
                )}
                {!passwordHidden && (
                  <Icon
                    onClick={handleShowPassword}
                    className={styles.passwordIconVisible}
                    icon='lets-icons:eye-duotone'
                    width={34}
                    height={34}
                  />
                )}
              </div>
              {errors.password && (
                <span className='errorMessage'>{errors.password?.message}</span>
              )}
            </div>
          </div>

          <button className='primaryButton fullWidth'>Iniciar Sesión</button>
          <div className={styles.formFooterContainer}>
            <span className={styles.formFooter}>
              No tienes una cuenta?{' '}
              <Link href='/user/register'>Regístrate</Link>
            </span>
            <span
              className={styles.forgotPassword}
              onClick={() => alert('Ni modo xD')}
            >
              Olvidaste tu contraseña?
            </span>
          </div>

          <div className={styles.signInWith__spanContainer}>
            <span></span>
            <span>O incia con:</span>
            <span></span>
          </div>

          <div className={styles.signInWith__buttonContainer}>
            <button
              type='button'
              className='secondaryButton'
              onClick={handleSignInWithGoogle}
            >
              Google
              <Icon icon='logos:google-icon' width={24} height={24} />
            </button>
            <button
              type='button'
              className='secondaryButton'
              onClick={handleSignInWithGoogle}
            >
              Github
              <Icon icon='bytesize:github' width={24} height={24} />
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
