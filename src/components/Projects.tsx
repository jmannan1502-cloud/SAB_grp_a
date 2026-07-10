"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollSection = scrollSectionRef.current;
    const container = containerRef.current;
    if (!scrollSection || !container) return;

    const ctx = gsap.context(() => {
      // Calculate how much we need to translate left
      const getScrollAmount = () => {
        return -(scrollSection.scrollWidth - window.innerWidth);
      };

      // Create the horizontal translation
      gsap.to(scrollSection, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollSection.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Re-calculates on resize
        },
      });

      // Animate card content slight parallax/fades as they come into view
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card.querySelector(".project-info"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.globalTimeline.getChildren().find(
                (child) => (child.vars as any).scrollTrigger?.trigger === container
              ) as gsap.core.Animation | undefined, // sync with horizontal parent scroll
              start: "left 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Villa Solis",
      location: "CLIFFSIDE, MONACO",
      type: "PRIVATE ESTATE",
      image: "/images/villa.png",
      year: "2025",
      sqft: "18,400 SQ FT",
    },
    {
      title: "Aura Pavilion",
      location: "EMIRATES HILLS, DUBAI",
      type: "SIGNATURE RESIDENCE",
      image: "/images/lobby.png",
      year: "2026",
      sqft: "24,000 SQ FT",
    },
    {
      title: "The Monolith",
      location: "5TH AVE, NEW YORK",
      type: "ELITE DUPLEX",
      image: "/images/detail.png",
      year: "2026",
      sqft: "12,200 SQ FT",
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-matte-black z-30">
      {/* Horizontal Pinned Container */}
      <div
        ref={scrollSectionRef}
        className="h-screen flex items-center will-change-transform bg-matte-black"
        style={{ width: "fit-content" }}
        id="projects"
      >
        {/* Intro Slide */}
        <div className="w-[80vw] md:w-[60vw] h-full flex flex-col justify-center px-12 md:px-24 border-r border-gold-900/10 bg-matte-dark">
          <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-4 uppercase">
            SIGNATURE PORTFOLIO
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-white leading-tight mb-8">
            The Autumn <br />
            <span className="font-serif italic text-gold-300">Collection</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider max-w-sm leading-relaxed">
            A selective preview of our current unlisted holdings, representing milestones in contemporary modernist design.
          </p>
        </div>

        {/* Project Slides */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card w-[100vw] md:w-[90vw] h-full flex items-center justify-center px-6 md:px-16 border-r border-gold-900/10 relative overflow-hidden"
          >
            {/* Background parallax image effect */}
            <div className="absolute inset-0 bg-matte-black/40 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-35 filter scale-105 pointer-events-none"
            />

            <div className="relative z-20 max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
              {/* Left Column: Image Card */}
              <div className="md:col-span-7 aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden border border-gold-900/25 p-2 bg-matte-dark/40 backdrop-blur-md rounded-sm">
                <div className="w-full h-full overflow-hidden relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-matte-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-3 bg-gold-400 rounded-full border border-gold-500 text-matte-black">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Metadata */}
              <div className="project-info md:col-span-5 flex flex-col items-start gap-4 pb-4">
                <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-semibold uppercase">
                  {project.location}
                </span>
                
                <h3 className="font-serif text-4xl md:text-6xl text-white font-light tracking-tight">
                  {project.title}
                </h3>

                <div className="w-full h-[1px] bg-gold-900/20 my-2" />

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
                  <div>
                    <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                      VESSEL/TYPE
                    </span>
                    <span className="text-xs md:text-sm tracking-wider text-gray-300">
                      {project.type}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                      SCALE
                    </span>
                    <span className="text-xs md:text-sm tracking-wider text-gray-300">
                      {project.sqft}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                      ARCHITECT
                    </span>
                    <span className="text-xs md:text-sm tracking-wider text-gray-300">
                      AURA GROUP
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest text-gray-500 font-semibold uppercase block">
                      COMPLETED
                    </span>
                    <span className="text-xs md:text-sm tracking-wider text-gray-300">
                      {project.year}
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-4 flex items-center gap-2 group/btn"
                  data-hover="INQUIRE"
                >
                  <span className="font-sans text-[10px] tracking-widest text-gold-400 font-semibold uppercase border-b border-gold-400/20 pb-0.5 group-hover/btn:border-gold-300 transition-all duration-300">
                    REQUEST BROCHURE
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Slide */}
        <div className="w-[100vw] h-full flex flex-col justify-center items-center px-12 text-center bg-matte-dark relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-950/15 rounded-full blur-[150px]" />
          
          <div className="relative z-10 max-w-xl">
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-6 block uppercase">
              RESERVED HOLDINGS
            </span>
            <h3 className="font-serif text-4xl md:text-6xl text-white font-light tracking-tight mb-6">
              Access the <br />
              <span className="font-serif italic text-gold-300">Off-Market Directory</span>
            </h3>
            <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider mb-8 leading-relaxed">
              We maintain a private inventory of over $2B in off-market luxury estates, available exclusively to verified client advocates.
            </p>
            <a
              href="#contact"
              className="inline-block font-sans text-xs tracking-widest font-semibold text-matte-black uppercase bg-gold-400 px-8 py-4 border border-gold-500 hover:bg-transparent hover:text-gold-400 hover:border-gold-400/50 transition-all duration-500 rounded-sm"
              data-hover="REQUEST ACCESS"
            >
              REQUEST DISCREET DOSSIER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
