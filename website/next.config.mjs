/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Enforce a trailing slash on all URLs (e.g., /about -> /about/)
  trailingSlash: true,
  
  // Set the path prefix for GitHub Pages
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig