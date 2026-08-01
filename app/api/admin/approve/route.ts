import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const { businessId,seoKeywords, } =
      await req.json();

    const startDate =
      new Date();

    const expiryDate =
      new Date();

    expiryDate.setDate(
      expiryDate.getDate() + 3
    );

    const business =
      await prisma.business.update({
        where: {
          id: businessId,
        },

        data: {
          seoKeywords,
          status: "ACTIVE",

           startDate: new Date(),

    expiryDate: new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000
    ),

          plan: "Demo",

          reviewLimit: 25,
          
        },
      });
await prisma.notification.create({
  data: {
    businessId,

    title: "Demo Plan Activated",

    message:
      "Your demo account has been activated for 3 days.",
  },
});
    return NextResponse.json({
      success: true,
      business,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}