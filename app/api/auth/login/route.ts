import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
    role: user.role,
  },

  process.env.JWT_SECRET!,

  {
    expiresIn: "7d",
  }
);
    const response = NextResponse.json({
  success: true,
  token,

  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
});

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}