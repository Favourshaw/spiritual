import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/splash-cursor";
import BackgroundMusic from "@/components/music-player";
import Translator from "@/components/translate/translator";
import { LoadTranslate } from "@/components/translate/load-translate";
import Script from "next/script";

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
    <html lang="en" style={{ height: "100%" }}>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-border overflow-x-hidden text-foreground min-h-screen`}
      >
        <LoadTranslate />
        <Translator />
        <SplashCursor />
        <BackgroundMusic />
        {children}
        <div id="google_translate_element"></div>
        {/* 🪄 Load Google Translate script */}
        <Script id="gt-init" strategy="beforeInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: "en",
                includedLanguages: "en,es,fr,de,it,pt,ru,zh-CN,ja,ro,pl,hu,cs,ar",
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, "google_translate_element");
            }
          `}
        </Script>

        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
