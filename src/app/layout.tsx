import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAB Group | Real Estate Consultants | Delhi NCR",
  description:
    "SAB Group is a premier real estate consultancy with 25+ years of expertise in commercial, residential, and industrial properties across Pan India. Find your perfect property today.",
  keywords: [
    "Real Estate Consultants Delhi",
    "Commercial Property Delhi NCR",
    "Residential Property Gurugram",
    "Office Space Noida",
    "Industrial Property India",
    "SAB Group Real Estate",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#f0f2f5", color: "#1a1a2e", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
