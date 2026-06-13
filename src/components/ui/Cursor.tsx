"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    let animId: number;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
        ringRef.current.style.opacity = "0.6";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
        ringRef.current.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div id="cursor" className="hidden md:block">
      <div ref={dotRef} id="cursor-dot" className="fixed w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none" />
      <div
        ref={ringRef}
        id="cursor-ring"
        className="fixed w-10 h-10 rounded-full z-[9998] pointer-events-none"
        style={{ border: "1px solid rgba(139,92,246,0.5)", transition: "width .2s, height .2s, opacity .2s" }}
      />
    </div>
  );
}
