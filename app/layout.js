import { Inter } from "next/font/google";
import "./globals.css";
import FloatingDockWrapper from "@/components/ui/FloatingDockWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Khaleel Alhaji",
  description:
    "Portfolio of Khaleel Alhaji, Front End Engineer crafting accessible, pixel-perfect digital experiences for the modern web.",
  keywords: [
    "front end engineer",
    "web developer",
    "UI developer",
    "React developer",
  ],
  openGraph: {
    title: "Khaleel Alhaji | Front End Engineer",
    description:
      "Front End Engineer crafting accessible, pixel-perfect digital experiences",
    url: "https://khaleelalhaji3.vercel.app",
    siteName: "Khaleel Alhaji Portfolio",
    images: [
      {
        url: "https://khaleelalhaji3.vercel.app/og-image.png", // Full absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://khaleelalhaji3.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased max-w-[1450px] mx-auto px-1 py-12 md:px-12 md:py-16`}
      >
        {children}
        <FloatingDockWrapper />
      </body>
    </html>
  );
}