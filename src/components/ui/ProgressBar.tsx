"use client";
import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      const pct = max > 0 ? scrolled / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={barRef}
      id="progress-bar"
      className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left"
      style={{ background: "linear-gradient(90deg, #8B5CF6, #60A5FA, #22D3EE)", transform: "scaleX(0)" }}
    />
  );
}
