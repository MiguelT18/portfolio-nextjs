import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/lib/db'
import bcrypt from 'bcrypt'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********'
        }
      },
      async authorize(credentials) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        if (!userFound) throw new Error('Usuario no encontrado')

        const matchPassword = await bcrypt.compare(
          credentials?.password,
          userFound.password
        )

        if (!matchPassword) throw new Error('Contraseña incorrecta')

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email
        }
      }
    })
  ],
  pages: {
    signIn: '/user/login'
  }
}

export default authOptions
