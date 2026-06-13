"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { label: "GitHub", icon: "⌥", href: "https://github.com/devthapallykarthikgoud", accent: "#8B5CF6" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/devathapally-umakarthikeya/", accent: "#60A5FA" },
  { label: "Email", icon: "✉", href: "mailto:devathapallyumakarthikeya@gmail.com", accent: "#22D3EE" },
  { label: "+91 93980 58394", icon: "☏", href: "tel:+919398058394", accent: "#8B5CF6" },
];

const roles = ["AI Engineer", "Applied AI Engineer", "Agentic AI Developer", "GenAI Engineer", "ML Engineer"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[400px] rounded-full opacity-8 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #8B5CF6, #22D3EE, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6] uppercase mb-8"
          >
            // let's connect
          </motion.p>

          {/* Massive headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-bold leading-none tracking-tighter mb-8"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            <span className="text-white">Let's Build the</span>
            <br />
            <span className="gradient-text text-glow-purple">Future of AI</span>
            <br />
            <span className="text-white">Together.</span>
          </motion.h2>

          {/* Open to roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {roles.map(r => (
              <span key={r} className="tag-dim font-mono text-[10px] px-3 py-1 rounded-full border border-white/8 text-[#52525B]">
                {r}
              </span>
            ))}
          </motion.div>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[#52525B] text-base max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Actively seeking roles where engineering rigor matters as much as AI knowledge.
            Open to remote and on-site opportunities.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <a
              href="mailto:devathapallyumakarthikeya@gmail.com"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#8B5CF6] text-white font-display font-bold text-base transition-all hover:bg-[#7C3AED] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] active:scale-95"
            >
              Say Hello
              <motion.span className="group-hover:translate-x-1 transition-transform">→</motion.span>
            </a>
            <a
              href="https://github.com/devthapallykarthikgoud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-[#A1A1AA] font-display font-medium text-base hover:border-white/20 hover:text-white transition-all"
            >
              ⌥ GitHub
            </a>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8 text-[#52525B] text-sm font-mono transition-all hover:text-white hover:border-white/20 group"
              >
                <span className="group-hover:scale-110 transition-transform" style={{ color: l.accent }}>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
