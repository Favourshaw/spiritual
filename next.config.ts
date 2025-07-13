import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Recommended for cPanel/static hosting
  images: {
    unoptimized: true, // Disable Image Optimization API (not available for static exports)
  },
  // Optional: Add basePath if deploying to subdirectory
  // basePath: '/subfolder',
};

export default nextConfig;
