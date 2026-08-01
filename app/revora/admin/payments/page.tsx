"use client";

import { useEffect, useState } from "react";

export default function PaymentsPage() {

  const [payments, setPayments] =
    useState<any[]>([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  async function fetchPayments() {

    try {

      const res =
        await fetch(
          "/api/admin/payments"
        );

      const data =
        await res.json();
        console.log("PAYMENTS:", data);
      setPayments(data);

    } catch (error) {

      console.log(error);
    }
  }

  async function approvePayment(
    paymentId: number
  ) {

    try {

      await fetch(
        "/api/admin/payment-approve",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            paymentId,
          }),
        }
      );

      alert(
        "Payment Approved"
      );

      fetchPayments();

    } catch (error) {

      console.log(error);
    }
  }

  async function rejectPayment(
    paymentId: number
  ) {

    try {

      const remark =
        prompt(
          "Enter rejection reason"
        );

      await fetch(
        "/api/admin/payment-reject",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            paymentId,
            remark,
          }),
        }
      );

      alert(
        "Payment Rejected"
      );

      fetchPayments();

    } catch (error) {

      console.log(error);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Pending Payments
        </h1>

        {payments.length === 0 ? (

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            No Pending Payments
          </div>

        ) : (

          <div className="space-y-6">

            {payments.map(
              (payment) => (

                <div
                  key={payment.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
                >

                  <h2 className="text-2xl font-bold">
                    {
                      payment.business
                        ?.businessName
                    }
                  </h2>

                  <div className="mt-4 space-y-2">
                    <p>
                     Type:
                           {" "}
                       {payment.requestType || "UPGRADE"}
                    </p>

                    <p>
                      Plan: {payment.plan}
                    </p>
                    
                    {payment.requestType !== "TOPUP" && (

                    <p>
                       Duration:
                        {" "}
                        {payment.duration}
                             {" "}
                            Month(s)
                    </p>

                    )}
                    <p>
                      Amount:
                      ₹{payment.amount}
                    </p>
{payment.requestType === "TOPUP" && (

  <p className="text-green-400">
    +40 Reviews Topup
  </p>

)}
                    <p>
                      Transaction ID:
                      {" "}
                      {payment.transactionId}
                    </p>

                    <p>
                      Status:
                      {" "}
                      {payment.status}
                    </p>

                  </div>

                  {payment.screenshot && (

                    <a
                      href={
                        payment.screenshot
                      }
                      target="_blank"
                      >
                     <img
    src={payment.screenshot}
    alt="Payment Proof"
    className="w-40 rounded mt-3"
  />
</a>

                  )}

                  <div className="flex gap-3 mt-5">

                    <button
                      onClick={() =>
                        approvePayment(
                          payment.id
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        rejectPayment(
                          payment.id
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl"
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