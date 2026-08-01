import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {

    const {
      businessId,
      plan,
      duration,
      amount,
      transactionId,
      screenshot,
    } = await req.json();
console.log({
  businessId,
  plan,
  duration,
  amount,
  transactionId,
  screenshot,
});
    const payment =
      await prisma.paymentRequest.create({
        data: {
          businessId,
          plan,
          duration,
          amount,
          transactionId,
          screenshot,
          status: "PENDING",
        },
      });

    return NextResponse.json({
      success: true,
      payment,
    });

  } catch (error) {

    console.log("PAYMENT ERROR:");
    console.log(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}