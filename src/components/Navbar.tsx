"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

// Inline social SVGs (lucide-react version lacks these)
const InstagramIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>);
const LinkedinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const FacebookIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>);
const TwitterIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);

const navLinks = [
  { name: "Home", href: "#home", dropdown: null },
  { name: "About Us", href: "#about", dropdown: ["Company Profile", "Our Philosophy", "Why SAB Group"] },
  { name: "Services", href: "#verticals", dropdown: ["Commercial Properties", "Residential Properties", "Industrial", "Turnkey Projects"] },
  { name: "Properties", href: "#projects", dropdown: null },
  { name: "Blog", href: "#blog", dropdown: null },
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
      {/* Main Navbar */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 shadow-sm"
            : "relative"
        }`}
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center gap-3 group" id="nav-logo">
            <div
              className="w-10 h-10 flex items-center justify-center rounded"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M3 21V9L12 3L21 9V21" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21V15H15V21" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 9H9.01M12 9H12.01M15 9H15.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-bold tracking-widest uppercase text-sm"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#0f172a", letterSpacing: "0.2em" }}
              >
                SAB GROUP
              </span>
              <span className="text-xs font-bold" style={{ color: "#f97316", fontSize: "10px", letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif" }}>
                PROPERTIES
              </span>
            </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center items-center shrink-0 mx-4" id="desktop-nav">
            <div className="flex items-center gap-1 md:gap-3 lg:gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="dropdown-trigger relative py-2"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                    style={{
                      color: link.name === "Home" ? "#0f172a" : "#475569",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      position: "relative",
                      paddingBottom: "4px"
                    }}
                    onMouseEnter={(e) => {
                      if (link.name !== "Home") {
                        (e.currentTarget as HTMLElement).style.color = "#0f172a";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (link.name !== "Home") {
                        (e.currentTarget as HTMLElement).style.color = "#475569";
                      }
                    }}
                  >
                    {link.name}
                    {link.name === "Home" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: "#f97316" }}></span>
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
                        borderTop: "3px solid #f97316",
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
                            (e.target as HTMLElement).style.background = "#f8f9fa";
                            (e.target as HTMLElement).style.color = "#0f172a";
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
            </div>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61579467053882" target="_blank" rel="noopener noreferrer" style={{ color: "#475569" }} className="hover:text-black transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/sabprop/" target="_blank" rel="noopener noreferrer" style={{ color: "#475569" }} className="hover:text-black transition-colors">
                <InstagramIcon />
              </a>
              <a
                href="tel:+911141444000"
                className="ml-3 flex items-center gap-2 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1a1a1a", fontFamily: "'Inter', sans-serif" }}
                id="nav-cta-btn"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex flex-1 justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded transition-colors"
              style={{ color: "#0f172a" }}
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              {[
                { Icon: InstagramIcon, href: "https://www.instagram.com/sabprop/" },
                { Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61579467053882" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
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
