"use client";
import { useRef, useCallback } from "react";

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "";
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.23,1,0.32,1)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 400);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
