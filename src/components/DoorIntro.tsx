"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Landmark } from "lucide-react";

export default function DoorIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const doorsWrapperRef = useRef<HTMLDivElement>(null);
  const heroRevealRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const glowLineRef = useRef<HTMLDivElement>(null);
  const doorFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%", // Pin for 1.8 viewports of scroll for ultra-smooth pacing
          scrub: 1.5, // Eased scrubbing
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Instantly fade out scroll indicator and company logo/tagline text
      tl.to(
        introTextRef.current,
        {
          opacity: 0,
          y: -50,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );

      // 2. Hide center glowing leak line
      tl.to(
        glowLineRef.current,
        {
          opacity: 0,
          scaleY: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        0
      );

      // 3. Open left door panel (slide left)
      tl.to(
        leftDoorRef.current,
        {
          xPercent: -105,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0.1
      );

      // 4. Open right door panel (slide right)
      tl.to(
        rightDoorRef.current,
        {
          xPercent: 105,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0.1
      );

      // 5. Zoom the doors wrapper up to simulate walking through the door
      tl.to(
        doorsWrapperRef.current,
        {
          scale: 3.5,
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
        },
        0.1
      );

      // 6. Scale down the frame border out of view
      tl.to(
        doorFrameRef.current,
        {
          scale: 1.6,
          opacity: 0,
          duration: 1.3,
          ease: "power2.in",
        },
        0.1
      );

      // 7. Scale and reveal the building lobby/hero section behind the door
      tl.fromTo(
        heroRevealRef.current,
        {
          scale: 0.85,
          filter: "brightness(0.2) blur(15px)",
        },
        {
          scale: 1,
          filter: "brightness(1) blur(0px)",
          duration: 1.6,
          ease: "power3.out",
        },
        0.1
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-matte-dark select-none"
    >
      {/* Background Hero Content revealed behind the door */}
      <div
        ref={heroRevealRef}
        className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-cover bg-center will-change-transform will-change-opacity"
        style={{ backgroundImage: `url('/images/lobby.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-dark/80 to-transparent" />
        
        {/* Soft Golden Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative text-center px-6 max-w-4xl z-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 opacity-80 scale-90">
            <div className="h-[1px] w-12 bg-gold-400" />
            <span className="text-[10px] tracking-[0.4em] font-sans font-semibold text-gold-300 uppercase">
              ESTABLISHED MCMLXXXII
            </span>
            <div className="h-[1px] w-12 bg-gold-400" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl tracking-tight text-white leading-none mb-6">
            A Legacy of <br />
            <span className="font-serif italic text-gold-300">Living Masterpieces</span>
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.25em] text-gray-400 uppercase max-w-lg leading-relaxed">
            Ultra-luxury estates in Monaco, Dubai, and New York. Reserved for those who collect the extraordinary.
          </p>
        </div>
      </div>

      {/* Massive Luxury Door & Frame Layer */}
      <div
        ref={doorFrameRef}
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none border-[12px] md:border-[24px] border-matte-black transition-all duration-300"
      >
        <div
          ref={doorsWrapperRef}
          className="relative w-full h-full flex overflow-hidden will-change-transform will-change-opacity"
        >
          {/* LEFT DOOR PANEL */}
          <div
            ref={leftDoorRef}
            className="absolute left-0 top-0 w-1/2 h-full wood-panel border-r-4 border-matte-black flex items-center justify-end will-change-transform"
          >
            {/* Walnut Grain Overlay for premium wood texture detail */}
            <div className="wood-grain-overlay" />
            
            {/* Gold Accent Panels (Left Door) */}
            <div className="absolute inset-y-12 left-12 right-6 border border-gold-700/30 opacity-70 pointer-events-none" />
            <div className="absolute inset-y-16 left-16 right-10 border border-gold-400/20 opacity-55 pointer-events-none" />
            
            {/* Giant Handle (Left) */}
            <div className="relative z-10 mr-4 flex flex-col items-center justify-center">
              {/* Beveled Brass handle */}
              <div 
                className="w-4 md:w-5 h-64 md:h-80 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-700 border-l border-gold-200/50 shadow-2xl relative"
                style={{ boxShadow: "10px 0px 25px rgba(0, 0, 0, 0.7)" }}
              >
                {/* Brass mounts */}
                <div className="absolute top-6 -left-2 w-7 h-3 bg-gold-700 border border-gold-400" />
                <div className="absolute bottom-6 -left-2 w-7 h-3 bg-gold-700 border border-gold-400" />
              </div>
            </div>
          </div>

          {/* RIGHT DOOR PANEL */}
          <div
            ref={rightDoorRef}
            className="absolute right-0 top-0 w-1/2 h-full wood-panel border-l-4 border-matte-black flex items-center justify-start will-change-transform"
          >
            {/* Walnut Grain Overlay */}
            <div className="wood-grain-overlay" />

            {/* Gold Accent Panels (Right Door) */}
            <div className="absolute inset-y-12 right-12 left-6 border border-gold-700/30 opacity-70 pointer-events-none" />
            <div className="absolute inset-y-16 right-16 left-10 border border-gold-400/20 opacity-55 pointer-events-none" />

            {/* Giant Handle (Right) */}
            <div className="relative z-10 ml-4 flex flex-col items-center justify-center">
              {/* Beveled Brass handle */}
              <div 
                className="w-4 md:w-5 h-64 md:h-80 bg-gradient-to-r from-gold-700 via-gold-300 to-gold-600 border-r border-gold-200/50 shadow-2xl relative"
                style={{ boxShadow: "-10px 0px 25px rgba(0, 0, 0, 0.7)" }}
              >
                {/* Brass mounts */}
                <div className="absolute top-6 -right-2 w-7 h-3 bg-gold-700 border border-gold-400" />
                <div className="absolute bottom-6 -right-2 w-7 h-3 bg-gold-700 border border-gold-400" />
              </div>
            </div>
          </div>

          {/* Center Glow Slit Leak */}
          <div
            ref={glowLineRef}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 shadow-[0_0_20px_#d4a53d] z-30 pointer-events-none will-change-transform will-change-opacity"
          />
        </div>
      </div>

      {/* Initial Landing Text (Logo, Tagline, Scroll to Enter) */}
      <div
        ref={introTextRef}
        className="absolute inset-0 z-30 flex flex-col justify-between items-center py-16 px-6 pointer-events-none will-change-transform will-change-opacity"
      >
        {/* Company Logo Header */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <Landmark className="w-8 h-8 text-gold-400 mb-1" />
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.3em] text-white font-light">
            AURA
          </h2>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] text-gold-400/80 uppercase">
            LEGACY GROUP
          </span>
        </div>

        {/* Minimal Middle Tagline */}
        <div className="text-center">
          <h3 className="font-serif italic text-2xl md:text-4xl text-gold-200/90 font-light mb-2">
            Enter the Sanctuary
          </h3>
          <p className="font-sans text-[10px] tracking-[0.3em] text-gray-400 uppercase">
            A New Standard of Architectural Poetry
          </p>
        </div>

        {/* Scroll To Enter Indicator */}
        <div className="flex flex-col items-center gap-2 mb-4 animate-bounce">
          <span className="font-sans text-[9px] tracking-[0.3em] text-gold-400/75 uppercase">
            Scroll to Enter
          </span>
          <ChevronDown className="w-4 h-4 text-gold-400/80" />
        </div>
      </div>
    </div>
  );
}
