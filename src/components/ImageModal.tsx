'use client'

import React from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ZoomIn } from 'lucide-react'
import Image from 'next/image'

interface ImageModalProps {
  src: string
  alt: string
  className?: string
  children?: React.ReactNode
}

export const ImageModal: React.FC<ImageModalProps> = ({ 
  src, 
  alt, 
  className = '',
  children 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative group">
          {children}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            aria-label={`Agrandir l'image: ${alt}`}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        {/* Titre accessible pour les lecteurs d'écran */}
        <DialogTitle className="sr-only">
          Image agrandie: {alt}
        </DialogTitle>
        
        {/* Description pour contexte supplémentaire */}
        <DialogDescription className="sr-only">
          Vue agrandie de l'image du projet. Utilisez Échap pour fermer la modal.
        </DialogDescription>
        
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
