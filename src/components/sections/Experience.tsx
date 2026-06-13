"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const bullets = [
  {
    text: "Designed and deployed structured LLM workflows for document summarization, entity extraction, and automated reporting — implementing Pydantic output validation schemas to enforce response reliability",
    highlight: "across production AI pipelines",
    tags: ["LLMs", "Prompt Engineering", "Pydantic", "Output Validation"],
  },
  {
    text: "Built and evaluated RAG (Retrieval-Augmented Generation) pipelines for domain-specific Q&A over structured datasets — combining embedding-based retrieval with LLM reasoning",
    highlight: "to reduce hallucinations and improve answer accuracy",
    tags: ["RAG", "Embeddings", "Vector Search", "LLM Reasoning"],
  },
  {
    text: "Developed agentic AI task automation scripts using LLM function-calling and tool-use patterns — enabling autonomous multi-step execution across data ingestion, transformation, and reporting workflows",
    highlight: "with zero manual intervention",
    tags: ["Agentic AI", "Function Calling", "Tool Use", "Automation"],
  },
  {
    text: "Operationalized LLM and ML model outputs as FastAPI REST endpoints with async request handling, Pydantic schema validation, and structured error responses",
    highlight: "integrating AI inference into downstream business pipelines",
    tags: ["FastAPI", "Async Python", "REST APIs", "ML Serving"],
  },
  {
    text: "Trained, fine-tuned, and cross-validated ML and DL models (classification, regression, clustering, neural networks) through systematic hyperparameter tuning and feature engineering",
    highlight: "achieving 85%+ accuracy on held-out validation sets",
    tags: ["ML", "Deep Learning", "scikit-learn", "Hyperparameter Tuning"],
  },
  {
    text: "Designed ETL pipelines and feature engineering workflows (Pandas, NumPy) to prepare high-quality training data for LLM fine-tuning and ML model development",
    highlight: "reducing manual data processing effort by 50%",
    tags: ["ETL", "Feature Engineering", "Data Pipelines", "LLM Data Prep"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 pt-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-4">// work experience</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Where I've <span className="gradient-text-cyan">worked</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-2xl border border-white/5 bg-[#0B0B0B] overflow-hidden"
        >
          {/* Top accent line */}
          <div className="h-px bg-gradient-to-r from-[#8B5CF6] via-[#60A5FA] to-transparent" />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">AI & ML Engineer Trainee</h3>
                <p className="font-mono text-sm text-[#8B5CF6]">Innomatics Research Labs</p>
                <p className="font-mono text-xs text-[#52525B] mt-0.5">Hyderabad, India</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/8 bg-white/2 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                <span className="font-mono text-[10px] text-[#A1A1AA] whitespace-nowrap">May 2025 – May 2026</span>
              </div>
            </div>

            {/* Bullets with stagger */}
            <div className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl border border-white/3 hover:border-white/8 hover:bg-white/1 transition-all group"
                >
                  <div className="w-1 flex-shrink-0 rounded-full bg-gradient-to-b from-[#8B5CF6] to-[#22D3EE] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-1">
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-2">
                      {b.text}{" "}
                      <span className="text-white font-medium">— {b.highlight}.</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {b.tags.map(tag => (
                        <span key={tag} className="tag text-[9px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-[#0B0B0B] p-6"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-4">// education</p>
            <h4 className="font-display font-bold text-base text-white mb-1">B.Tech — Computer Science & Engineering</h4>
            <p className="font-mono text-xs text-[#8B5CF6] mb-0.5">AI & ML Specialization</p>
            <p className="font-mono text-xs text-[#52525B] mb-3">SVIT (JNTUH), Hyderabad · 2021–2025</p>
            <p className="text-[#52525B] text-xs leading-relaxed">
              ML · DSA · OS · DBMS · Software Engineering · Computer Networks
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-[#0B0B0B] p-6"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-4">// certifications</p>
            <div className="flex flex-col gap-3">
              {[
                { title: "Data Science with AI/ML, GenAI & Data Analytics", org: "Innomatics Research Labs · 120+ hrs · 2025" },
                { title: "Machine Learning Internship with Python", org: "Verzeo Edutech" },
                { title: "MERN Full Stack Web Development", org: "NxtWave · In Progress" },
              ].map((c, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#8B5CF6] text-xs mt-0.5">✦</span>
                  <div>
                    <p className="text-white text-xs font-medium leading-tight mb-0.5">{c.title}</p>
                    <p className="text-[#52525B] text-[10px]">{c.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="divider mt-16" />
    </section>
  );
}
