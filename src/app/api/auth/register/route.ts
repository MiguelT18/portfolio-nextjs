import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import bcrypt from 'bcrypt'
import db from '@/lib/db'
import { RegisterUser } from '@/types/type'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: User = await request.json()

    const userFoundByEmail = await db.user.findUnique({
      where: { email: data.email }
    })

    if (userFoundByEmail) {
      return NextResponse.json(
        { message: 'Este correo ya está en uso' },
        { status: 400 }
      )
    }

    const userFoundByUsername = await db.user.findUnique({
      where: { username: data.username }
    })

    if (userFoundByUsername) {
      return NextResponse.json(
        { message: 'Este nombre de usuario ya está en uso' },
        { status: 400 }
      )
    }

    const fullName: string = `${data.name} ${data.lastName}`

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await db.user.create({
      data: {
        name: fullName,
        username: data.username,
        email: data.email,
        password: hashedPassword
      }
    })

    const { password: _, ...user } = newUser

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
