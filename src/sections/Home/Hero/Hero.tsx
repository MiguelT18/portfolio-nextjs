import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from './styles.module.css'
import { getIconsData } from '@/lib/loadData'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import TypewriterWrapper from './TypewriterWrapper'
import type { SocialMediaIcon } from '@/types/type'
import PrimaryAnchor from '@/components/UI/Buttons/PrimaryAnchor'
import SecondaryAnchor from '@/components/UI/Buttons/SecondaryAnchor'

export default async function Hero() {
  const resJSON = await getIconsData()
  const icons: SocialMediaIcon[] = await JSON.parse(resJSON)

  return (
    <section className={styles.home_heroSection}>
      <div>
        <div className={styles.home_heroSection__icons}>
          {icons.map((_) =>
            _.social_media.map((icon) => (
              <a href={icon.url} target='_blank' rel='noopener' key={icon.id}>
                <Icon
                  icon={icon.icon}
                  width='30'
                  height='30'
                  className={styles.icon}
                />
              </a>
            ))
          )}
        </div>
        <SectionTitle title='Sígueme' />
      </div>

      <article className={styles.home_heroSection__article}>
        <span>Hola usuario, soy...</span>
        <TypewriterWrapper />

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
            <PrimaryAnchor
              href='https://wa.link/fknvmv'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contáctame
            </PrimaryAnchor>
            <SecondaryAnchor href='/portfolio'>Portafolio</SecondaryAnchor>
          </div>
        </div>
      </article>
    </section>
  )
}
