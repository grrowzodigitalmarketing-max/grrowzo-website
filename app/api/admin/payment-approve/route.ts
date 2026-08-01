import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { paymentId } = await req.json();

    const payment = await prisma.paymentRequest.findUnique({
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
// TOPUP REQUEST

if (payment.requestType === "TOPUP") {

  await prisma.business.update({
    where: {
      id: payment.businessId,
    },

    data: {
      reviewLimit: {
        increment: 40,
      },
    },
  });

  await prisma.paymentRequest.update({
    where: {
      id: paymentId,
    },

    data: {
      status: "APPROVED",
      approvedAt: new Date(),
    },
  });

  await prisma.notification.create({
    data: {
      businessId: payment.businessId,

      title: "Topup Approved",

      message:
        "40 review credits added successfully.",
    },
  });

  return NextResponse.json({
    success: true,
  });
}
    const startDate = new Date();
    const expiryDate = new Date();

    if (payment.duration === 1) {
      expiryDate.setDate(expiryDate.getDate() + 30);
    }

    if (payment.duration === 6) {
      expiryDate.setDate(expiryDate.getDate() + 180);
    }

    if (payment.duration === 12) {
      expiryDate.setDate(expiryDate.getDate() + 365);
    }

    await prisma.business.update({
      where: {
        id: payment.businessId,
      },

      data: {
        status: "ACTIVE",

        plan: payment.plan,

        startDate,
        expiryDate,

        paymentStatus: "PAID",

        reviewLimit:
  payment.plan === "Starter"
    ? 100
    : payment.plan === "Growth"
    ? 200
    : 500,
    
      },
    });

    await prisma.paymentRequest.update({
      where: {
        id: paymentId,
      },

      data: {
        status: "APPROVED",
        approvedAt: new Date(),
      },
    });

    await prisma.notification.create({
      data: {
        businessId: payment.businessId,

        title: "Payment Approved",

        message:
          `${payment.plan} plan activated successfully.`,
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