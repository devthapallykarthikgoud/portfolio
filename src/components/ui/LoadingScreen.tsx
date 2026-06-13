"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"boot" | "load" | "done">("boot");

  useEffect(() => {
    const lines = [
      "initializing neural engine...",
      "loading agentic framework...",
      "mounting RAG pipeline...",
      "connecting LLM interfaces...",
      "system ready.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setProgress(Math.min((i + 1) * 20, 100));
      i++;
      if (i >= lines.length) {
        clearInterval(interval);
        setPhase("done");
        setTimeout(() => setLoading(false), 600);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-bg flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 border border-[#8B5CF6]/40 rounded-2xl flex items-center justify-center"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#8B5CF6] to-[#22D3EE] rounded-md" />
              </motion.div>
              <motion.div
                className="absolute inset-0 border border-[#22D3EE]/20 rounded-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <motion.p
                className="font-mono text-[10px] tracking-[0.3em] text-[#52525B] mb-2 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                portfolio v2.0
              </motion.p>
              <motion.h1
                className="font-display text-xl font-bold tracking-wider text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                UMAKARTHIKEYA
              </motion.h1>
            </div>

            {/* Progress */}
            <div className="w-64 flex flex-col gap-3">
              <div className="h-[1px] bg-[#111] relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between items-center">
                <motion.p
                  key={progress}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-[10px] text-[#52525B] tracking-widest"
                >
                  {progress === 20 && "initializing neural engine..."}
                  {progress === 40 && "loading agentic framework..."}
                  {progress === 60 && "mounting RAG pipeline..."}
                  {progress === 80 && "connecting LLM interfaces..."}
                  {progress === 100 && "system ready."}
                </motion.p>
                <span className="font-mono text-[10px] text-[#8B5CF6]">{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
