"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050B1E]">
      {/* ===== Background Gradients ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[140px]" />
      </div>

      {/* ===== Curved Linear Circles (AI Orbits) ===== */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[900px] w-[900px]">
          <div className="absolute inset-0 rounded-full border border-blue-400/20" />
          <div className="absolute inset-[80px] rounded-full border border-orange-400/20" />
          <div className="absolute inset-[160px] rounded-full border border-blue-400/10" />
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            Enterprise AI Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            AI That Solves
            <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Real Problems.
            </span>
            At Enterprise Scale.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            TingoGPT is an enterprise-grade artificial intelligence platform
            designed to move beyond conversation into execution, decision
            intelligence, and real-world problem solving.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-2xl text-slate-400"
          >
            Built for enterprises, governments, and institutions, TingoGPT
            transforms data into decisions—and decisions into measurable
            outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-medium text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]"
            >
              Request Enterprise Demo
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-blue-500/10 px-6 py-3 font-medium text-blue-300 backdrop-blur transition hover:bg-blue-500/20"
            >
              Explore the Platform
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
