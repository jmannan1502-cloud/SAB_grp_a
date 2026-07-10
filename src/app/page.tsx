"use client";

import Navbar from "@/components/Navbar";
import DoorIntro from "@/components/DoorIntro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Verticals from "@/components/Verticals";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-matte-dark">
      {/* Floating Global Navbar */}
      <Navbar />

      {/* 
        CINEMATIC INTRO EXPERIENCE
        Pins the screen, parts double walnut doors on scroll, 
        and zooms the camera through to reveal the foyer content behind.
      */}
      <DoorIntro />

      {/* 
        MAIN HOMEPAGE SECTIONS
        Standard scrolling continues naturally past the intro.
      */}
      <Hero />
      <About />
      <Verticals />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
