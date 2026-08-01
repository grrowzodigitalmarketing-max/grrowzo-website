import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {

  try {

    const businesses =
      await prisma.business.findMany({
        orderBy: {
          id: "desc",
        },
      });

    return NextResponse.json(
      businesses
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch businesses",
      },
      {
        status: 500,
      }
    );
  }
}