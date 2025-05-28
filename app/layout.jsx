import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Yash Potdar - AI/ML Engineer & Full Stack Developer",
  description:
    "Experienced AI/ML Engineer specializing in machine learning, deep learning, and full-stack development. View my portfolio of innovative projects.",
  keywords:
    "AI, Machine Learning, Full Stack Developer, React, Python, Data Science",
  openGraph: {
    title: "Yash Potdar Portfolio",
    description: "AI/ML Engineer & Full Stack Developer",
    url: "https://yashpotdar.vercel.app",
    siteName: "Yash Potdar Portfolio",
    images: ["/assets/photo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased overflow-x-hidden`}>
        <Header />
        <StairTransition />
          <main className="pt-20 relative">{children}</main>
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
