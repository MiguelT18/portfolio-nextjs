'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import useRequireAuth from '@/hooks/useRequireAuth'
import DefaultAvatar from '@/images/user/panda.png'
import ContentLoader from 'react-content-loader'
import React, { useEffect, useRef, useState } from 'react'

export default function Account() {
  const { session, status } = useRequireAuth()

  const [editDescription, setEditDescription] = useState(false)
  const [description, setDescription] = useState(
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aut cumque mollitia asperiores quo voluptatibus vero, dolorum, blanditiis rerum ex non eveniet quidem. Nam dolorum maxime unde reprehenderit, harum enim.'
  )

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const mirrorRef = useRef<HTMLTextAreaElement>(null)

  const handleEditDescription = () => {
    setEditDescription(true)
  }

  const handleSaveDescription = () => {
    setEditDescription(false)
  }

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value)
  }

  const adjustTextareaHeight = () => {
    if (textareaRef.current && mirrorRef.current) {
      const mirroredEle = mirrorRef.current
      mirroredEle.textContent = textareaRef.current.value
      const newHeight = mirroredEle.scrollHeight
      textareaRef.current.style.height = `${newHeight}px`
    }
  }

  useEffect(() => {
    adjustTextareaHeight()

    document.body.style.overflow = editDescription ? 'hidden' : 'auto'
  }, [description, editDescription])

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.userInfo}>
        {status !== 'authenticated' ? (
          <ContentLoader
            uniqueKey='avatar-loader'
            speed={2}
            width={'100%'}
            height={'auto'}
            viewBox='0 0 476 124'
            backgroundColor='#1d2939'
            foregroundColor='#535b6b'
          >
            <circle cx='75' cy='60' r='60' />
          </ContentLoader>
        ) : (
          <Image
            src={DefaultAvatar}
            alt={session?.user?.name || 'Avatar'}
            width={150}
            height={150}
            className={styles.userInfo__avatar}
          />
        )}

        <div className={styles.userInfo__container}>
          {status !== 'authenticated' ? (
            <ContentLoader
              uniqueKey='account-loader'
              speed={1}
              width={'100%'}
              height={'auto'}
              viewBox='0 0 476 124'
              backgroundColor='#1d2939'
              foregroundColor='#535b6b'
            >
              <rect x='1' y='2' rx='3' ry='3' width='330' height='21' />
              <rect x='1' y='34' rx='3' ry='3' width='52' height='12' />
              <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
              <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
              <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
            </ContentLoader>
          ) : (
            <div className={styles.userInfo__details}>
              <h1>Hola {session?.user?.name} 👋</h1>
              <h2>Sobre mí</h2>
              <div>
                {editDescription ? (
                  <div className={styles.textareaContainer}>
                    <textarea
                      ref={textareaRef}
                      className={styles.textarea}
                      value={description}
                      onChange={handleChangeDescription}
                    ></textarea>
                    <textarea
                      ref={mirrorRef}
                      className={styles.mirror}
                      readOnly
                    ></textarea>

                    <button
                      className={styles.buttonDescription}
                      onClick={handleSaveDescription}
                    >
                      Guardar 💾
                    </button>
                  </div>
                ) : (
                  <>
                    <p>{description}</p>
                    <button
                      className={styles.buttonDescription}
                      onClick={handleEditDescription}
                    >
                      Editar ✏️
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  )
}
