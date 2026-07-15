
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      id="scroll-to-top-btn"
      style={{
        position: "fixed",
        bottom: "92px",          // sits just above the WhatsApp button
        right: "28px",
        zIndex: 998,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "#c89b4e",
        border: "2px solid rgba(255,255,255,0.25)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(200,155,78,0.45)",
        cursor: "pointer",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(200,155,78,0.6)";
        (e.currentTarget as HTMLElement).style.background = "#b8860b";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = visible ? "translateY(0)" : "translateY(16px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(200,155,78,0.45)";
        (e.currentTarget as HTMLElement).style.background = "#c89b4e";
      }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
