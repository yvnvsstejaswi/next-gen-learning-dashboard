"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <section className="bg-gradient-to-r
                        from-cyan-500/10
                        via-blue-500/10
                        to-purple-500/10
                        border
                        border-zinc-800
                        rounded-3xl
                        p-8
                        mb-6
                        shadow-lg
                      ">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.section>
      
      <h2 className="text-4xl font-bold">
        Welcome Back, Tejaswi 👋
      </h2>

      <p className="text-zinc-400 mt-3">
        Current Learning Streak
      </p>

      <h3 className="text-5xl font-bold text-cyan-400 mt-2">
        12 Days 🔥
      </h3>
    </section>
  );
}