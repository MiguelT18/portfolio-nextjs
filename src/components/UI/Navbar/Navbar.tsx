"use client"

import Logo from "@/images/logo.png"
import Image from "next/image"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPost] = useState(0)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)

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

  const navbarStyle = {
    transform: `translateY(${isNavbarHidden ? "-120px" : "0px"})`,
    transition: "transform 0.3s ease-in-out",
  }

  return (
    <nav className={styles.navbar} style={navbarStyle}>
      <a href="/">
        <Image src={Logo} alt={"My logo"} width={60} height={60} />
      </a>

      <div className={styles.menuToggle}>
        <input id="toggle" type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu__mobileItems}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/portfolio">Portafolio</a>
          </li>
        </ul>
      </div>

      <ul className={styles.menu__deskItems}>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/portfolio">Portafolio</a>
        </li>
      </ul>
    </nav>
  )
}
