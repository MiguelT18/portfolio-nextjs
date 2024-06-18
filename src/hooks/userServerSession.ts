import { useState, useEffect } from 'react'
import { getServerSession } from 'next-auth'
import authOptions from '@/config/authOptions'
import type { Session } from 'next-auth'

const useServerSession = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getServerSession(authOptions)
      setSession(session)
      setLoading(false)
    }

    fetchSession()
  }, [])

  return { session, loading }
}

export default useServerSession
