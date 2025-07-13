"use client";
import { useEffect } from "react";

// Minimal typing for google.translate.TranslateElement constructor

// Extend global Window type to include Google Translate init

export function LoadTranslate() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = function () {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}
