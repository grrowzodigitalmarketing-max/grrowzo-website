"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return null;
}