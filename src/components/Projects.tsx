'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectCarousel } from './ProjectCarousel'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showFormationProjects, setShowFormationProjects] = useState(false)
  const [showGroupeProjects, setShowGroupeProjects] = useState(false)

  // Projets principaux (affichés par défaut)
  const mainProjects = [
    {
      id: 1,
      title: 'Application de Gestion des Interventions Médicales',
      description: 'Application web moderne développée pour le Centre de Réadaptation de Mulhouse, remplaçant un système obsolète de 2008 pour le suivi des interventions médicales d\'urgence (112) avec l\'objectif "Zéro Papier".',
      technologies: ['Next.js', 'Prisma', 'MySQL', 'Tailwind CSS', 'JWT', 'PDF Generation'],
      githubUrl: '#',
      demoUrl: '#',
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
      ],
      features: [
        'Système d\'authentification robuste avec JWT',
        'Interface responsive avec mode sombre/clair',
        'Génération de rapports PDF professionnels',
        'Tableau de bord avec statistiques interactives',
        'Gestion des brouillons et sauvegarde automatique',
        'Application PWA Ready'
      ],
      impact: 'Gain de temps significatif, réduction des erreurs, traçabilité complète et conformité réglementaire pour l\'établissement.'
    },
    {
      id: 2,
      title: 'Projet Backend .NET/C#',
      description: 'Développement backend réalisé lors du stage chez Abraxas en Suisse, mettant en pratique les concepts de POO et les méthodologies agiles.',
      technologies: ['C#', '.NET', 'POO', 'Méthode Agile'],
      githubUrl: '#',
      demoUrl: null,
      featured: false,
      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
      ],
      features: [
        'Programmation Orientée Objet',
        'Méthode Agile',
        'Automatisation de tâches',
        'Collaboration en équipe'
      ],
      impact: 'Acquisition d\'expérience professionnelle internationale et maîtrise des méthodologies agiles.'
    }
  ]

  // Projets de formation
  const formationProjects = [
    {
      id: 1,
      title: 'Projet HTML/CSS',
      description: 'Site web responsive développé avec HTML5 et CSS3, intégrant des animations et des effets visuels modernes.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      images: ['https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop']
    },
    {
      id: 2,
      title: 'Application PHP',
      description: 'Application web dynamique avec gestion de base de données MySQL et interface d\'administration.',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop']
    }
  ]

  // Projets de groupe
  const groupeProjects = [
    {
      id: 1,
      title: 'Projet Flutter',
      description: 'Application mobile cross-platform développée en équipe avec Flutter et Dart.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop']
    },
    {
      id: 2,
      title: 'Supervision Étudiant',
      description: 'Encadrement d\'un étudiant de première année dans ses projets de programmation.',
      technologies: ['Python', 'Java', 'SQL'],
      images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop']
    }
  ]

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
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
          Projets Réalisés
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Une sélection de projets qui démontrent mes compétences techniques et ma capacité à livrer des solutions innovantes.
        </motion.p>
        
        {/* Global Toggle Button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            className="neon-glow"
          >
            {showAllProjects ? 'Masquer tous les projets' : 'Voir tous mes projets'}
          </Button>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      {showAllProjects && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {mainProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className={`glass-effect ${project.featured ? 'neon-glow' : ''}`}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                          {project.featured && (
                            <Badge className="bg-primary/30 text-primary border border-primary/50">
                              Projet Principal
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-primary">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
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

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-primary">Fonctionnalités</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-primary">Impact</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4">
                        <Button variant="outline" size="sm">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            Voir le Code
                          </a>
                        </Button>
                        {project.demoUrl && (
                          <Button size="sm" className="neon-glow">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              Voir la Démo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Images */}
                    <div className="space-y-4">
                      <div className="relative">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="rounded-lg object-cover w-full h-64"
                        />
                      </div>
                      {project.images.length > 1 && (
                        <div className="grid grid-cols-2 gap-2">
                          {project.images.slice(1).map((image, idx) => (
                            <Image
                              key={idx}
                              src={image}
                              alt={`${project.title} - Image ${idx + 2}`}
                              width={200}
                              height={150}
                              className="rounded-lg object-cover w-full h-24"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Projets de Formation */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Projets de Formation</h3>
                  <p className="text-muted-foreground">
                    Collection de projets réalisés durant ma formation, couvrant différents langages et technologies pour développer une expertise polyvalente.
                  </p>
                  
                  <Button
                    onClick={() => setShowFormationProjects(!showFormationProjects)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {showFormationProjects ? 'Masquer les projets' : 'Voir mes projets'}
                  </Button>
                  
                  {showFormationProjects && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8"
                    >
                      <ProjectCarousel 
                        projects={formationProjects} 
                        title="Mes Projets de Formation"
                      />
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projets de Groupe */}
          <motion.div variants={itemVariants}>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Projets de Groupe & Supervision</h3>
                  <p className="text-muted-foreground">
                    Projets collaboratifs et expérience de supervision d'étudiants, démontrant mes compétences en leadership et en travail d'équipe.
                  </p>
                  
                  <Button
                    onClick={() => setShowGroupeProjects(!showGroupeProjects)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {showGroupeProjects ? 'Masquer les projets' : 'Voir mes projets'}
                  </Button>
                  
                  {showGroupeProjects && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8"
                    >
                      <ProjectCarousel 
                        projects={groupeProjects} 
                        title="Mes Projets de Groupe"
                      />
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}