"use client";

import { Phone } from "lucide-react";
import SpecularButton from "@/components/SpecularButton";

const propertyTabs = [
  { label: "Residential", href: "#verticals" },
  { label: "Commercial", href: "#verticals" },
  { label: "Farm Houses", href: "#verticals" },
  { label: "Rented Properties for Sale", href: "#verticals" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col justify-center overflow-hidden"
      id="hero"
      style={{ minHeight: "92vh" }}
    >
      {/* Background Image — Ken Burns zoom loop */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero_building.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            animation: "kenBurns 24s ease-in-out infinite",
            transformOrigin: "center center",
            willChange: "transform",
          }}
        />
      </div>

      {/* Overlay — light enough to show buildings clearly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,10,20,0.45) 0%, rgba(5,10,20,0.28) 45%, rgba(5,10,20,0.55) 100%)",
        }}
      />

      {/* Side vignettes for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Subtle gold line at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(to right, transparent, #c89b4e 30%, #c89b4e 70%, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 py-20">
        {/* Pre-heading label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-sm text-xs font-semibold tracking-widest uppercase"
          style={{ background: "rgba(200,155,78,0.18)", border: "1px solid rgba(200,155,78,0.4)", color: "#f0d080" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#c89b4e" }} />
          Trusted Real Estate Consultants Since 2000
        </div>

        {/* Main Heading */}
        <h1
          className="font-bold leading-tight text-white mb-6"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
            maxWidth: "900px",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          We Help You Make the{" "}
          <span style={{ color: "#f0c040" }}>Best Decision</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-12 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "rgba(226,232,240,0.85)",
            maxWidth: "580px",
          }}
        >
          End-to-end real estate solutions for residential, commercial, and industrial
          properties across Pan India. Backed by 25+ years of expertise.
        </p>

        <div className="mb-12">
          <SpecularButton
            size="lg"
            radius={18}
            lineColor="#c89b4e"
            baseColor="#0a101d"
            intensity={1.2}
            followMouse
            proximity={250}
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Projects
          </SpecularButton>
        </div>

        {/* Find Your Property Widget */}
        <div
          className="w-full max-w-[1200px] mt-8 py-12 px-4 md:px-10 flex flex-col items-center shadow-2xl"
          style={{
            background: "rgba(15, 15, 15, 0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          {/* Widget Header */}
          <h2
            className="text-white mb-8"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            Find your property
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {propertyTabs.map((tab, idx) => (
              <a
                key={tab.label}
                href={tab.href}
                id={`property-tab-${idx}`}
                className="flex items-center justify-center px-6 md:px-8 py-3 transition-all duration-300"
                style={{
                  border: "1px solid #d98538",
                  color: "#d98538",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(217, 133, 56, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <a
            href="#contact"
            className="btn-gold"
            style={{ borderRadius: "4px" }}
            id="hero-cta-primary"
          >
            <Phone className="w-4 h-4" />
            Request A Call
          </a>
          <a
            href="#about"
            className="btn-outline"
            style={{ borderRadius: "4px", color: "white", borderColor: "rgba(200,155,78,0.7)" }}
            id="hero-cta-secondary"
          >
            About SAB Group
          </a>
        </div>

        {/* Stats Row */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-14 pt-10 w-full max-w-3xl"
          style={{ borderTop: "1px solid rgba(200,155,78,0.2)" }}
        >
          {[
            { value: "25+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "Pan India", label: "Coverage" },
            { value: "₹1000Cr+", label: "Deals Closed" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="font-bold"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#f0d080" }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: "11px", color: "rgba(148,163,184,0.9)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
