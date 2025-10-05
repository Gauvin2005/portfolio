'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { EmailIcon, PhoneIcon } from './CustomIcon'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const About: React.FC = () => {
  const personalInfo = {
    name: 'Gavin Rottet',
    phone: '0768267956',
    email: 'gavinrottet2005@gmail.com',
    age: '20 ans (né le 09 août 2005)',
    nationality: 'Français et Suisse',
    license: 'Permis B (voiture)',
    interests: ['Programmation (tous les jours)', 'Badminton (3 à 5 fois par semaine)'],
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
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8">
          {/* Image avec style gamer */}
          <motion.div 
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Contour vert gamer avec effet néon */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full opacity-75 blur-sm animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full opacity-90"></div>
              
              {/* Image principale */}
              <div className="relative bg-background rounded-full p-1">
                <Image
                  src="/gavin.png"
                  alt="Gavin Rottet"
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32"
                />
              </div>
              
              {/* Effet de particules */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Texte avec effet lettrine */}
          <div className="flex-1 space-y-4">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
              <span className="text-6xl md:text-7xl text-primary font-black float-left mr-3 leading-none">À</span>
              <span className="block md:inline">Propos de Moi</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Étudiant motivé en informatique avec un vif intérêt pour la programmation et une grande capacité d&apos;apprentissage. 
              Je suis un développeur web full-stack passionné, recherchant activement des opportunités freelance et des stages 
              de 6 mois pour mettre à profit mes compétences.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Personal Information Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Contact Information */}
        <motion.div variants={itemVariants}>
          <Card className="glass-effect h-full">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">Informations Personnelles</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">Nom :</span>
                  <span>{personalInfo.name}</span>
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
              {/* Interests */}
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

              {/* Languages */}
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
