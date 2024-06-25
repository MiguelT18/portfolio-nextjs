'use client'

import CustomTypeWriter from '@/components/UI/CustomTypeWriter'
import styles from './styles.module.css'

export default function TypewriterWrapper() {
  return (
    <CustomTypeWriter
      cursorClassName={styles.typewriterCursor}
      textClassName={styles.typewriterText}
      contain={'Miguel Terán'}
    />
  )
}
