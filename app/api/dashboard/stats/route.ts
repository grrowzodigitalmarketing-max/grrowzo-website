import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {

  try {

    const positive =
      await prisma.feedback.count({
        where: {
          rating: 5,
        },
      });

    const neutral =
      await prisma.feedback.count({
        where: {
          rating: 3,
        },
      });

    const negative =
      await prisma.feedback.count({
        where: {
          rating: 1,
        },
      });

    return NextResponse.json({
      positive,
      neutral,
      negative,

      total:
        positive +
        neutral +
        negative,
    });

  } catch (error) {

    return NextResponse.json(
      {
        error:
          "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}