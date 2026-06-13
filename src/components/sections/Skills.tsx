"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const bentoItems = [
  {
    id: "ai",
    title: "AI Engineering",
    span: "col-span-2 row-span-2",
    accent: "#8B5CF6",
    items: ["LangGraph", "FastMCP", "MCP Architecture", "RAG", "Agentic AI", "Function Calling", "Vision LLMs", "LangChain"],
    desc: "Agentic systems, multi-node pipelines, and LLM orchestration.",
    icon: "◈",
    featured: true,
  },
  {
    id: "llm",
    title: "LLM APIs",
    span: "col-span-1 row-span-1",
    accent: "#60A5FA",
    items: ["Groq API", "OpenAI API", "Llama 3.1/3.3"],
    icon: "⬡",
  },
  {
    id: "backend",
    title: "Backend",
    span: "col-span-1 row-span-1",
    accent: "#22D3EE",
    items: ["Python", "FastAPI", "Flask", "Django", "Async Python", "Pydantic", "REST APIs"],
    icon: "⚡",
  },
  {
    id: "vector",
    title: "Vector & Data",
    span: "col-span-1 row-span-1",
    accent: "#8B5CF6",
    items: ["FAISS", "Embedding Retrieval", "Semantic Search", "Pandas", "NumPy", "ETL"],
    icon: "◉",
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    span: "col-span-1 row-span-1",
    accent: "#60A5FA",
    items: ["Docker", "Render", "GitHub", "Linux", "n8n", "Workflow Automation"],
    icon: "▲",
  },
  {
    id: "ml",
    title: "ML & Vision",
    span: "col-span-1 row-span-1",
    accent: "#22D3EE",
    items: ["scikit-learn", "YOLOv8", "OpenCV", "Feature Eng.", "Hyperparameter Tuning"],
    icon: "◆",
  },
  {
    id: "db",
    title: "Databases",
    span: "col-span-1 row-span-1",
    accent: "#8B5CF6",
    items: ["PostgreSQL", "MySQL", "SQLite", "Joins", "CTEs", "Window Functions"],
    icon: "⬤",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="divider mb-0" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-4">// technical skills</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Full-stack <span className="gradient-text-purple">AI engineering</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`${item.span} rounded-2xl border border-white/5 bg-[#0B0B0B] p-5 relative overflow-hidden group cursor-default transition-all duration-300 hover:border-[${item.accent}]/20`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${item.accent}08, transparent 70%)` }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: item.accent }} className="text-base">{item.icon}</span>
                  <span className="font-display font-semibold text-sm text-white">{item.title}</span>
                </div>
                {item.desc && (
                  <p className="text-[#52525B] text-xs leading-relaxed mb-3">{item.desc}</p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.items.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border"
                      style={{
                        borderColor: `${item.accent}25`,
                        background: `${item.accent}08`,
                        color: item.accent,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="divider mt-0" />
    </section>
  );
}
