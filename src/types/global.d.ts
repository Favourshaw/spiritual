// types/google-translate.d.ts
interface GoogleTranslateElementOptions {
  pageLanguage: string;
  autoDisplay?: boolean;
  includedLanguages?: string;
  layout?: number; // This will reference the InlineLayout values
  floatPosition?: number;
  multilanguagePage?: boolean;
  gaTrack?: boolean;
  gaId?: string;
}

// Define the InlineLayout constants as a separate interface
interface TranslateElementInlineLayout {
  SIMPLE: number;
  HORIZONTAL: number;
  VERTICAL: number;
}

// The constructor interface now includes the InlineLayout as a static property
interface GoogleTranslateElementConstructor {
  new (options: GoogleTranslateElementOptions, element: string): unknown;
  InlineLayout: TranslateElementInlineLayout;
}

interface GoogleTranslateAPI {
  translate: {
    TranslateElement: GoogleTranslateElementConstructor;
  };
}

declare global {
  interface Window {
    google?: GoogleTranslateAPI;
    googleTranslateElementInit?: () => void;
  }
}

export {};
