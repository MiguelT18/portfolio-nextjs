'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import React, { useEffect } from 'react'

export default function SessionProviderWrapper({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <SessionProvider>{children}</SessionProvider>
}
