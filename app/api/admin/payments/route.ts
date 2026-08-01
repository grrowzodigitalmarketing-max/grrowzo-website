import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {

  try {

    const payments =
      await prisma.paymentRequest.findMany({
        where: {
          status: "PENDING",
        },

        include: {
          business: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(
      payments
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}