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
  // Configuration pour Turbopack (nouvelle syntaxe)
  experimental: {
    staticGenerationRetryCount: 3,
  },
  turbopack: {
    rules: {
      '*.pdf': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
  // Configuration pour Vercel
  output: 'standalone',
};

export default nextConfig;
