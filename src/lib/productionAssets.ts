// Système d'assets pour la production - URLs absolues
export const productionAssets = {
  // Images de profil
  gavin: '/_next/static/media/gavin.png',
  
  // Images de projets
  intervention112: '/_next/static/media/intervention112.png',
  intervention112_2: '/_next/static/media/intervention112_2.png',
  publipostage: '/_next/static/media/publipostage.png',
  publipostage2: '/_next/static/media/publipostage2.png',
  filRouge1: '/_next/static/media/filRouge1.png',
  filRouge2: '/_next/static/media/filRouge2.png',
  ResQlife: '/_next/static/media/ResQlife.png',
  cavalons: '/_next/static/media/cavalons.png',
  xipTelecom: '/_next/static/media/xip-telecom.png',
  
  // CV
  cv: '/_next/static/media/Gavin_Rottet_CV.pdf',
} as const

// Fonction pour obtenir l'URL d'un asset
export const getProductionAssetUrl = (assetKey: keyof typeof productionAssets): string => {
  return productionAssets[assetKey]
}
