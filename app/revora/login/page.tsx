"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");

      const response = await fetch("/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {

  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );

  setMessage("Login successful!");

  setTimeout(() => {

    if (
      data.user.role === "ADMIN" ||
      data.user.role === "admin"
    ) {

      router.push("/revora/admin/dashboard");

    } else {

      router.push("/revora/client/dashboard");

    }

  }, 1000);

} else {

        setMessage(data.error || "Login failed");
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
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-3">
            Login to your Revora AI dashboard
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>
            <label className="text-sm text-gray-400">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
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