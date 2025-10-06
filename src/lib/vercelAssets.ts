// URLs Vercel pour les assets du portfolio
export const vercelAssets = {
  // Images de profil
  gavin: '/assets/images/gavin.png',
  
  // Images de projets
  intervention112: '/assets/images/intervention112.png',
  intervention112_2: '/assets/images/intervention112_2.png',
  publipostage: '/assets/images/publipostage.png',
  publipostage2: '/assets/images/publipostage2.png',
  filRouge1: '/assets/images/filRouge1.png',
  filRouge2: '/assets/images/filRouge2.png',
  ResQlife: '/assets/images/ResQlife.png',
  cavalons: '/assets/images/cavalons.png',
  xipTelecom: '/assets/images/xip-telecom.png',
  
  // CV
  cv: '/assets/pdf/Gavin_Rottet_CV.pdf',
} as const

export const getVercelAssetUrl = (assetKey: keyof typeof vercelAssets): string => {
  return vercelAssets[assetKey]
}
