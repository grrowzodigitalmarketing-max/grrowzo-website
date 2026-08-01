"use client";

import { useEffect, useState } from "react";

export default function FeedbacksPage() {

  const [feedbacks, setFeedbacks] =
    useState<any[]>([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  async function fetchFeedbacks() {

    try {

      const res =
        await fetch(
          "/api/feedback/list"
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

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Customer Feedbacks
        </h1>

        {feedbacks.length === 0 ? (

          <div className="bg-zinc-900 p-8 rounded-3xl">
            No Feedback Found
          </div>

        ) : (

          <div className="space-y-6">

            {feedbacks.map(
              (item) => (

                <div
                  key={item.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
                >

                  <h2 className="text-2xl font-bold">
                    {
                      item.business
                        ?.businessName
                    }
                  </h2>

                  <div className="mt-4 space-y-2">

                    <p>
                      Customer:
                      {" "}
                      {item.customerName}
                    </p>

                    <p>
                      Rating:
                      {" "}
                      ⭐ {item.rating}
                    </p>

                    <p>
                      Feedback:
                    </p>

                    <div className="bg-black p-4 rounded-xl">
                      {item.feedback}
                    </div>

                    <p className="text-zinc-400 text-sm">
                      {new Date(
                        item.createdAt
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </main>
  );
}