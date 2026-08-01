"use client";

import { useEffect, useState } from "react";

export default function PendingPage() {

  const [businesses, setBusinesses] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadBusinesses();
  }, []);

  const loadBusinesses = async () => {

    try {

      const response =
        await fetch(
          "/api/admin/pending"
        );

      const data =
        await response.json();

      setBusinesses(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  const approveBusiness = async (
  businessId: number,
  seoKeywords: string
) => {

  try {

    await fetch(
      "/api/admin/approve",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          businessId,
          seoKeywords,
        }),
      }
    );

    loadBusinesses();

  } catch (error) {

    console.log(error);

  }
};

  const rejectBusiness = async (
    businessId: number
  ) => {

    try {

      await fetch(
        "/api/admin/reject",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            businessId,
          }),
        }
      );

      loadBusinesses();

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Pending Businesses
        </h1>

        <p className="text-zinc-400 mb-10">
          Approve or reject new business registrations
        </p>

        {loading ? (

          <div className="text-center py-20">
            Loading...
          </div>

        ) : businesses.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
            No Pending Businesses
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {businesses.map(
              (business) => (

                <div
                  key={business.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
                >

                  <h2 className="text-2xl font-bold">
                    {business.businessName}
                  </h2>

                  <div className="space-y-2 mt-5 text-zinc-300">

                    <p>
                      <strong>
                        Owner:
                      </strong>{" "}
                      {business.ownerName}
                    </p>

                    <p>
                      <strong>
                        Mobile:
                      </strong>{" "}
                      {business.mobile}
                    </p>

                    <p>
                      <strong>
                        Plan:
                      </strong>{" "}
                      {business.plan}
                    </p>

                    <p>
                      <strong>
                        Status:
                      </strong>{" "}
                      {business.status}
                    </p>
                  <p>
  <strong>
    Category:
  </strong>{" "}
  {business.businessCategory}
</p>

<p>
  <strong>
    City:
  </strong>{" "}
  {business.city}
</p>

<p>
  <strong>
    SEO Keywords:
  </strong>{" "}
  {business.seoKeywords || "Not Added"}
</p>
                    <p>
                      <strong>
                        Reviews:
                      </strong>{" "}
                      {business.reviewsUsed}
                      /
                      {
                        business.reviewLimit
                      }
                    </p>

                    

                  </div>

                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() =>
  approveBusiness(
    business.id,
    business.seoKeywords || ""
  )
}
                      className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
                    >
                      Approve Demo
                    </button>

                    <button
                      onClick={() =>
                        rejectBusiness(
                          business.id
                        )
                      }
                      className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
                    >
                      Reject
                    </button>

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