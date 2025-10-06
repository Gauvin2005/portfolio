'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from './CustomIcon'
import { motion } from 'framer-motion'

export const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="floating-shapes absolute inset-0" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={isMounted ? {
            y: [0, -20, 0],
            x: [0, 10, 0],
          } : {}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"
          animate={isMounted ? {
            y: [0, 20, 0],
            x: [0, -10, 0],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg"
          animate={isMounted ? {
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          } : {}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block">Salut, je suis</span>
              <span className="block">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gavin</span>{' '}
                <motion.span
                  whileHover={isMounted ? {
                    rotate: [0, -15, 15, -15, 15, -10, 10, 0],
                  } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1]
                  }}
                  className="inline-block cursor-pointer bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  👋
                </motion.span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Je transforme vos idées en applications web full-stack robustes et innovantes.
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Je crée des solutions numériques modernes et performantes pour les entreprises, 
              avec une expertise en Next.js et Tailwind CSS.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="neon-glow animate-glow text-lg px-8 py-4"
              >
                Planifier un appel
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a
              href="https://github.com/Gauvin2005"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <GitHubIcon size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gavin-rottet-b5250a2bb"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={isMounted ? { y: [0, 10, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={isMounted ? { y: [0, 12, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
