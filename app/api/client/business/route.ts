import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const business = await prisma.business.findFirst({
      where: {
        status: "ACTIVE",
      },
      orderBy: {
        id: "desc",
      },
    });
    console.log("BUSINESS FOUND:", business);
   if (!business) {
  return NextResponse.json({
    id: 0,
    businessName: "",
    plan: "Demo",
    status: "ACTIVE",
    reviewLimit: 0,
    reviewsUsed: 0,
    feedbackCount: 0,
    positiveCount: 0,
    negativeCount: 0,
    neutralCount: 0,
  });
}
const feedbacks =
  await prisma.feedback.findMany({
    where: {
      businessId: business?.id,
    },
  });

const feedbackCount =
  feedbacks.length;

const positiveCount =
  feedbacks.filter(
    (f) => f.rating >= 4
  ).length;

const negativeCount =
  feedbacks.filter(
    (f) => f.rating <= 2
  ).length;

const neutralCount =
  feedbacks.filter(
    (f) => f.rating === 3
  ).length;
    return NextResponse.json({
  ...business,
  feedbackCount,
  positiveCount,
  negativeCount,
  neutralCount,
});
    

  } catch (error) {

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
    
  }
}