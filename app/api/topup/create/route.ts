import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { userId } = body;

    const business =
      await prisma.business.findFirst({
        where: {
          userId,
        },
      });

    if (!business) {

      return NextResponse.json(
        {
          error: "Business not found",
        },
        {
          status: 404,
        }
      );
    }

    // Demo plan block

    if (business.plan === "Demo") {

      return NextResponse.json(
        {
          error:
            "Topup not available on Demo plan. Please upgrade first.",
        },
        {
          status: 400,
        }
      );
    }

    // Expired plan block

    if (
      business.expiryDate &&
      new Date(business.expiryDate) <
        new Date()
    ) {

      return NextResponse.json(
        {
          error:
            "Plan expired. Please renew your plan first.",
        },
        {
          status: 400,
        }
      );
    }

    // Duplicate pending request block

    const existingRequest =
      await prisma.paymentRequest.findFirst({
        where: {
          businessId: business.id,
          status: "PENDING",
          requestType: "TOPUP",
        },
      });

    if (existingRequest) {

      return NextResponse.json(
        {
          error:
            "Topup request already pending approval.",
        },
        {
          status: 400,
        }
      );
    }

    // Create request

   const request =
  await prisma.paymentRequest.create({
    data: {
      businessId: business.id,

      plan: "TOPUP",

      duration: 0,

      amount: 100,

      requestType: "TOPUP",

      status: "PENDING",

      notes: "40 Reviews Topup",
    },
  });
    return NextResponse.json({
      success: true,
      message:
        "Topup request submitted successfully.",
      request,
    });

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