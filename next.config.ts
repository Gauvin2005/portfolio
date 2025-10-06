import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Pour éviter les problèmes avec les images statiques
    domains: [],
  },
  // Assurer que les fichiers statiques sont servis correctement
  trailingSlash: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
