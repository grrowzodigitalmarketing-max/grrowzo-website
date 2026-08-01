import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const { businessId } =
      await req.json();

    await prisma.business.update({
      where: {
        id: businessId,
      },

      data: {
        status: "REJECTED",
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