import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/splash-cursor";
import BackgroundMusic from "@/components/music-player";
import Translator from "@/components/translate/translator";
import { LoadTranslate } from "@/components/translate/load-translate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enchanted Messenger - Spiritual Services",
  description: "Temple of the Awakening Heart 💖",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-border overflow-x-hidden  text-foreground min-h-screen`}
      >
        <LoadTranslate />
        <Translator />
        <SplashCursor />
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}
