"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "adops",
    num: "01",
    label: "Agentic AI · Production · RAG",
    title: "AdOps Intelligence Agent",
    tagline: "AI-powered campaign monitoring and optimization platform",
    problem:
      "Ad operations teams waste hours manually analyzing campaign KPIs, identifying underperformers, and writing optimization recommendations across dozens of campaigns.",
    solution:
      "A fully automated agentic AI pipeline: upload a CSV to Google Drive → n8n triggers analysis → LangGraph orchestrates 3 nodes → Groq LLM reasons over RAG-retrieved strategies → Gmail delivers recommendations in <2 minutes.",
    challenge:
      "Production OOM crash on Render's free tier: FAISS index grew to ~400MB under large document loads, killing the container. Engineered a keyword-scoring retrieval fallback that reduced peak memory to ~5MB without sacrificing retrieval accuracy.",
    arch: [
      { label: "Google Drive Upload", color: "#8B5CF6" },
      { label: "n8n Webhook Trigger", color: "#60A5FA" },
      { label: "FastAPI Backend", color: "#8B5CF6" },
      { label: "KPI Analyzer Node", color: "#22D3EE" },
      { label: "FAISS RAG Retrieval", color: "#60A5FA" },
      { label: "Groq Llama 3.1 LLM", color: "#8B5CF6" },
      { label: "Gmail Alert System", color: "#22D3EE" },
    ],
    metrics: [
      { val: "<2min", key: "Pipeline Latency" },
      { val: "400MB→5MB", key: "Memory Fixed" },
      { val: "8+", key: "Workflows" },
      { val: "Zero", key: "Manual Intervention" },
    ],
    stack: ["LangGraph", "FastAPI", "FAISS", "Groq Llama 3.1", "n8n", "Docker", "Render", "Streamlit", "Python"],
    live: "https://adops-agent.streamlit.app/",
    github: "https://github.com/devthapallykarthikgoud/AdOps-Intelligence-Agent",
    accent: "#8B5CF6",
    accentSecondary: "#60A5FA",
  },
  {
    id: "medibot",
    num: "02",
    label: "MCP Architecture · Vision AI · Healthcare",
    title: "MediBot MCP",
    tagline: "Multimodal AI healthcare assistant using Model Context Protocol",
    problem:
      "Healthcare information access is fragmented — symptom analysis, medication identification, and multilingual support each require separate tools or expensive proprietary systems.",
    solution:
      "A unified multimodal AI agent using FastMCP and Groq Llama 3.3 70B. MCP decouples tool definitions from agent reasoning, enabling dynamic tool selection. Vision LLM identifies medications from photos. gTTS delivers responses in English and Telugu.",
    challenge:
      "Binary payload complexity on free-tier infrastructure for Vision LLM. Solved by encoding medication images as base64 over HTTP, and decoupling gTTS audio generation as an async post-processing step to maintain LLM response latency targets.",
    arch: [
      { label: "Streamlit Client", color: "#22D3EE" },
      { label: "MCP Client Layer", color: "#60A5FA" },
      { label: "FastMCP Server", color: "#8B5CF6" },
      { label: "Tool Registry (MCP)", color: "#60A5FA" },
      { label: "Groq Llama 3.3 70B", color: "#8B5CF6" },
      { label: "Vision LLM Module", color: "#22D3EE" },
      { label: "gTTS Voice (EN/Telugu)", color: "#60A5FA" },
    ],
    metrics: [
      { val: "70B", key: "Model Size" },
      { val: "2 langs", key: "EN + Telugu" },
      { val: "Vision", key: "Med Imaging" },
      { val: "Dynamic", key: "Tool Selection" },
    ],
    stack: ["FastMCP", "Groq Llama 3.3 70B", "Vision LLM", "LangChain", "gTTS", "Streamlit", "Render", "Python"],
    live: "https://mcpclient.streamlit.app/",
    github: "https://github.com/devthapallykarthikgoud/medibot-mcp-remote",
    accent: "#22D3EE",
    accentSecondary: "#60A5FA",
  },
  {
    id: "yolo",
    num: "03",
    label: "Computer Vision · Accessibility · Offline",
    title: "Smart Assistive Identifier",
    tagline: "Real-time object detection and face recognition — 25+ FPS on CPU",
    problem:
      "Assistive technology for visually impaired users is either expensive, requires internet connectivity, or fails to run on modest hardware without GPU acceleration.",
    solution:
      "An offline, self-contained executable combining YOLOv8 object detection and face_recognition library at 25+ FPS on CPU only. Confidence thresholds and frame sampling rates were tuned for throughput. Multilingual voice alerts in Telugu and English via pyttsx3. Dark-mode Tkinter GUI.",
    challenge:
      "Sustaining 25+ FPS real-time inference on CPU without GPU — achieved through optimizing confidence thresholds, selective frame sampling, and avoiding redundant model re-loads between frames.",
    arch: [
      { label: "Camera Input (OpenCV)", color: "#22D3EE" },
      { label: "YOLOv8 Detection", color: "#8B5CF6" },
      { label: "face_recognition Library", color: "#60A5FA" },
      { label: "CPU Optimized (25+ FPS)", color: "#22D3EE" },
      { label: "pyttsx3 Voice Engine", color: "#8B5CF6" },
      { label: "Tkinter Dark-Mode GUI", color: "#60A5FA" },
    ],
    metrics: [
      { val: "25+ FPS", key: "Real-Time" },
      { val: "CPU only", key: "No GPU" },
      { val: "Offline", key: "No Internet" },
      { val: "2 langs", key: "Voice Output" },
    ],
    stack: ["YOLOv8", "OpenCV", "face_recognition", "pyttsx3", "Tkinter", "Python"],
    github: "https://github.com/devthapallykarthikgoud/object-detection-and-recognition-using-yolo",
    accent: "#60A5FA",
    accentSecondary: "#8B5CF6",
  },
  {
    id: "heart",
    num: "04",
    label: "ML · Full-Stack · Clinical",
    title: "Heart Disease Prediction",
    tagline: "Django ML web app with 88%+ cross-validated accuracy",
    problem:
      "Clinical decision support tools are either too complex for small clinics or lack the transparency needed for medical use — black-box models with no explainability.",
    solution:
      "A Django-backed ML web application with full EDA → feature selection → ensemble modeling (Logistic Regression, KNN, Random Forest) → REST API pipeline. 88%+ cross-validated accuracy on clinical datasets.",
    challenge:
      "Balancing model complexity with interpretability for a clinical context. Chose an ensemble that includes Logistic Regression (explainable) alongside Random Forest, ensuring predictions could be explained to non-technical stakeholders.",
    arch: [
      { label: "Clinical Dataset Input", color: "#8B5CF6" },
      { label: "EDA + Feature Selection", color: "#60A5FA" },
      { label: "Logistic Regression", color: "#22D3EE" },
      { label: "KNN + Random Forest", color: "#8B5CF6" },
      { label: "88%+ CV Accuracy", color: "#60A5FA" },
      { label: "Django REST Endpoint", color: "#22D3EE" },
    ],
    metrics: [
      { val: "88%+", key: "CV Accuracy" },
      { val: "3 Models", key: "Ensemble" },
      { val: "REST", key: "API Layer" },
      { val: "Full", key: "ML Pipeline" },
    ],
    stack: ["scikit-learn", "Logistic Regression", "Random Forest", "KNN", "Django", "Pandas", "Python"],
    github: "https://github.com/devthapallykarthikgoud/Heart_disease_prediction_using_Django_ML",
    accent: "#8B5CF6",
    accentSecondary: "#22D3EE",
  },
];

