"use client";

import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SAB Signature Tower",
    location: "Gurugram, Haryana",
    category: "Commercial",
    image: "/images/lobby.png",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "The Oasis Villas",
    location: "Lutyens, New Delhi",
    category: "Residential",
    image: "/images/villa.png",
    colSpan: "col-span-1",
  },
  {
    title: "Logistics Hub Alpha",
    location: "Noida, UP",
    category: "Industrial",
    image: "/images/detail.png",
    colSpan: "col-span-1",
  },
  {
    title: "Horizon Retail Park",
    location: "South Delhi",
    category: "Retail",
    image: "/images/lobby.png",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#fafafa]" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[#c89b4e] font-semibold tracking-widest uppercase text-sm mb-3 block">
              Our Portfolio
            </span>
            <h2 
              className="text-4xl md:text-5xl text-slate-900 leading-tight" 
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="font-light">Featured</span> <span className="font-bold">Projects</span>
            </h2>
          </div>
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-2 text-slate-600 hover:text-[#c89b4e] transition-colors mt-4 md:mt-0 font-medium pb-2 border-b border-transparent hover:border-[#c89b4e]"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group cursor-pointer ${project.colSpan}`}
              style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded mb-4 border border-white/20">
                  {project.category}
                </span>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2" 
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm flex items-center gap-3 font-medium">
                  <span className="w-6 h-[2px] bg-[#c89b4e] inline-block"></span>
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
