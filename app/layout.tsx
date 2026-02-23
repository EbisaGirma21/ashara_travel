import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Sans } from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ashara Travels | Your Gateway to the World",
  description:
    "Based in Addis Ababa, Ashara Travel is your premier partner for exceptional travel experiences, curating journeys that inspire, connect and create lifelong memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} ${dm_sans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
