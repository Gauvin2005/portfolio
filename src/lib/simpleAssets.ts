// Système d'assets simple pour la production - URLs depuis public/
export const simpleAssets = {
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

// Fonction pour obtenir l'URL d'un asset
export const getSimpleAssetUrl = (assetKey: keyof typeof simpleAssets): string => {
  return simpleAssets[assetKey]
}
