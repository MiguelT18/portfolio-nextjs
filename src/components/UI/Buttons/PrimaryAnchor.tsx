import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import type { UIAnchorProps } from '@/types/type'

export default function PrimarAnchor({
  children,
  fullWidth = false,
  href,
  color = '#fff',
  ...rest
}: UIAnchorProps) {
  return (
    <Link
      style={{ color: `${color}` }}
      href={href}
      className={`${styles.primaryButtonStyles} ${
        fullWidth ? styles.fullWidth : ''
      }`}
      {...rest}
    >
      {children}
    </Link>
  )
}
