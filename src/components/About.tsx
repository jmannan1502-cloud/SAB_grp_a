"use client";

import { Phone, ArrowRight } from "lucide-react";

const clients = [
  "HSBC", "Ericsson", "GE Capital", "General Motors", "HDFC Bank",
  "Indiabulls", "DLF", "Godrej", "Tata Realty", "Lodha Group",
  "HSBC", "Ericsson", "GE Capital", "General Motors", "HDFC Bank",
  "Indiabulls", "DLF", "Godrej", "Tata Realty", "Lodha Group",
];

export default function About() {
  return (
    <>
      {/* ── Clients / Partners Marquee Strip ── */}
      <section
        className="py-6 overflow-hidden"
        style={{ background: "#ffffff", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
        aria-label="Our Clients"
      >
        <div className="mb-3 text-center">
          <span className="section-label" style={{ color: "#94a3b8" }}>Trusted By Leading Corporates</span>
        </div>
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />

          <div className="flex marquee-track">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-4 px-6 py-3 font-bold text-sm tracking-widest whitespace-nowrap rounded border transition-all duration-200 cursor-default"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "13px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#475569",
                  minWidth: "130px",
                  textAlign: "center",
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Profile & History ── */}
      <section
        className="py-20 md:py-28 px-4 md:px-8"
        id="about"
        style={{ background: "#f0f2f5" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text */}
            <div className="flex flex-col items-start">
              <span className="section-label mb-4">Who We Are</span>

              <h2
                className="font-bold mb-6 leading-snug"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  color: "#0f172a",
                }}
              >
                Company Profile &amp;{" "}
                <span style={{ color: "#c89b4e" }}>History</span>
              </h2>

              <div
                className="space-y-4 mb-8 leading-relaxed"
                style={{ color: "#475569", fontSize: "15px", fontFamily: "'Inter', sans-serif" }}
              >
                <p>
                  SAB Group is a premier real estate consultancy firm with offices across Delhi NCR,
                  Mumbai, Bangalore, and other major Indian cities. With over two decades of expertise,
                  we have established ourselves as trusted advisors to corporates, HNIs, and institutional investors.
                </p>
                <p>
                  Our experienced team of 30+ professionals delivers tailor-made solutions for commercial,
                  residential, and industrial real estate requirements. Led by our founding partners, 
                  we bring unmatched market intelligence and negotiation expertise to every transaction.
                </p>
                <p>
                  SAB Group&apos;s strong network spans developers, landlords, and investors nationwide — making
                  us the go-to partner for seamless real estate decisions at every scale.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-10 w-full max-w-sm">
                {[
                  { value: "25+", label: "Years Experience" },
                  { value: "500+", label: "Clients Served" },
                  { value: "10+", label: "Cities Covered" },
                  { value: "₹1000Cr+", label: "Deals Facilitated" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-bold"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", color: "#c2410c" }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div 
                className="flex flex-wrap gap-3"
                style={{ '--gold': '#c2410c', '--gold-dark': '#9a3412' } as React.CSSProperties}
              >
                <a href="#contact" className="btn-gold" id="about-request-call-btn">
                  <Phone className="w-4 h-4" />
                  Request A Call
                </a>
                <a href="#leadership" className="btn-outline" id="about-about-us-btn">
                  About Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-sm pointer-events-none"
                style={{ border: "2px solid rgba(200,155,78,0.25)", borderRadius: "4px" }}
              />
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  aspectRatio: "4/3",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/lobby.png"
                  alt="SAB Group - Premium Real Estate"
                  className="w-full h-full object-cover"
                />
                {/* Gold overlay badge */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white"
                  style={{ background: "linear-gradient(to top, rgba(15,23,42,0.9), transparent)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5" style={{ background: "#c89b4e" }} />
                    <span style={{ fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f0d080" }}>
                      Pan India Real Estate Experts
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
