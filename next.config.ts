import type { NextConfig } from "next"
import { dirname } from "path"
import { fileURLToPath } from "url"

const rootDir = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  outputFileTracingRoot: rootDir,
  // Ensure correct asset base path for Netlify static hosting and SPA fallback handled by Netlify
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during builds to avoid configuration issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Keep type safety in CI builds
    ignoreBuildErrors: false,
  },
}

export default nextConfig
