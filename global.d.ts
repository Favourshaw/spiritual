// global.d.ts
export {};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}
