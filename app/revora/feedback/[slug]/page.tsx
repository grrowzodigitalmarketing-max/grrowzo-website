"use client";

import { use } from "react";
import { useState } from "react";

export default function FeedbackPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = use(params);

  const [feedback, setFeedback] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  async function handleSubmit() {

    if (!feedback) return;

    await fetch("/api/feedback", {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        slug,
        feedback,
      }),
    });

    setSubmitted(true);
  }

  if (submitted) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-lg w-full">

          <h1 className="text-3xl font-bold">
            Thank You ❤️
          </h1>

          <p className="text-gray-400 mt-4">
            Your feedback has been submitted successfully.
          </p>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-lg w-full">

        <h1 className="text-4xl font-bold">
          Feedback
        </h1>

        <p className="text-gray-400 mt-4">
          Tell us what went wrong
        </p>

        <textarea
          value={feedback}
          onChange={(e) =>
            setFeedback(e.target.value)
          }
          placeholder="Write your feedback..."
          className="w-full mt-6 bg-black border border-zinc-700 rounded-2xl p-4 min-h-[140px] outline-none focus:border-purple-500"
        />

        <button
          onClick={handleSubmit}
          className="mt-6 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-2xl font-semibold w-full"
        >
          Submit Feedback
        </button>

      </div>
    </main>
  );
}