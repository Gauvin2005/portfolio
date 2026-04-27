'use client'

import React, { useState, useEffect, useCallback, startTransition } from 'react'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from './CustomIcon'
import { AnimatedUnderline } from './AnimatedUnderline'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

export const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    startTransition(() => setIsMounted(true))
  }, [])

  const scrollToContact = useCallback(() => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleCTAClick = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4ade80', '#22d3ee', '#a78bfa', '#f472b6'],
    })
    scrollToContact()
  }, [scrollToContact])

  const stats = [
    { value: '3', label: 'stages' },
    { value: '5+', label: 'projets' },
    { value: '1', label: 'agence fondée' },
  ]

  return (
    <div id="accueil" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="floating-shapes absolute inset-0" />
      
      {/* Gaming Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute w-6 h-6 bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              left: `${10 + i * 12}%`,
              top: '-50px'
            }}
            animate={isMounted ? {
              y: [0, window.innerHeight + 100],
              rotate: [0, 360],
              scale: [1, 0.8, 1]
            } : {}}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
          />
        ))}
        
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`diamond-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rotate-45"
            style={{
              left: `${15 + i * 15}%`,
              top: '-30px'
            }}
            animate={isMounted ? {
              y: [0, window.innerHeight + 100],
              rotate: [45, 405],
              x: [0, Math.sin(i) * 20]
            } : {}}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2
            }}
          />
        ))}
        
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute w-5 h-5 bg-gradient-to-r from-blue-400/15 to-cyan-400/15"
            style={{
              left: `${20 + i * 18}%`,
              top: '-40px'
            }}
            animate={isMounted ? {
              y: [0, window.innerHeight + 100],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{
              duration: 7 + i * 0.4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6
            }}
          />
        ))}
        
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full"
            style={{
              left: `${8 + i * 13}%`,
              top: '-25px'
            }}
            animate={isMounted ? {
              y: [0, window.innerHeight + 100],
              x: [0, Math.cos(i) * 15],
              scale: [1, 0.6, 1]
            } : {}}
            transition={{
              duration: 9 + i * 0.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
        
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`bracket-${i}`}
            className="absolute text-2xl font-bold text-lime-400/15"
            style={{
              left: `${30 + i * 25}%`,
              top: '-20px'
            }}
            animate={isMounted ? {
              y: [0, window.innerHeight + 100],
              rotate: [0, 180],
              scale: [1, 1.3, 1]
            } : {}}
            transition={{
              duration: 10 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          >
            {i % 2 === 0 ? '{' : '}'}
          </motion.div>
        ))}
        
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 3) * 30}%`
            }}
            animate={isMounted ? {
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.1, 0.4, 0.1]
            } : {}}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center space-y-8">

          {/* Welcome line */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm md:text-base text-muted-foreground tracking-widest uppercase font-medium border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5">
              Hello et bienvenue sur mon portfolio !
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block">
                <AnimatedUnderline className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GAVIN ROTTET</AnimatedUnderline>{' '}
                <motion.span
                  whileHover={isMounted ? {
                    rotate: [0, -15, 15, -15, 15, -10, 10, 0],
                  } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1]
                  }}
                  className="inline-block cursor-pointer"
                >
                  <svg
                    width="0.85em"
                    height="0.85em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#waveGrad)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block align-middle"
                  >
                    <defs>
                      <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="oklch(0.6 0.2 160)" />
                        <stop offset="100%" stopColor="oklch(0.5 0.2 200)" />
                      </linearGradient>
                    </defs>
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                  </svg>
                </motion.span>
              </span>
            </h1>

            {/* Disponible badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isMounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold bg-green-500/10 text-green-400 border border-green-500/30 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponible pour collaborer
              </span>
            </motion.div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Développeur web full-stack — je conçois des applications modernes, de l&apos;idée au déploiement.
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
              Next.js · TypeScript · Tailwind CSS — ouvert aux collaborations freelance, projets d&apos;équipe et missions.{' '}
              J&apos;ai aussi fondé{' '}
              <a
                href="https://nuvoracode.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-semibold underline decoration-primary/40 hover:decoration-primary"
              >
                Nuvoracode
              </a>
              , mon agence web.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button 
                size="lg"
                onClick={handleCTAClick}
                className="neon-glow animate-glow text-lg px-8 py-4"
              >
                Discutons de ton projet
              </Button>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center gap-8 pt-2"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 pt-4"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-bold tracking-widest text-muted-foreground/60 uppercase">
          Scroll
        </span>
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
