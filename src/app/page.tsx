"use client";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Cursor from "@/components/ui/Cursor";
import ProgressBar from "@/components/ui/ProgressBar";
import CommandPalette from "@/components/ui/CommandPalette";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScanLine from "@/components/ui/ScanLine";
import LenisProvider from "@/components/animations/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <LoadingScreen />
      <Cursor />
      <ProgressBar />
      <CommandPalette />
      <ScanLine />
      <div id="main" className="bg-bg">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </LenisProvider>
  );
}
