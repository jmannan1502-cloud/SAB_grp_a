"use client";

import { useState } from "react";
import { Landmark, Compass, Trees, Anchor } from "lucide-react";

export default function Verticals() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const verticals = [
    {
      title: "Residences",
      prefix: "01 // ESTATES",
      icon: <Landmark className="w-6 h-6 text-gold-400" />,
      tagline: "Sculpted Private Havens",
      desc: "Bespoke residential estates designed as permanent art installations. Carved from native stone, wood, and glass, placed in the world's most coveted coordinates, from Cliffside Monaco to Palm Jumeirah.",
      bgClass: "from-amber-950/20 via-stone-900/40 to-matte-dark",
      glowColor: "rgba(212, 165, 61, 0.15)",
    },
    {
      title: "Archipelago",
      prefix: "02 // ISLANDS",
      icon: <Compass className="w-6 h-6 text-gold-400" />,
      tagline: "Private Ocean Spheres",
      desc: "Entire private island ecosystems engineered for complete autonomy and absolute privacy. Sustainable modern architectural hubs blending seamlessly with virgin coastlines.",
      bgClass: "from-blue-950/20 via-slate-900/40 to-matte-dark",
      glowColor: "rgba(96, 165, 250, 0.1)",
    },
    {
      title: "Sanctuaries",
      prefix: "03 // RETREATS",
      icon: <Trees className="w-6 h-6 text-gold-400" />,
      tagline: "Bespoke Wellness Havens",
      desc: "Bespoke members-only clubs and healing architecture integrated deep inside private cedar forests and hot springs. Places designed to quiet the mind and rejuvenate the cellular body.",
      bgClass: "from-emerald-950/20 via-zinc-900/40 to-matte-dark",
      glowColor: "rgba(52, 211, 153, 0.1)",
    },
    {
      title: "Marine",
      prefix: "04 // YACHTING",
      icon: <Anchor className="w-6 h-6 text-gold-400" />,
      tagline: "Custom Elite Vessel Bays",
      desc: "Custom superyacht slips, private marinas, and structural architectural bays built to house floating masterpieces. Designing transitions from land to sea with zero aesthetic friction.",
      bgClass: "from-cyan-950/20 via-neutral-900/40 to-matte-dark",
      glowColor: "rgba(34, 211, 238, 0.1)",
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-matte-dark text-white py-32 px-6 md:px-12 flex flex-col justify-center border-t border-gold-900/10 overflow-hidden"
      id="verticals"
    >
      <div className="max-w-7xl mx-auto w-full mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-4 block uppercase">
            OUR BUSINESS SPHERES
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight">
            Curated Verticals
          </h2>
        </div>
        <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider max-w-md leading-relaxed">
          Four distinct avenues of luxury development, unified by one single design principle: constructing spaces that represent the absolute pinnacle of human craftsmanship.
        </p>
      </div>

      {/* Interactive Horizontal Accordion Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-4 h-[600px] lg:h-[450px]">
        {verticals.map((vert, idx) => {
          const isHovered = hoveredIdx === idx;
          const isAnyHovered = hoveredIdx !== null;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative overflow-hidden border border-gold-900/15 p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-sm bg-gradient-to-b ${
                vert.bgClass
              } ${
                isHovered
                  ? "lg:col-span-2 border-gold-400/50 scale-[1.01]"
                  : isAnyHovered
                  ? "lg:col-span-0.67 opacity-50 filter blur-[1px] scale-[0.99]"
                  : "lg:col-span-1"
              }`}
              style={{
                boxShadow: isHovered
                  ? `0 20px 40px -10px ${vert.glowColor}, inset 0 0 40px rgba(0, 0, 0, 0.5)`
                  : "inset 0 0 20px rgba(0, 0, 0, 0.4)",
              }}
              data-hover="EXPLORE"
            >
              {/* Top Row: Index and Icon */}
              <div className="flex justify-between items-start">
                <span className="font-sans text-[9px] tracking-[0.25em] text-gray-500 font-semibold">
                  {vert.prefix}
                </span>
                <div
                  className={`p-3 rounded-full border border-gold-900/20 bg-matte-dark/60 transition-all duration-500 ${
                    isHovered ? "border-gold-400/40 rotate-12 bg-matte-dark/20" : ""
                  }`}
                >
                  {vert.icon}
                </div>
              </div>

              {/* Bottom Row: Content */}
              <div className="flex flex-col items-start gap-4">
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-white leading-none">
                  {vert.title}
                </h3>
                
                <span className="font-sans text-[10px] tracking-widest text-gold-300 font-semibold uppercase">
                  {vert.tagline}
                </span>

                {/* Smooth Height Reveal for details */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? "max-h-60 opacity-100 mt-2"
                      : "max-h-0 opacity-0 lg:max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider leading-relaxed">
                    {vert.desc}
                  </p>
                </div>
              </div>

              {/* Subtle gold line on bottom left for active card */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gold-400 transition-all duration-700 ${
                  isHovered ? "w-full" : "w-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
