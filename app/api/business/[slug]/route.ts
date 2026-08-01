import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {

  try {

    const { slug } = await params;

    const business =
      await prisma.business.findFirst({
        where: {
          slug,
        },
      });

    return NextResponse.json(
      business
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Business not found",
      },
      {
        status: 500,
      }
    );
  }
}