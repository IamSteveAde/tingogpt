"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Network,
  PlayCircle,
  ShieldCheck,
  Workflow,
  LineChart,
  CheckCircle,
  UserCheck,
  FileSearch,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Brain,
    title: "Contextual Intelligence",
    description:
      "TingoGPT understands industry logic, operational constraints, geography, and regulation—ensuring outputs are relevant and actionable.",
  },
  {
    step: "02",
    icon: Database,
    title: "Enterprise Data Integration",
    description:
      "Secure connections to ERP, CRM, core banking, HR, IoT, and proprietary systems ground intelligence in real enterprise data.",
  },
  {
    step: "03",
    icon: Network,
    title: "Agentic AI Framework",
    description:
      "Specialized AI agents collaborate to analyze data, assess risk and compliance, execute tasks, verify outcomes, and report results.",
  },
  {
    step: "04",
    icon: PlayCircle,
    title: "Decision & Execution Engine",
    description:
      "From insight to action—automated or human-approved—TingoGPT ensures decisions move forward with speed and control.",
  },
  {
    step: "05",
    icon: ShieldCheck,
    title: "Governance & Security Layer",
    description:
      "Built-in controls for auditability, explainability, data sovereignty, and regulatory compliance.",
  },
];

const capabilities = [
  { icon: Workflow, label: "Enterprise Workflow Automation" },
  { icon: LineChart, label: "Decision Intelligence" },
  { icon: Network, label: "Agentic AI Execution" },
  { icon: CheckCircle, label: "Real-Time Analytics" },
  { icon: UserCheck, label: "Human-in-the-Loop Controls" },
  { icon: FileSearch, label: "Audit-Ready AI Outputs" },
  { icon: ShieldCheck, label: "Regulatory Compliance by Design" },
];

export default function HowTingoGPTWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050B1E] via-[#0A1A3A] to-[#0E2A47] py-32" id="how-it-works">
      {/* ===== AI Background Orbits ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[800px] w-[800px] -translate-x-1/2 rounded-full border border-blue-400/20" />
        <div className="absolute right-[-300px] top-1/3 h-[700px] w-[700px] rounded-full border border-orange-400/20" />
        <div className="absolute bottom-[-300px] left-[-300px] h-[700px] w-[700px] rounded-full border border-blue-400/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-blue-300"
          >
            How TingoGPT Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl"
          >
            Intelligence Engineered
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              For Real-World Execution
            </span>
          </motion.p>
        </div>

        {/* ===== Steps ===== */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="absolute right-6 top-6 text-6xl font-bold text-white/5">
                {step.step}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-blue-500 text-white">
                <step.icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== Key Capabilities ===== */}
        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold text-white"
          >
            Key Capabilities
          </motion.h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <capability.icon className="text-orange-400" size={20} />
                <span className="text-slate-200">
                  {capability.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
