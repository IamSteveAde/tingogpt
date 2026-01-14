import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import Chatbot from "./components/ChatbotEmbed";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";


// Global components


/* -------------------------------------
   METADATA — OPTIVANCE HR AFRICA
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.tingogpt.ai"),
  title: {
    default: "TingoGPT",
    template: "%s | TingoGPT",
  },

  description:
    "TingoGPT is an enterprise-grade AI platform designed to move beyond conversation into execution, decision intelligence, and real-world problem solving for enterprises, governments, and institutions.",

  keywords: [
    "TingoGPT",
    "enterprise AI platform",
    "decision intelligence",
    "agentic AI",
    "AI execution platform",
    "enterprise artificial intelligence",
    "government AI systems",
    "regulated AI platform",
    "AI governance and compliance",
    "enterprise workflow automation",
    "AI for financial services",
    "AI for healthcare systems",
    "AI for government and public sector",
    "AI operating system",
    "sovereign AI platform",
  ],

  openGraph: {
    title: "TingoGPT — AI That Solves Real Problems",
    description:
      "An execution-first, enterprise-grade AI platform that transforms data into decisions—and decisions into measurable outcomes.",
    url: "https://www.tingogpt.ai",
    siteName: "TingoGPT",
    type: "website",
    images: [
      {
        url: "https://www.tingogpt.ai/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "TingoGPT — Enterprise AI for Decision and Execution",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TingoGPT — Enterprise AI That Acts",
    description:
      "TingoGPT is built for enterprises, governments, and regulated industries that need AI to deliver real-world outcomes.",
    images: ["https://www.tingogpt.ai/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.tingogpt.ai",
  },
};

/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Calculator />
       <Chatbot />
      
    </main>
  );
}
