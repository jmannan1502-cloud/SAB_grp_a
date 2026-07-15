"use client";

import { useState } from "react";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const listings = [
  {
    id: "SAB-C-001",
    title: "ABW Rectangle One, Saket District Centre, South Delhi",
    type: "Commercial Office",
    badge: "New Launch",
    badgeColor: "#22c55e",
    price: "₹ 120/- per sq.ft per month",
    location: "Saket, New Delhi",
    image: "/images/lobby.png",
  },
  {
    id: "SAB-C-002",
    title: "Commercial Office Space in Udyog Vihar Phase-V, Gurugram",
    type: "Office Space",
    badge: "Available",
    badgeColor: "#3b82f6",
    price: "₹ 80/- per sq.ft + GST",
    location: "Gurugram, Haryana",
    image: "/images/detail.png",
  },
  {
    id: "SAB-C-003",
    title: "Independent Building for Sale, A Block, Sector-16, Noida",
    type: "Independent Building",
    badge: "Hot Deal",
    badgeColor: "#ef4444",
    price: "On Request",
    location: "Noida, Uttar Pradesh",
    image: "/images/villa.png",
  },
  {
    id: "SAB-R-001",
    title: "Luxury Builder Floor in Green Park, South Delhi",
    type: "Residential",
    badge: "New Launch",
    badgeColor: "#22c55e",
    price: "₹ 3.5 Cr onwards",
    location: "Green Park, New Delhi",
    image: "/images/lobby.png",
  },
  {
    id: "SAB-R-002",
    title: "Premium Apartment in DLF Cyber City, Gurugram",
    type: "Apartment",
    badge: "Available",
    badgeColor: "#3b82f6",
    price: "₹ 1.8 Cr onwards",
    location: "DLF Cyber City, Gurugram",
    image: "/images/detail.png",
  },
  {
    id: "SAB-I-001",
    title: "Warehousing & Logistics Hub, NH-8, Manesar",
    type: "Industrial / Warehouse",
    badge: "Hot Deal",
    badgeColor: "#ef4444",
    price: "₹ 25/- per sq.ft per month",
    location: "Manesar, Haryana",
    image: "/images/villa.png",
  },
];

const ITEMS_PER_PAGE = 3;

function PropertyCard({ listing }: { listing: typeof listings[0] }) {
  return (
    <div
      className="property-card bg-white rounded-sm overflow-hidden flex flex-col"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid #e2e8f0" }}
      id={`listing-${listing.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Property ID badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-semibold rounded-sm"
          style={{ background: listing.badgeColor, fontSize: "11px", letterSpacing: "0.05em" }}
        >
          {listing.badge} · {listing.id}
        </div>
        {/* Type badge */}
        <div
          className="absolute top-3 right-3 px-3 py-1 text-white text-xs font-semibold rounded-sm"
          style={{ background: "rgba(15,23,42,0.8)", fontSize: "11px" }}
        >
          {listing.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#c89b4e" }} />
          <span style={{ fontSize: "12px", color: "#94a3b8", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {listing.location}
          </span>
        </div>

        <h3
          className="font-semibold mb-3 leading-snug flex-1"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "15px",
            color: "#0f172a",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as const,
            overflow: "hidden",
          }}
        >
          {listing.title}
        </h3>

        <div
          className="pt-3 mt-auto"
          style={{ borderTop: "1px solid #f1f5f9" }}
        >
          <div
            className="font-bold"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "#c89b4e" }}
          >
            {listing.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(listings.length / ITEMS_PER_PAGE);
  const currentListings = listings.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* Background building image with overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/lobby.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label mb-4 block" style={{ color: "#c89b4e" }}>
            Latest Listings
          </span>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            New Launches
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", maxWidth: "500px", margin: "0 auto" }}>
            Explore our latest commercial, residential, and industrial listings across major Indian cities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {currentListings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-8 h-8 rounded-full border flex items-center justify-center transition-all disabled:opacity-30"
            style={{ borderColor: "rgba(200,155,78,0.4)", color: "#c89b4e" }}
            aria-label="Previous page"
            id="listings-prev-btn"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="w-3 h-3 rounded-full transition-all duration-200"
              style={{
                background: i === page ? "#c89b4e" : "rgba(200,155,78,0.25)",
                transform: i === page ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Page ${i + 1}`}
              id={`listings-page-${i}`}
            />
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-8 h-8 rounded-full border flex items-center justify-center transition-all disabled:opacity-30"
            style={{ borderColor: "rgba(200,155,78,0.4)", color: "#c89b4e" }}
            aria-label="Next page"
            id="listings-next-btn"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="btn-gold"
            style={{ borderRadius: "4px", fontSize: "14px", padding: "13px 40px" }}
            id="view-all-btn"
          >
            VIEW ALL PROPERTIES <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
