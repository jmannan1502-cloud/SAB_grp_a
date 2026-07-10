"use client";

import React, { useState } from "react";
import { Send, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Monaco",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", destination: "Monaco", date: "", message: "" });
    }, 4000);
  };

  const offices = [
    { city: "MONACO", address: "7 Avenue des Spélugues, Monte Carlo", phone: "+377 97 97 00 11" },
    { city: "DUBAI", address: "The Opus by Zaha Hadid, Business Bay", phone: "+971 4 456 7890" },
    { city: "NEW YORK", address: "730 Fifth Avenue, Crown Building", phone: "+1 (212) 555-0199" },
  ];

  return (
    <section
      className="relative w-full bg-matte-black text-white py-32 px-6 md:px-12 border-t border-gold-900/10"
      id="contact"
    >
      {/* Background Flare */}
      <div className="absolute left-[15%] top-[10%] w-[350px] h-[350px] bg-gold-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Office details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-sans text-[10px] tracking-[0.4em] text-gold-400 font-semibold mb-4 block uppercase">
              SECURE AN APPOINTMENT
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-8">
              Private <br />
              <span className="font-serif italic text-gold-300">Viewings</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-400 tracking-wider leading-relaxed mb-12 max-w-sm">
              Appointments are curated strictly for principals or their accredited representatives. Complete the form to initiate direct liaison.
            </p>
          </div>

          {/* Offices List */}
          <div className="space-y-8 mb-12">
            {offices.map((office, idx) => (
              <div key={idx} className="flex gap-4 items-start border-l border-gold-900/20 pl-6 py-1 hover:border-gold-400 transition-colors duration-500">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.3em] font-semibold text-white uppercase">
                    {office.city} OFFICE
                  </h4>
                  <p className="font-sans text-xs text-gray-400 tracking-wider mt-1.5">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="font-sans text-[11px] text-gold-400/80 tracking-wider hover:text-gold-300 transition-colors mt-1 block flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-3 border border-gold-900/15 p-4 bg-matte-dark/30 rounded-sm">
            <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" />
            <span className="font-sans text-[9px] tracking-widest text-gray-400 uppercase leading-relaxed">
              100% Non-Disclosure Agreements enforced standard on all correspondence.
            </span>
          </div>
        </div>

        {/* Right Column: Premium Form */}
        <div className="lg:col-span-7 bg-matte-dark/40 border border-gold-900/15 p-8 md:p-12 backdrop-blur-md rounded-sm shadow-2xl relative">
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold-400/10 pointer-events-none" />
          
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-16">
              <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center mb-6 animate-pulse">
                <Send className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl tracking-tight text-white mb-2">
                Liaison Initiated
              </h3>
              <p className="font-sans text-xs text-gray-400 tracking-widest max-w-xs leading-relaxed">
                An executive client advocate will contact you via encrypted channel within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="FULL NAME"
                  className="w-full bg-transparent border-b border-gold-900/20 py-3 text-xs tracking-widest text-white uppercase placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ENCRYPTED EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-gold-900/20 py-3 text-xs tracking-widest text-white uppercase placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              {/* Destination Selector */}
              <div className="relative">
                <label className="block text-[8px] tracking-[0.3em] text-gold-400 font-semibold mb-2 uppercase">
                  PREFERRED DESTINATION
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-matte-dark border border-gold-900/20 px-4 py-3 text-xs tracking-widest text-white uppercase focus:outline-none focus:border-gold-400 transition-colors rounded-sm"
                >
                  <option value="Monaco">MONACO ESTATES</option>
                  <option value="Dubai">DUBAI ARCHIPELAGO</option>
                  <option value="New York">NEW YORK PENTHOUSES</option>
                  <option value="Other">OTHER DESTINATIONS</option>
                </select>
              </div>

              {/* Date Pick */}
              <div className="relative">
                <label className="block text-[8px] tracking-[0.3em] text-gold-400 font-semibold mb-2 uppercase">
                  DESIRED VIEWING TIMEFRAME
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-matte-dark border border-gold-900/20 px-4 py-3 text-xs tracking-widest text-white uppercase focus:outline-none focus:border-gold-400 transition-colors rounded-sm"
                />
              </div>

              {/* Custom Message */}
              <div className="relative">
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="DISCREET INSTRUCTIONS / NDAs REQUIREMENT"
                  className="w-full bg-transparent border border-gold-900/20 px-4 py-3 text-xs tracking-widest text-white uppercase placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-colors rounded-sm"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full font-sans text-xs tracking-[0.3em] font-semibold text-matte-black uppercase bg-gold-400 py-4 border border-gold-500 hover:bg-transparent hover:text-gold-400 hover:border-gold-400/50 transition-all duration-500 rounded-sm"
                data-hover="SEND APPLICATION"
              >
                REQUEST PRIVATE LIAISON
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
