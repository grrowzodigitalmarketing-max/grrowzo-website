"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

export default function DashboardPage() {

  const [businessName, setBusinessName] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [aiReview, setAiReview] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    fetchBusinesses();
    fetchFeedbacks();
  }, []);

  async function fetchBusinesses() {

    try {

      const res = await fetch("/api/business");

      const data = await res.json();

      setBusinesses(data);
      localStorage.setItem(
      "businessId",
      data.id.toString()
    );

    } catch (err) {

      console.log(err);
    }
  }
  
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
  async function handleAddBusiness(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      const res = await fetch(
        "/api/business/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            businessName,
            googleReviewLink: reviewLink,
          }),
        }
      );

      if (res.ok) {

        alert("Business Added");

        setBusinessName("");
        setReviewLink("");

        fetchBusinesses();

      } else {

        alert("Failed");
      }

    } catch (err) {

      console.log(err);
    }
  }

  async function generateAIReview() {

    if (!businessName) {

      alert("Enter business name");

      return;
    }

    try {

      setLoadingAI(true);

      const res = await fetch(
        "/api/ai-review",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            businessName,
          }),
        }
      );

      const data = await res.json();

      setAiReview(data.review);

    } catch (err) {

      console.log(err);

    } finally {

      setLoadingAI(false);
    }
  }

  function copyReview() {

    navigator.clipboard.writeText(aiReview);

    alert("Review copied");
  }

  async function downloadQR(slug: string) {

    const qr =
      document.getElementById(`qr-${slug}`);

    if (!qr) return;

    const canvas =
      await html2canvas(qr);

    const link =
      document.createElement("a");

    link.download =
      `${slug}-qr.png`;

    link.href =
      canvas.toDataURL();

    link.click();
  }

  async function copyAndOpen(
    review: string,
    link: string
  ) {

    await navigator.clipboard.writeText(review);

    window.open(link, "_blank");

    alert(
      "Review copied. Paste manually in Google Review."
    );
  }

  return (
  <main className="min-h-screen bg-black text-white">
    <div className="flex">

      {/* Sidebar */}

      <aside className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">

        <div className="flex items-center gap-3 mb-10">

          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-xl">
            R
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Revora AI
            </h1>

            <p className="text-zinc-500 text-sm">
              Review Management
            </p>
          </div>

        </div>

        <nav className="space-y-3">

          <div className="bg-purple-600 rounded-xl px-4 py-3">
            Dashboard
          </div>

          <div className="bg-zinc-900 rounded-xl px-4 py-3">
            Businesses
          </div>

          <div className="bg-zinc-900 rounded-xl px-4 py-3">
            Feedback
          </div>

          <div className="bg-zinc-900 rounded-xl px-4 py-3">
            AI Reviews
          </div>

        </nav>

      </aside>

      {/* Main */}

      <section className="flex-1 p-8">

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage Reviews, QR Codes & Customer Feedback
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <p className="text-zinc-400">
              Businesses
            </p>

            <h2 className="text-5xl font-bold mt-2">
              {businesses.length}
            </h2>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <p className="text-zinc-400">
              Feedback
            </p>

            <h2 className="text-5xl font-bold mt-2">
              {feedbacks.length}
            </h2>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <p className="text-zinc-400">
              AI Reviews
            </p>

            <h2 className="text-5xl font-bold mt-2">
              {aiReview ? 1 : 0}
            </h2>

          </div>

        </div>

        {/* Forms Row */}

        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* Add Business */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Add Business
            </h2>

            <form
              onSubmit={handleAddBusiness}
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) =>
                  setBusinessName(e.target.value)
                }
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Google Review Link"
                value={reviewLink}
                onChange={(e) =>
                  setReviewLink(e.target.value)
                }
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3"
              />

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
              >
                Save Business
              </button>

            </form>

          </div>

          {/* AI Review */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              AI Review Generator
            </h2>

            <button
              onClick={generateAIReview}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
            >
              {loadingAI
                ? "Generating..."
                : "Generate AI Review"}
            </button>

            {aiReview && (

              <div className="mt-6">

                <textarea
                  value={aiReview}
                  readOnly
                  className="w-full h-40 bg-black border border-zinc-700 rounded-xl p-4"
                />

                <button
                  onClick={copyReview}
                  className="mt-4 bg-zinc-800 px-5 py-3 rounded-xl"
                >
                  Copy Review
                </button>

              </div>

            )}

          </div>

        </div>

        {/* Business List */}

        <h2 className="text-3xl font-bold mb-6">
          Your Businesses
        </h2>

        <div className="space-y-6">

          {businesses.map((business) => (

            <div
              key={business.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >

              <div className="flex flex-col lg:flex-row gap-8 items-center">

                <div
                  id={`qr-${business.slug}`}
                  className="bg-white p-4 rounded-2xl"
                >
                  <QRCode
                    value={`http://192.168.29.118:3000/r/${business.slug}`}
                    size={180}
                  />
                </div>

                <div className="flex-1">

                  <h3 className="text-3xl font-bold">
                    {business.businessName}
                  </h3>

                  <p className="text-purple-400 mt-2">
                    /r/{business.slug}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    <button
                      onClick={() =>
                        downloadQR(business.slug)
                      }
                      className="bg-zinc-800 px-5 py-3 rounded-xl"
                    >
                      Download QR
                    </button>

                    <button
                      onClick={() =>
                        copyAndOpen(
                          aiReview,
                          business.googleReviewLink
                        )
                      }
                      className="bg-purple-600 px-5 py-3 rounded-xl"
                    >
                      Copy & Open Review
                    </button>

                    <a
                      href={`/r/${business.slug}`}
                      target="_blank"
                      className="bg-green-600 px-5 py-3 rounded-xl"
                    >
                      Open Review Page
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  </main>
);
}