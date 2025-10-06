// URLs GitHub pour les assets du portfolio
export const githubAssets = {
  // Images de profil
  gavin: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/gavin.png',
  
  // Images de projets
  intervention112: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/intervention112.png',
  intervention112_2: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/intervention112_2.png',
  publipostage: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/publipostage.png',
  publipostage2: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/publipostage2.png',
  filRouge1: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/filRouge1.png',
  filRouge2: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/filRouge2.png',
  ResQlife: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/ResQlife.png',
  cavalons: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/cavalons.png',
  xipTelecom: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/images/xip-telecom.png',
  
  // CV
  cv: 'https://raw.githubusercontent.com/gavinrottet/portfolio/main/public/assets/pdf/Gavin_Rottet_CV.pdf',
} as const

export const getGithubAssetUrl = (assetKey: keyof typeof githubAssets): string => {
  return githubAssets[assetKey]
}
