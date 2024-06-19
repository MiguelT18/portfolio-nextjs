import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/lib/db'
import bcrypt from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const userFound = await db.user.findFirst({
          where: {
            username: credentials?.username
          }
        })

        if (!userFound) throw new Error('Usuario no encontrado')

        const matchPassword = await bcrypt.compare(
          credentials?.password,
          userFound.password
        )

        if (!matchPassword) throw new Error('Contraseña incorrecta')

        const { password, ...user } = userFound

        return {
          ...user
        }
      }
    })
  ],
  pages: {
    signIn: '/user/login'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  session: {
    jwt: true
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('JWT Callback - User:', user)
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      console.log('JWT Callback - Token:', token)
      return token
    },
    async session({ session, token }) {
      console.log('Session Callback - Token:', token)
      session.user.id = token.id
      session.user.email = token.email
      session.user.name = token.name
      console.log('Session Callback - Session:', session)
      return session
    }
  }
}

export default authOptions
