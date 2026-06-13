export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-white">duk<span className="text-[#8B5CF6]">.</span>ai</span>
          <span className="text-[#52525B] text-xs font-mono">© 2026 Devathapally Umakarthikeya</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-[#52525B] tracking-wider">
            Press <kbd className="border border-white/10 rounded px-1 py-0.5 text-[#8B5CF6]">⌘K</kbd> to navigate
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="font-mono text-[10px] text-[#52525B]">Open to work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
