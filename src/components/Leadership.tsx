"use client";

import { Mail } from "lucide-react";

const LinkedinIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);

const team = [
  {
    name: "Mr. Sanjeev Bansal",
    role: "FOUNDER & MANAGING DIRECTOR",
    bio: "Mr. Sanjeev Bansal is a distinguished figure in the Indian real estate landscape. A post-graduate from Delhi University, he brings over 30 years of experience in commercial and residential real estate consultancy across Delhi NCR, Mumbai, and Bangalore. His deep understanding of market dynamics and strong relationships with major corporates and developers have been instrumental in shaping SAB Group's reputation as a premier consultancy. He has successfully advised Fortune 500 companies on large-scale real estate transactions and continues to lead the firm with a vision to deliver unmatched value to every client.",
    initials: "SB",
    side: "right", // image on right, text on left
  },
  {
    name: "Mr. Aakash Bansal",
    role: "PARTNER & CHIEF OPERATIONS OFFICER",
    bio: "Aakash Bansal is a dynamic real estate professional and commerce graduate from Symbiosis International University. With 15+ years of experience, he specializes in commercial office space, industrial properties, and emerging real estate segments across Pan India. Known for his sharp negotiation skills and client-centric approach, Aakash has spearheaded strategic partnerships with key developers and institutional investors. He leads SAB Group's operational expansion into new cities and markets, driving growth with a focus on transparency, speed, and excellence in service delivery.",
    initials: "AB",
    side: "left", // image on left, text on right
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 md:py-28 px-4 md:px-8"
      style={{ background: "#f0f2f5", borderTop: "1px solid #e2e8f0" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">The Team</span>
          <h2
            className="font-bold"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#0f172a" }}
          >
            Our <span style={{ color: "#c89b4e" }}>Leadership</span> Team
          </h2>
        </div>

        {/* Team Members */}
        <div className="space-y-8">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className={`flex flex-col ${member.side === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} rounded-sm overflow-hidden`}
              style={{ boxShadow: "0 6px 32px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}
              id={`leader-${idx}`}
            >
              {/* Image Side */}
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{ width: "100%", height: "280px", maxWidth: "400px" }}
              >
                {/* Placeholder portrait with gradient background */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      idx === 0
                        ? "linear-gradient(135deg, #1e293b 0%, #263447 100%)"
                        : "linear-gradient(135deg, #1a2435 0%, #2d3f55 100%)",
                  }}
                >
                  {/* Portrait silhouette */}
                  <div className="relative">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center border-4"
                      style={{ background: "rgba(200,155,78,0.1)", borderColor: "rgba(200,155,78,0.4)" }}
                    >
                      <span
                        className="font-bold"
                        style={{ fontFamily: "'Outfit', sans-serif", fontSize: "42px", color: "#c89b4e" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                    {/* Decorative rings */}
                    <div
                      className="absolute -inset-4 rounded-full border opacity-20 pointer-events-none"
                      style={{ borderColor: "#c89b4e" }}
                    />
                    <div
                      className="absolute -inset-8 rounded-full border opacity-10 pointer-events-none"
                      style={{ borderColor: "#c89b4e" }}
                    />
                  </div>
                </div>

                {/* Gold bar at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 px-5 text-center"
                  style={{ background: "#c89b4e" }}
                >
                  <span
                    className="font-bold text-white tracking-widest uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div
                className="flex-1 p-8 md:p-10 flex flex-col justify-center"
                style={{ background: "#1e293b" }}
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3
                    className="font-bold text-white leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                  >
                    {member.name}
                  </h3>
                  {/* Social icons */}
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border flex items-center justify-center transition-all"
                      style={{ borderColor: "rgba(200,155,78,0.3)", color: "#94a3b8" }}
                      aria-label={`${member.name} LinkedIn`}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#c89b4e";
                        (e.currentTarget as HTMLElement).style.color = "#c89b4e";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,78,0.3)";
                        (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                      }}
                    >
                      <LinkedinIcon />
                    </a>
                    <a
                      href="#contact"
                      className="w-8 h-8 rounded-full border flex items-center justify-center transition-all"
                      style={{ borderColor: "rgba(200,155,78,0.3)", color: "#94a3b8" }}
                      aria-label={`Contact ${member.name}`}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#c89b4e";
                        (e.currentTarget as HTMLElement).style.color = "#c89b4e";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,155,78,0.3)";
                        (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                      }}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Role */}
                <div
                  className="inline-flex items-center gap-2 mb-5"
                >
                  <div className="w-6 h-0.5" style={{ background: "#c89b4e" }} />
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#c89b4e",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Partner
                  </span>
                </div>

                {/* Bio in italic */}
                <p
                  className="leading-relaxed italic"
                  style={{ color: "#94a3b8", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
