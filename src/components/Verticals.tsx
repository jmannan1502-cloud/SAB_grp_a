"use client";

import { ArrowRight, Building, TrendingUp, ClipboardCheck, Globe } from "lucide-react";

const commercialCategories = [
  { label: "Office Space", image: "/images/detail.png", desc: "Premium office spaces in prime business districts" },
  { label: "Independent Building", image: "/images/lobby.png", desc: "Standalone commercial buildings for institutional buyers" },
  { label: "Retail Space", image: "/images/villa.png", desc: "High-street and mall-based retail opportunities" },
  { label: "Warehouse", image: "/images/detail.png", desc: "Logistics and warehousing hubs Pan India" },
  { label: "Pan India", image: "/images/lobby.png", desc: "Commercial properties across all major Indian metros" },
];

const residentialCategories = [
  { label: "Builder Floors", image: "/images/villa.png", desc: "Independent builder floors in prime residential areas" },
  { label: "Apartments", image: "/images/lobby.png", desc: "Premium apartments from top developers" },
  { label: "Independent Bungalow", image: "/images/detail.png", desc: "Luxury bungalows and villas for discerning buyers" },
  { label: "Farmhouse", image: "/images/villa.png", desc: "Sprawling farmhouses on city outskirts" },
];

function CategoryTile({ item, size = "normal" }: { item: typeof commercialCategories[0]; size?: "normal" | "large" }) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer property-card rounded-sm"
      style={{ aspectRatio: size === "large" ? "1/1.1" : "4/3" }}
      id={`tile-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="tile-overlay" />

      {/* Bottom Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3
          className="font-bold text-white mb-1"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: size === "large" ? "18px" : "15px",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          {item.label}
        </h3>
        <p
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ fontSize: "12px", color: "rgba(226,232,240,0.85)" }}
        >
          {item.desc}
        </p>
      </div>

      {/* Gold top badge on hover */}
      <div
        className="absolute top-3 right-3 px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "#c89b4e", fontSize: "10px", color: "white", letterSpacing: "0.1em", fontWeight: 600 }}
      >
        VIEW
      </div>
    </div>
  );
}

export default function Verticals() {
  return (
    <section id="verticals" style={{ background: "#f0f2f5" }}>

      {/* ── Commercial Properties Section ── */}
      <div className="py-16 md:py-20 px-4 md:px-8" style={{ borderTop: "1px solid #e2e8f0" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-label mb-3 block">Our Offerings</span>
              <h2
                className="font-bold"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#0f172a" }}
              >
                Commercial Properties
              </h2>
            </div>
            <a
              href="#projects"
              className="flex items-center gap-2 font-semibold transition-colors"
              style={{ color: "#c89b4e", fontSize: "13px", letterSpacing: "0.05em" }}
              id="commercial-view-all-link"
            >
              View All Commercial <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid: 3 top + 2 bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {commercialCategories.slice(0, 3).map((item) => (
              <CategoryTile key={item.label} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commercialCategories.slice(3).map((item) => (
              <CategoryTile key={item.label} item={item} size="large" />
            ))}
          </div>
        </div>
      </div>

      {/* ── Residential Properties Section ── */}
      <div className="py-16 md:py-20 px-4 md:px-8" style={{ background: "#eef0f3", borderTop: "1px solid #e2e8f0" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-label mb-3 block">Find Your Home</span>
              <h2
                className="font-bold"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#0f172a" }}
              >
                Residential Properties
              </h2>
            </div>
            <a
              href="#projects"
              className="flex items-center gap-2 font-semibold transition-colors"
              style={{ color: "#c89b4e", fontSize: "13px" }}
              id="residential-view-all-link"
            >
              View All Residential <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid: 4 equal tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {residentialCategories.map((item) => (
              <CategoryTile key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Banner ── */}
      <div
        className="py-16 px-4 md:px-8 bg-slate-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "Turnkey Projects", desc: "End-to-end project management" },
              { icon: TrendingUp, title: "Valuation & Advisory", desc: "Expert property valuation services" },
              { icon: ClipboardCheck, title: "Lease Administration", desc: "Complete lease management solutions" },
              { icon: Globe, title: "Brokerage Services", desc: "Trusted brokerage across India" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 cursor-default"
                  style={{ 
                    backgroundColor: "#0f2a4a",
                    border: "1px solid rgba(200,155,78,0.2)",
                    boxShadow: "0 8px 20px -4px rgba(15, 42, 74, 0.2)"
                  }}
                  id={`service-card-${idx}`}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,155,78,0.3)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#c89b4e" }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#c89b4e]"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
