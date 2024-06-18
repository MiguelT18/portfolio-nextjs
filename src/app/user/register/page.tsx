'use client'

import Footer from '@/components/UI/Footer/Footer'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { RegisterForm } from '@/lib/type'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterForm>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <>
      <main>
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit} className={styles.form}>
            <h1>Crea una cuenta</h1>
            <p>Llena el siguiente formulario para poder crear tu cuenta.</p>

            <div>
              <div>
                <input
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Tu nombre es requerido'
                    },
                    minLength: {
                      value: 3,
                      message: 'Tu nombre debe tener al menos 3 caracteres'
                    }
                  })}
                  type='text'
                  placeholder='Tus nombres'
                />
                {errors.name && (
                  <span className='errorMessage'>{errors.name?.message}</span>
                )}
              </div>
              <div>
                <input
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: 'Tu apellido es requerido'
                    },
                    minLength: {
                      value: 3,
                      message: 'Tu apellido debe tener al menos 3 caracteres'
                    }
                  })}
                  type='text'
                  placeholder='Tus apellidos'
                />
                {errors.lastName && (
                  <span className='errorMessage'>
                    {errors.lastName?.message}
                  </span>
                )}
              </div>
            </div>

            <input
              {...register('username', {
                required: {
                  value: true,
                  message: 'Tu nombre de usuario es requerido'
                },
                minLength: {
                  value: 3,
                  message:
                    'Tu nombre de usuario debe tener al menos 3 caracteres'
                }
              })}
              type='text'
              placeholder='Nombre de usuario'
            />
            {errors.username && (
              <span className='errorMessage'>{errors.username?.message}</span>
            )}

            <input
              {...register('email', {
                required: {
                  value: true,
                  message: 'Tu correo electrónico es requerido'
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Por favor, ingresa un correo electrónico válido'
                }
              })}
              type='email'
              placeholder='Correo electrónico'
            />
            {errors.email && (
              <span className='errorMessage'>{errors.email?.message}</span>
            )}

            <input
              {...register('password', {
                required: {
                  value: true,
                  message: 'Tu contraseña es requerida'
                },
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres'
                }
              })}
              type='password'
              placeholder='Contraseña'
            />
            {errors.password && (
              <span className='errorMessage'>{errors.password?.message}</span>
            )}

            <input
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'La confirmación de la contraseña es requerida'
                }
              })}
              type='password'
              name='confirmPassword'
              placeholder='Confirmar contraseña'
            />
            {errors.confirmPassword && (
              <span className='errorMessage'>
                {errors.confirmPassword?.message}
              </span>
            )}

            <button className='primaryButton fullWidth'>Registrarse</button>
            <span className={styles.toLogin}>
              Ya tienes una cuenta?{' '}
              <Link href='/user/login'>Inicia sesión</Link>
            </span>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
