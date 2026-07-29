import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      ownerName,
      businessName,
      mobile,
      email,
      password,
      googleReviewLink,
    } = body;

    const slug =
  businessName
    .toLowerCase()
    .replace(/\s+/g, "-");

const existingBusiness =
  await prisma.business.findUnique({
    where: {
      slug,
    },
  });

if (existingBusiness) {
  return NextResponse.json(
    {
      error:
        "Business already registered",
    },
    {
      status: 400,
    }
  );
}

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: ownerName,
        email,
        password: hashedPassword,
        role: "client",
      },
    });


await prisma.business.create({
  data: {
    userId: user.id,
    businessName,
    googleReviewLink,
    ownerName,
    mobile,

    slug,

    status: "ACTIVE",
    plan: "Demo",

    reviewLimit: 25,
    reviewsUsed: 0,
    startDate: new Date(),
expiryDate: new Date(
  Date.now() + 3 * 24 * 60 * 60 * 1000
),  

    paymentStatus: "NONE",
  },
});
    return NextResponse.json({
      success: true,
      message: "Registration submitted. Waiting for admin approval.",
    });
  } catch (error: any) {

  console.log(error);

  return NextResponse.json(
    {
      error: error.message,
    },
    {
      status: 500,
    }
  );
}
}