"use client";

import { useState } from "react";

export default function RegisterPage() {

const [ownerName, setOwnerName] = useState("");
const [businessName, setBusinessName] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [googleReviewLink, setGoogleReviewLink] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [businessCategory, setBusinessCategory] =
  useState("");
  const [city, setCity] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
  ownerName,
  businessName,
  mobile,
  email,
  password,
  googleReviewLink,
}),
});
      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully!");

        setOwnerName("");
setBusinessName("");
setMobile("");
setEmail("");
setPassword("");
setGoogleReviewLink("");

      } else {
        setMessage(data.error || "Something went wrong");
      }

    } catch (error) {
      console.log(error);
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3">
            Start using Revora AI today
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

         <div>
  <label className="text-sm text-gray-400">
    Owner Name
  </label>

  <input
    type="text"
    value={ownerName}
    onChange={(e) => setOwnerName(e.target.value)}
    placeholder="Owner Name"
    className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="text-sm text-gray-400">
    Business Name
  </label>

  <input
    type="text"
    value={businessName}
    onChange={(e) => setBusinessName(e.target.value)}
    placeholder="Business Name"
    className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="text-sm text-gray-400">
    Mobile Number
  </label>

  <input
    type="text"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
    placeholder="Mobile Number"
    className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="text-sm text-gray-400">
    Email
  </label>

  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="text-sm text-gray-400">
    Password
  </label>

  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>

<div>
  <label className="text-sm text-gray-400">
    Google Review Link
  </label>

  <input
    type="text"
    value={googleReviewLink}
    onChange={(e) => setGoogleReviewLink(e.target.value)}
    placeholder="Paste Google Review Link"
    className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3"
  />
</div>
<select
  value={businessCategory}
  onChange={(e) =>
    setBusinessCategory(e.target.value)
  }
  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3"
>
  <option value="">Select Business Category</option>

  <option>Temple</option>
  <option>Restaurant</option>
  <option>Cafe</option>
  <option>Hotel</option>
  <option>Hospital</option>
  <option>Clinic</option>
  <option>School</option>
  <option>College</option>
  <option>Gym</option>
  <option>Salon</option>
  <option>Spa</option>
  <option>Pet Shop</option>
  <option>Retail Store</option>
  <option>Real Estate</option>
  <option>Electric Contractor</option>
  <option>Travel Agency</option>
  <option>Other</option>
</select>
<input
  type="text"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3"
/>
          <button
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl font-semibold"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          {message && (
            <p className="text-center text-sm text-purple-400">
              {message}
            </p>
          )}

        </form>

      </div>

    </main>
  );
}