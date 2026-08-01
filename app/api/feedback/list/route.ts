import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {

  try {

    const feedbacks =
      await prisma.feedback.findMany({

        include: {
          business: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json(
      feedbacks
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      [],
      {
        status: 500,
      }
    );
  }
}