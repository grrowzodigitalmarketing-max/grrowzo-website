"use client";

import { useEffect, useState } from "react";

export default function ClientFeedbacks() {

  const [selectedRating, setSelectedRating] =
  useState<number | null>(null);
    const [feedbacks, setFeedbacks] =
    useState<any[]>([]);

  useEffect(() => {

    fetchFeedbacks();

  }, []);
const filteredFeedbacks =
  selectedRating
    ? feedbacks.filter(
        (item) =>
          item.rating ===
          selectedRating
      )
    : feedbacks;
  async function fetchFeedbacks() {

    try {

      const businessId =
        localStorage.getItem(
          "businessId"
        );

      const res =
        await fetch(
          `/api/client/feedbacks?businessId=${businessId}`
        );

      const data =
        await res.json();

      setFeedbacks(data);

    } catch (error) {

      console.log(error);
    }
  }

  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Customer Feedbacks
        </h1>
<div className="flex gap-3 mb-8 flex-wrap">

  <button
    onClick={() => setSelectedRating(null)}
    className="bg-zinc-800 px-4 py-2 rounded-xl"
  >
    All
  </button>

  <button
    onClick={() => setSelectedRating(1)}
    className="bg-red-600 px-4 py-2 rounded-xl"
  >
    ⭐1
  </button>

  <button
    onClick={() => setSelectedRating(2)}
    className="bg-orange-600 px-4 py-2 rounded-xl"
  >
    ⭐2
  </button>

  <button
    onClick={() => setSelectedRating(3)}
    className="bg-yellow-600 px-4 py-2 rounded-xl"
  >
    ⭐3
  </button>

  <button
    onClick={() => setSelectedRating(4)}
    className="bg-green-600 px-4 py-2 rounded-xl"
  >
    ⭐4
  </button>

  <button
    onClick={() => setSelectedRating(5)}
    className="bg-purple-600 px-4 py-2 rounded-xl"
  >
    ⭐5
  </button>

</div>
        {feedbacks.length === 0 ? (

          <div className="bg-zinc-900 p-8 rounded-3xl">
            No Feedback Found
          </div>

        ) : (

          <div className="space-y-6">

            {filteredFeedbacks.map(
              (item) => (

                <div
                  key={item.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
                >

                  <p>
                    Customer:
                    {" "}
                    {item.customerName}
                  </p>

                  <p className="mt-2">
                    Rating:
                    {" "}
                    ⭐ {item.rating}
                  </p>

                  <div className="bg-black p-4 rounded-xl mt-3">

                    {item.feedback}

                  </div>

                  <p className="text-zinc-400 text-sm mt-4">

                    {new Date(
                      item.createdAt
                    ).toLocaleString()}

                  </p>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </main>
  );
}