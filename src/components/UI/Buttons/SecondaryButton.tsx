import React from 'react'
import styles from './styles.module.css'
import { UIButtonProps } from '@/types/type'

export default function SecondaryButton({
  children,
  fullWidth = false,
  color = '#fff',
  ...rest
}: UIButtonProps) {
  return (
    <button
      style={{ color: `${color}` }}
      className={`${styles.secondaryButtonStyles} ${
        fullWidth ? styles.fullWidth : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}
