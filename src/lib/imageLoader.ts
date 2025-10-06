// Loader d'images personnalisé pour Next.js
export default function imageLoader({ src, width, quality }: {
  src: string
  width: number
  quality?: number
}) {
  // Retourner directement le src pour les images locales
  // Cela évite les problèmes de transformation d'URL en production
  return src
}
