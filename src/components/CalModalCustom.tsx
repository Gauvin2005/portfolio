'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarIcon, XIcon } from './CustomIcon'
import { CalEmbedNew } from './CalEmbedNew'
import { Portal } from './Portal'

interface CalModalCustomProps {
  triggerText?: string
  triggerVariant?: 'default' | 'outline' | 'ghost'
  triggerClassName?: string
  showIcon?: boolean
}

export const CalModalCustom: React.FC<CalModalCustomProps> = ({
  triggerText = "Planifier un appel",
  triggerVariant = "default",
  triggerClassName = "",
  showIcon = true
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Gérer l'échappement avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Empêcher le scroll du body quand la modale est ouverte
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  return (
    <>
      <Button 
        variant={triggerVariant}
        className={`${triggerClassName} ${triggerVariant === 'default' ? 'neon-glow' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        {showIcon && <CalendarIcon className="w-4 h-4 mr-2" />}
        {triggerText}
      </Button>

      {isOpen && (
        <Portal>
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999
            }}
          >
            {/* Overlay avec fond semi-transparent */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Contenu de la modale */}
            <div className="relative bg-background border border-border rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border flex-shrink-0">
                <h2 className="text-lg sm:text-xl font-semibold text-accent">
                  Planifier un appel avec Gavin
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 flex-shrink-0"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Contenu scrollable */}
              <div className="flex-1 p-4 sm:p-6 overflow-auto min-h-0">
                <div className="w-full h-full min-h-[400px] sm:min-h-[500px] cal-embed">
                  <CalEmbedNew />
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}


