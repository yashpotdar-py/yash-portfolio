import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Font configurations
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Yash Potdar | AI/ML Student & Aspiring Cybersecurity Specialist",
  description:
    "AI/ML student learning cybersecurity through hands-on projects. Building security tools, experimenting with homelabs, and breaking things to understand how they work.",
  keywords:
    "cybersecurity student, ethical hacking, AI ML student, homelab projects, security tools, Python security, penetration testing, CTF, network security, learning cybersecurity, Raspberry Pi, SSH security, intrusion detection",
  authors: [{ name: "Yash Potdar" }],
  creator: "Yash Potdar",
  publisher: "Yash Potdar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashpotdar.vercel.app",
    title: "Yash Potdar | AI/ML Student & Aspiring Cybersecurity Specialist",
    description:
      "AI/ML student learning cybersecurity through hands-on projects. Building security tools, experimenting with homelabs, and breaking things to learn.",
    siteName: "Yash Potdar Portfolio",
    images: [
      {
        url: "/assets/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Potdar - Infrastructure & Security Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Potdar | Infrastructure & Security Engineer",
    description:
      "Homelab tinkerer building security tooling and infrastructure.",
    images: ["/assets/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="relative">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

