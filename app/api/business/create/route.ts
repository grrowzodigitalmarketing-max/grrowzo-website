import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
  req: Request
) {
  try {

    const body =
      await req.json();
      const userId = body.userId;


    const businessName =
      body.businessName;

    const googleReviewLink =
      body.googleReviewLink;

      const businessCategory =
  body.businessCategory;
const seoKeywordMap: Record<string, string> = {
  Temple:
    "shrinathji darshan,nathdwara temple,krishna temple,spiritual experience",

  Restaurant:
    "best restaurant,delicious food,family restaurant,quality food",

  Hotel:
    "best hotel,luxury stay,comfortable rooms,hospitality",

  Hospital:
    "best hospital,experienced doctors,healthcare services",

  Clinic:
    "medical clinic,doctor consultation,healthcare",

  "Pet Shop":
    "pet shop,pet accessories,dog food,pet care",

  Salon:
    "beauty salon,hair styling,professional salon",

  Gym:
    "fitness center,gym training,personal trainer",

  School:
    "quality education,best school,student development",

  "Electric Contractor":
    "electrical contractor,power solutions,electrical services",

  Other:
    "local business,quality service,customer satisfaction",
};

  const seoKeywords =
  seoKeywordMap[businessCategory] || "";
  const {city,} = body;

    const slug =
      businessName
        .toLowerCase()
        .replace(/\s+/g, "-");
const existingBusiness =
  await prisma.business.findFirst({
    where: {
      googleReviewLink,
    },
  });

if (existingBusiness) {
  return NextResponse.json(
    {
      error:
        "This Google Review Link is already registered with Revora.",
    },
    {
      status: 400,
    }
  );
}
    const business =
      await prisma.business.create({
        data: {
          userId,
          businessName,

          googleReviewLink,
          businessCategory,
          seoKeywords,
          slug,
          city,
          plan: "starter",

          reviewLimit: 100,

          reviewsUsed: 0,

          status: "ACTIVE",
        },
      });

    return NextResponse.json(
      business
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to create business",
      },
      {
        status: 500,
      }
    );
  }
}