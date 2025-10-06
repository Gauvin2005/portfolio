'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import intervention112Image from '@/assets/images/intervention112.png'
import publipostageImage from '@/assets/images/publipostage.png'
import publipostage2Image from '@/assets/images/publipostage2.png'

export const Experience: React.FC = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([])

  const toggleExperience = (id: number) => {
    setExpandedExperiences(prev => 
      prev.includes(id) 
        ? prev.filter(expId => expId !== id)
        : [...prev, id]
    )
  }

  const experiences = [
    {
      id: 1,
      title: 'Stage Développeur Web Full Stack',
      company: 'Centre de Réadaptation de Mulhouse',
      period: '17/02/2025 - 18/08/2025',
      featured: true,
      anchor: 'experience-crm',
      projectImage: intervention112Image.src,
      summary: 'Conception et développement d\'une application web moderne pour la gestion des interventions médicales d\'urgence, remplaçant un ancien système et répondant aux enjeux de traçabilité, sécurité et ergonomie.',
      description: 'Conception et développement d\'une application web moderne pour le remplacement d\'un système obsolète (2008) de suivi des interventions médicales d\'urgence (112), avec l\'objectif "Zéro Papier".',
      role: 'Développeur full-stack avec une grande autonomie, responsable de la conception et de l\'implémentation de bout en bout de la solution. Apprentissage autodidacte et rapide des technologies clés.',
      achievements: [
        {
          category: 'Authentification et Sécurité',
          details: 'Implémentation d\'un système robuste (JWT, cookies HttpOnly, protection CSRF, hachage bcrypt, gestion des rôles Admin/Utilisateur).'
        },
        {
          category: 'Gestion des Interventions',
          details: 'Développement d\'un formulaire complet pour la saisie d\'informations (temporelles, localisation, description, patients, équipe soignante, moyens), avec gestion des victimes/intervenants et un système de brouillons.'
        },
        {
          category: 'Interface Utilisateur',
          details: 'Création d\'une interface intuitive, responsive (grille moderne, tri/filtrage), avec mode sombre/clair et un focus sur l\'accessibilité pour différents handicaps.'
        },
        {
          category: 'Rapports et Analyses',
          details: 'Intégration de la génération de rapports PDF professionnels et d\'un tableau de bord avec statistiques interactives.'
        },
        {
          category: 'Optimisations Techniques',
          details: 'Utilisation d\'une architecture Next.js, API RESTful, avec lazy loading, code splitting, cache intelligent (application PWA Ready).'
        },
        {
          category: 'Bénéfices Concrets',
          details: 'A conduit à un gain de temps, une réduction des erreurs, une traçabilité complète, une collaboration améliorée pour les équipes soignantes et une conformité réglementaire pour l\'établissement.'
        }
      ],
      technologies: ['Next.js', 'MySQL', 'Tailwind CSS', 'JWT', 'PDF Generation', 'PWA'],
      benefits: [
        'Gain de temps significatif',
        'Réduction des erreurs',
        'Traçabilité complète',
        'Collaboration améliorée',
        'Conformité réglementaire'
      ]
    },
    {
      id: 2,
      title: 'Stage développeur .NET/C#',
      company: 'Abraxas - Münchenstein (Suisse)🇨🇭',
      period: '02/2024 - 08/2024',
      featured: false,
      anchor: 'experience-abraxas',
      projectImage: publipostageImage.src,
      summary: 'Participation à un projet d\'équipe et acquisition de compétences variées en programmation orientée objet, méthode Agile et automatisation de tâches.',
      description: 'Participation à un projet d\'équipe dans un environnement professionnel suisse.',
      role: 'Stagiaire développeur participant aux projets de l\'équipe.',
      achievements: [
        {
          category: 'Acquisition de compétences',
          details: 'Maîtrise de la Programmation Orientée Objet (POO) et organisation en équipe de développeurs.'
        },
        {
          category: 'Méthode Agile',
          details: 'Apprentissage et application de la Méthode Agile dans un contexte professionnel.'
        },
        {
          category: 'Automatisation',
          details: 'Automatisation de tâches planifiées sur Windows 11 avec Autotask.'
        }
      ],
      technologies: ['POO', 'Méthode Agile', 'Autotask', 'C#', '.NET'],
      benefits: [
        'Expérience professionnelle internationale',
        'Maîtrise des méthodologies agiles',
        'Compétences en automatisation'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-12 relative">
      {/* Animated Background Elements - Tech/Gaming Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagonal shapes */}
        <motion.div
          className="absolute top-16 right-16 w-14 h-14 bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-16 w-10 h-10 bg-gradient-to-r from-rose-400/25 to-pink-400/25"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          animate={{
            rotate: [360, 0],
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Diamond shapes */}
        <motion.div
          className="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 0.7, 1],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400/25 to-amber-400/25 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.4, 1],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Binary code effect */}
        <motion.div
          className="absolute top-1/2 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
          animate={{
            x: [-200, 200],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-0 w-32 h-0.5 bg-gradient-to-l from-transparent via-rose-400/60 to-transparent"
          animate={{
            x: [200, -200],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 2.5
          }}
        />
        
        {/* Floating dots */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-2 h-2 bg-teal-400/40 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 0.5, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-indigo-400/35 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
          Expériences Professionnelles
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Des expériences qui démontrent ma capacité à livrer des solutions concrètes en entreprise avec un impact mesurable.
        </motion.p>
      </motion.div>

      {/* Experiences */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8 relative z-10"
      >
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={itemVariants}>
            <Card id={exp.anchor} className={`glass-effect ${exp.featured ? 'neon-glow' : ''} scroll-mt-20`}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Info */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                        {exp.featured && (
                          <Badge className="bg-primary/30 text-primary border border-primary/50">
                            Expérience Principale
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-accent">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.period}</p>
                    </div>

                    {/* Summary */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed font-medium">{exp.summary}</p>
                      
                      {/* Toggle Button */}
                      <Button
                        onClick={() => toggleExperience(exp.id)}
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        {expandedExperiences.includes(exp.id) ? 'Masquer les détails' : 'Voir mon projet de stage'}
                      </Button>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="space-y-4">
                    <div className="relative">
                      {/* Image pour mobile (visible jusqu'à 475px) */}
                      <Image
                        src={exp.id === 2 ? publipostageImage.src : exp.projectImage}
                        alt={`Projet ${exp.title}`}
                        width={400}
                        height={300}
                        className={`rounded-lg w-full h-64 mobile-image ${exp.id === 1 ? 'object-contain' : 'object-cover'}`}
                      />
                      {/* Image pour desktop (visible à partir de 476px) */}
                      <Image
                        src={exp.id === 2 ? publipostage2Image.src : exp.projectImage}
                        alt={`Projet ${exp.title}`}
                        width={400}
                        height={300}
                        className="rounded-lg object-contain w-full h-auto max-h-80 desktop-image"
                      />
                    </div>
                    
                    {/* Légendes */}
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground italic">
                        {exp.id === 1 ? "Aperçu de l'interface" : exp.id === 2 ? "Illustration de publipostage" : ""}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Content */}
                {expandedExperiences.includes(exp.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Description & Role */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <p className="font-medium text-foreground">{exp.role}</p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-primary">Réalisations & Technologies Clés</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="space-y-2">
                            <h5 className="font-semibold text-accent">{achievement.category}</h5>
                            <p className="text-sm text-muted-foreground">{achievement.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Technologies Utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx}
                            variant="secondary"
                            className="bg-primary/30 text-primary border border-primary/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Bénéfices Apportés</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
