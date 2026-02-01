"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Database,
  AlertTriangle,
  Cpu,
  TrendingUp,
  Radar,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function TingoGPTSeismicProduct() {
  return (
    <section className="relative overflow-hidden bg-white py-32" id="seismic-product">
      {/* ===== Subtle Product Background ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== Product Header ===== */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            TingoGPT Product
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            TingoGPT for Seismic Data Reinterpretation
            <span className="block bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Across Africa
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600"
          >
            An AI-powered geoscience intelligence product designed to transform
            how seismic data across Africa is reinterpreted, revalidated, and
            monetized.
          </motion.p>
        </div>

        {/* ===== Executive Summary ===== */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-500/10 via-white to-transparent p-10"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Executive Summary
            </h3>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Africa holds some of the world’s most promising but underexplored
              hydrocarbon and geothermal resources. A major constraint has been
              the cost, complexity, and scarcity of advanced subsurface
              interpretation capabilities.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              TingoGPT combines large language models, geophysical AI, and
              domain-specific knowledge of African basins to deliver faster,
              cheaper, and more accurate seismic reinterpretation—unlocking
              stranded value in legacy data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-500/10 via-white to-transparent p-10"
          >
            <h3 className="text-2xl font-semibold text-slate-900">
              Who It Is For
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {[
                "African governments and regulators",
                "National Oil Companies (NOCs)",
                "International Oil Companies (IOCs)",
                "Independent exploration firms",
                "Energy and infrastructure investors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ===== The Problem ===== */}
        <div className="mt-32">
          <h3 className="text-3xl font-semibold text-slate-900 text-center">
            The Problem
          </h3>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <Database className="text-blue-600" size={22} />
                <h4 className="text-xl font-semibold text-slate-900">
                  Africa’s Seismic Data Paradox
                </h4>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Decades of 2D and 3D seismic data exist</li>
                <li>Much of it interpreted with outdated tools</li>
                <li>Locked in archives or private data vaults</li>
                <li>Limited availability of local expertise</li>
                <li>New acquisition is expensive and slow</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-orange-500" size={22} />
                <h4 className="text-xl font-semibold text-slate-900">
                  Structural Challenges
                </h4>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Shortage of senior geophysicists</li>
                <li>High dependency on foreign service firms</li>
                <li>Fragmented data formats and standards</li>
                <li>Minimal use of AI and automation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== The Opportunity ===== */}
        <div className="mt-32">
          <h3 className="text-3xl font-semibold text-slate-900 text-center">
            The Opportunity
          </h3>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-500/10 via-white to-transparent p-8">
              <div className="flex items-center gap-3">
                <Radar className="text-emerald-600" size={22} />
                <h4 className="text-xl font-semibold text-slate-900">
                  Reinterpreting the Past
                </h4>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Identify bypassed or mischaracterized reservoirs</li>
                <li>Improve structural and stratigraphic understanding</li>
                <li>Reduce exploration risk and dry wells</li>
                <li>Enable marginal field development and farm-outs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-500/10 via-white to-transparent p-8">
              <div className="flex items-center gap-3">
                <Cpu className="text-indigo-600" size={22} />
                <h4 className="text-xl font-semibold text-slate-900">
                  AI as a Force Multiplier
                </h4>
              </div>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>60–80% reduction in interpretation time</li>
                <li>Improved fault and horizon detection accuracy</li>
                <li>Rapid scenario testing and probabilistic modeling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Product Positioning Statement ===== */}
        <div className="mt-32 text-center">
          <p className="mx-auto max-w-4xl text-xl font-medium text-slate-900">
            TingoGPT transforms seismic data from a dormant archive into a
            strategic national and commercial asset—accelerating discovery,
            reducing risk, and unlocking value across Africa’s energy landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
