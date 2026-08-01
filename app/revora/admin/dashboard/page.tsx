"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {

  const [stats, setStats] = useState({
    businesses: 0,
    pendingApprovals: 0,
    pendingPayments: 0,
    feedbacks: 0,
    revenue: 0,
  });

  useEffect(() => {

  const user =
    JSON.parse(
      localStorage.getItem("user") || "{}"
    );

  if (
    !user.id ||
    user.role !== "admin"
  ) {
window.location.href = "/revora/admin/login";

    return;
  }

  fetchStats();

}, []);

  async function fetchStats() {

    try {

      const businessesRes =
        await fetch("/api/business");

      const businesses =
        await businessesRes.json();

      const pendingRes =
        await fetch("/api/admin/pending");

      const pending =
        await pendingRes.json();

      const paymentsRes =
        await fetch("/api/admin/payments");

      const payments =
        await paymentsRes.json();

      const feedbacksRes =
        await fetch("/api/feedback/list");

      const feedbacks =
        await feedbacksRes.json();

      const revenue =
        payments
          ?.filter(
            (p: any) =>
              p.status === "APPROVED"
          )
          .reduce(
            (sum: number, p: any) =>
              sum + p.amount,
            0
          ) || 0;

      setStats({
        businesses:
          businesses.length || 0,

        pendingApprovals:
          pending.length || 0,

        pendingPayments:
          payments.filter(
            (p: any) =>
              p.status === "PENDING"
          ).length || 0,

        feedbacks:
          feedbacks.length || 0,

        revenue,
      });

    } catch (error) {

      console.log(error);
    }
  }

  return (
    <main className="min-h-screen text-white p-8 bg-gradient-to-br from-[#0f0f17] via-[#13131f] to-[#09090f]">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
  Admin Dashboard
</h1>

        <p className="text-zinc-400 mb-10">
          Revora AI Control Panel
        </p>

        <div className="grid md:grid-cols-5 gap-6 mb-10">

          <div className="bg-zinc-900/80
backdrop-blur-xl
border
border-zinc-800
rounded-3xl
p-6
hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300">
            <p className="text-zinc-400">
              Businesses
            </p>

            <h2 className="text-5xl font-bold mt-3">
              {stats.businesses}
            </h2>
          </div>

          <div className="bg-zinc-900/80
backdrop-blur-xl
border
border-zinc-800
rounded-3xl
p-6
hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300">
            <p className="text-zinc-400">
              Pending Approvals
            </p>

            <h2 className="text-5xl font-bold mt-3 text-yellow-400">
              {stats.pendingApprovals}
            </h2>
          </div>

          <div className="bg-zinc-900/80
backdrop-blur-xl
border
border-zinc-800
rounded-3xl
p-6
hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300">
            <p className="text-zinc-400">
              Pending Payments
            </p>

            <h2 className="text-5xl font-bold mt-3 text-purple-400">
              {stats.pendingPayments}
            </h2>
          </div>

          <div className="bg-zinc-900/80
backdrop-blur-xl
border
border-zinc-800
rounded-3xl
p-6
hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300">
            <p className="text-zinc-400">
              Feedbacks
            </p>

            <h2 className="text-5xl font-bold mt-3 text-green-400">
              {stats.feedbacks}
            </h2>
          </div>

          <div className="bg-zinc-900/80
backdrop-blur-xl
border
border-zinc-800
rounded-3xl
p-6
hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300">
            <p className="text-zinc-400">
              Revenue
            </p>

            <h2 className="text-4xl font-bold mt-3 text-emerald-400 border-emerald-500/20">
              ₹{stats.revenue}
            </h2>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="/revora/admin/pending"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300"
          >
            <h2 className="text-2xl font-bold">
              Pending Approvals
            </h2>

            <p className="text-zinc-400 mt-3">
              Approve or reject new businesses
            </p>
          </a>

          <a
            href="/revora/admin/payments"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300"
          >
            <h2 className="text-2xl font-bold">
              Pending Payments
            </h2>

            <p className="text-zinc-400 mt-3">
              Approve subscription payments
            </p>
          </a>

          <a
            href="/revora/dashboard"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300"
          >
            <h2 className="text-2xl font-bold">
              Business Manager
            </h2>

            <p className="text-zinc-400 mt-3">
              Manage QR codes and reviews
            </p>
          </a>
        <a
  href="/admin/feedbacks"
  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500
hover:shadow-lg
hover:shadow-purple-500/20
hover:-translate-y-1
transition-all
duration-300"
>
  <h2 className="text-2xl font-bold">
    Feedback Manager
  </h2>

  <p className="text-zinc-400 mt-3">
    View customer feedback
  </p>
</a>
<div className="bg-zinc-900/80 border border-purple-500/20 rounded-3xl p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Quick Actions
  </h2>

  <div className="flex flex-wrap gap-4">

    <a
      href="/revora/admin/pending"
      className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl"
    >
      Approvals
    </a>

    <a
      href="/revora/admin/payments"
      className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl"
    >
      Payments
    </a>

    <a
      href="/revora/dashboard"
      className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 rounded-xl"
    >
      Businesses
    </a>

  </div>

</div>
        </div>

      </div>

    </main>
  );
}