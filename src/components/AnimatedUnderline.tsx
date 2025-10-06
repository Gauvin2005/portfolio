'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedUnderlineProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
        animate={{
          x: [-20, 20],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </span>
  )
}
