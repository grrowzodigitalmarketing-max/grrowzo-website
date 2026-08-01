"use client";

import { useEffect, useState } from "react";

export default function TopupPage() {

  const [business, setBusiness] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchBusiness();

  }, []);

  async function fetchBusiness() {

    try {

      const res =
        await fetch("/api/client/business");

      const data =
        await res.json();

      setBusiness(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (
    business.plan === "Demo" ||
    business.status !== "ACTIVE"
  ) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">

        <div className="bg-zinc-900 border border-red-500/20 rounded-3xl p-10 max-w-lg text-center">

          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Topup Not Available
          </h1>

          <p className="text-zinc-400">
            Topup is available only for active paid plans.
          </p>

        </div>

      </main>
    );
  }

  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          Buy Review Credits
        </h1>

        <p className="text-zinc-400 mb-10">
          Add extra review capacity instantly.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-purple-500/20 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-4">
              Review Topup
            </h2>

            <div className="space-y-3 text-zinc-300">

              <p>
                Current Plan:
                {" "}
                <span className="text-purple-400">
                  {business.plan}
                </span>
              </p>

              <p>
                Reviews Used:
                {" "}
                {business.reviewsUsed}
              </p>

              <p>
                Total Limit:
                {" "}
                {business.reviewLimit}
              </p>

              <p>
                Remaining:
                {" "}
                {business.reviewLimit -
                  business.reviewsUsed}
              </p>

            </div>

          </div>

          <div className="bg-zinc-900 border border-green-500/20 rounded-3xl p-8">

            <div className="text-center">

              <h2 className="text-4xl font-bold text-green-400">
                ₹100
              </h2>

              <p className="text-zinc-400 mt-3">
                One-Time Topup
              </p>

              <div className="mt-6 text-left space-y-3">

                <p>
                  ✅ +40 Additional Reviews
                </p>

                <p>
                  ✅ Instant Activation
                </p>

                <p>
                  ✅ No Expiry
                </p>

                <p>
                  ✅ Stackable Credits
                </p>

              </div>

              <button
                className="w-full mt-8 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
              >
                Buy Now ₹100
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}