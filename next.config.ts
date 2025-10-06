import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [],
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
  // Configuration pour les fichiers statiques
  trailingSlash: false,
  assetPrefix: '',
  // Forcer le service des fichiers statiques
  experimental: {
    staticGenerationRetryCount: 3,
  },
  // Configuration pour Vercel
  output: 'standalone',
};

export default nextConfig;
