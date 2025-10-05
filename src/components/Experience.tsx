'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      projectImage: '/intervention112.png',
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
      company: 'Abraxas - Münchenstein (Suisse)',
      period: '02/2024 - 08/2024',
      featured: false,
      anchor: 'experience-abraxas',
      projectImage: '/publipostage.png',
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
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6"
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
        className="space-y-8"
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
                        src={exp.id === 2 ? '/publipostage.png' : exp.projectImage}
                        alt={`Projet ${exp.title}`}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full h-64 mobile-image"
                      />
                      {/* Image pour desktop (visible à partir de 476px) */}
                      <Image
                        src={exp.id === 2 ? '/publipostage2.png' : exp.projectImage}
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
