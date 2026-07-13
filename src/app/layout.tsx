import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "SAB GROUP | Luxury Architectural Masterpieces & Brokerage",
  description:
    "Ultra-luxury residential estates, private islands, and wellness sanctuaries across Monaco, Dubai, and New York. Reserved for collectors of the extraordinary.",
  keywords: ["Luxury Real Estate", "Monaco Estates", "Dubai Private Islands", "New York Penthouses", "Modern Architecture"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-matte-dark text-foreground min-h-screen">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
