"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Commercial",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", propertyType: "Commercial", message: "" });
      }, 5000);
    }, 1200);
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 md:py-28 px-4 md:px-8"
        style={{ background: "#eef0f3", borderTop: "1px solid #e2e8f0" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Get In Touch</span>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#0f172a" }}
            >
              Let&apos;s Find Your <span style={{ color: "#c89b4e" }}>Perfect Property</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "480px", margin: "0 auto" }}>
              Fill the form below or reach out directly. Our team will contact you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Info Cards */}
              {[
                {
                  icon: MapPin,
                  title: "Head Office",
                  lines: ["A-21, Second Floor, Green Park Main", "New Delhi – 110016, India"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+91-11-41444000", "+91-9810012345"],
                  href: "tel:+911141444000",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@sabgroup.in", "business@sabgroup.in"],
                  href: "mailto:info@sabgroup.in",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 p-5 rounded-sm transition-all duration-200"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(200,155,78,0.1)" }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: "#c89b4e" }} />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px", color: "#0f172a" }}
                    >
                      {info.title}
                    </h4>
                    {info.lines.map((line) =>
                      info.href ? (
                        <a
                          key={line}
                          href={info.href}
                          className="block transition-colors"
                          style={{ fontSize: "13px", color: "#64748b" }}
                          onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#c89b4e"; }}
                          onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#64748b"; }}
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} style={{ fontSize: "13px", color: "#64748b" }}>{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Office hours */}
              <div
                className="p-5 rounded-sm"
                style={{ background: "#0f172a", border: "1px solid rgba(200,155,78,0.2)" }}
              >
                <h4
                  className="font-semibold text-white mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "14px" }}
                >
                  Office Hours
                </h4>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
                    { day: "Sunday", time: "By Appointment Only" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center">
                      <span style={{ fontSize: "13px", color: "#94a3b8" }}>{row.day}</span>
                      <span style={{ fontSize: "12px", color: "#c89b4e", fontWeight: 600 }}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="lg:col-span-3 rounded-sm p-8 md:p-10"
              style={{ background: "#ffffff", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}
            >
              {submitted ? (
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 className="w-14 h-14 mb-5" style={{ color: "#22c55e" }} />
                  <h3
                    className="font-bold mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", color: "#0f172a" }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "300px" }}>
                    Your enquiry has been received. Our team will reach you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-bold mb-8"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.3rem", color: "#0f172a" }}
                  >
                    Send Us an Enquiry
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block mb-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: "#64748b" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 text-sm rounded-sm transition-colors outline-none"
                          style={{
                            border: "1px solid #e2e8f0",
                            background: "#f8fafc",
                            color: "#0f172a",
                            fontSize: "14px",
                          }}
                          onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#c89b4e"; }}
                          onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e2e8f0"; }}
                          id="contact-name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block mb-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: "#64748b" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 text-sm rounded-sm transition-colors outline-none"
                          style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "14px" }}
                          onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#c89b4e"; }}
                          onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e2e8f0"; }}
                          id="contact-email"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block mb-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: "#64748b" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-4 py-3 text-sm rounded-sm transition-colors outline-none"
                        style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "14px" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#c89b4e"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e2e8f0"; }}
                        id="contact-phone"
                      />
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="block mb-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: "#64748b" }}>
                        Interested In
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-sm transition-colors outline-none"
                        style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "14px" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#c89b4e"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e2e8f0"; }}
                        id="contact-property-type"
                      >
                        <option>Commercial Properties</option>
                        <option>Residential Properties</option>
                        <option>Industrial / Warehouse</option>
                        <option>Turnkey Projects</option>
                        <option>Property Valuation</option>
                        <option>Other Services</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block mb-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: "#64748b" }}>
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 text-sm rounded-sm transition-colors outline-none resize-none"
                        style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "14px" }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#c89b4e"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#e2e8f0"; }}
                        id="contact-message"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full justify-center"
                      style={{ borderRadius: "4px", fontSize: "14px", padding: "14px" }}
                      id="contact-submit-btn"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Enquiry
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919810012345"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
