import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {

  try {

    const { searchParams } =
      new URL(req.url);

    const businessId =
      Number(
        searchParams.get(
          "businessId"
        )
      );

    const feedbacks =
      await prisma.feedback.findMany({

        where: {
          businessId,
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