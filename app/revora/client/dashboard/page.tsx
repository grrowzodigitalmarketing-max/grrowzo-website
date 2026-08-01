"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Crown
} from "lucide-react";

export default function ClientDashboard() {

  const [business, setBusiness] = useState<any>(null);

  useEffect(() => {

  const user =
    localStorage.getItem("user");

  if (!user) {

    window.location.href =
      "/login";



    return;
  }
  
  fetchBusiness();

}, []);
const baseUrl =
  typeof window !== "undefined"
    ? process.env.NODE_ENV === "development"
      ? `${window.location.origin}/revora`
      : process.env.NEXT_PUBLIC_BASE_URL!
    : process.env.NEXT_PUBLIC_BASE_URL!;
  async function fetchBusiness() {

    const res = await fetch(
      "/api/client/business"
    );

    const data = await res.json();
    console.log("BUSINESS DATA:", data);
    setBusiness(data);
    localStorage.setItem(
  "businessId",
  data.id.toString()
);
  }
function downloadQR() {

  const svg =
    document.querySelector("#qr-code svg");

  if (!svg) return;

  const svgData =
    new XMLSerializer().serializeToString(svg);

  const canvas =
    document.createElement("canvas");

  const ctx =
    canvas.getContext("2d");

  const img =
    new Image();

  img.onload = () => {

    canvas.width = 400;
    canvas.height = 400;

    ctx?.drawImage(
      img,
      0,
      0,
      400,
      400
    );

    const pngFile =
      canvas.toDataURL("image/png");

    const downloadLink =
      document.createElement("a");

    downloadLink.download =
      `${business.businessName}-qr.png`;

    downloadLink.href =
      pngFile;

    downloadLink.click();
  };

  img.src =
    "data:image/svg+xml;base64," +
    btoa(svgData);
}
  if (!business)
    return <div>Loading...</div>;

  return (
    <main className="min-h-screen text-white p-8 bg-gradient-to-br from-[#0f0f17] via-[#13131f] to-[#09090f]">

    <div className="flex justify-between items-center mb-10">

  <div>
    <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
  Welcome, {business.businessName}
</h1>

<p className="text-zinc-400 mb-8">
  Manage your reviews and business profile
</p>
  </div>

  <div className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 py-2 rounded-full font-semibold shadow-lg">
    {business.plan}
  </div>

</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

      <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
        <MessageSquare size={18} />
        <p className="text-zinc-500 text-sm uppercase tracking-wider">
  Reviews
</p>

<h2 className="text-4xl font-bold text-white">
          {business.reviewsUsed}/{business.reviewLimit} 
        </h2>
      </div>

      

      <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
        <Crown size={18} />
        <p className="text-zinc-400 text-sm">Plan</p>
        <h2 className="text-3xl font-bold text-purple-400">
          {business.plan}
        </h2>
      </div>

      <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300">
        <ShieldCheck size={18} />
        <p className="text-zinc-400 text-sm">Status</p>
        <h2 className="text-4xl font-bold text-emerald-400">
          {business.status}
        </h2>
      </div>

    </div>

  {/* Business Card */}
  
  <div className="grid lg:grid-cols-3 gap-6 mb-6">

  {/* Business Card */}
  <div className="lg:col-span-2 bg-zinc-900/80 border border-purple-500/20 rounded-3xl p-8">

    <h2 className="text-3xl font-bold text-white mb-6">
      {business.businessName}
    </h2>

    <div className="space-y-2 text-zinc-300">
      <p>Plan: {business.plan}</p>
      <p>Status: {business.status}</p>

      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
        Expires: {business.expiryDate
  ? new Date(
      business.expiryDate
    ).toLocaleDateString()
  : "No Expiry Date"}
      </span>
    </div>

    {/* Reviews Progress */}
    <div className="mt-8">
      <div className="flex justify-between mb-2">
        <span>Reviews Used</span>

        <span>
          {business.reviewsUsed}/{business.reviewLimit}
        </span>
      </div>

      <div className="w-full bg-zinc-800 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
          style={{
            width: `${(business.reviewsUsed / business.reviewLimit) * 100}%`,
          }}
        />
      </div>
    </div>

    {/* Remaining Reviews */}
    <div className="mt-6 bg-zinc-950 rounded-2xl p-6 border border-zinc-800">

      <p className="text-zinc-500 text-sm uppercase tracking-wider">
        Remaining Reviews
      </p>

      <h2 className="text-4xl font-bold text-green-400 mt-2">
        {business.reviewLimit - business.reviewsUsed}
      </h2>

    </div>

  </div>

  {/* QR Card */}
  <div
    id="qr-code"
    className="bg-zinc-900/80 border border-purple-500/20 rounded-3xl p-8 flex flex-col items-center justify-center"
  >

    <h3 className="text-xl font-bold mb-4">
      Review QR Code
    </h3>

    <div className="bg-white p-4 rounded-2xl">

      <QRCode
        value={`${baseUrl}/r/${business.slug}`}
        size={220}
      />

    </div>

    <p className="text-zinc-400 mt-4">
      Customer Review Link
    </p>

    <a
      href={`${baseUrl}/r/${business.slug}`}
      target="_blank"
      className="text-purple-400 text-sm mt-2 break-all text-center"
    >
      {baseUrl}/r/{business.slug}
    </a>

  </div>

</div>

{/* Analytics */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

  <div className="bg-zinc-900/80 rounded-3xl p-6 border border-purple-500/20">

    <h3 className="text-zinc-400 text-sm">
      Total Feedbacks
    </h3>

    <h2 className="text-4xl font-bold text-white mt-2">
      {business.feedbackCount}
    </h2>

  </div>

  <div className="bg-zinc-900/80 rounded-3xl p-6 border border-purple-500/20">

    <h3 className="text-zinc-400 text-sm">
      Positive Reviews
    </h3>

    <h2 className="text-4xl font-bold text-green-400 mt-2">
      {business.positiveCount}
    </h2>

  </div>

  <div className="bg-zinc-900/80 rounded-3xl p-6 border border-purple-500/20">

    <h3 className="text-zinc-400 text-sm">
      Neutral Reviews
    </h3>

    <h2 className="text-4xl font-bold text-yellow-400 mt-2">
      {business.neutralCount}
    </h2>

  </div>

  <div className="bg-zinc-900/80 rounded-3xl p-6 border border-purple-500/20">

    <h3 className="text-zinc-400 text-sm">
      Negative Reviews
    </h3>

    <h2 className="text-4xl font-bold text-red-400 mt-2">
      {business.negativeCount}
    </h2>

  </div>

</div>

{/* Buttons */}
<div className="bg-zinc-900/80 border border-purple-500/20 rounded-3xl p-6">

  <div className="flex flex-wrap justify-center gap-4">

    <a
      href="/revora/client/feedbacks"
      className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-semibold"
    >
      View Feedbacks
    </a>

    <a
      href="/revora/client/upgrade"
      className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-semibold"
    >
      Upgrade Plan
    </a>

   {business.plan !== "Demo" &&
 business.status === "ACTIVE" && (
  <a
    href="/revora/client/topup"
    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
  >
    Buy 40 Reviews - ₹100
  </a>
)}

    <button
      onClick={downloadQR}
      className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl font-semibold"
    >
      Download QR
    </button>

    <button
      onClick={() => {
        localStorage.removeItem("user");
        window.location.href = "/revora/login";
      }}
      className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
    >
      Logout
    </button>

  </div>

</div>
</main>
);
}