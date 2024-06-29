import React from 'react'
import styles from './styles.module.css'
import type { UIButtonProps } from '@/types/type'

export default function PrimaryButton({
  children,
  fullWidth = false,
  color = '#fff',
  ...rest
}: UIButtonProps) {
  return (
    <button
      style={{ color: `${color}` }}
      className={`${styles.primaryButtonStyles} ${
        fullWidth ? styles.fullWidth : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}
