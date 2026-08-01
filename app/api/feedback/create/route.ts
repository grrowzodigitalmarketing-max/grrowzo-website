import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const {
      businessId,
      rating,
      feedback,
      customerName,
    } = await req.json();

    const business =
      await prisma.business.findUnique({
        where: {
          id: businessId,
        },
      });

    if (!business) {

      return NextResponse.json(
        {
          error:
            "Business not found",
        },
        {
          status: 404,
        }
      );
    }

    if (
      business.reviewsUsed >=
      business.reviewLimit
    ) {

      return NextResponse.json(
        {
          error:
            "Review limit reached. Please upgrade your plan or buy review credits.",
        },
        {
          status: 403,
        }
      );
    }

    const result =
      await prisma.feedback.create({
        data: {
          businessId,
          rating,
          feedback,
          customerName,
        },
      });

    await prisma.business.update({
      where: {
        id: businessId,
      },

      data: {
        reviewsUsed: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(
      result
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