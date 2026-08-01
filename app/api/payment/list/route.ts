import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const requests =
    await prisma.paymentRequest.findMany({

      include: {
        business: true,
      },

      orderBy: {
        id: "desc",
      },
    });

  return NextResponse.json(
    requests
  );
}