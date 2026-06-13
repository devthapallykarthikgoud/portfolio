"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    icon: "◈",
    title: "Agentic AI Systems",
    desc: "Design multi-node LangGraph pipelines with stateful memory, conditional branching, and production-grade error handling.",
    color: "#8B5CF6",
  },
  {
    icon: "⬡",
    title: "MCP Architecture",
    desc: "Implement Model Context Protocol to decouple tool definitions from agent reasoning — enabling dynamic, extensible tool registries.",
    color: "#60A5FA",
  },
  {
    icon: "◉",
    title: "RAG Pipelines",
    desc: "Architect FAISS-backed retrieval systems with tuned chunk sizes, embedding overlap, and memory-optimized fallback strategies.",
    color: "#22D3EE",
  },
  {
    icon: "▲",
    title: "Production Deployment",
    desc: "Containerize full-stack AI apps with Docker, deploy to Render, and orchestrate automated workflows via n8n.",
    color: "#8B5CF6",
  },
];

const techStack = [
  "LangGraph", "FastMCP", "LangChain", "RAG", "FAISS",
  "FastAPI", "Python", "Groq", "OpenAI", "Docker",
  "n8n", "Streamlit", "Render", "PostgreSQL", "scikit-learn",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #8B5CF6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #22D3EE 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — Text */}
          <div>
            <motion.p variants={itemVariant} className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-4">
              // about me
            </motion.p>
            <motion.h2 variants={itemVariant} className="font-display font-bold text-4xl md:text-5xl leading-tight text-white mb-6">
              Building AI systems that<br />
              <span className="gradient-text-cyan">solve real problems</span>
            </motion.h2>
            <motion.p variants={itemVariant} className="text-[#A1A1AA] leading-relaxed mb-4">
              I'm an AI Software Engineer with hands-on experience designing and deploying <span className="text-white">LLM-powered applications</span> and <span className="text-white">agentic AI systems</span> in production environments.
            </motion.p>
            <motion.p variants={itemVariant} className="text-[#A1A1AA] leading-relaxed mb-6">
              My work spans the full AI stack — from RAG pipeline design and vector retrieval optimization, to FastAPI backend development and containerized cloud deployments. I've diagnosed production OOM crashes, built multi-system n8n automations, and architected MCP-based tool registries that decouple reasoning from tooling.
            </motion.p>
            <motion.p variants={itemVariant} className="text-[#52525B] text-sm leading-relaxed mb-8">
              Engineering rigor matters as much as AI knowledge.
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariant} className="flex flex-wrap gap-2">
              {techStack.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-xl border border-white/5 bg-[#0B0B0B] group transition-all duration-300 hover:border-[#8B5CF6]/20 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}15`, color: p.color }}
                >
                  {p.icon}
                </div>
                <h3 className="font-display font-semibold text-sm text-white mb-2">{p.title}</h3>
                <p className="text-[#52525B] text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
