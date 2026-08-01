"use client";

import { useEffect, useState } from "react";
import { use } from "react";

export default function ReviewPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = use(params);
const [rating, setRating] =
  useState<number | null>(null);

const [feedback, setFeedback] =
  useState("");

const [customerName, setCustomerName] =
  useState("");


  const [business, setBusiness] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);
  const [aiReview, setAiReview] =
  useState("");
  const [error, setError] =
  useState("");
  useEffect(() => {

    fetchBusiness();

  }, []);

  async function fetchBusiness() {

    try {

      const res = await fetch(
  `/api/business/${slug}`
);

      const data =
        await res.json();

      setBusiness(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  }
  async function generateAIReview() {

  try {

    const res = await fetch(
      "/api/ai-review",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
  businessId:
    business.id,

  businessName:
    business.businessName,
}),
      }
    );

    const data =
  await res.json();

console.log(data);


if (data.error) {

  setError(data.error);
  setAiReview("");

  return;
}

setError("");

setAiReview(
  data.review
);

  } catch (error) {

    console.log(error);
  }
}
async function postReviewToGoogle() {

  try {

    await navigator.clipboard.writeText(
      aiReview
    );

    alert(
      "Review copied successfully. Please use your selected 5-star rating on Google."
    );

    window.open(
      business.googleReviewLink,
      "_blank"
    );

  } catch (error) {

    console.log(error);

    alert(
      "Failed to copy review."
    );
  }
}
  function copyReview() {

     navigator.clipboard.writeText(
    aiReview
  );


    alert(
      "Review copied!"
    );
  }
async function submitFeedback() {

  try {

    const res = await fetch(
      "/api/feedback/create",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          businessId: business.id,
          rating,
          feedback,
          customerName,
        }),
      }
    );

    const data =
      await res.json();

    if (res.ok) {

      alert(
        "Feedback submitted"
      );

    } else {

      alert(data.error);
    }

  } catch (error) {

    console.log(error);
  }
}
  if (loading) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        Loading...

      </div>
    );
  }

  if (!business) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        Business not found

      </div>
    );
  }
 
if (
  business.status !== "ACTIVE" ||
  (business.expiryDate &&
    new Date() > new Date(business.expiryDate))
) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Plan Expired
        </h1>

        <p className="mt-4">
          Please renew your subscription to continue collecting reviews.
        </p>
      </div>
    </div>
  );
}
  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 max-w-md w-full text-center">

        <h1 className="text-5xl font-bold text-white">

          {business.businessName}

        </h1>

        <p className="text-gray-400 mt-4">

          How was your experience with us?

        </p>

        {/* EMOJIS */}

        <div className="flex justify-center gap-8 text-6xl mt-10">

  <button
    onClick={() => setRating(1)}
  >
    😡
  </button>

  <button
    onClick={() => setRating(3)}
  >
    😐
  </button>

  <button
  onClick={() => {
    setRating(5);
    generateAIReview();
  }}
>
  😍
</button>

</div>
{rating !== null && rating < 5 && (
  <div className="mt-10">

    <input
      type="text"
      placeholder="Your Name"
      value={customerName}
      onChange={(e) =>
        setCustomerName(
          e.target.value
        )
      }
      className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white"
    />

    <textarea
      placeholder="Tell us what went wrong..."
      value={feedback}
      onChange={(e) =>
        setFeedback(
          e.target.value
        )
      }
      className="w-full h-32 mt-4 bg-black border border-zinc-700 rounded-xl p-3 text-white"
    />

    <button
      onClick={submitFeedback}
      className="w-full mt-4 bg-red-600 py-3 rounded-xl"
    >
      Submit Feedback
    </button>

  </div>
)}

        {/* REVIEW */}

    {rating !== null && rating >= 4 && (

  <div className="mt-10">

    {error && (
      <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mb-3">
        {error}
      </div>
    )}

    <textarea
      readOnly
      value={aiReview}
      className="w-full h-32 bg-black border border-zinc-700 rounded-xl p-4 text-white"
    />

    <button
      onClick={postReviewToGoogle}
      className="mt-5 w-full bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-semibold text-white"
    >
      Post Review on Google
    </button>

    <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4">

      <p className="text-green-400 font-semibold">
        You selected a {rating}-Star Rating ⭐
      </p>

      <p className="text-gray-400 text-sm mt-2">
        Your review will be copied automatically and Google Reviews will open.
        Please use the same rating on Google.
      </p>

    </div>

  </div>
)}
        </div>
            
      </div>

    
  );
}