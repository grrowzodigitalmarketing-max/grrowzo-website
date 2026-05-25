
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black z-[99999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
  className="flex flex-col items-center justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
  }}
>

  <Image
  src="/images/logo.png"
  alt="Grrowzo"
  width={320}
  height={140}
  priority
  className="object-contain"
 />

  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
    The Complete IT Solution
  </h1>

</motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}