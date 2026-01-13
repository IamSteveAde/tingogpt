"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Plug,
  Workflow,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Understands Enterprise Context",
    description:
      "Interprets organizational structure, data relationships, and operational nuance—not just prompts.",
  },
  {
    icon: Plug,
    title: "Integrates With Existing Systems",
    description:
      "Connects seamlessly with ERPs, CRMs, data warehouses, and internal tools.",
  },
  {
    icon: Workflow,
    title: "Executes Workflows",
    description:
      "Moves beyond recommendations to orchestrate and execute real operational tasks.",
  },
  {
    icon: Users,
    title: "Supports Human Decision-Making",
    description:
      "Augments leaders and teams with contextual intelligence—not black-box automation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant by Design",
    description:
      "Built for governance, auditability, and regulatory environments from day one.",
  },
];

export default function AboutTingoGPT() {
  return (
    <section className="relative overflow-hidden bg-white py-28" id="about">
      {/* ===== Background AI Elements ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-blue-200/40" />
        <div className="absolute top-40 right-[-200px] h-[600px] w-[600px] rounded-full border border-orange-200/40" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full border border-blue-200/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== WHY SECTION ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            Why TingoGPT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            Most AI tools talk.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              TingoGPT acts.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-slate-600"
          >
            In complex, regulated, and high-stakes environments, organizations
            need more than generative responses. They need AI that understands
            context, integrates with systems, follows governance rules, and
            delivers results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-slate-700 font-medium"
          >
            TingoGPT is that AI.
          </motion.p>
        </div>

        {/* ===== WHAT WE DO ===== */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-slate-900"
            >
              An AI Operating Layer for the Real World
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-slate-600"
            >
              TingoGPT functions as an intelligent operating layer across your
              organization—connecting data, systems, and people into a unified
              decision and execution framework.
            </motion.p>
          </div>

          {/* ===== FEATURES GRID ===== */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-blue-500 text-white">
                  <feature.icon size={22} />
                </div>

                <h4 className="mt-6 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h4>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
