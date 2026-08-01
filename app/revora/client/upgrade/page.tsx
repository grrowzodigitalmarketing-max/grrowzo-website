"use client";

import { useState } from "react";

export default function UpgradePage() {

  const [plan, setPlan] =
    useState("Starter");

  const [duration, setDuration] =
    useState(1);
    async function buyTopup() {

    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    const res = await fetch(
      "/api/topup/create",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
        }),
      }
    );

    const data =
      await res.json();

    alert(
      data.message ||
      data.error
    );
  }


  const [transactionId, setTransactionId] =
    useState("");

  const [screenshot, setScreenshot] =
    useState("");

  const prices: any = {
    Starter: 299,
    Growth: 699,
    Premium: 1499,
  };

  const baseAmount =
    prices[plan] * duration;

  let discount = 0;

  if (duration === 6) {
    discount = baseAmount * 0.05;
  }

  if (duration === 12) {
    discount = baseAmount * 0.10;
  }

  const finalAmount =
    Math.round(baseAmount - discount);
async function uploadImage(
  e: any
) {
  const file =
    e.target.files[0];

  if (!file) return;

  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  formData.append(
    "upload_preset",
    "revora"
  );

  const res =
    await fetch(
      "https://api.cloudinary.com/v1_1/dgdc3wjjw/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

  const data =
    await res.json();

  setScreenshot(
    data.secure_url
  );

  console.log(
    "Uploaded:",
    data.secure_url
  );
}
  async function submitRequest() {

    try {

      const businessId =
        localStorage.getItem(
          "businessId"
        );
console.log(
  "businessId from localStorage =",
  localStorage.getItem("businessId")
);
      const res =
        await fetch(
          "/api/payment/create",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              businessId:
                Number(businessId),

              plan,
              duration,

              amount:
                finalAmount,

              transactionId,
              screenshot,
            }),
          }
        );

      const data =
        await res.json();

      if (data.success) {

        alert(
          "Payment request submitted successfully"
        );

      } else {

        alert(
          data.error
        );
      }

    } catch (error) {

      console.log(error);

      alert(
        "Server Error"
      );
    }
  }

  return (

    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          Upgrade Plan
        </h1>

        <div className="bg-zinc-900 rounded-3xl p-8">

          <label>
            Plan
          </label>

          <select
            value={plan}
            onChange={(e) =>
              setPlan(
                e.target.value
              )
            }
            className="w-full mt-2 bg-black border border-zinc-700 rounded-xl p-3"
          >

            <option>
              Starter
            </option>

            <option>
              Growth
            </option>

            <option>
              Premium
            </option>

          </select>

          <label className="block mt-6">
            Duration
          </label>

          <select
            value={duration}
            onChange={(e) =>
              setDuration(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full mt-2 bg-black border border-zinc-700 rounded-xl p-3"
          >

            <option value={1}>
              1 Month
            </option>

            <option value={6}>
              6 Months (5% OFF)
            </option>

            <option value={12}>
              12 Months (10% OFF)
            </option>

          </select>

          <div className="mt-8 bg-black rounded-2xl p-6">

            <p>
              Base Amount:
              ₹{baseAmount}
            </p>

            <p>
              Discount:
              ₹{discount}
            </p>

            <p className="text-2xl font-bold mt-2">
              Final Amount:
              ₹{finalAmount}
            </p>

          </div>

          <div className="mt-8 text-center">

            <img
              src="/upi-qr.png"
              alt="UPI QR"
              className="mx-auto w-64"
            />

            <p className="mt-4 text-xl">
              UPI ID
            </p>

            <p className="font-bold">
              7000850665-3@ybl
            </p>

          </div>

          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) =>
              setTransactionId(
                e.target.value
              )
            }
            className="w-full mt-8 bg-black border border-zinc-700 rounded-xl p-3"
          />

          <input
            type="file"
            accept="image/*"
            onChange={uploadImage}
            value={screenshot}
            className="w-full mt-4 bg-black border border-zinc-700 rounded-xl p-3"
          />
            
          <button
            onClick={submitRequest}
            className="w-full mt-6 bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold"
          >

            Submit Payment Request

          </button>
<div className="mt-12 border-t border-zinc-800 pt-10">

  <h2 className="text-3xl font-bold mb-6">
    Review Topup
  </h2>

  <div className="bg-zinc-900 border border-green-500/20 rounded-3xl p-8">

    <h3 className="text-2xl font-bold text-green-400">
      +40 Reviews
    </h3>

    <p className="text-zinc-400 mt-2">
      One Time Review Credit Pack
    </p>

    <h2 className="text-5xl font-bold mt-6">
      ₹100
    </h2>

    <ul className="mt-6 space-y-2 text-zinc-300">
      <li>✅ +40 Additional Reviews</li>
      <li>✅ Instant Activation</li>
      <li>✅ Stackable Credits</li>
      <li>✅ Works With Active Plan</li>
    </ul>

    <button
      onClick={buyTopup}
      className="w-full mt-8 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
    >
      Buy Topup
    </button>

  </div>

</div>
        </div>

      </div>

    </main>
  );
}