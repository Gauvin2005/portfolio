import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [],
  },
  // Configuration pour les fichiers statiques
  trailingSlash: false,
  assetPrefix: '',
  // Configuration pour Turbopack (nouvelle syntaxe)
  experimental: {
    staticGenerationRetryCount: 3,
  },
  // Configuration pour Vercel - output: 'standalone' supprimé pour permettre le service des fichiers statiques
};

export default nextConfig;