function ArchFlow({ nodes, accent }: { nodes: { label: string; color: string }[]; accent: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: node.color }} />
          <div
            className="font-mono text-[10px] px-2.5 py-1 rounded border flex-1"
            style={{ borderColor: `${node.color}25`, background: `${node.color}08`, color: node.color }}
          >
            {node.label}
          </div>
          {i < nodes.length - 1 && (
            <div className="absolute -mb-1" style={{ marginLeft: "0.35rem" }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<"overview" | "arch" | "challenge">("overview");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="rounded-2xl border border-white/5 bg-[#0B0B0B] overflow-hidden group"
    >
      {/* Header bar */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, ${project.accent}, ${project.accentSecondary}, transparent)` }}
      />

      <div className="p-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-[#52525B]">{project.num}</span>
              <span
                className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded border"
                style={{ borderColor: `${project.accent}30`, color: project.accent, background: `${project.accent}08` }}
              >
                {project.label}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">{project.title}</h3>
            <p className="text-[#52525B] text-sm">{project.tagline}</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-white/5">
            {(["overview", "arch", "challenge"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="font-mono text-[10px] tracking-wider uppercase px-3 py-2 transition-colors border-b-2 -mb-px"
                style={{
                  color: tab === t ? project.accent : "#52525B",
                  borderColor: tab === t ? project.accent : "transparent",
                }}
              >
                {t === "overview" ? "Overview" : t === "arch" ? "Solution" : "Challenge"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-[#A1A1AA] text-sm leading-relaxed"
            >
              {tab === "overview" && (
                <div>
                  <p className="text-[#52525B] text-[11px] font-mono uppercase tracking-wider mb-2">Problem</p>
                  <p className="mb-4">{project.problem}</p>
                  <p className="text-[#52525B] text-[11px] font-mono uppercase tracking-wider mb-2">Solution</p>
                  <p>{project.solution}</p>
                </div>
              )}
              {tab === "arch" && (
                <div>
                  <p className="text-[#52525B] text-[11px] font-mono uppercase tracking-wider mb-3">Architecture Flow</p>
                  <ArchFlow nodes={project.arch} accent={project.accent} />
                </div>
              )}
              {tab === "challenge" && (
                <div>
                  <p className="text-[#52525B] text-[11px] font-mono uppercase tracking-wider mb-2">Technical Challenge</p>
                  <p>{project.challenge}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map(m => (
              <div key={m.key} className="p-3 rounded-lg border border-white/5 bg-[#111]">
                <div className="font-display font-bold text-base mb-0.5" style={{ color: project.accent }}>{m.val}</div>
                <div className="font-mono text-[9px] text-[#52525B] tracking-wider uppercase">{m.key}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(s => (
              <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/8 text-[#52525B]">{s}</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display font-semibold transition-all hover:shadow-lg active:scale-95"
                style={{
                  background: project.accent,
                  color: "#040404",
                  boxShadow: `0 0 0px ${project.accent}00`,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 20px ${project.accent}40`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0px ${project.accent}00`)}
              >
                ↗ Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display text-[#A1A1AA] border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              ⌥ GitHub
            </a>
          </div>
        </div>

        {/* Right: Visual Panel */}
        <div
          className="rounded-xl border border-white/5 bg-[#111] overflow-hidden relative min-h-[280px] flex flex-col"
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 20%, ${project.accent}, transparent 60%)` }}
          />

          {/* Architecture visualization */}
          <div className="relative z-10 p-5 flex-1 flex flex-col justify-center">
            <p className="font-mono text-[9px] tracking-[0.2em] text-[#52525B] uppercase mb-4">
              // {project.id === "adops" ? "system flow" : project.id === "medibot" ? "mcp architecture" : "pipeline"}
            </p>
            <ArchFlow nodes={project.arch} accent={project.accent} />
          </div>

          {/* Bottom label */}
          <div
            className="px-5 py-3 border-t border-white/5 flex items-center justify-between"
            style={{ background: `${project.accent}08` }}
          >
            <span className="font-mono text-[9px] text-[#52525B] tracking-wider uppercase">Architecture</span>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-4">// featured projects</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Things I've <span className="gradient-text">built & shipped</span>
          </h2>
          <p className="text-[#52525B] text-sm max-w-xl">
            Each project is a production AI system — not a tutorial, not a demo. Real problems, real architecture decisions, real deployments.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
