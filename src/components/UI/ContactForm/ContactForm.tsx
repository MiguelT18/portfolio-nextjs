'use client'

import { Icon } from '@iconify/react'
import styles from './styles.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { useForm } from 'react-hook-form'
import type { FormData } from '@/types/type'
import { useRef, useState } from 'react'
import useEmailJS from '@/hooks/useEmailJS'

export default function ContactForm() {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()
  const form = useRef<HTMLFormElement>(null)
  const { sendEmail } = useEmailJS()

  const onSubmit = async () => {
    try {
      await sendEmail(form.current)
      reset()
      setIsMessageSent(true)
      setTimeout(() => {
        setIsMessageSent(false)
      }, 3000)
    } catch (error: any) {
      console.error('FAILED...', error)
    }
  }

  return (
    <section className={styles.sectionContact}>
      <SectionTitle title='Contáctame' />

      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.contactForm}
      >
        <p>
          Llena el siguiente formulario o envíame un mensaje de WhatsApp y
          recibe una respuesta:
        </p>

        <input
          {...register('user_name', {
            required: { value: true, message: 'Este campo es requerido.' },
            minLength: { value: 3, message: 'Mínimo 3 caracteres.' }
          })}
          type='text'
          placeholder='Nombre Completo'
          autoComplete='off'
        />
        {errors.user_name && (
          <span className='errorMessage'>{errors.user_name?.message}</span>
        )}

        <input
          {...register('user_email', {
            required: { value: true, message: 'Este campo es requerido.' },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Correo electrónico inválido.'
            }
          })}
          type='user_email'
          placeholder='Correo Electrónico'
          autoComplete='off'
        />
        {errors.user_email && (
          <span className='errorMessage'>{errors.user_email?.message}</span>
        )}

        <textarea
          {...register('message', {
            required: { value: true, message: 'Este campo es requerido.' },
            minLength: { value: 10, message: 'Mínimo 10 caracteres.' }
          })}
          placeholder='Escribe tu mensaje...'
          rows={3}
          autoComplete='off'
        />
        {errors.message && (
          <span className='errorMessage'>{errors.message?.message}</span>
        )}
        {isMessageSent && (
          <span className='successMessage'>
            ¡El mensaje ha sido enviado correctamente!
          </span>
        )}

        <div className={styles.contactForm__buttonContainer}>
          <button className='primaryButton' type='submit'>
            Enviar
          </button>
          <a className='secondaryButton' href='https://wa.link/fknvmv'>
            <span>WhatsApp</span>
            <Icon
              className='w-fit rounded-full'
              icon={'logos:whatsapp-icon'}
              width={25}
              height={25}
            />
          </a>
        </div>
      </form>
    </section>
  )
}
