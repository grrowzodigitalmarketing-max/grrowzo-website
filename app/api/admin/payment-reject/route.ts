import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {

    const { paymentId } =
      await req.json();

    const payment =
      await prisma.paymentRequest.findUnique({
        where: {
          id: paymentId,
        },
      });

    if (!payment) {
      return NextResponse.json(
        { error: "Payment not found" },
        { status: 404 }
      );
    }

    await prisma.paymentRequest.update({
      where: {
        id: paymentId,
      },

      data: {
        status: "REJECTED",
      },
    });

    await prisma.notification.create({
      data: {
        businessId:
          payment.businessId,

        title: "Payment Rejected",

        message:
          "Your payment request was rejected.",
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}