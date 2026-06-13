"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { label: "Go to Hero", icon: "⌂", action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "View Projects", icon: "◈", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "About Me", icon: "◉", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Skills", icon: "◆", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Experience", icon: "◎", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Contact", icon: "✉", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "GitHub", icon: "⌥", action: () => window.open("https://github.com/devthapallykarthikgoud", "_blank") },
  { label: "AdOps Agent — Live Demo", icon: "↗", action: () => window.open("https://adops-agent.streamlit.app/", "_blank") },
  { label: "MediBot MCP — Live Demo", icon: "↗", action: () => window.open("https://mcpclient.streamlit.app/", "_blank") },
  { label: "Send Email", icon: "✉", action: () => window.open("mailto:devathapallyumakarthikeya@gmail.com") },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  const close = useCallback(() => { setOpen(false); setQuery(""); setSelected(0); }, []);
  const run = useCallback((cmd: typeof commands[0]) => { cmd.action(); close(); }, [close]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); setOpen(o => !o); }
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") setSelected(s => Math.min(s + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setSelected(s => Math.max(s - 1, 0));
      if (e.key === "Enter" && filtered[selected]) run(filtered[selected]);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selected, close, run]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[99990] flex items-start justify-center pt-[20vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <div className="absolute inset-0 cmd-backdrop" />
          <motion.div
            className="relative w-full max-w-lg mx-4 bg-[#0B0B0B] rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(139,92,246,.25)" }}
            initial={{ y: -20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <span className="text-[#52525B] text-sm">⌘</span>
              <input
                autoFocus
                value={query}
                onChange={e => { setQuery(e.target.value); setSelected(0); }}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-[#52525B] font-body"
              />
              <kbd className="font-mono text-[10px] text-[#52525B] border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto py-1">
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  onClick={() => run(cmd)}
                  onMouseEnter={() => setSelected(i)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                  style={{ background: i === selected ? "rgba(139,92,246,.1)" : "transparent" }}
                >
                  <span className="text-[#8B5CF6] w-5 text-center text-sm">{cmd.icon}</span>
                  <span className={`text-sm ${i === selected ? "text-white" : "text-[#A1A1AA]"}`}>{cmd.label}</span>
                  {i === selected && <span className="ml-auto font-mono text-[10px] text-[#52525B]">↵</span>}
                </button>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-white/5 flex gap-4">
              <span className="font-mono text-[10px] text-[#52525B]">↑↓ navigate</span>
              <span className="font-mono text-[10px] text-[#52525B]">↵ select</span>
              <span className="font-mono text-[10px] text-[#52525B]">esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
