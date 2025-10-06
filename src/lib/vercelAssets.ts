// URLs Vercel pour les assets du portfolio - utilise les fichiers directement dans public/
export const vercelAssets = {
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
} as const

export const getVercelAssetUrl = (assetKey: keyof typeof vercelAssets): string => {
  return vercelAssets[assetKey]
}
