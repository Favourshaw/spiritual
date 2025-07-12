"use client";

import { useEffect, useState, useRef } from "react";
import FlagIcon from "./flag-icon";

const languages = [
  {
    code: "en",
    label: "English",
    flagSrc: "/translate/en.svg",
    fallbackEmoji: "🇬🇧",
  },
  {
    code: "es",
    label: "Spanish",
    flagSrc: "/translate/es.svg",
    fallbackEmoji: "🇪🇸",
  },
  {
    code: "fr",
    label: "French",
    flagSrc: "/translate/fr.svg",
    fallbackEmoji: "🇫🇷",
  },
  {
    code: "de",
    label: "German",
    flagSrc: "/translate/de.svg",
    fallbackEmoji: "🇩🇪",
  },
  {
    code: "it",
    label: "Italian",
    flagSrc: "/translate/it.svg",
    fallbackEmoji: "🇮🇹",
  },
  {
    code: "pt",
    label: "Portuguese",
    flagSrc: "/translate/pt.svg",
    fallbackEmoji: "🇵🇹",
  },
  {
    code: "ru",
    label: "Russian",
    flagSrc: "/translate/ru.svg",
    fallbackEmoji: "🇷🇺",
  },
  {
    code: "zh-CN",
    label: "Chinese (Simplified)",
    flagSrc: "/translate/cn.svg",
    fallbackEmoji: "🇨🇳",
  },
  {
    code: "ja",
    label: "Japanese",
    flagSrc: "/translate/jp.svg",
    fallbackEmoji: "🇯🇵",
  },
  {
    code: "ro",
    label: "Romanian",
    flagSrc: "/translate/ro.svg",
    fallbackEmoji: "🇷🇴",
  },
  {
    code: "pl",
    label: "Polish",
    flagSrc: "/translate/pl.svg",
    fallbackEmoji: "🇵🇱",
  },
  {
    code: "hu",
    label: "Hungarian",
    flagSrc: "/translate/hu.svg",
    fallbackEmoji: "🇭🇺",
  },
  {
    code: "cs",
    label: "Czech",
    flagSrc: "/translate/cs.svg",
    fallbackEmoji: "🇨🇿",
  },
  {
    code: "ar",
    label: "Arabic",
    flagSrc: "/translate/ar.svg",
    fallbackEmoji: "🇸🇦", // or 🇦🇪, depending on your preference
  },
];

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

export default function Translator() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    .skiptranslate {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
      overflow: hidden !important;
    }
    body {
      top: 0 !important;
      position: static !important;
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);

    // Close dropdown if clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isClient) return null;

  const currentLangCode = (() => {
    const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
    return match ? match[1] : "en";
  })();

  const currentLang =
    languages.find((l) => l.code === currentLangCode) || languages[0];

  function changeLanguage(langCode: string) {
    setCookie("googtrans", `/en/${langCode}`);
    setCookie("googtrans", `/en/${langCode}`, 365);
    window.location.reload();
  }

  return (
    <div
      ref={dropdownRef}
      className="fixed bottom-4 left-4 z-50 w-44 font-sans text-sm"
      aria-label="Language selector"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center justify-between w-full bg-white/90 backdrop-blur-md rounded-md border border-gray-300 px-3 py-1 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <FlagIcon
          src={currentLang.flagSrc}
          emoji={currentLang.fallbackEmoji}
          alt={`${currentLang.label} flag`}
        />
        <span className="ml-2 flex-grow">{currentLang.label}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute bottom-full mb-2 left-0 w-full max-h-60 overflow-auto rounded-md border border-gray-300 bg-white/90 backdrop-blur-md shadow-lg"
        >
          {languages.map(({ code, label, flagSrc }) => (
            <li
              key={code}
              role="option"
              aria-selected={currentLangCode === code}
              onClick={() => {
                changeLanguage(code);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  changeLanguage(code);
                  setOpen(false);
                }
              }}
              tabIndex={0}
              className={`flex items-center px-3 py-2 cursor-pointer select-none hover:bg-pink-100 focus:bg-pink-100 ${
                currentLangCode === code
                  ? "font-semibold text-pink-600"
                  : "text-gray-700"
              }`}
            >
              <FlagIcon
                src={flagSrc}
                emoji={
                  languages.find((l) => l.code === code)?.fallbackEmoji || "🏳️"
                }
                alt={`${label} flag`}
              />
              <span className="ml-2">{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
