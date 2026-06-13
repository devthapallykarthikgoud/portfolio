"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const NeuralNetwork = dynamic(() => import("@/components/three/NeuralNetwork"), { ssr: false });

const ROLES = [
  "Agentic AI Developer",
  "LLM Systems Engineer",
  "GenAI Engineer",
  "MCP Architect",
  "Applied AI Engineer",
];

function TypedRole() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = del ? 40 : 75;
    const timer = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1600);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setIdx((idx + 1) % ROLES.length); }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, idx]);

  return (
    <span className="text-[#22D3EE]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const metrics = [
  { value: "2+", label: "Production AI\nSystems" },
  { value: "4+", label: "Major AI\nProjects" },
  { value: "85%+", label: "ML Model\nAccuracy" },
  { value: "400MB→5MB", label: "Memory\nOptimized" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 1.9 } },
  };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } } };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden grid-overlay">
      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-50">
        <NeuralNetwork />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #22D3EE, transparent)" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-5xl">
          {/* Status pill */}
          <motion.div variants={item} className="flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#22D3EE] uppercase">Available for AI Engineer Roles</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/2">
              <span className="font-mono text-[10px] tracking-[0.15em] text-[#52525B] uppercase">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="mb-4">
            <h1 className="font-display font-bold leading-none tracking-tighter" style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}>
              <span className="text-white">UMA</span>
              <span className="gradient-text">KARTHIKEYA</span>
            </h1>
          </motion.div>

          {/* Sub headline */}
          <motion.div variants={item} className="mb-6">
            <p className="font-display text-xl md:text-2xl font-medium text-[#A1A1AA]">
              Building Production-Ready{" "}
              <TypedRole />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-[#52525B] text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-body">
            AI Engineer specializing in{" "}
            <span className="text-[#A1A1AA]">Agentic AI</span>,{" "}
            <span className="text-[#A1A1AA]">MCP Architectures</span>,{" "}
            <span className="text-[#A1A1AA]">RAG Systems</span>,{" "}
            <span className="text-[#A1A1AA]">LLM Applications</span>,
            and{" "}
            <span className="text-[#A1A1AA]">Intelligent Automation</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B5CF6] text-white font-display font-semibold text-sm transition-all hover:bg-[#7C3AED] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-95"
            >
              View Projects
              <motion.span className="group-hover:translate-x-1 transition-transform">→</motion.span>
            </a>
            <a
              href="https://github.com/devthapallykarthikgoud"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#A1A1AA] font-display font-medium text-sm hover:border-white/20 hover:text-white transition-all"
            >
              ⌥ GitHub
            </a>
            <a
              href="mailto:devathapallyumakarthikeya@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#A1A1AA] font-display font-medium text-sm hover:border-[#22D3EE]/40 hover:text-[#22D3EE] transition-all"
            >
              ✉ Email
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.value} className="p-4 rounded-xl border border-white/5 bg-white/2 backdrop-blur-sm">
                <div className="font-display font-bold text-xl text-white mb-1 gradient-text-purple">
                  {m.value}
                </div>
                <div className="font-mono text-[10px] text-[#52525B] leading-tight whitespace-pre-line tracking-wider uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#52525B] uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8B5CF6] to-transparent" />
      </motion.div>
    </section>
  );
}
