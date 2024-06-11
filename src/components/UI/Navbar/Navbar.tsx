"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from "@/images/logo.png"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPost] = useState(0)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      setIsNavbarHidden(currentScrollPos > prevScrollPos)
      setPrevScrollPost(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navbarStyle = {
    transform: `translateY(${isNavbarHidden ? "-120px" : "0px"})`,
    transition: "transform 0.3s ease-in-out",
  }

  return (
    <nav className={styles.navbar} style={navbarStyle}>
      <Link href="/">
        <Image
          priority={true}
          src={Logo}
          alt={"My logo"}
          width={60}
          height={60}
        />
      </Link>

      <div className={styles.menuToggle}>
        <input
          id="toggle"
          type="checkbox"
          checked={isMobileMenuOpen}
          onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu__mobileItems}>
          <li onClick={closeMobileMenu}>
            <Link href="/">Inicio</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href="/portfolio">Portafolio</Link>
          </li>
        </ul>
      </div>

      <ul className={styles.menu__deskItems}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/portfolio">Portafolio</Link>
        </li>
      </ul>
    </nav>
  )
}
