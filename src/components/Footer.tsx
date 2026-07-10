"use client";

import { Landmark, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-matte-dark text-white border-t border-gold-900/10 pt-20 pb-12 px-6 md:px-12 z-30">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gold-900/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5 font-serif text-lg tracking-[0.25em] text-white uppercase">
              <Landmark className="w-5 h-5 text-gold-400" />
              <span>AURA</span>
              <span className="text-gold-400 font-medium tracking-[0.3em] ml-0.5">LEGACY</span>
            </div>
            <p className="font-sans text-xs text-gray-500 tracking-wider leading-relaxed max-w-xs mt-2">
              Bespoke real estate development and private brokerage. Establishing monuments to high-end modernist architecture since MCMLXXXII.
            </p>
          </div>

          {/* Quick Sitemap */}
          <div className="md:col-span-3">
            <h5 className="font-sans text-[10px] tracking-[0.3em] font-semibold text-gold-400 uppercase mb-6">
              SITEMAP
            </h5>
            <ul className="space-y-3 font-sans text-xs tracking-wider text-gray-400">
              <li>
                <a href="#hero" className="hover:text-gold-300 transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#verticals" className="hover:text-gold-300 transition-colors">Curated Verticals</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gold-300 transition-colors">Signature Portfolio</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-gold-300 transition-colors">Leadership Council</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">Secure Viewing</a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div className="md:col-span-3">
            <h5 className="font-sans text-[10px] tracking-[0.3em] font-semibold text-gold-400 uppercase mb-6">
              COMPLIANCE
            </h5>
            <ul className="space-y-3 font-sans text-xs tracking-wider text-gray-400">
              <li>
                <a href="#" className="hover:text-gold-300 transition-colors">Confidentiality Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-300 transition-colors">Pre-Qualification Criteria</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-300 transition-colors">AML / KYC Enforcement</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-300 transition-colors">NDA Master Templates</a>
              </li>
            </ul>
          </div>

          {/* Back to top CTA */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 border border-gold-900/25 px-5 py-3 hover:border-gold-400 hover:text-gold-400 transition-all duration-300 rounded-sm text-xs tracking-widest uppercase font-semibold font-sans bg-matte-dark/50"
              data-hover="UPWARD"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata & Copyrights */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <span className="font-sans text-[9px] tracking-widest text-gray-500 uppercase">
            © {new Date().getFullYear()} AURA LEGACY GROUP S.A. ALL PRIVILEGES RESERVED.
          </span>
          <div className="flex gap-8 font-sans text-[9px] tracking-widest text-gray-500 uppercase">
            <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Journal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
