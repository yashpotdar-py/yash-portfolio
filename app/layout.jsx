import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Yash Potdar Portfolio",
  description: "Created the yashpotdar-py",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <SpeedInsights />
          <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}
