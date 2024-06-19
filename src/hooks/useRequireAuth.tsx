import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const useRequireAuth = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.push('/user/login')
    }
  }, [session, status, router])

  return { session, status }
}

export default useRequireAuth
