"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function MagneticLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    ref.current!.style.transform = `translate(${x}px, ${y}px)`;
  };
  const handleMouseLeave = () => { ref.current!.style.transform = ""; };
  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic transition-transform duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={e => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }}
    >{children}</a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-500"
      style={{
        background: scrolled ? "rgba(4,4,4,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <MagneticLink
              key={item.label}
              href={item.href}
              className="text-sm text-[#A1A1AA] hover:text-white transition-colors hover-underline font-body"
            >
              {item.label}
            </MagneticLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", { key: "k", ctrlKey: true });
              window.dispatchEvent(event);
            }}
            className="font-mono text-[10px] text-[#52525B] border border-white/8 rounded px-2 py-1 hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6] transition-colors"
          >
            ⌘K
          </button>
          <MagneticLink
            href="#contact"
            className="text-sm font-medium px-4 py-1.5 rounded-lg bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors font-display"
          >
            Hire Me
          </MagneticLink>
          <img src="/uk-logo.png" alt="UK" style={{ height: "72px", width: "auto", mixBlendMode: "screen" }} />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(o => !o)}>
          <div className="flex flex-col gap-1.5 w-5">
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }} className="block h-px bg-white origin-center" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block h-px bg-white" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }} className="block h-px bg-white origin-center" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(4,4,4,0.98)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#A1A1AA] hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm font-medium px-4 py-2 rounded-lg bg-[#8B5CF6] text-white text-center"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
