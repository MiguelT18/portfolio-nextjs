"use client"

import SectionTitle from "@/components/UI/SectionTitle/SectionTitle"
import styles from "./styles.module.css"
import { icons } from "@/lib/data"
import Link from "next/link"
import Typewriter from "typewriter-effect"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Hero() {
  return (
    <section className={styles.home_heroSection}>
      <div>
        <div className={styles.home_heroSection__icons}>
          {icons.map((_) =>
            _.social_media.map((icon) => (
              <a href={icon.url} target="_blank" rel="noopener" key={icon.id}>
                <Icon
                  icon={icon.icon}
                  width="30"
                  height="30"
                  className={styles.icon}
                />
              </a>
            ))
          )}
        </div>
        <SectionTitle title="Sígueme" />
      </div>

      <article className={styles.home_heroSection__article}>
        <span>Hola usuario, soy...</span>
        <Typewriter
          options={{
            cursorClassName: styles.typewriterCursor,
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span class="' +
                  styles.typewriterText +
                  '">Miguel Terán</span>'
              )
              .pauseFor(2000)
              .deleteAll()
              .start()
          }}
        />
        <div>
          <h3>FullStack Developer</h3>
          <ul>
            <li>🟢</li>
            <li>Web developer</li>
            <li>🟢</li>
            <li>Programmer</li>
            <li>🟢</li>
            <li>Software Ingineer</li>
          </ul>

          <div>
            <a
              href="https://wa.link/fknvmv"
              target="_blank"
              rel="noopener"
              className="primaryButton"
            >
              Contáctame
            </a>
            <Link href="/portfolio" className="secondaryButton">
              Portafolio
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
