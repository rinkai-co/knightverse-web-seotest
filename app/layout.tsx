import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Thai,
  IBM_Plex_Sans_Thai_Looped,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const ibmPlexSansLooped = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-ibm-plex-sans-looped",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Knight Visa Consulting",
  description: "บริการให้คำปรึกษาด้านวีซ่าและการย้ายถิ่นฐาน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSansLooped.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
