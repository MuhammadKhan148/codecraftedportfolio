import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure correct asset base path for Netlify static hosting and SPA fallback handled by Netlify
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
