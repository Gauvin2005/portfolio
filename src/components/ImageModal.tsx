'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/button'
import { ZoomIn, X } from 'lucide-react'
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
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className="relative group">
        {children}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          aria-label={`Agrandir l'image: ${alt}`}
          onClick={() => setIsOpen(true)}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      {isOpen && createPortal(
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4"
          style={{ zIndex: 999999 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie: ${alt}`}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm hover:bg-background border-2"
            style={{ zIndex: 1000000 }}
            onClick={() => setIsOpen(false)}
            aria-label="Fermer l'image"
          >
            <X className="h-5 w-5" />
          </Button>
          
          <div className="relative max-w-full max-h-full">
            <Image
              src={src}
              alt={alt}
              width={2000}
              height={2000}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              priority
              quality={100}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
