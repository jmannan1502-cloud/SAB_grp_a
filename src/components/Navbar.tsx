"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

// Inline social SVGs (lucide-react version lacks these)
const InstagramIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>);
const LinkedinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const FacebookIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>);
const TwitterIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);

const navLinks = [
  { name: "About Us", href: "#about", dropdown: ["Company Profile", "Our Philosophy", "Why SAB Group"] },
  { name: "Services", href: "#verticals", dropdown: ["Commercial Properties", "Residential Properties", "Industrial", "Turnkey Projects"] },
  { name: "Properties", href: "#projects", dropdown: null },
  { name: "Leadership", href: "#leadership", dropdown: null },
  { name: "Contact", href: "#contact", dropdown: null },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Phone + Social */}
      <div
        className={`w-full bg-navy-900 text-white z-50 transition-all duration-300 ${
          scrolled ? "fixed top-0 -translate-y-full opacity-0 pointer-events-none" : "relative"
        }`}
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-2.5">
          {/* Phone */}
          <a
            href="tel:+911141444000"
            className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" style={{ color: "#c89b4e" }} />
            <span style={{ color: "#d1d5db", fontSize: "12px" }}>+91-11-41444000 | +91-9810012345</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: InstagramIcon, href: "#", label: "Instagram" },
              { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
              { icon: FacebookIcon, href: "#", label: "Facebook" },
              { icon: TwitterIcon, href: "#", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-all duration-200"
                style={{ color: "#9ca3af" }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 shadow-lg"
            : "relative"
        }`}
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-logo">
            <div
              className="w-10 h-10 flex items-center justify-center rounded"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M3 21V9L12 3L21 9V21" stroke="#c89b4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21V15H15V21" stroke="#c89b4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 9H9.01M12 9H12.01M15 9H15.01" stroke="#c89b4e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-bold tracking-widest uppercase text-sm"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#0f172a", letterSpacing: "0.2em" }}
              >
                SAB GROUP
              </span>
              <span className="text-xs" style={{ color: "#c89b4e", fontSize: "10px", letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif" }}>
                REAL ESTATE CONSULTANTS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="dropdown-trigger relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm hover:text-gold-500"
                  style={{
                    color: "#334155",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      style={{
                        transform: activeDropdown === link.name ? "rotate(180deg)" : "rotate(0deg)",
                        color: "#c89b4e",
                      }}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div
                    className="absolute top-full left-0 py-2 rounded-b-sm"
                    style={{
                      background: "white",
                      minWidth: "210px",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                      borderTop: "3px solid #c89b4e",
                      zIndex: 100,
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="block px-5 py-2.5 text-sm transition-colors duration-150"
                        style={{ color: "#475569", fontSize: "13px" }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.background = "#f8f5ee";
                          (e.target as HTMLElement).style.color = "#9a6f09";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.background = "transparent";
                          (e.target as HTMLElement).style.color = "#475569";
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#contact"
              className="ml-3 btn-gold text-sm"
              style={{ borderRadius: "4px", fontSize: "13px", padding: "9px 20px" }}
              id="nav-cta-btn"
            >
              Request A Call
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: "#0f172a" }}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col"
          style={{ background: "#0f172a" }}
          id="mobile-menu"
        >
          {/* Close area header */}
          <div className="flex justify-between items-center px-6 py-5 border-b" style={{ borderColor: "#1e293b" }}>
            <span className="font-bold text-white tracking-widest text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
              SAB GROUP
            </span>
            <button onClick={() => setIsOpen(false)} style={{ color: "#94a3b8" }} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-0 flex-1 overflow-y-auto py-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 text-base font-medium border-b transition-colors"
                style={{
                  color: "#e2e8f0",
                  borderColor: "#1e293b",
                  fontFamily: "'Inter', sans-serif",
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {link.name}
              </a>
            ))}

            <div className="px-8 pt-6">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full text-center justify-center"
                style={{ borderRadius: "4px" }}
              >
                Request A Call
              </a>
            </div>

            {/* Social in mobile menu */}
            <div className="flex items-center gap-4 px-8 pt-8">
              {[InstagramIcon, LinkedinIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all"
                  style={{ borderColor: "#334155", color: "#94a3b8" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
