"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Top Hairline Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/gpt.svg"
                alt="TingoGPT"
                width={250}
                height={36}
                className="opacity-90"
              />
              
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              TingoGPT is an execution-first, enterprise-grade AI platform built
              to help organizations turn data into decisions—and decisions into
              measurable outcomes.
            </p>
          </div>

          {/* ================= PLATFORM ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Platform
            </span>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition">
                  About TingoGPT
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-white/70 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#industries" className="text-white/70 hover:text-white transition">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="#security" className="text-white/70 hover:text-white transition">
                  Security & Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= TRUST & CONTACT ================= */}
          <div className="lg:col-span-4 space-y-6">
            <span className="block text-[11px] tracking-[0.3em] uppercase text-white/40">
              Trust & Contact
            </span>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Built for enterprises, governments, and institutions operating in
              complex and regulated environments. Designed with security,
              sovereignty, and auditability at its core.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:enterprise@tingogpt.ai"
                className="block text-white/70 hover:text-white transition"
              >
                enterprise@tingogpt.ai
              </a>

              <a
                href="https://www.tingogpt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white transition"
              >
                www.tingogpt.ai
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM LINE ================= */}
        <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
          © {new Date().getFullYear()} TingoGPT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
