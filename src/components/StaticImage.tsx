'use client'

import React from 'react'

interface StaticImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
}

// Composant d'image statique qui utilise des balises img classiques
export const StaticImage: React.FC<StaticImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )
}
