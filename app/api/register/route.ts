import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request, res: Response) {
  const { email, password, name } = await request.json();

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        roleId: 2, // Ensure this roleId exists in your Role table
      },
    });

    const userJson = JSON.parse(JSON.stringify(user, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));

    return NextResponse.json({ user: userJson }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

/* Response */
/*
{
  "user": {
      "id": "8",
      "email": "email@email.com",
      "password": "$2b$10$8py4Us.6qkhxJlDs6d/Lh.PkMgexqoR4kncN9BsoWYTz1iqNBTdlS",
      "name": "name",
      "roleId": 2
  }
}
*/