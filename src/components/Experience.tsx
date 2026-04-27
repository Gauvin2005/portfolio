'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getVercelAssetUrl } from '@/lib/vercelAssets'

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
      title: 'Stage Développeur Full Stack',
      company: 'Promoveo',
      period: '16/02/2026 – 10/07/2026',
      featured: true,
      anchor: 'experience-promoveo',
      projectImage: getVercelAssetUrl('intervention112'),
      summary: 'Développement de la plateforme Nice2MeetU (web, API, mobile) : application événementielle complète incluant authentification, gestion d\'événements, notifications et fiabilité en production.',
      description: 'Conception, évolution et maintenance d\'une plateforme événementielle multi-plateforme (web + mobile) dans un contexte startup — autonomie totale sur une stack moderne.',
      role: 'Développeur full-stack responsable de bout en bout : architecture, développement, tests et déploiement.',
      achievements: [
        {
          category: 'Plateforme Web & API',
          details: 'Développement d\'une application Next.js complète avec API RESTful, gestion des événements, inscriptions et notifications en temps réel.'
        },
        {
          category: 'Application Mobile',
          details: 'Développement de l\'app mobile avec Expo (React Native), partageant la logique métier avec la version web.'
        },
        {
          category: 'Authentification',
          details: 'Implémentation de NextAuth avec gestion des rôles, sessions sécurisées et flux d\'inscription/connexion complets.'
        },
        {
          category: 'Base de données',
          details: 'Modélisation et gestion de la BDD avec Prisma + MySQL, migrations, relations complexes.'
        },
        {
          category: 'DevOps',
          details: 'Containerisation avec Docker et Docker Compose, pipeline de déploiement, environnements de dev/prod.'
        },
        {
          category: 'Fiabilité & Production',
          details: 'Mise en place de monitoring, gestion des erreurs, optimisations de performance et maintien de la stabilité en production.'
        }
      ],
      technologies: ['Next.js 14', 'TypeScript', 'NextAuth', 'Prisma', 'MySQL', 'Expo', 'React Native', 'Docker'],
      benefits: [
        'Expérience startup en conditions réelles',
        'Stack mobile cross-platform',
        'Déploiement et DevOps',
        'Gestion de la production'
      ]
    },
    {
      id: 2,
      title: 'Stage Développeur Web Full Stack',
      company: 'Centre de Réadaptation de Mulhouse',
      period: '17/02/2025 – 18/08/2025',
      featured: false,
      anchor: 'experience-crm',
      projectImage: getVercelAssetUrl('intervention112'),
      summary: 'Conception et développement d\'une application web moderne pour la gestion des interventions médicales d\'urgence, remplaçant un système obsolète de 2008 — objectif "Zéro Papier".',
      description: 'Remplacement d\'un système de suivi des interventions 112 vieux de 17 ans, avec une grande autonomie et un apprentissage autodidacte rapide des technologies clés.',
      role: 'Développeur full-stack avec une grande autonomie, responsable de la conception et de l\'implémentation de bout en bout.',
      achievements: [
        {
          category: 'Authentification et Sécurité',
          details: 'Implémentation d\'un système robuste (JWT, cookies HttpOnly, protection CSRF, hachage bcrypt, gestion des rôles Admin/Utilisateur).'
        },
        {
          category: 'Gestion des Interventions',
          details: 'Formulaire complet pour la saisie d\'informations (temporelles, localisation, patients, équipe soignante) avec gestion des brouillons.'
        },
        {
          category: 'Interface Utilisateur',
          details: 'Interface responsive, mode sombre/clair, accessibilité renforcée pour différents profils d\'utilisateurs.'
        },
        {
          category: 'Rapports et Analyses',
          details: 'Génération de rapports PDF professionnels et tableau de bord avec statistiques interactives.'
        },
        {
          category: 'Optimisations Techniques',
          details: 'Architecture Next.js, API RESTful, lazy loading, code splitting, cache intelligent, PWA Ready.'
        },
        {
          category: 'Bénéfices Concrets',
          details: 'Gain de temps, réduction des erreurs, traçabilité complète, collaboration améliorée et conformité réglementaire.'
        }
      ],
      technologies: ['Next.js', 'MySQL', 'Tailwind CSS', 'JWT', 'PDF Generation', 'PWA'],
      benefits: [
        'Gain de temps significatif',
        'Réduction des erreurs',
        'Traçabilité complète',
        'Conformité réglementaire'
      ]
    },
    {
      id: 3,
      title: 'Stage Développeur .NET/C#',
      company: 'Abraxas — Münchenstein 🇨🇭',
      period: '02/2024 – 08/2024',
      featured: false,
      anchor: 'experience-abraxas',
      projectImage: getVercelAssetUrl('publipostage'),
      summary: 'Participation à un projet d\'équipe dans un environnement professionnel suisse, acquisition de compétences en POO, méthode Agile et automatisation.',
      description: 'Stage dans une entreprise suisse spécialisée, travail en équipe de développeurs sur des projets .NET/C#.',
      role: 'Stagiaire développeur participant aux projets de l\'équipe.',
      achievements: [
        {
          category: 'Programmation Orientée Objet',
          details: 'Maîtrise de la POO en C# et organisation dans une équipe de développeurs.'
        },
        {
          category: 'Méthode Agile',
          details: 'Application de la méthode Agile en contexte professionnel, avec Jira et Confluence.'
        },
        {
          category: 'Automatisation',
          details: 'Automatisation de tâches planifiées sur Windows 11 avec Autotask.'
        }
      ],
      technologies: ['C#', '.NET', 'POO', 'Méthode Agile', 'Jira', 'Autotask'],
      benefits: [
        'Expérience internationale',
        'Méthodes professionnelles',
        'Travail en équipe',
        'Automatisation'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="space-y-12 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 right-16 w-14 h-14 bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{ rotate: [0, 360], scale: [1, 1.3, 1], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-16 w-10 h-10 bg-gradient-to-r from-rose-400/25 to-pink-400/25"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{ rotate: [360, 0], x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rotate-45"
          animate={{ rotate: [45, 405, 45], scale: [1, 0.7, 1], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
          animate={{ x: [-200, 200], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-2/3 right-0 w-32 h-0.5 bg-gradient-to-l from-transparent via-rose-400/60 to-transparent"
          animate={{ x: [200, -200], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2.5 }}
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
          3 stages dans des environnements exigeants — secteur médical, entreprise suisse, startup — qui démontrent ma capacité à livrer des solutions concrètes avec un impact réel.
        </motion.p>
      </motion.div>

      {/* Autoformation continue (remplace Melvyn) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Card className="glass-effect border border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-primary mb-2">Autoformation Continue</h3>
                <p className="text-muted-foreground">
                  En dehors des stages, j&apos;ai suivi des formations complètes pour maîtriser les technologies que j&apos;utilise au quotidien.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Next.js Full Stack', description: 'Architecture, API Routes, App Router' },
                  { name: 'TypeScript Avancé', description: 'Types complexes, patterns, strictMode' },
                  { name: 'Développement IA', description: 'Intégration LLM, agents, prompting' },
                  { name: 'Tailwind CSS', description: 'Design system, composants, animations' },
                  { name: 'DevOps & Docker', description: 'Conteneurisation, CI/CD, déploiement' }
                ].map((formation) => (
                  <motion.div
                    key={formation.name}
                    variants={itemVariants}
                    className="bg-background/50 rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <h4 className="font-semibold text-primary mb-1">{formation.name}</h4>
                    <p className="text-sm text-muted-foreground">{formation.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </CardContent>
        </Card>
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
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                        {exp.featured && (
                          <Badge className="bg-primary/30 text-primary border border-primary/50">
                            Stage récent
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-accent">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.period}</p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed font-medium">{exp.summary}</p>
                      <Button
                        onClick={() => toggleExperience(exp.id)}
                        variant="outline"
                        className="w-full sm:w-auto expand-button bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 border-2 border-primary/60 shadow-lg hover:shadow-xl hover:from-primary/30 hover:via-accent/25 hover:to-primary/30 hover:border-primary/80 hover:scale-105 transition-all duration-300"
                      >
                        {expandedExperiences.includes(exp.id) ? 'Masquer les détails' : 'Voir les détails'}
                      </Button>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Image
                        src={exp.id === 3 ? getVercelAssetUrl('publipostage') : exp.projectImage}
                        alt={`Projet ${exp.title}`}
                        width={400}
                        height={300}
                        className={`rounded-lg w-full h-64 mobile-image ${exp.id !== 3 ? 'object-contain' : 'object-cover'}`}
                      />
                      <Image
                        src={exp.id === 3 ? getVercelAssetUrl('publipostage2') : exp.projectImage}
                        alt={`Projet ${exp.title}`}
                        width={400}
                        height={300}
                        className="rounded-lg object-contain w-full h-auto max-h-80 desktop-image"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground italic">
                        {exp.id === 1
                          ? 'Plateforme Nice2MeetU'
                          : exp.id === 2
                            ? "Aperçu de l'interface"
                            : 'Illustration du projet'}
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
                    className="space-y-6 mt-6 pt-6 border-t border-border/50"
                  >
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <p className="font-medium text-foreground">{exp.role}</p>
                    </div>

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
