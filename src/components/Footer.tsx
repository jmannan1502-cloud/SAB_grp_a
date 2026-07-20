"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const InstagramIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>);
const LinkedinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const FacebookIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>);
const TwitterIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);

const hotProperties = [
  "Residential Property in Delhi NCR",
  "Residential Property in Delhi",
  "Commercial Property in Delhi NCR",
  "Commercial Property in Gurugram",
  "Commercial Property in Noida",
  "Office Space in Saket",
  "Industrial Property Manesar",
  "Warehouse & Logistics Hub",
];

const quickLinks = [
  { label: "About SAB Group", href: "#about" },
  { label: "Commercial Properties", href: "#verticals" },
  { label: "Residential Properties", href: "#verticals" },
  { label: "New Launches", href: "#projects" },
  { label: "Our Leadership", href: "#leadership" },
  { label: "Contact Us", href: "#contact" },
  { label: "Career", href: "#contact" },
];

const servicesBySector = [
  "Commercial Property",
  "Residential Property",
  "Industrial Property",
  "Office Space",
  "Hotels & Hospitality",
  "SEZ Properties",
  "FDI in Real Estate",
  "Brokerage Services",
  "Lease Administration",
  "Valuation & Advisory",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#e2e8f0" }}>
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Get in Touch */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Get in Touch
            </h4>

            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 flex items-center justify-center rounded"
                style={{ background: "rgba(200,155,78,0.15)", border: "1px solid rgba(200,155,78,0.3)" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M3 21V9L12 3L21 9V21" stroke="#c89b4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 21V15H15V21" stroke="#c89b4e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div
                  className="font-bold text-white tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "13px", letterSpacing: "0.18em" }}
                >
                  SAB GROUP
                </div>
                <div style={{ fontSize: "9px", color: "#c89b4e", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Real Estate Consultants
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#c89b4e" }} />
                <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
                  <strong className="text-white block" style={{ fontSize: "13px" }}>SAB Group</strong>
                  A-21, Second Floor, Green Park Main,<br />
                  New Delhi – 110016, India
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#c89b4e" }} />
                <a
                  href="tel:+911141444000"
                  style={{ fontSize: "13px", color: "#94a3b8" }}
                  className="hover:text-white transition-colors"
                >
                  +91-11-41444000, 41756902
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#c89b4e" }} />
                <a
                  href="tel:+919810012345"
                  style={{ fontSize: "13px", color: "#94a3b8" }}
                  className="hover:text-white transition-colors"
                >
                  Mobile: +91-9810012345
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#c89b4e" }} />
                <a
                  href="mailto:info@sabgroup.in"
                  style={{ fontSize: "13px", color: "#94a3b8" }}
                  className="hover:text-white transition-colors"
                >
                  info@sabgroup.in
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {[
                { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/sabprop/" },
                { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579467053882" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200"
                  style={{ borderColor: "#334155", color: "#94a3b8" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#c89b4e";
                    (e.currentTarget as HTMLElement).style.color = "#c89b4e";
                    (e.currentTarget as HTMLElement).style.background = "rgba(200,155,78,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#334155";
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Hot Properties */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Hot Properties
            </h4>
            <ul className="space-y-3">
              {hotProperties.map((item) => (
                <li key={item}>
                  <a
                    href="#projects"
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ fontSize: "13px", color: "#94a3b8" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c89b4e"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: "#c89b4e" }} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ fontSize: "13px", color: "#94a3b8" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c89b4e"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: "#c89b4e" }} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services by Sector */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Services by Sectors
            </h4>
            <ul className="space-y-3">
              {servicesBySector.map((item) => (
                <li key={item}>
                  <a
                    href="#verticals"
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{ fontSize: "13px", color: "#94a3b8" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c89b4e"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: "#c89b4e" }} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{ borderTop: "1px solid #1e293b" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span style={{ fontSize: "12px", color: "#64748b" }}>
            © {new Date().getFullYear()} SAB Group. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontSize: "12px", color: "#64748b" }}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
