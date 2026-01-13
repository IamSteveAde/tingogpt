"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Zap,
  Layers3,
  ShieldCheck,
  Cloud,
  Server,
  HardDrive,
  Network,
  Lock,
  Key,
  FileCheck,
  Scale,
} from "lucide-react";

const differentiators = [
  {
    icon: Building2,
    title: "Built for Enterprises",
    description:
      "Designed for scale, uptime, and mission-critical environments—not consumer experimentation.",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
  },
  {
    icon: Zap,
    title: "Action-Oriented AI",
    description:
      "We don’t stop at insights. TingoGPT executes workflows and drives real outcomes.",
    gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
  },
  {
    icon: Layers3,
    title: "Industry-Aware Intelligence",
    description:
      "Domain-specific logic ensures relevance across regulated and complex sectors.",
    gradient: "from-indigo-500/20 via-indigo-400/10 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign & Secure",
    description:
      "Data residency, compliance controls, and explainable AI are foundational—not optional.",
    gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent",
  },
];

const deployments = [
  { icon: Cloud, label: "Cloud (Enterprise SaaS)" },
  { icon: Server, label: "Private Cloud" },
  { icon: HardDrive, label: "On-Premise" },
  { icon: Network, label: "Hybrid Architecture" },
];

const security = [
  { icon: Lock, label: "End-to-end encryption" },
  { icon: Key, label: "Role-based access control" },
  { icon: FileCheck, label: "Immutable audit logs" },
  { icon: Scale, label: "Policy-driven AI behavior" },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative bg-white py-32" id="security">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            What Makes Us Different
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Enterprise AI,
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              {" "}Engineered for Reality
            </span>
          </motion.p>
        </div>

        {/* ===== Differentiators ===== */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl border border-slate-200 bg-gradient-to-br ${item.gradient} p-8 backdrop-blur`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <item.icon className="text-blue-600" size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== Deployment + Security ===== */}
        <div className="mt-28 grid gap-10 lg:grid-cols-2">
          {/* Deployment Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-500/10 via-white to-orange-500/10 p-10"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Deployment Options
            </h3>

            <p className="mt-3 text-slate-600">
              You stay in control of your data, models, and access.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {deployments.map((item) => (
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

          {/* Security & Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-500/10 via-white to-blue-500/10 p-10"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Security & Compliance
            </h3>

            <p className="mt-3 text-slate-600">
              Built to meet enterprise and government standards.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {security.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <item.icon className="text-emerald-600" size={18} />
                  <span className="text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
