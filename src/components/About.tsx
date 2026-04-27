'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedUnderline } from './AnimatedUnderline'
import { EmailIcon, PhoneIcon } from './CustomIcon'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getVercelAssetUrl } from '@/lib/vercelAssets'

export const About: React.FC = () => {
  const personalInfo = {
    name: 'Gavin Rottet',
    phone: '0768267956',
    email: 'gavinrottet2005@gmail.com',
    age: '20 ans (né le 09 août 2005)',
    nationality: 'Français et Suisse',
    license: 'Permis B (voiture)',
    interests: ['Programmation (tous les jours)', 'Badminton (en compétition)'],
    languages: [
      { name: 'Français', level: 'Maternelle (native)' },
      { name: 'Anglais', level: 'Opérationnel (B2)' },
      { name: 'Allemand', level: 'Intermédiaire (B1)' }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-12 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/70 rotate-45"
          animate={{ y: [0, -30, 0], rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-purple-500/20 rounded-full"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-cyan-400/40 transform rotate-12"
          animate={{ rotate: [12, 372, 12], x: [0, 15, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-8 h-8 bg-orange-400/25 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-24 h-0.5 bg-gradient-to-l from-transparent via-purple-400/50 to-transparent"
          animate={{ x: [100, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
      </div>

      {/* Introduction */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <motion.div variants={itemVariants} className="relative flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full opacity-75 blur-sm animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full opacity-90" />
              <div className="relative bg-background rounded-full p-1">
                <Image
                  src={getVercelAssetUrl('gavin')}
                  alt="Gavin Rottet"
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32"
                  priority
                  unoptimized
                />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Texte bio */}
          <div className="flex-1 space-y-4">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
              <span className="text-6xl md:text-7xl text-primary font-black float-left mr-3 leading-none">À</span>
              <span className="block md:inline">Propos de Moi</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Développeur web full-stack passionné, je transforme des idées en produits concrets — de la conception
              au déploiement. Après{' '}
              <span className="text-primary font-semibold">3 stages en entreprise</span>{' '}
              (secteur médical, entreprise suisse, startup événementielle), j&apos;ai fondé{' '}
              <a
                href="https://nuvoracode.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary/80 transition-colors underline decoration-primary/40 hover:decoration-primary"
              >
                Nuvoracode
              </a>
              , mon agence web. Je suis ouvert à de nouvelles collaborations : freelance, projets d&apos;équipe,
              ou missions longue durée.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Nuvoracode card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.div variants={itemVariants}>
          <Card className="glass-effect border-2 border-primary/30 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                    <h3 className="text-xl font-bold text-primary">Nuvoracode</h3>
                    <Badge className="bg-primary/20 text-primary border border-primary/40 text-xs">
                      Mon agence
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-lg">
                    Agence web spécialisée en applications modernes — Next.js, design soigné, déploiement rapide.
                    Si tu as un projet, c&apos;est par là que ça se passe.
                  </p>
                </div>
                <a
                  href="https://nuvoracode.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap text-sm"
                >
                  Visiter Nuvoracode
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Personal Information Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 relative z-10"
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect h-full" style={{ background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(3px)' }}>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">Informations Personnelles</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">Nom :</span>
                  <AnimatedUnderline>{personalInfo.name}</AnimatedUnderline>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon size={16} className="text-primary" />
                  <span className="font-medium">Téléphone :</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EmailIcon size={16} className="text-primary" />
                  <span className="font-medium">Email :</span>
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">Âge :</span>
                  <span>{personalInfo.age}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">Nationalité :</span>
                  <span>{personalInfo.nationality}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">Permis :</span>
                  <span>{personalInfo.license}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests & Languages */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect h-full">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Intérêts</h3>
                <div className="space-y-2">
                  {personalInfo.interests.map((interest, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Langues</h3>
                <div className="space-y-3">
                  {personalInfo.languages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium">{language.name}</span>
                      <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {language.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
