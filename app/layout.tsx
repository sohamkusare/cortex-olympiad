import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cortex Olympiad — India's Unified Olympiad Platform",
  description:
    "Discover 100+ olympiad exams for Class LKG to 12. Dates, eligibility, syllabus, registration — all in one honest, distraction-free platform.",
  keywords:
    "olympiad exams india, SOF IMO, science olympiad, mathematics olympiad, class 8 olympiad, HBCSE, Silverzone",
  openGraph: {
    title: "Cortex Olympiad — India's Unified Olympiad Platform",
    description:
      "Discover 100+ olympiad exams for Class LKG to 12. Free, honest, distraction-free.",
    url: "https://cortexolympiad.in",
    siteName: "Cortex Olympiad",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
