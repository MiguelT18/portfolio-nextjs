import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/lib/db'
import bcrypt from 'bcrypt'

const authOptions = {
  providers: [
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
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.email = token.email
      session.user.name = token.name
      return session
    }
  }
}

export default authOptions
