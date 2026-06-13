import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devathapally Umakarthikeya — AI Engineer",
  description: "AI Software Engineer specializing in Agentic AI, MCP Architectures, RAG Systems, LLM Applications, and Intelligent Automation. Building production-ready AI systems.",
  keywords: ["AI Engineer", "Agentic AI", "LangGraph", "RAG", "LLM", "FastAPI", "Python", "MCP", "GenAI"],
  authors: [{ name: "Devathapally Umakarthikeya" }],
  openGraph: {
    title: "Devathapally Umakarthikeya — AI Engineer",
    description: "Building Production-Ready Agentic AI Systems",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
