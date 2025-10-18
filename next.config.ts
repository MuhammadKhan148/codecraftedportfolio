import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure correct asset base path for Netlify static hosting and SPA fallback handled by Netlify
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during builds to avoid configuration issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for now
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
