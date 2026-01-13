"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  Zap,
  Layers,
  Building2,
  Landmark,
  Banknote,
  HeartPulse,
  Truck,
  Globe,
  Target,
  Scale,
  CheckCircle,
} from "lucide-react";

export default function ValueVision() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* ===== Subtle Orbital Background ===== */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[800px] w-[800px]">
          <div className="absolute inset-0 rounded-full border border-blue-200/30" />
          <div className="absolute inset-[120px] rounded-full border border-orange-200/30" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== VALUE ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            The Value We Deliver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            AI That Creates
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              {" "}Measurable Advantage
            </span>
          </motion.p>
        </div>

        {/* ===== VALUE CARDS ===== */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              label: "Faster decision-making",
              gradient: "from-blue-500/20 to-transparent",
            },
            {
              icon: PiggyBank,
              label: "Reduced operational costs",
              gradient: "from-orange-500/20 to-transparent",
            },
            {
              icon: ShieldCheck,
              label: "Improved compliance outcomes",
              gradient: "from-emerald-500/20 to-transparent",
            },
            {
              icon: Zap,
              label: "Increased productivity",
              gradient: "from-indigo-500/20 to-transparent",
            },
            {
              icon: Layers,
              label: "Scalable digital transformation",
              gradient: "from-cyan-500/20 to-transparent",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${item.gradient} p-8 backdrop-blur`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <item.icon className="text-blue-600" size={22} />
              </div>
              <p className="mt-6 text-lg font-medium text-slate-900">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-medium text-slate-700">
          AI becomes a strategic asset,
          <span className="font-semibold"> not a cost center.</span>
        </p>

        {/* ===== WHO WE SERVE ===== */}
        <div className="mt-32 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-500/10 via-white to-orange-500/10 p-10"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Who We Serve
            </h3>

            <p className="mt-4 text-slate-600">
              Organizations operating in complex, high-stakes environments—
              especially in emerging markets where AI must work in real
              conditions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Building2, label: "Enterprises operating at scale" },
                { icon: Landmark, label: "Governments and regulators" },
                { icon: Banknote, label: "Financial institutions" },
                { icon: HeartPulse, label: "Healthcare systems" },
                { icon: Truck, label: "Infrastructure & logistics providers" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <item.icon className="text-orange-500" size={18} />
                  <span className="text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===== VISION ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-500/10 via-white to-blue-500/10 p-10"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-4 text-slate-600">
              We believe AI should:
            </p>

            <ul className="mt-6 space-y-4">
              {[
                { icon: Globe, label: "Work in the real world" },
                { icon: Scale, label: "Respect governance and sovereignty" },
                { icon: Target, label: "Deliver measurable impact" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <CheckCircle className="text-emerald-600" size={18} />
                  {item.label}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-medium text-slate-900">
              TingoGPT is building the future of
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                {" "}execution-first enterprise AI.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
