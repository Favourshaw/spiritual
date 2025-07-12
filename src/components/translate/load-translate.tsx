"use client";
import { useEffect } from "react";

export function LoadTranslate() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if script already loaded
    if (document.getElementById("google-translate-script")) return;

    // Create global callback for Google Translate
    (window as any).googleTranslateElementInit = function () {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false, // Prevent default UI, since we have custom UI
        },
        "google_translate_element"
      );
    };

    // Inject Google Translate script tag
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}
