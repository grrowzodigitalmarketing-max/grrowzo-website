import prisma from "@/lib/prisma";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const businessId =
      body.businessId;

    

    const business =
      await prisma.business.findUnique({
        where: {
          id: businessId,
        },
      });

    if (!business) {

      return Response.json({
        error: "Business not found",
      });
    }

    if (
      business.reviewsUsed >=
      business.reviewLimit
    ) {

      return Response.json({
        error:
          "Review limit reached. Please upgrade your plan or buy review credits.",
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model:
            "openai/gpt-4o-mini",

          messages: [
  {
    role: "system",
    content:
      "You are an expert Google Review writer and local SEO specialist.",
  },

  {
    role: "user",
    content: `
Generate a natural Google review.

Business Name:
${business.businessName}

Business Category:
${business.businessCategory || "Local Business"}

Target Keywords:
${business.seoKeywords || ""}

Rules:
- Use 1 or 2 keywords naturally.
- Human sounding.
- 50 to 100 words.
- Positive and authentic.
- Do not stuff keywords.
- Write like a real customer experience.
- Avoid generic phrases.
`,
  },
],
        }),
      }
    );

    const data =
      await response.json();

    console.log(
      "OPENROUTER RESPONSE:"
    );

    console.log(
      JSON.stringify(
        data,
        null,
        2
      )
    );

    const review =
      data.choices?.[0]?.message
        ?.content ||
      "No review generated";

    await prisma.business.update({
      where: {
        id: businessId,
      },

      data: {
        reviewsUsed: {
          increment: 1,
        },
      },
    });

    return Response.json({
      review,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      error:
        "AI generation failed",
    });
  }
}