import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const feedback =
      await prisma.feedback.create({
  data: {
    businessId: body.businessId,
    rating: body.rating,
    feedback: body.feedback,
    customerName: body.customerName,
  },
});

    return NextResponse.json(
      feedback
    );

  } catch (error) {

    return NextResponse.json(
      {
        error:
          "Failed to save feedback",
      },
      {
        status: 500,
      }
    );
  }
}