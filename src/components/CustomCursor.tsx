"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hoverText, setHoverText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Set initial positions offscreen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const hoverEl = target.closest("[data-hover]");
      const isLink = target.closest("a") || target.closest("button") || target.closest('[role="button"]');

      if (hoverEl) {
        setIsHovered(true);
        const text = hoverEl.getAttribute("data-hover") || "";
        setHoverText(text);

        gsap.to(cursor, {
          scale: 2.8,
          backgroundColor: "rgba(212, 165, 61, 0.08)",
          borderColor: "rgba(212, 165, 61, 1)",
          borderWidth: "1px",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 0,
          duration: 0.2,
        });
      } else if (isLink) {
        setIsHovered(true);
        setHoverText("");

        gsap.to(cursor, {
          scale: 2.0,
          backgroundColor: "rgba(212, 165, 61, 0.05)",
          borderColor: "rgba(212, 165, 61, 0.8)",
          borderWidth: "1px",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: "#ffffff",
          duration: 0.2,
        });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const hoverEl = target.closest("[data-hover]");
      const isLink = target.closest("a") || target.closest("button") || target.closest('[role="button"]');

      if (hoverEl || isLink) {
        setIsHovered(false);
        setHoverText("");

        gsap.to(cursor, {
          scale: 1.0,
          backgroundColor: "rgba(212, 165, 61, 0.1)",
          borderColor: "rgba(212, 165, 61, 0.5)",
          borderWidth: "1px",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1.0,
          backgroundColor: "#d4a53d",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    // Add cursor hide class to root
    document.documentElement.classList.add("cursor-hide");

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      document.documentElement.classList.remove("cursor-hide");
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-gold-400/40 bg-gold-400/10 pointer-events-none z-[9999] hidden md:flex items-center justify-center overflow-hidden"
      >
        {isHovered && hoverText && (
          <span className="text-[5px] tracking-[0.2em] text-gold-300 font-sans font-semibold uppercase animate-pulse">
            {hoverText}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-400 pointer-events-none z-[10000] hidden md:block"
      />
    </>
  );
}
