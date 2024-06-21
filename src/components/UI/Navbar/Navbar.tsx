'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/images/logo.png'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useSession, signOut } from 'next-auth/react'
import DefaultAvatar from '@/images/user/panda.png'
import ContentLoader from 'react-content-loader'

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPost] = useState(0)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { data: session, status } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      setIsNavbarHidden(currentScrollPos > prevScrollPos)
      setPrevScrollPost(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  const navbarStyle = {
    transform: `translateY(${isNavbarHidden ? '-120px' : '0px'})`,
    transition: 'transform 0.3s ease-in-out'
  }

  return (
    <nav className={styles.navbar} style={navbarStyle}>
      <Link href='/'>
        <Image
          priority={true}
          src={Logo}
          alt={'My logo'}
          width={60}
          height={60}
        />
      </Link>

      <div className={styles.menuToggle}>
        <input
          id='toggle'
          type='checkbox'
          checked={isMobileMenuOpen}
          onClick={closeMobileMenu}
          onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu__mobileItems}>
          <li onClick={closeMobileMenu}>
            <Link href='/'>Inicio</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href='/portfolio'>Portafolio</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href='/portfolio'>Cursos</Link>
          </li>
          {session ? (
            <>
              <li onClick={closeMobileMenu}>
                <Link href={`/user/${session.user?.name}/account`}>
                  Mi Perfil
                </Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link href={`/user/${session.user?.name}/settings`}>
                  Configuración
                </Link>
              </li>
              <li onClick={closeMobileMenu}>
                <a onClick={() => signOut()}>Cerrar Sesión</a>
              </li>
            </>
          ) : (
            <>
              <li onClick={closeMobileMenu}>
                <Link href='/user/register'>Crear cuenta</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link href='/user/login'>Iniciar Sesión</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className={styles.menu__desk}>
        <div className={styles.menu__user}>
          {status === 'loading' ? (
            <ContentLoader
              uniqueKey='user-avatar-loader'
              speed={1}
              width={30}
              height={30}
              viewBox='0 0 30 30'
              backgroundColor='#1d2939'
              foregroundColor='#535b6b'
            >
              <circle cx='15' cy='15' r='15' />
            </ContentLoader>
          ) : session ? (
            <Image
              className={styles.userAvatar}
              src={session?.user?.image || DefaultAvatar}
              alt='User profile picture'
              width={30}
              height={30}
              priority={false}
            />
          ) : (
            <Icon
              className={styles.menu__userIcon}
              icon='solar:user-circle-bold-duotone'
              width='35'
              height='35'
            />
          )}

          <ul className={styles.menu__userItems}>
            {session ? (
              <>
                <li onClick={closeMobileMenu}>
                  <Link href={`/user/${session.user?.name}/account`}>
                    Mi Perfil
                  </Link>
                </li>
                <li>
                  <Link href={`/user/${session.user?.name}/settings`}>
                    Configuración
                  </Link>
                </li>
                <li>
                  <a onClick={() => signOut()}>Cerrar Sesión</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href='/user/login'>Iniciar Sesión</Link>
                </li>
                <li>
                  <Link href='/user/register'>Crear cuenta</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <ul className={styles.menu__deskItems}>
          <li>
            <Link href='/'>Inicio</Link>
          </li>
          <li>
            <Link href='/portfolio'>Portafolio</Link>
          </li>
          <li>
            <Link href='/courses'>Cursos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
