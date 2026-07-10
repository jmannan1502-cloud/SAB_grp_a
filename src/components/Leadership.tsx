"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

export default function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade in the grid elements on scroll
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: "Victoria Sterling Vane",
      role: "FOUNDER & MANAGING PARTNER",
      bio: "25+ years managing ultra-high-net-worth real estate syndicates in London and Monaco. Oversees all major structural acquisitions.",
      initials: "V.S.V",
    },
    {
      name: "Julian Thorne",
      role: "ARCHITECTURAL PRINCIPAL",
      bio: "Award-winning modernist visionary. Believes architecture should speak to its geological site. Former Lead Designer at Foster + Partners.",
      initials: "J.T",
    },
    {
      name: "Marcus Aurelius Al-Fayed",
      role: "GLOBAL INVESTMENTS",
      bio: "Strategic real estate fund pioneer. Facilitates private sovereign wealth allocations into our Archipelago developments.",
      initials: "M.A.F",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-matte-black text-white py-32 px-6 md:px-12 flex flex-col justify-center border-t border-gold-900/10 overflow-hidden"
      id="leadership"
    >
      {/* Background Glow */}
      <div className="absolute right-[-10%] bottom-[5%] w-[400px] h-[400px] bg-gold-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-4 block uppercase">
            THE STEWARDS
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight">
            Leadership Council
          </h2>
        </div>
        <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider max-w-sm leading-relaxed">
          Our global operations are guided by individuals who have dedicated their lives to raising the standard of architectural art.
        </p>
      </div>

      {/* Leadership Grid */}
      <div
        ref={gridRef}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {team.map((member, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden border border-gold-900/15 bg-matte-dark/30 backdrop-blur-sm p-8 rounded-sm aspect-[4/5] flex flex-col justify-between transition-all duration-500 hover:border-gold-400/40"
          >
            {/* Background Graphic representing abstract architectural form */}
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80 z-10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <span className="font-serif text-[18vw] md:text-[6vw] font-bold text-white tracking-widest leading-none">
                {member.initials}
              </span>
            </div>

            {/* Accent Gold Corner borders */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-400/25 group-hover:border-gold-400/80 transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-400/25 group-hover:border-gold-400/80 transition-colors duration-500" />

            {/* Top Label */}
            <div className="relative z-20 flex justify-between items-start">
              <span className="font-sans text-[8px] tracking-[0.35em] text-gold-400 font-semibold uppercase">
                COUNCIL MEMBER
              </span>
              <a
                href="#contact"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gold-400 hover:text-gold-300"
                title={`Contact ${member.name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Content */}
            <div className="relative z-20 flex flex-col gap-3">
              <div>
                <h3 className="font-serif text-2xl tracking-tight text-white group-hover:text-gold-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <span className="font-sans text-[9px] tracking-[0.25em] text-gray-500 font-semibold uppercase mt-1 block">
                  {member.role}
                </span>
              </div>

              {/* Slide Reveal Bio */}
              <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider leading-relaxed pt-2 border-t border-gold-900/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
