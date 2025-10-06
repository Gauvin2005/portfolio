// Système de gestion des assets statiques pour éviter les problèmes de production
export const assets = {
  // Images de profil
  gavin: '/gavin.png',
  
  // Images de projets
  intervention112: '/intervention112.png',
  intervention112_2: '/intervention112_2.png',
  publipostage: '/publipostage.png',
  publipostage2: '/publipostage2.png',
  filRouge1: '/filRouge1.png',
  filRouge2: '/filRouge2.png',
  ResQlife: '/ResQlife.png',
  cavalons: '/cavalons.png',
  xipTelecom: '/xip-telecom.png',
  
  // CV
  cv: '/Gavin_Rottet_CV.pdf',
  
  // Icônes
  file: '/file.svg',
  globe: '/globe.svg',
  window: '/window.svg',
  next: '/next.svg',
  vercel: '/vercel.svg',
} as const

// Fonction pour obtenir l'URL complète d'un asset
export const getAssetUrl = (asset: string): string => {
  // En production, s'assurer que l'asset est accessible
  if (typeof window !== 'undefined') {
    return asset
  }
  return asset
}

// Fonction pour vérifier si un asset existe
export const assetExists = async (asset: string): Promise<boolean> => {
  try {
    const response = await fetch(asset, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}
