import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css"; // global CSS file
// import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
export const metadata = {
  title: "Printing Press Rawalpindi | Printing Press Services in Rawalpindi",
  description:
    "Discover top-notch printing solutions in Rawalpindi and all across Pakistan. Our printing press offers customizable and affordable services including wedding cards, panaflex banners, visiting cards and premium quality business cards.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "panaflex rawalpindi, visiting cards rawalpindi, wedding cards, panaflex printing rawalpindi, Digital World, printing press Rawalpindi, printing press Pakistan",
  openGraph: {
    title: "Printing Press Rawalpindi | Digital World",
    description:
      "Innovative and durable panaflex printing for banners in Rawalpindi. Let your brand stand out!",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    site_name: "Digital World Printing Press",
  },
  twitter: {
    title: "Panaflex Printing Rawalpindi | Digital World",
    description:
      "Innovative panaflex printing solutions for banners in Rawalpindi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
