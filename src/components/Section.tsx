import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  background?: 'default' | 'gradient' | 'glass'
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '',
  background = 'default'
}) => {
  const backgroundClasses = {
    default: 'bg-background',
    gradient: 'gradient-bg',
    glass: 'glass-effect'
  }

  return (
    <section 
      id={id}
      className={cn(
        'min-h-screen py-20 px-4 relative overflow-hidden',
        backgroundClasses[background],
        className
      )}
    >
      {background === 'gradient' && (
        <div className="floating-shapes absolute inset-0" />
      )}
      <div className="container mx-auto max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  )
}


