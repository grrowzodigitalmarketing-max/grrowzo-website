
"use client";

import { useEffect, useState } from "react";
import { X, UtensilsCrossed, ArrowUpRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "restopulse-popup-dismissed";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export default function RestoPulsePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem(STORAGE_KEY);

      if (dismissedAt) {
        const elapsed = Date.now() - Number(dismissedAt);

        if (elapsed < SEVEN_DAYS) return;
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Continue without saved dismissal preference.
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setVisible(false);

    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // Popup can still be closed if storage is unavailable.
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={closePopup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="restopulse-title"
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#10121b] text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 via-rose-500/10 to-transparent p-7 pb-5 sm:p-9 sm:pb-6">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500">
              <UtensilsCrossed size={24} />
            </div>

            <div>
              <p className="font-bold tracking-wide">RestoPulse</p>
              <p className="text-xs tracking-[3px] text-gray-400">
                BY GRROWZO
              </p>
            </div>

            <Sparkles className="ml-auto mr-10 text-orange-400" size={22} />
          </div>

          <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-300">
            Introducing RestoPulse
          </span>

          <h2
            id="restopulse-title"
            className="mt-5 text-3xl font-bold leading-tight sm:text-4xl"
          >
            Make Every Table a Smarter Ordering Experience.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
            QR-based ordering, live kitchen management, UPI payments,
            customer loyalty and sales reports — built for modern restaurants.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-7 pt-3 sm:flex-row sm:p-9 sm:pt-3">
          <a
            href="https://restopulse.grrowzo.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3.5 font-semibold transition hover:scale-[1.02]"
          >
            Explore RestoPulse
            <ArrowUpRight size={18} />
          </a>

          <button
            type="button"
            onClick={closePopup}
            className="rounded-full border border-white/15 px-6 py-3.5 text-gray-300 transition hover:border-white/40 hover:text-white"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
