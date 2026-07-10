"use client";

import { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navbar after a delay (matching the door intro completion, or scroll detection)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#about" },
    { name: "Verticals", href: "#verticals" },
    { name: "Portfolio", href: "#projects" },
    { name: "Leadership", href: "#leadership" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-matte-dark/85 backdrop-blur-md border-b border-gold-900/20"
            : "py-6 bg-transparent"
        } ${!isVisible ? "pointer-events-none" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-serif text-lg tracking-[0.25em] text-white uppercase group"
          >
            <Landmark className="w-5 h-5 text-gold-400 group-hover:rotate-6 transition-transform duration-500" />
            <span className="font-light">AURA</span>
            <span className="text-gold-400 font-medium tracking-[0.3em] ml-0.5">LEGACY</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs tracking-[0.2em] text-gray-400 uppercase hover:text-gold-300 transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden sm:inline-block font-sans text-[10px] tracking-[0.2em] font-semibold text-matte-black uppercase bg-gold-400 px-6 py-3 border border-gold-500 hover:bg-transparent hover:text-gold-400 hover:border-gold-400/50 transition-all duration-500 rounded-sm"
              data-hover="BOOK TOUR"
            >
              REQUEST PRIVATE TOUR
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-gold-400 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-matte-dark/95 backdrop-blur-lg md:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8 text-left">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="font-serif text-3xl tracking-widest text-gray-300 uppercase hover:text-gold-400 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                className="inline-block mt-4 text-center font-sans text-xs tracking-widest font-semibold text-matte-black uppercase bg-gold-400 px-6 py-4 rounded-sm border border-gold-500"
              >
                REQUEST PRIVATE TOUR
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
